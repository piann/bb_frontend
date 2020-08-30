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


interface MenuProps{
    menuIdx?:number;
}


export const MenuComponent = styled.div<MenuProps>`
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
`;

const SLink = styled(Link)`
    width:100%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
`;

interface MenuChoiceProps{
    nameId:string;
    menuIdx?:number;
}

const BannerSubMenu:React.SFC<MenuChoiceProps> = ({
    menuIdx,
    nameId
}) => <BannerSubMenuStruct>
<BodyWrapper>
    <Body>
        <MenuWrapper>
            <MenuComponent menuIdx={menuIdx}>
            <SLink to={"/"+nameId}>
               {"Policy"}
            </SLink >
            </MenuComponent>
            <MenuComponent menuIdx={menuIdx}>
            <SLink to={"/"+nameId+"/notice"}>
                {"Notice"}
            </SLink>
            </MenuComponent>
        </MenuWrapper>
    </Body>
</BodyWrapper>
</BannerSubMenuStruct>;


export default BannerSubMenu;