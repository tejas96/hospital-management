import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./config/firebase";
import HospitalManagement from "./routes/index";
import { BrowserRouter as Router } from "react-router-dom";
// import { ThemeProvider } from "styled-components";

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <HospitalManagement />
    </React.StrictMode>
  </Router>,
  document.getElementById("root")
);
