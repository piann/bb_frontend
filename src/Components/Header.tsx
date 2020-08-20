import React from "react";
import styled from "styled-components";
import mainLogo from "../images/zerowhale_white.png";
import { Link } from "react-router-dom"

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

export default () => <Header>
    <Link to="/">
      <LogoSpace src={mainLogo}/>
    </Link>
    <div>menu</div>
</Header>