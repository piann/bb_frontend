import React from "react";
import styled from "styled-components";

interface WidthProps{
  width?:string;
}

const Container = styled.button<WidthProps>`
  width: ${props => props.width? props.width :"100%"};
  border: 0;
  border-radius: ${props => props.theme.borderRadius};
  color: white;
  font-weight: 600;
  height: 40px;
  background-color: black;
  text-align: center;
  padding: 12px 0px;
  cursor: pointer;

  &:disabled{
    background-color: #cccccc;
    cursor: not-allowed! important;
  }


`;

interface Props{
    text?:string;
    onClick?:any;
    width?:string;
    disabled?:boolean
}

const Button:React.SFC<Props> = ({ 
  text,
  onClick,
  width,
  disabled
 }) => {
   let dValue = false;
   if(disabled===true){
     dValue = true;
   }
   return <Container disabled={dValue} onClick={onClick} width={width} >{text}</Container>
   
}



export default Button;