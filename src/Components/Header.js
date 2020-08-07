import React from "react";
import styled from "styled-components";

const Header = styled.header`
  width: 100%;
  height: ${props => props.theme.headerBarHeight};
  border: 0;
  position: fixed;
  top: 0;
  left: 0;
  background-color: ${props => props.theme.headerBarColor};
  border-radius: 0px;
  border-bottom: solid ${props => props.theme.borderColor};
  border-width: 1px;
  display: flex;
  align-items: center;
  z-index: 2;
`;

export default () => <Header>
    "Header"
</Header>