import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./config/firebase";
import HospitalManagement from "./routes/index";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { AuthProvider } from "src/providers";
import { ThemeProvider as MUIThemeProvider } from "@material-ui/styles";
import MuiTheme from "src/config/MUITheme";
ReactDOM.render(
  <MUIThemeProvider theme={MuiTheme}>
    <ThemeProvider theme={{}}>
      <AuthProvider>
        <Router>
          <React.StrictMode>
            <HospitalManagement />
          </React.StrictMode>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  </MUIThemeProvider>,
  document.getElementById("root")
);
