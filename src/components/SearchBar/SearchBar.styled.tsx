import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useGetMovies } from "../../hooks/useGetMovies";
import { setSearchString } from "../../store/query/action";
import { selectSearchString } from "../../store/query/selector";
import SearchBarBase from './SearchBarBase.styled';


interface IInput {
    color?: string; // two styling options (you can create as many as you want)
    placeholder?: string;
}

export const SearchBar = ({
    color = "white",
    placeholder,
}: IInput) => {

    const dispatch = useDispatch();
    const [setMoviesArray] = useGetMovies();


    return (
        <SearchBarBase onChange={(event: React.ChangeEvent<HTMLInputElement>)=> dispatch(setSearchString(event.target.value))} placeholder={placeholder} color={color}/>
    )
}

export default SearchBar;