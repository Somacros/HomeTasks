import styled from "styled-components";
import * as React from 'react';
import RedDownArrow from './red_down_arrow.png';
import { IOption } from "../../types/html";

const SelectComponent = styled.select`
    padding: 0 1.5em 0 0em;
    background: none;
    border: 0;
    cursor: pointer;
    color: white;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    font-size: 1em;
    width: 100px;

    -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-image: url(${RedDownArrow});
  background-size: auto 20px, auto;
  background-position: right 18px center, left top;
  background-repeat: no-repeat;
`;


interface ISelect {
    options?: string[]
}

interface IDropDown {
    options?: Array<IOption>;
}

export const Select = ({
    options
}: ISelect) => {
    return(
        <SelectComponent>{
            options.map((option) => {
                return(
                    <option>{option}</option>
                )
            })
        }</SelectComponent>
    )
};

export const Dropdown = ({
    options
  }: IDropDown) => {
    const [selectedOption, setSelectedOption] = React.useState(options[0].value);
    return (
        <SelectComponent
          value={selectedOption}
          onChange={e => setSelectedOption(e.target.value)}>
          {options.map(o => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </SelectComponent>
    );
  };