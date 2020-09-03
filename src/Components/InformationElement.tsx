import React from "react";
import styled from "styled-components";


export const InformationBox = styled.div`
background-color: white;
display:flex;
flex-direction:column;
box-shadow:0 3px 7px 3px rgba(7, 7, 33, 0.1),0 1px 1px 1px rgba(0, 0, 0, 0.2);
margin-bottom:70px;
`;

export const InformationTitle = styled.div`
background-color:${props => props.theme.headerBarColor};
color:white;
height:70px;
display:flex;
align-items:center;
padding-left:25px;
`;

export const InformationContent = styled.div`
padding-top:45px;
padding-bottom:30px;
padding-left:25px;
padding-right:25px;
display:flex;
flex-direction:column;
.leftAlign{
    justify-content:flex-start;
}
.rightAlign{
    justify-content:flex-end;
}
`;