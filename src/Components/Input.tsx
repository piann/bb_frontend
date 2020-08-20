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
  min-height: 40px;
  font-size: 12px;
  padding: 0px 15px;
  margin:5px 0px;
  box-shadow: inset 0px 0px 1.5px 1.5px rgba(0, 0, 0, 0.1);
  width:${props => props.inputWidth};
  word-spacing: 0.1em;
  letter-spacing: 0.08em;
`;

interface Props{
    placeholder?:string;
    required?:boolean;
    value?:string;
    onChange?:any;
    onKeyDown?:any;
    type?:string;
    className?:string;
    inputWidth?:string;
    maxLength?:number;

}

const Input:React.SFC<Props> = ({
  placeholder,
  required = true,
  value,
  onChange,
  onKeyDown,
  type = "text",
  className,
  inputWidth,
  maxLength,
}) => (
  <InputContainer
    className={className}
    placeholder={placeholder}
    required={required}
    value={value}
    onChange={onChange}
    onKeyDown={onKeyDown}
    type={type}
    inputWidth={inputWidth}
    maxLength={maxLength}
  />
);


export default Input;