
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import * as React from 'react';




function Profile(props) {

   let {user} = props


   if (!user) {
     return <h1>Loading</h1>
   }
  return (
    <div>
        <h1> hi {user.name}, welcome to the profile. </h1>
         <h1> </h1>      

            {/* link to events */}
            <button>
                <Link to={`/EditProfile/${user._id}`}> EDIT YOUR PROFILE </Link>
            </button>

            {/* link to events */}
            <button>
                <Link to={`/`}> YOUR EVENTS </Link>
            </button>
            {/* link to jobs */}
            <button>
                <Link to={`/`}> JOBS YOU ACCEPTED </Link>
            </button>
            {/* link to jobs */}
            <button>
                <Link to={`/`}> JOBS YOU POSTED</Link>
            </button>
    </div>
  )
}

export default Profile





