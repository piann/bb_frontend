import styled from "styled-components";


export const BasicTableBox = styled.div`
display:flex;
flex-direction:column;
border-style:groove;
border-color:${props => props.theme.snowyGrayColor};
border-width:2px;
margin-bottom:50px;
margin-left:8px;
margin-right:8px;
`;

export const BasicTableHead = styled.div`
background-color:${props => props.theme.bgColor};
font-weight:600;
height:60px;
display:flex;
align-items:center;
padding-left:20px;
padding-right:20px;
@media only screen and (max-width: ${props=>props.theme.mobileWidth}) {
    height:50px;
    padding-left:0px;
    padding-right:0px;
}
`;

export const BasicTableContent = styled.div`
border-style:groove;
border-top-color:${props => props.theme.snowyGrayColor};
border-top-width:2px;
height: 60px;
display:flex;
align-items:center;
padding-left:20px;
padding-right:20px;
@media only screen and (max-width: ${props=>props.theme.mobileWidth}) {
    height:100px;
    padding-left:0px;
    padding-right:0px;
}
`