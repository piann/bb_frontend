import React from "react";
import styled from "styled-components";

interface StyledProps{
    inputWidth?:string;
}

const InputContainer= styled.input<StyledProps>`
  border-color: gray;
  border-width: 1px;
  border-radius: 3px;
  background-color: white;
  height: 40px;
  font-size: 12px;
  padding: 0px 15px;
  margin:10px;
  box-shadow: inset 0px 0px 1.5px 1.5px rgba(0, 0, 0, 0.1);
  width:${props => props.inputWidth}
`;

interface Props{
    placeholder?:string;
    required?:boolean;
    value?:string;
    onChange?:any;
    type?:string;
    className?:string;
    inputWidth?:string;
}

const Input:React.SFC<Props> = ({
  placeholder,
  required = true,
  value,
  onChange,
  type = "text",
  className,
  inputWidth
}) => (
  <InputContainer
    className={className}
    placeholder={placeholder}
    required={required}
    value={value}
    onChange={onChange}
    type={type}
    inputWidth={inputWidth}

  />
);


export default Input;