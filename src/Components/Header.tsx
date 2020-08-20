import React from "react";
import styled from "styled-components";
import mainLogo from "../images/zerowhaleWhite.png";
import { Link } from "react-router-dom"
import grayProfile from "../images/grayProfile.png";
import {useQuery} from "@apollo/client";
import {LOCAL_LOGGED_IN_QUERY} from "../sharedQueries";


const Header = styled.header`
  width: 100%;
  height: ${props => props.theme.headerBarHeight};
  color: ${props => props.theme.snowyGrayColor};
  border: 0;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${props => props.theme.headerBarColor};
  border-radius: 0px;
  border-bottom: solid ${props => props.theme.borderColor};
  border-width: 1px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left:15px;
  padding-right:15px;
  z-index: 10;
`;

const LogoSpace = styled.img`
  height: calc(${props => props.theme.headerBarHeight} - 40px);
  margin-left:5px;
`;

const MenuSpace = styled.div`

`
const Profile = styled.img`
  height:35px;
  width:35px;
  margin-right:5px;
`


export default () => {

  const {
    data: {isLoggedIn}
  }:any = useQuery(LOCAL_LOGGED_IN_QUERY);

return(
<Header>
    <Link to="/">
      <LogoSpace src={mainLogo}/>
    </Link>
    <MenuSpace>

    <Link to ="/profile">
      {
      isLoggedIn &&
      <Profile src={grayProfile}/>
      }
    </Link>
    </MenuSpace>
</Header>
)
}