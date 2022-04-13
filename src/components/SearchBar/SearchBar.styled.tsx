import * as React from "react";
import SearchBarBase from './SearchBarBase.styled';


interface IInput {
    color?: string; // two styling options (you can create as many as you want)
    placeholder?: string;
}

export const SearchBar = ({
    color = "white",
    placeholder,
}: IInput) => {
    return (
        <SearchBarBase color={color}></SearchBarBase>
    )
}

export default SearchBar;