import React from "react";
import styled from "styled-components";

const Side = styled.header`
  width: ${props => props.theme.sideBarWidth};
  height: 100%;
  border: 0;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${props => props.theme.cellColor1};
  border-radius: 0px;
  display: flex;
  justify-content: center;
  padding-top: ${props => props.theme.headerBarHeight};
  z-index: 1;
`;

export default () => <Side>
    "Side"
</Side>