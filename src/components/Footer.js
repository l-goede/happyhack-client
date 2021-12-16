import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {"Copyright © "}
      <Link color="inherit" href="https://github.com/l-goede/happyhack-client">
        Our repository
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "30vh",
        position: "fixed",
        bottom: 0,
        width: "100%",
      }}
    >
      <CssBaseline />

      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
          backgroundColor: "#E7E7E7",
          color: "#2E2C2C",
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="body1">
            Our repository can be found here.
          </Typography>
          <Copyright />
        </Container>
      </Box>
    </Box>
  );
}
