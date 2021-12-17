import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { alpha, styled } from "@mui/material/styles";
import "../signIn.css";

const theme = createTheme();

function SignIn(props) {
  const { onSignIn } = props;

  const CssTextField = styled(TextField)({
    "& label.Mui-focused": {
      color: "#2e2c2c",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#2e2c2c",
    },
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "#2e2c2c",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
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
            Sign in
          </Typography>
          <Box component="form" onSubmit={onSignIn} noValidate sx={{ mt: 1 }}>
            <CssTextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <CssTextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              helperText={props.myError ? props.myError : ""}
              error={props.myError ? true : false}
            />
            <Button
              className="signInButton"
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, backgroundColor: "#2e2c2c" }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link className="linkToSignUp" to="/signup">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default SignIn;
