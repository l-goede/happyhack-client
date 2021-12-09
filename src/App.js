import React from "react";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

function App() {
  const { user, setUser } = useContext(UserContext);
  const [myError, setError] = useState(null);
  return (
    <div>
      <Routes>
        <Route
          path="/signin"
          element={<SignIn />}
          // element={<SignIn myError={myError} onSignIn={handleSignIn} />}
        />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
