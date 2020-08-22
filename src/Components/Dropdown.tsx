import React from "react";
import Select from 'react-select';
import styled from "styled-components";

const StyledSelect = styled(Select)`
  .Select__control {
    height: 40px;
    width: 100%;
    border: 1px solid #a1a1a1;
    border-radius: 0;
    cursor: pointer;
  }

  .Select__control--is-focused {
    box-shadow: 0 0 0 1px black;
    border-color:${props => props.theme.darkGrayColor};
  }
  .Select__control:hover {
    box-shadow: 0 0 0 1px black;
    border-color:${props => props.theme.darkGrayColor};
  }

  .Select__option--is-focused {
    background-color:${props => props.theme.normalGrayColor};
    color:white
  }
  .Select__option--is-selected {
    background-color:${props => props.theme.darkGrayColor};
    color:white
  }
  .Select__option:active {
    background-color:${props => props.theme.darkGrayColor};
    color:white
  }
`;

interface OptionProps{
    value:number|string;
    label:string;
}

interface GroupedOptionProps{
    label:string;
    options:OptionProps;
}

interface Props{
    defaultValue?:OptionProps|GroupedOptionProps;
    options?:[OptionProps|GroupedOptionProps];
    onChange?:any;
}

const Dropdown:React.SFC<Props> = ({
    defaultValue,
    options,
    onChange
}) => (
    <StyledSelect
      defaultValue={defaultValue}
      classNamePrefix="Select"
      options={options}
      onChange={onChange}
    />
  );



export default Dropdown;