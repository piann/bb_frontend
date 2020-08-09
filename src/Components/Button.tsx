import React from "react";
import styled from "styled-components";

const Container = styled.button`
  width: 100%;
  border: 0;
  border-radius: ${props => props.theme.borderRadius};
  color: white;
  font-weight: 600;
  height: 40px;
  background-color: black;
  text-align: center;
  padding: 12px 0px;
  cursor: pointer;
`;

interface Props{
    text?:string;
    onClick?:any;
}

const Button:React.SFC<Props> = ({ text, onClick }) => (
  <Container onClick={onClick}>{text}</Container>
);



export default Button;