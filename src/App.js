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
import AddAdvert from "./components/AddAdvert";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import JobsList from "./components/Advert";
import Home from "./components/Home";
import ProfileForm from "./components/ProfileForm";
import CreateJob from "./components/CreateJob";

function App() {
  const { user, setUser } = useContext(UserContext);
  const [myError, setError] = useState(null);
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      let response = await axios.get(`${API_URL}/jobs`);
      setJobs(response.data);
    };

    getData();
  }, []);

  useEffect(() => {
    navigate("/");
  }, [jobs]);

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
    console.log(typeof newJob.price);

    await axios.post(`${API_URL}/add-form`, newJob, { withCredentials: true });
    setJobs([newJob, ...jobs]);
    navigate("/profile");
  };

  const handleEdit = async (event, id) => {
    event.preventDefault();
    let editedAdvert = {
      jobTitle: event.target.jobTitle.value,
      jobDescription: event.target.jobDescription.value,
      deadline: event.target.deadline.value,
      date: event.target.date.value,
      price: event.target.price.value,
      completed: false,
    };
    // Pass an object as a 2nd param in POST requests
    let response = await axios.patch(`${API_URL}/jobs/${id}`, editedAdvert);

    console.log(response.data);

    let updatedJobs = jobs.map((elem) => {
      if (elem._id === id) {
        elem.name = response.data.name;
        elem.username = response.data.username;
        elem.skills = response.data.skills;
        elem.details = response.data.details;
        elem.date = response.data.date;
        elem.price = response.data.price;
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
  const [fetchingUser, setFetchingUser] = useState(true);

  const handleSignIn = async (event) => {
    event.preventDefault();
    try {
      let newUser = {
        email: event.target.email.value,
        password: event.target.password.value,
      };

      let response = await axios.post(`${API_URL}/signin`, newUser, {
        withCredentials: true,
      });
      setUser(response.data);
      navigate("/profile");
    } catch (err) {
      setError(err.response.data.error);
    }
  };

  const handleLogout = async () => {
    await axios.post(`${API_URL}/logout`, {}, { withCredentials: true });
    setUser(null);
    navigate("/");
  };

  return (
    <div>
      <MyNav user={user} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route path="/jobs" element={<JobsList jobs={jobs} />} />
        <Route path="/add-form" element={<AddAdvert btnSubmit={handleSubmit} />} />
        <Route path="/jobs/:jobsId/edit" element={ <EditAdvert btnEdit={handleEdit} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn myError={myError} onSignIn={handleSignIn} />}/>
        <Route path="/profile" handleProfile={handleProfile} element={<Profile user={user} />} />
        <Route path="/EditProfile/:id"  element={<EditProfile user={user} btnEditProfile={handleEditProfile} />} />
        <Route path="/add-form" element={<AddAdvert btnSubmit={handleSubmit} />}/>
      </Routes>
    </div>
  );
}
export default App;
