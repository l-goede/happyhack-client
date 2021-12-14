import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import * as React from "react";
import { useState } from "react";
import MyNav from "./MyNav";
import Footer from "./Footer";
import ProfileForm from "./ProfileForm";
import JobCard from "./JobCard";

function Profile(props) {
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
  return (
    <div>
      <h1>{user.name}</h1>
      <h2> {user.email} </h2>
      {/* <h2> {user.location} </h2> */}
      {/* <h2> {user.skills}</h2> */}

      {/* link to events */}
      <button>
        <Link to={`/EditProfile/${user._id}`}> EDIT YOUR PROFILE </Link>
      </button>
      <JobCard jobs={jobs} user={user} btnAdd={handleAdd} />

      <Footer />
    </div>
  );
}

export default Profile;
