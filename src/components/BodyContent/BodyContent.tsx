import styled from "styled-components";
import * as React from 'react';
import MovieCard from "../MovieCard/MovieCard";
import { IMovie } from "../../types/Movie";

const Wrapper = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@100&display=swap');
    font-family: 'Montserrat', sans-serif;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
`;

interface IBodyContent {
    moviesArray: IMovie[];
    handleMovieClick: (movie:IMovie) => void;
}

const BodyContent = ({
    moviesArray,
    handleMovieClick,
}: IBodyContent) => {
    return (
        <Wrapper>
            {
                moviesArray.map((movie, index, array) => {
                    return(
                        <MovieCard handleMovieClick={handleMovieClick} key={movie.id} movie={movie}></MovieCard>
                    );
                })
            }
        </Wrapper>
    )
}

export default BodyContent;