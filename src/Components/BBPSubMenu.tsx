import styled from "styled-components";

export const BannerSubMenu = styled.div`
width: 100%;
height: calc(${props => props.theme.headerBarHeight} - 10px);

position: absolute;
top: calc(${props => props.theme.bannerHeight} + ${props => props.theme.headerBarHeight} + 150px);
left: 0;
background-color: white;
display: flex;
align-items: center;
z-index: 2;
`;


export default BannerSubMenu;