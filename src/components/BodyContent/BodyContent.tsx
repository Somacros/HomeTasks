import styled from "styled-components";
import * as React from 'react';
import MovieCard from "../MovieCard/MovieCard";
import { IMovie } from "../../types/Movie";
import { useSelector } from "react-redux";
import { selectMoviesArray } from "../../store/movie/selector";

const Wrapper = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap');
    font-family: 'Montserrat', sans-serif;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
`;

interface IBodyContent {
}

const BodyContent = ({
}: IBodyContent) => {

    const moviesList = useSelector(selectMoviesArray);

    let Body;

    if(moviesList instanceof Array) {
        Body = moviesList.map((movie, index, array) => {
            return(
                <MovieCard key={movie.id} movie={movie}></MovieCard>
            );
        })
    } else {
        Body = <></>
    }

    return (
        <Wrapper>
            {
                Body
            }
        </Wrapper>
    )
}

export default BodyContent;