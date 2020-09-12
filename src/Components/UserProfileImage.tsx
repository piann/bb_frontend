import React from "react";
import styled from "styled-components";
import grayProfile from "../images/grayProfile.png";

interface SizeProps{
    width?:string;
    height?:string;
}

const ProfileImg = styled.img<SizeProps>`
  height:${props=>props.theme.height};
  width:${props=>props.theme.width};
  border-radius:50%;
  background-color:white;
`;


interface UserProfileProps{
    width?:string;
    height?:string;
    src:string|null|undefined;
}

const UserProfileImg:React.SFC<UserProfileProps> = ({
src,
width,
height,
}:any) => {

let checkedSrc:any = undefined;
if(src===null || src===undefined){
    checkedSrc = grayProfile;
} else {
    checkedSrc = src;
}

return <ProfileImg
    src={checkedSrc}
    width={width}
    height={height}
/>

}

export default UserProfileImg;