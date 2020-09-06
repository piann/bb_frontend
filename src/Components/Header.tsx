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
  box-shadow: 0 4px 4px rgba(180, 180, 180, 0.7);
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
  display:flex;
  align-items:center;
`
const Profile = styled.img`
  height:35px;
  width:35px;
  border-radius:43%;
  margin-right:12px;
  margin-left: 6px;
`

const MenuLink = styled(Link)`
  color:white;
  font-size:16px;
  padding-top:15px;
  padding-bottom:15px;
  padding-right:25px;
`
const StartLink = styled(Link)`
  background-color:${props => props.theme.purpleColor};
  color:white;
  font-size:15px;
  padding:10px 25px;

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
    <MenuLink to="/">
        {"Introduction"}
      </MenuLink>
      <MenuLink to="/programs">
        {"Programs"}
      </MenuLink>
      {
      isLoggedIn?
      <Link to ="/profile">
        <Profile src={grayProfile}/>
      </Link>
      :
      <StartLink to={"/log_in"}>{"Start Research"}</StartLink>
      }
    </MenuSpace>
</Header>
)
}