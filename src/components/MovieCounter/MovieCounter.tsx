import styled from "styled-components";
import * as React from 'react';

const MovieCounterText = styled.p`
    color: white;
    font-family: 'Roboto', sans-serif;
    font-size: 115%;
`;

interface IMovieCounter {
    count: string;
}

const MovieCounter = ({
    count
}: IMovieCounter) => {
    return(
        <MovieCounterText><b>{count}</b> movies found</MovieCounterText>
    )
}

export default MovieCounter;