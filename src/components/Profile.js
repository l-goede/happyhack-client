import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import * as React from "react";
import { useState } from "react";
import MyNav from "./MyNav";
import Footer from "./Footer";
import ProfileForm from "./ProfileForm";
import JobCard from "./JobCard";
import { API_URL, SOCKET_URL } from "../config";
import io from "socket.io-client";
function Profile(props) {
  // let socket = io(`${SOCKET_URL}`);
  let { user, jobs, btnAdd, username } = props;

  const [accepted, setAccepted] = useState([]);
  if (!user) {
    return <h1>Loading</h1>;
  }
  // TODO: Merge??
  // function handleAdd(user, jobs) {
  //   let acceptedJob = {
  //     image: user.image,
  //     jobTitle: jobs.jobTitle,
  //     name: user.name,
  //     skills: jobs.skills,
  //     deadline: jobs.deadline,
  //     jobDescription: jobs.jobDescription,
  //     price: jobs.price,
  //     completed: false,
  //     accpted: true,
  //   };

  //   setAccepted([acceptedJob, ...accepted]);
  // }

  return (
    <div>
      <div class="centered">
        <div class="card-container-profile">
          <span class="pro" id="profile-btn">
            <Link
              style={{ textDecoration: "none", color: "#2e2c2c" }}
              to={`/EditProfile/${user._id}`}
            >
              {" "}
              EDIT
            </Link>
          </span>

          <img class="dimProfile" src={user.image} alt="user" />

          <h4>
            {user.name} {user.lastName}{" "}
          </h4>
          <h3 class="smallEmail">{user.email} </h3>
          <h6>
            {user.location} <br />{" "}
          </h6>
          <h6>
            {user.aboutMe} <br /> <br />{" "}
          </h6>

          <button class="primary-profile" id="profile-btn">
            <Link
              style={{ textDecoration: "none", color: "#2e2c2c" }}
              to={`/calendar`}
            >
              {" "}
              My calendar
            </Link>
          </button>

          <div class="skills-profile">
            <h6>Skills</h6>
            <ul>
              {user.skills.map((elem) => {
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
      <JobCard jobs={jobs} user={user} btnAdd={btnAdd} username={username} />
    </div>
  );
}

export default Profile;
