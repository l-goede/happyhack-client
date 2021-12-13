import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import * as React from "react";
import MyNav from "./MyNav";
import Footer from "./Footer";
import ProfileForm from "./ProfileForm";

function Profile() {
  // let {user} = props
  //dont need set bc it wont update, use in edit!

  return (
    <div>
      <h1> hi, welcome to the profile. Sign in is working.</h1>

      {/* <h1> name: {user.name} </h1>      */}

      {/* link to events */}

      <button>
        <Link to={`/`}>
          {" "}
          Go profile details, but now its redirecting to homepage{" "}
        </Link>
      </button>
      {/* link to jobs */}
      <button>
        <Link to={`/`}> Go your jobs accepts </Link>
      </button>
      <Footer />
    </div>
  );
}

export default Profile;
