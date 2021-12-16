import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import * as React from "react";
import { useState } from "react";
import MyNav from "./MyNav";
import Footer from "./Footer";
import ProfileForm from "./ProfileForm";
import JobCard from "./JobCard";
import {API_URL, SOCKET_URL} from '../config'
import io from "socket.io-client";
function Profile(props) {

  let socket = io(`${SOCKET_URL}`);

  let { user, jobs } = props;
  const [accepted, setAccepted] = useState([]);
  if (!user) {
    return <h1>Loading</h1>;
  }


  function handleAdd(user, jobs) {
    let acceptedJob = {
      image: user.image,
      jobTitle: jobs.jobTitle,
      name: user.name,
      skills: jobs.skills,
      deadline: jobs.deadline,
      jobDescription: jobs.jobDescription,
      price: jobs.price,
      completed: false,
      accpted: true,
    };

    setAccepted([acceptedJob, ...accepted]);
  }
  socket.on("hello", (arg) => {
    console.log(arg); // world
  });
  return (
    <div>
      <div class="centered">
        <div class="card-container-profile">
          <span class="pro">
            <Link to={`/EditProfile/${user._id}`}> EDIT</Link>
          </span>

          <img class="dimProfile" src={user.image} alt="user" />

          <h6>
            {user.name} {user.lastName}{" "}
          </h6>
          <h3 class="smallEmail">{user.email} </h3>
          <h1>
            {user.location} <br />{" "}
          </h1>
          <h1>
            {user.aboutMe} <br /> <br />{" "}
          </h1>

          <button class="primary-profile" id="buttons-profile">
          <Link to={`/calendar`}> My calendar</Link>
          </button>

          <div class="skills-profile">
            <h6>Skills</h6>
            <ul>
            
              {
              user.skills.map((elem) => {
                return (
                  <>
                  {console.log("inside my map", user.skills)}
                    <li>{elem}</li>
                  </>
                );
              })}
            </ul>
          </div>
        </div>

      </div>
      <JobCard jobs={jobs} user={user} btnAdd={handleAdd} />
      <Footer />
    </div>
  );
}

export default Profile;
