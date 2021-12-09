import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/app.context";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export default function Navbar(props) {
  const { user } = useContext(UserContext);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
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
        </Toolbar>
      </AppBar>
    </Box>
  );
}
