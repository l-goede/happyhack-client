import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { UserProviderWrapper } from "./context/app.context";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProviderWrapper>
        <App />
      </UserProviderWrapper>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
