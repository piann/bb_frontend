import React from "react";
import styled from "styled-components";
import mainLogo from "../images/zerowhaleWhite.png";
import { Link } from "react-router-dom"
import {useQuery} from "@apollo/client";
import {LOCAL_LOGGED_IN_QUERY} from "../sharedQueries";
import UserProfileImage from "./UserProfileImage";
import {gql} from "apollo-boost";
import {fileServerAddr} from "../common";

export const GET_MY_PROFILE = gql`
    query getMyProfile{
        getMyProfile{
            profilePictureId
        }
    }
`;



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
`;

const MenuLink = styled(Link)`
  color:white;
  font-size:16px;
  padding-top:15px;
  padding-bottom:15px;
  padding-right:25px;
`;
const StartLink = styled(Link)`
  background-color:${props => props.theme.purpleColor};
  color:white;
  font-size:15px;
  padding:10px 25px;

`;

export default () => {

  const {
    data: {isLoggedIn}
  }:any = useQuery(LOCAL_LOGGED_IN_QUERY);
  const {data:profileData, loading:profileLoading} = useQuery(GET_MY_PROFILE);


  let profilePictureId = null;
  if(isLoggedIn===true){


    if(!profileLoading){
        const {
            getMyProfile:getMyProfileResponse
        } = profileData;
    if(getMyProfileResponse!==null){
        profilePictureId = getMyProfileResponse.profilePictureId;
        } else {
        profilePictureId = null;
        }
    }
  }
  //// for test


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
        <UserProfileImage 
          src={profilePictureId?`${fileServerAddr}${profilePictureId}/`:null}
          width={"35px"}
          height={"35px"}
        />
      </Link>
      :
      <StartLink to={"/log_in"}>{"Start Research"}</StartLink>
      }
    </MenuSpace>
</Header>
)
}