import React from "react";
import styled from "styled-components";

interface StyledProps{
    textAreaWidth?:string;
    textAreaHeight?:string;
}

const TextAreaContainer= styled.textarea<StyledProps>`
  border-color: gray;
  border-width: 1px;
  border-radius: 3px;
  background-color: white;
  font-size: 12px;
  padding: 10px 15px;
  margin:10px 0px;
  box-shadow: inset 0px 0px 1.5px 1.5px rgba(0, 0, 0, 0.1);
  width:${props => props.textAreaWidth};
  height:${props => props.textAreaHeight};
  word-break: keep-all;
  letter-spacing: 0.08em;
  line-height: 2em;
  display: block;
`;

interface Props{
    placeholder?:string;
    required?:boolean;
    value?:string;
    onChange?:any;
    type?:string;
    className?:string;
    textAreaWidth?:string;
    textAreaHeight?:string;
    maxLength?:number
    rows?:number
}

const TextArea:React.SFC<Props> = ({
  placeholder,
  required = true,
  value,
  onChange,
  className,
  textAreaWidth,
  textAreaHeight,
  maxLength,
  rows
}) => (
  <TextAreaContainer
    className={className}
    placeholder={placeholder}
    required={required}
    value={value}
    onChange={onChange}
    textAreaWidth={textAreaWidth}
    textAreaHeight={textAreaHeight}
    maxLength={maxLength}
    rows={rows}

  />
);


export default TextArea;