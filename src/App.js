import React from "react";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { API_URL } from "./config";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Navbar from "./components/Navbar";

function App() {
  const { user, setUser } = useContext(UserContext);
  const [myError, setError] = useState(null);
  const [fetchingUser, setFetchingUser] = useState(true);

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
      setUser(response.data);
    } catch (err) {
      //console.log(err.response)
      setError(err.response.data.error);
    }
  };

  const handleLogout = async () => {
    await axios.post(`${API_URL}/logout`, {}, { withCredentials: true });
    setUser(null);
  };

  // Wait for the '/api/user' request to finish so that we know if the user is loggedin or not
  if (fetchingUser) {
    return <p>Loading user info. . . </p>;
  }

  return (
    <div>
      <Navbar onLogout={handleLogout} />
      <Routes>
        <Route
          path="/signin"
          element={<SignIn myError={myError} onSignIn={handleSignIn} />}
        />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
