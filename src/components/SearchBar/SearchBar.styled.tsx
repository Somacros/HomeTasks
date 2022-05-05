import * as React from "react";
import SearchBarBase from './SearchBarBase.styled';


interface IInput {
    color?: string; // two styling options (you can create as many as you want)
    placeholder?: string;
    onChange: (event: any) => void;
}

export const SearchBar = ({
    color = "white",
    placeholder,
    onChange,
}: IInput) => {
    return (
        <SearchBarBase onChange={(event)=> onChange(event)} placeholder={placeholder} color={color}></SearchBarBase>
    )
}

export default SearchBar;