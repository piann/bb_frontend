import React from "react";
import styled from "styled-components";
import mainLogo from "../images/zerowhaleWhite.png";
import { Link } from "react-router-dom"
import {useQuery} from "@apollo/client";
import {LOCAL_LOGGED_IN_QUERY} from "../sharedQueries";
import UserProfileImage from "./UserProfileImage";
import {gql} from "apollo-boost";
import {fileServerAddr} from "../common";
import betaImg from "../images/beta.png";

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
  @media only screen and (max-width: ${props=>props.theme.mobileWidth}) {
        height:calc(${props => props.theme.headerBarHeight} - 10px);
  }
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
  width:210px;
  margin-left:5px;
  @media only screen and (max-width: ${props=>props.theme.mobileWidth}) {
    width:135px;
    margin-left:0px;
  }
`;

const MenuSpace = styled.div`
  display:flex;
  align-items:center;
`;

const IntroMenuLink = styled(Link)`
  color:white;
  font-size:16px;
  padding-top:15px;
  padding-bottom:15px;
  padding-right:25px;
  @media only screen and (max-width: ${props=>props.theme.mobileWidth}) {
    display:none;
  }
`;

const MenuLink = styled(Link)`
  color:white;
  font-size:16px;
  padding-top:15px;
  padding-bottom:15px;
  padding-right:25px;
  display:flex;
  justify-content:center;
  @media only screen and (max-width: ${props=>props.theme.mobileWidth}) {
    padding-right:0px;
    margin-right:20px;
  }

`;
const StartLink = styled(Link)`
  background-color:${props => props.theme.purpleColor};
  text-align:center;
  color:white;
  font-size:15px;
  padding:10px 25px;
  @media only screen and (max-width: ${props=>props.theme.mobileWidth}) {
    font-size:12px;
    padding:5px 10px;
  }

`;

const SLink = styled(Link)`
  display:flex;
  flex-direction:row;
  align-items:flex-end;
`;

const CLink = styled(Link)`
  display:flex;
  flex-direction:row;
  align-items:center;

`

const BetaImg = styled.img`
  margin-left:-3px;
  @media only screen and (max-width: ${props=>props.theme.mobileWidth}) {
    width:25px;
    margin-left:0px;
  }
`

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


return(
<Header>
    <SLink to="/">
      <LogoSpace src={mainLogo}/>
      <BetaImg src={betaImg}/>
    </SLink>
    <MenuSpace>
      <IntroMenuLink to="/">
        {"Introduction"}
      </IntroMenuLink>
      <MenuLink to="/programs">
        {window.innerWidth>730?"Programs":<img width="23px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTQ2NC44ODMgNjQuMjY3aC00MTcuNzY2Yy0yNS45OCAwLTQ3LjExNyAyMS4xMzYtNDcuMTE3IDQ3LjE0OSAwIDI1Ljk4IDIxLjEzNyA0Ny4xMTcgNDcuMTE3IDQ3LjExN2g0MTcuNzY2YzI1Ljk4IDAgNDcuMTE3LTIxLjEzNyA0Ny4xMTctNDcuMTE3IDAtMjYuMDEzLTIxLjEzNy00Ny4xNDktNDcuMTE3LTQ3LjE0OXoiIGZpbGw9IiNlNmU5ZWQiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiIHN0eWxlPSIiIGNsYXNzPSIiPjwvcGF0aD48cGF0aCB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGQ9Im00NjQuODgzIDIwOC44NjdoLTQxNy43NjZjLTI1Ljk4IDAtNDcuMTE3IDIxLjEzNi00Ny4xMTcgNDcuMTQ5IDAgMjUuOTggMjEuMTM3IDQ3LjExNyA0Ny4xMTcgNDcuMTE3aDQxNy43NjZjMjUuOTggMCA0Ny4xMTctMjEuMTM3IDQ3LjExNy00Ny4xMTcgMC0yNi4wMTMtMjEuMTM3LTQ3LjE0OS00Ny4xMTctNDcuMTQ5eiIgZmlsbD0iI2U2ZTllZCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZD0ibTQ2NC44ODMgMzUzLjQ2N2gtNDE3Ljc2NmMtMjUuOTggMC00Ny4xMTcgMjEuMTM3LTQ3LjExNyA0Ny4xNDkgMCAyNS45OCAyMS4xMzcgNDcuMTE3IDQ3LjExNyA0Ny4xMTdoNDE3Ljc2NmMyNS45OCAwIDQ3LjExNy0yMS4xMzcgNDcuMTE3LTQ3LjExNyAwLTI2LjAxMi0yMS4xMzctNDcuMTQ5LTQ3LjExNy00Ny4xNDl6IiBmaWxsPSIjZTZlOWVkIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PC9nPjwvc3ZnPg==" />}
      </MenuLink>
      {
      isLoggedIn?
      <Link to ="/profile">
        <UserProfileImage 
          src={profilePictureId?`${fileServerAddr}i/${profilePictureId}/`:null}
          width={"35px"}
          height={"35px"}
        />
      </Link>
      :
      <>
      {window.innerWidth>730?
      <StartLink to={"/log_in"}>
        {"Start Research"}
      </StartLink>
      :
      <CLink to={"/log_in"}>
        <img width="23px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxNS41NTYgNTE1LjU1NiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtOTYuNjY3IDMyLjIyMnY5Ni42NjdoNjQuNDQ0di0zMi4yMjJoMjkwdjMyMi4yMjJoLTI5MHYtMzIuMjIyaC02NC40NDR2OTYuNjY3aDQxOC44ODl2LTQ1MS4xMTJ6IiBmaWxsPSIjZTZlOWVkIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBkPSJtMTU3LjIwOSAzMzEuNjYzIDQ1LjU2NCA0NS41NjQgMTE5LjQ0OS0xMTkuNDQ5LTExOS40NDgtMTE5LjQ0OS00NS41NjQgNDUuNTY0IDQxLjY2MiA0MS42NjJoLTE5OC44NzJ2NjQuNDQ1aDE5OC44NzJ6IiBmaWxsPSIjZTZlOWVkIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PC9nPjwvc3ZnPg==" />      
      </CLink>
      }
      </>
      }
      
    </MenuSpace>
</Header>
)
}