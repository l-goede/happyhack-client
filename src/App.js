import React from "react";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { API_URL } from "./config";
import { UserContext } from "./context/app.context";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Profile from "./components/Profile";
import MyNav from "./components/MyNav";
import Navbar from "./components/Navbar";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import JobsList from "./components/Advert";
import Home from "./components/Home";
import ProfileForm from "./components/ProfileForm";
import CreateJob from "./components/CreateJob";
import EditProfile from "./components/EditProfile";
import YourJobs from "./components/YourJobs";
import EditJob from "./components/EditAdvert";
import JobCard from "./components/JobCard";
import Chat from "./components/Chat";

function App() {
  const { user, setUser } = useContext(UserContext);
  const [fetchingUser, setFetchingUser] = useState(true);
  const [myError, setError] = useState(null);
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      let response = await axios.get(`${API_URL}/jobs`);
      setJobs(response.data);
    };

    getData();
    handleProfile();
  }, []);

  // useEffect(() => {
  //   navigate("/profile");
  // }, [jobs]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    let newJob = {
      jobTitle: event.target.jobTitle.value,
      jobDescription: event.target.jobDescription.value,
      skills: event.target.skills.value,
      deadline: event.target.deadline.value,
      price: event.target.price.value,
      completed: false,
      accepted: false,
    };
    console.log(newJob.skills);

    let response = await axios.post(`${API_URL}/add-form`, newJob, {
      withCredentials: true,
    });
    setJobs([response.data, ...jobs]);
    navigate(`/profile`);
  };

  const handleEdit = async (event, id) => {
    event.preventDefault();
    let editedAdvert = {
      name: event.target.name.value,
      username: event.target.username.value,
      skills: event.target.skills.value,
      details: event.target.details.value,
      date: event.target.date.value,
      price: event.target.price.value,
      contact: event.target.contact.value,
      completed: false, //pergunte ao manish
    };
    // Pass an object as a 2nd param in POST requests
    let response = await axios.patch(`${API_URL}/jobs/${id}`, editedAdvert);
    // Update our state 'jobs' with the edited todo so that the user see the upadted info without refrshing the page

    console.log(response.data);

    let updatedJobs = jobs.map((elem) => {
      if (elem._id === id) {
        elem.name = response.data.name;
        elem.username = response.data.username;
        elem.skills = response.data.skills;
        elem.details = response.data.details;
        elem.date = response.data.date;
        elem.price = response.data.price;
        elem.contact = response.data.contact;
      }
      return elem;
    });

    setJobs(updatedJobs);
  };

  const handleDelete = async (id) => {
    // make a request to the server to delete it from the database
    await axios.delete(`${API_URL}/api/jobs/${id}`);

    // Update your state 'jobs' and remove the todo that was deleted
    let filteredAdvert = jobs.filter((elem) => {
      return elem._id !== id;
    });

    setJobs(filteredAdvert);
  };

  const handleSignIn = async (event) => {
    event.preventDefault();
    //try {
    let newUser = {
      email: event.target.email.value,
      password: event.target.password.value,
    };

    let response = await axios.post(`${API_URL}/signin`, newUser, {
      withCredentials: true,
    });
    try {
      console.log(response.data);
      setUser(response.data);
      navigate("/profile");
    } catch (err) {
      setError(err.response.data.error);
    }
  };

  const handleProfile = async () => {
    let response = await axios.get(`${API_URL}/profile`, {
      withCredentials: true,
    });
    setUser(response.data);
    setFetchingUser(false);
  };

  const handleLogout = async () => {
    await axios.post(`${API_URL}/logout`, {}, { withCredentials: true });
    setUser(null);
    navigate("/");
  };

  // fern work:
  const handleEditProfile = async (event, id) => {
    event.preventDefault();
    console.log("im in the handleEdit... start");
    // console.log(event.target)

    //upload to cloudy
    console.log(event.target.myImage.files[0]);
    //creating the form
    let formData = new FormData();
    formData.append("imageUrl", event.target.myImage.files[0]);
    //creating the form
    let imgResponse = await axios.post(`${API_URL}/upload`, formData);

    let editedProfile = {
      name: event.target.name.value,
      lastName: event.target.lastName.value,
      location: event.target.location.value,
      aboutMe: event.target.aboutMe.value,
      skills: event.target.skills.value,
      image: imgResponse.data.image,
      // event: event.target.event.value,
      // skills: event.target.skills.value,
      // jobs: event.target.jobs.value,
    };
    let response = await axios.patch(
      `${API_URL}/profile/${id}`,
      editedProfile,
      { withCredentials: true }
    );
    console.log(response.data);
    setUser(response.data);
    navigate("/profile");
  };

  //end of fern work.
  console.log("all my jobs", jobs);
  return (
    <div>
      <MyNav user={user} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home user={user} />} />
        {/*<Route path="/jobs-offer" element={<JobsList jobs={jobs} />} />*/}
        {/* <Route
          path="/jobs"
          element={
            <JobCard
              btnDelete={handleDelete}
              btnEditJob={handleEdit}
              jobs={jobs}
            />
          }
        /> */}
        <Route
          path="/editJob/:id"
          element={<EditJob btnEditJob={handleEdit} btnDelete={handleDelete} />}
        />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/signin"
          element={<SignIn myError={myError} onSignIn={handleSignIn} />}
        />
        <Route
          path="/profile"
          handleProfile={handleProfile}
          element={<Profile user={user} jobs={jobs} />}
        />
        <Route
          path="/EditProfile/:id"
          element={
            <EditProfile user={user} btnEditProfile={handleEditProfile} />
          }
        />
        <Route
          path="/add-form"
          element={<CreateJob btnSubmit={handleSubmit} />}
        />
        <Route
          path="/yourjobs"
          element={
            <YourJobs
              btnDelete={handleDelete}
              btnEditJob={handleEdit}
              user={user}
              jobs={jobs}
            />
          }
        />

        <Route path="/yourprofile" element={<ProfileForm user={user} />} />

        <Route path="/chat" element={<Chat />} />
      </Routes>
    </div>
  );
}
export default App;
