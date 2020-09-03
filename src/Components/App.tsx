import React from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../Styles/GlobalStyles";
import { BrowserRouter as Router } from "react-router-dom";
import theme from "../Styles/theme";
import Routes from "./Routes";
import Header from "./Header";
import {Body, BodyWrapper} from "./Body";
import {useQuery} from "@apollo/client";
import {LOCAL_LOGGED_IN_QUERY} from "../sharedQueries";

export default () => {
  const {
    data: {isLoggedIn}
  }:any = useQuery(LOCAL_LOGGED_IN_QUERY);


  return(
  <ThemeProvider theme={theme}>
    <>
    <GlobalStyles />
    <Router>
      <>
      <Header/>
      <BodyWrapper id={"main"}>
        <Body>
          <Routes isLoggedIn={isLoggedIn}/>
        </Body>
      </BodyWrapper>
      </>
    </Router>
    </>
  </ThemeProvider>
);
}