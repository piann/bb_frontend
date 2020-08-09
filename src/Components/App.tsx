import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../Styles/GlobalStyles";
import { HashRouter as Router } from "react-router-dom";
import theme from "../Styles/theme";
import Routes from "./Routes";
import Header from "./Header";
import {Body, BodyWrapper} from "./Body";

export default () => (
  <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
    <Router>
      <>
      <Header/>
      <BodyWrapper>
        <Body>
          <Routes isLoggedIn={false}/>
        </Body>
      </BodyWrapper>
      </>
    </Router>
    </>
  </ThemeProvider>
);