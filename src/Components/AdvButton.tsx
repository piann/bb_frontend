import React from "react";
import styled from "styled-components";


interface WidthProps{
    width?:string;
}

const StyledButton = styled.button<WidthProps>`
  background-color: rgba(0, 0, 0, 0);
  border: none;
  font-family: 'Source Serif Pro', serif;
  font-weight:300;
  width:${props=>(props.width?props.width:"min-width")};
  cursor: pointer;
  display: flex;
  justify-content:space-around;
  align-items:center;
  line-height: 1em;
  padding-left:30px;
  padding-right:30px;
  padding-top:10px;
  padding-bottom:10px;
  outline: none;
  position: relative;
  font-weight: 700;
  letter-spacing:0.05em;
  @media only screen and (max-width: ${props=>props.theme.mobileWidth}) {
        font-size: 4vw;
  }
&&:before,
&&:after {
  border-color: transparent;
  -webkit-transition: all 0.25s;
  transition: all 0.25s;
  border-style: solid;
  border-width: 0;
  content: "";
  height: 24px;
  position: absolute;
  width: 24px;
}
&&:before {
  border-color: #5B48CE;
  border-right-width: 2px;
  border-top-width: 2px;
  right: -7px;
  top: -7px;
}
&&:after {
  border-bottom-width: 2px;
  border-color: #5B48CE;
  border-left-width: 2px;
  bottom: -7px;
  left: -7px;
}
&&:hover{
  color:black;
}
&&:hover:before,
&&:hover:after{
  height: 100%;
  width: 100%;
}
`;

export default ({
    text,
    clickFunc,
    width,
    disabled
}:any) => {
  
    return(
    <StyledButton onClick={clickFunc} disabled={disabled} width={width}>
        <div>{text}</div>
    </StyledButton>
    )

}