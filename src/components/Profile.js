import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import * as React from "react";
import MyNav from "./MyNav";
import Footer from "./Footer";
import ProfileForm from "./ProfileForm";





function Profile(props) {
  let { user } = props;

  if (!user) {
    return <h1>Loading</h1>;
  }
  
  return (
    <div>

  <div class="card-container-profile">
	<span class="pro"> 
  <Link to={`/EditProfile/${user._id}`}> EDIT</Link>

  </span>


	<img class="dimProfile" src={user.image} alt="user" />

	<h6>{user.name} {user.lastName} </h6>
  <h3 class="smallEmail">{user.email}  </h3>
	<h1>{user.location} <br/> </h1>
	<h1>{user.aboutMe} <br/> <br/> </h1>

	<div class="buttons-profile">
		<button class="primary-profile">
			See my jobs! 
		</button>
	</div>
      <div class="skills-profile">
      <h6>Skills</h6>
      <ul>
      {user.skills.map((elem) => {
        return(
          <>        
              
              <li>{elem}</li>
                
          </>
              )
   
   
    
 })
 
} 
</ul>
</div>


</div>
    <Footer />
    </div>
  );
}

export default Profile;
