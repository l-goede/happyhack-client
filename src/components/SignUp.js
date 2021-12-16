import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import "../signUp.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link, useNavigate } from "react-router-dom";
import { alpha, styled } from "@mui/material/styles";
import axios from "axios";
import { API_URL } from "../config";

const theme = createTheme();

function SignUp(props) {
  const navigate = useNavigate();

  const handleSignUp = async (event) => {
    event.preventDefault();
    let newUser = {
      username: event.target.username.value,
      email: event.target.email.value,
      password: event.target.password.value,
    };

    await axios.post(`${API_URL}/signup`, newUser, { withCredentials: true });
    navigate("/signin");
  };

  const CssTextField = styled(TextField)({
    "& label.Mui-focused": {
      color: "green",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "green",
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "green",
      },
    },
  });

  return (
    <ThemeProvider clasName="themeProvider" theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Sign Up
          </Typography>
          <Box
            component="form"
            onSubmit={handleSignUp}
            noValidate
            sx={{ mt: 1 }}
          >
            <CssTextField
              className="textfield"
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoFocus
            />
            <TextField
              className="textfield"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
            />
            <TextField
              className="textfield"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              className="signUpButton"
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, background: "#2e2c2c" }}
            >
              Sign Up
            </Button>
            <Grid container>
              <Grid item>
                <Link className="linkToSignIn" to="/signin">
                  {"Already have an account? Sign In instead"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default SignUp;
