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
import ChatBot from "./components/ChatBot";
import YourJobs from "./components/YourJobs";
import EditJob from "./components/EditAdvert";
import YourEvents from "./components/YourEvents";
import Events from "./components/Events";
import Footer from "./components/Footer";
import MyCalendar from "./components/MyCalendar";
import NotFound from "./components/NotFound";
import ChatPage from "./components/ChatPage";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const { user, setUser } = useContext(UserContext);
  const [users, setUsers] = useState([]);
  const [events, setEvents] = useState([]);
  const [fetchingUser, setFetchingUser] = useState(true);
  const [fetchingJobs, setFetchingJobs] = useState(true);
  const [myError, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUsers();
    const getData = async () => {
      let response = await axios.get(`${API_URL}/jobs`);
      setJobs(response.data);
      setFetchingJobs(false);
    };
    const getDataEvent = async () => {
      let response = await axios.get(`${API_URL}/events`);
      setEvents(response.data);
    };
    getDataEvent();
    getData();
    handleProfile();
  }, []);

  const fetchUsers = () => {
    axios
      .get(`${API_URL}/users`, { withCredentials: true })
      .then((response) => {
        setUsers(response.data);
      })
      .catch((err) => {
        console.log("user not logged in");
      });
  };

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
    console.log(newJob);

    let response = await axios.post(`${API_URL}/add-form`, newJob, {
      withCredentials: true,
    });
    let cloneUser = JSON.parse(JSON.stringify(user));
    cloneUser.jobsCreated = [response.data._id, ...user.jobsCreated];
    setUser(cloneUser);
    setJobs([response.data, ...jobs]);
    navigate(`/profile`);
  };

  const handleEdit = async (event, id) => {
    event.preventDefault();
    console.log("hey yo");
    let editedAdvert = {
      jobTitle: event.target.jobTitle.value,
      jobDescription: event.target.jobDescription.value,
      skills: event.target.skills.value,
      deadline: event.target.deadline.value,
      price: event.target.price.value,
      completed: false,
      accepted: false,
    };
    // Pass an object as a 2nd param in POST requests
    let response = await axios.patch(`${API_URL}/jobs/${id}`, editedAdvert, {
      withCredentials: true,
    });
    let cloneJobs = JSON.parse(JSON.stringify(jobs));
    let updatedJobs = cloneJobs.map((elem) => {
      if (elem._id === response.data._id) {
        elem = response.data;
      }
      return elem;
    });
    setJobs(updatedJobs);

    // console.log("updated jobs ", updatedJobs)
  };

  const handleDelete = async (id) => {
    // make a request to the server to delete it from the database
    await axios.delete(`${API_URL}/jobs/${id}`);

    // Update your state 'jobs' and remove the jobcard that was deleted
    let filteredAdvert = jobs.filter((elem) => {
      return elem._id !== id;
    });

    setJobs(filteredAdvert);
  };

  const handleDeleteEvent = async (id) => {
    // make a request to the server to delete it from the database
    await axios.patch(`${API_URL}/events/${id}`, {}, { withCredentials: true });

    // Update your state 'jobs' and remove the jobcard that was deleted
    let filteredEvent = user.events.filter((elem) => {
      return elem._id !== id;
    });
    console.log("delete event", filteredEvent, "before delete", events);
    let cloneUser = JSON.parse(JSON.stringify(user));
    cloneUser.events = filteredEvent;
    setUser(cloneUser);
  };

  const handleSignIn = async (event) => {
    event.preventDefault();

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
    try {
      let response = await axios.get(`${API_URL}/profile`, {
        withCredentials: true,
      });
      setUser(response.data);
      setFetchingUser(false);
    } catch (err) {
      setFetchingUser(false);
    }
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

  const handleWatchlist = async (jobId) => {
    let acceptedJob = {
      accepted: true,
      jobId,
    };

    let response = await axios.patch(`${API_URL}/yourjobs`, acceptedJob, {
      withCredentials: true,
    });
    let cloneUser = JSON.parse(JSON.stringify(user));
    cloneUser.jobsAccepted = [response.data._id, ...user.jobsCreated];
    setUser(cloneUser);
    let filteredJobs = jobs.map((job) => {
      if (job._id == response.data._id) {
        return response.data;
      } else {
        return job;
      }
    });
    setJobs(filteredJobs);
  };

  const handleSaveEvent = async (eventId) => {
    let saveEvent = {
      eventId,
    };

    let response = await axios.patch(`${API_URL}/yourevents`, saveEvent, {
      withCredentials: true,
    });
    console.log(response.data);
    //add the response.data inside user.events
    let cloneUser = JSON.parse(JSON.stringify(user));
    cloneUser.events = [response.data, ...cloneUser.events];
    setUser(cloneUser);
    let filteredEvents = events.map((event) => {
      if (event._id == response.data._id) {
        return response.data;
      } else {
        return event;
      }
    });
    setJobs(filteredEvents);
  };

  if (!events.length || fetchingUser || fetchingJobs) {
    return <h1>LOADING...</h1>;
  }
  console.log("app", user);
  return (
    <div>
      <ChatBot />

      <MyNav user={user} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home user={user} />} />

        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/signin"
          element={<SignIn myError={myError} onSignIn={handleSignIn} />}
        />
        <Route
          path="/profile"
          handleProfile={handleProfile}
          element={<Profile user={user} jobs={jobs} btnAdd={handleWatchlist} />}
        />
        <Route
          path="/EditProfile/:id"
          element={
            <EditProfile user={user} btnEditProfile={handleEditProfile} />
          }
        />
        <Route
          path="/add-form"
          element={
            <CreateJob btnSubmit={handleSubmit} btnAdd={handleWatchlist} />
          }
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

        <Route
          path="/editJob/:id"
          element={<EditJob btnEditJob={handleEdit} btnDelete={handleDelete} />}
        />
        <Route
          path="/events"
          element={
            <Events btnSave={handleSaveEvent} user={user} events={events} />
          }
        />
        <Route
          path="/yourevents"
          element={
            <YourEvents
              btnDeleteEvent={handleDeleteEvent}
              user={user}
              events={user ? user.events : []}
            />
          }
        />

        {/* <Route path="/yourprofile" element={<ProfileForm user={user} />} /> */}

        <Route path="/chat/:chatId" element={<ChatPage user={user} />} />
        <Route path="/calendar" element={<MyCalendar />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}
export default App;
