import { Routes, Route } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { API_URL } from "./config";
import { UserContext } from "./context/app.context";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";
import AddAdvert from "./components/AddAdvert";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import JobsList from "./components/Advert";
import EditProfile from "./components/EditProfile";
import React from "react";

function App() {
  const { user, setUser } = useContext(UserContext);
  const [fetchingUser, setFetchingUser] = useState(true);
  const [myError, setError] = useState(null);
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async () => {
      let response = await axios.get(`${API_URL}/adverts`);
      setJobs(response.data);
    };

    getData()
    handleProfile();
  }, []);

  // useEffect(() => {
  //   navigate("/");
  // }, [jobs]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    let newJob = {
      name: event.target.name.value,
      username: event.target.username.value,
      skills: event.target.skills.value,
      details: event.target.details.value,
      date: event.target.date.value,
      price: event.target.price.value,
      contact: event.target.contact.value,
      completed: false,
    };

    let response = await axios.post(`/create`, newJob, {
      withCredentials: true,
    });
    setJobs([response.data, ...jobs]);
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
    let response = await axios.patch(
      `http://localhost:5005/jobs/${id}`,
      editedAdvert
    );
    // Update our state 'jobs' with the edited todo so that the user see the upadted info without refrshing the page

    console.log(response.data);

    let updatedJobs = jobs.map((elem) => {
      if (elem._id == id) {
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
    await axios.delete(`http://localhost:5005/api/jobs/${id}`);

    // Update your state 'jobs' and remove the todo that was deleted
    let filteredAdvert = jobs.filter((elem) => {
      return elem._id !== id;
    });

    setJobs(filteredAdvert);
  };
  

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
      console.log(response.data)
      setUser(response.data);
      navigate(`/profile`);
    } catch (err) {
      setError(err.response.data.error);
    }
  };

  //updated my server route to be logged in.. 
  // console.log gives me the user data 
  const handleProfile = async () => {
    let response = await axios.get(`${API_URL}/profile`, {
      withCredentials: true,
    });
    setUser(response.data)
    setFetchingUser(false)
  }

  const handleLogout = async () => {
    await axios.post(`${API_URL}/logout`, {}, { withCredentials: true });
    setUser(null);
  };


// fern work:  { name, location, image} event job skills 
  const handleEditProfile = async (event, id) => {
    event.preventDefault();
    console.log("im in the handleEdit")
    let editedProfile= {
      name: event.target.name.value,
      location: event.target.location.value,
     // image: event.target.image.value,
     // event: event.target.event.value,
     // skills: event.target.skills.value,
     // jobs: event.target.jobs.value,
            
    };

    // pass as PARAMS, url same as client 
    let response = await axios.patch(`${API_URL}/profile/${id}`, editedProfile, { withCredentials: true });
            console.log(response.data)
 
    setUser(response.data)


          };



  /*if(fetchingUser) {
    return  <h1> Loading  </h1> 
}*/

 //end of fern work.

  return (
    <div>
      <Navbar onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<JobsList jobs={jobs} />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn myError={myError} onSignIn={handleSignIn} />}/>
        <Route path="/profile" handleProfile={handleProfile} element={<Profile user={user} />} />
        <Route path="/EditProfile/:id"  element={<EditProfile user={user} btnEditProfile={handleEditProfile} />} />
        <Route path="/add-form" element={<AddAdvert btnSubmit={handleSubmit} />}

        />
      </Routes>
    </div>
  );
}




export default App;
