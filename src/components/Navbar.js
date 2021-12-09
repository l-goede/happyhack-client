import * as React from "react";

import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/app.context";

export default function Navbar(props) {
  const { user } = useContext(UserContext);
  return (
    <div>
      {user ? (
        <button onClick={props.onLogout}>Logout</button>
      ) : (
        <>
          <Link style={{ marginLeft: "10px" }} to="/signin">
            SignIn
          </Link>
          <Link style={{ marginLeft: "10px" }} to="/signup">
            SignUp
          </Link>
        </>
      )}
    </div>
  );
}
