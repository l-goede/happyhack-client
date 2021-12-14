import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import * as React from "react";
import MyNav from "./MyNav";
import Footer from "./Footer";
import ProfileForm from "./ProfileForm";
import JobCard from "./JobCard";
import JobCreatedCard from "./JobCreatedCard";

function Profile(props) {
  let { user, jobs } = props;

  if (!user) {
    return <h1>Loading</h1>;
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
      <JobCard jobs={jobs} user={user} />
      <JobCreatedCard jobs={jobs} user={user} />

      <Footer />
    </div>
  );
}

export default Profile;
