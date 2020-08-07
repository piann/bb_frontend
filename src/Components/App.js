import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../Styles/GlobalStyles";
import { HashRouter as Router } from "react-router-dom";
import Theme from "../Styles/Theme";
import Routes from "./Routes";
import Header from "./Header";
import Side from "./Side";

export default () => (
  <ThemeProvider theme={Theme}>
    <>
    <GlobalStyles />
    <Router>
      <>
      <Header/>
      <Side/>
      <Routes isLoggedin={false}/>
      </>
    </Router>
    </>
  </ThemeProvider>
);