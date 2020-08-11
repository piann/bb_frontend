import React from "react";
import styled from "styled-components";
import {BodyWrapper, Body} from "./Body";
import { Link } from "react-router-dom";

export const BannerSubMenuStruct = styled.div`
width: 100%;
height: calc(${props => props.theme.headerBarHeight} - 10px);

position: absolute;
top: calc(${props => props.theme.bannerHeight} + ${props => props.theme.headerBarHeight} + 150px);
left: 0;
background-color: white;
z-index: 2;
`;

export const MenuWrapper = styled.div`
    width:100%;
    display: flex;
    align-items: center;
    a {
        color: black;
    }

`


interface MenuChoiceProps{
    companyName?:string;
    menuIdx?:number;
}


export const MenuComponent = styled.div<MenuChoiceProps>`
    height: calc(${props => props.theme.headerBarHeight} - 10px);
    width:120px;
    display:flex;
    justify-content:center;
    align-items:center;
    font-size:16px;
    &:nth-child(${props => props.menuIdx}){
        box-shadow: 0px -4px 0px black inset;
        font-weight:600;
    }
`


const BannerSubMenu:React.SFC<MenuChoiceProps> = ({
    menuIdx,
    companyName
}) => <BannerSubMenuStruct>
<BodyWrapper>
    <Body>
        <MenuWrapper>
            <Link to={"/program"}>
            <MenuComponent menuIdx={menuIdx}>
               Policy
            </MenuComponent>
            </Link>
            <MenuComponent menuIdx={menuIdx}>Notice</MenuComponent>
        </MenuWrapper>
    </Body>
</BodyWrapper>
</BannerSubMenuStruct>;


export default BannerSubMenu;