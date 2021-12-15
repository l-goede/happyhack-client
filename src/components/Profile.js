import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import * as React from "react";
import { useState } from "react";
import MyNav from "./MyNav";
import Footer from "./Footer";
import ProfileForm from "./ProfileForm";
import JobCard from "./JobCard";

function Profile(props) {
  let { user, jobs, btnAdd, username } = props;
  console.log("user in profilejs", user);

  if (!user) {
    return <h1>Loading</h1>;
  }

  console.log("profile:jobs", jobs);
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
            See my jobs!
          </button>

          <div class="skills-profile">
            <h6>Skills</h6>
            <ul>
              {user.skills.map((elem) => {
                return (
                  <>
                    <li>{elem}</li>
                  </>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <JobCard jobs={jobs} user={user} btnAdd={btnAdd} username={username} />
      <Footer />
    </div>
  );
}

export default Profile;
