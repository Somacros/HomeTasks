import styled from "styled-components";
import * as React from 'react';
import { IMovie } from "../../types/Movie";
import { useDispatch } from "react-redux";
import { setCurrentMovie as storeSetCurrentMovie } from "../../store/movie/action";
import { useHistory } from "react-router-dom";

const Wrapper = styled.div`
    width: 25%;
    margin: 1em 4em 1em 0;
`;

const FlexContainer = styled.div`
    display: flex;
    margin-bottom: 0;
    justify-content: center;
`;

const ImageContainer = styled.div`
    display: inline-block;
    position: relative;

    a {
        
    }
`;

const Year = styled.p`
    font-size: 0.8em;
    font-weight: bolder;
    border-style: solid;
    border-color: #5C5C5C;
    border-radius: 5px;
    border-width: 1px;
    color: #BDBDBD;
    width: auto;
    padding: 0.2em 0.5em;

    mix-blend-mode: normal;
    opacity: 0.5;
    border: 1px solid #979797;
    box-sizing: border-box;
    border-radius: 4px;
`;

const MoviePicture = styled.img`
    width: 100%;
    height: auto;

    &:hover {
        cursor: pointer;
    }
`;

const MovieTitle = styled.p`
    color: #BDBDBD;
    font-size: 15px;
    font-weight: 500;
    font-style: normal;
    mix-blend-mode: normal;
    width: 80%;
`;

const MovieCategories = styled.p`
    color: #919191;
    font-size: 0.7em;
    font-weight: bolder;
    margin-top: 0px;
`;

const ActionsButton = styled.a`
    
    font-size: 20px;
    font-weight: thin;
    position: absolute;
    text-transform: uppercase;
    text-align: center;
    float: right;
    top: 1%;
    right: 2%;
    background-color: rgba(35, 35, 35, 0.7);
    border: 0;
    aspect-ratio: 1;
    border-radius: 50%;
    color: white;
    padding: 0.2em 0.35em;

    &:hover {
        cursor: pointer;
    }
`;

interface IMovieCard {
    movie: IMovie;
}

const MovieCard = ({
    movie,
}: IMovieCard) => {
    const { categories, ...rest } = movie;
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(storeSetCurrentMovie(movie));
        //history(`/search?id=${movie.id}&title=${movie.title}`);
    }

    return (
        <Wrapper onClick={handleClick}>
            <ImageContainer>
                <ActionsButton>&#xFE19;</ActionsButton>
                <MoviePicture src={movie.posterLink} alt="movie" />
            </ImageContainer>
            <FlexContainer>
                <MovieTitle>{movie.title}</MovieTitle>
                <Year>{movie.year}</Year>
            </FlexContainer>
            <MovieCategories>{categories.length > 2 ? categories.join(", ") : categories.join(" & ")}</MovieCategories>
        </Wrapper>
    );
}

export default MovieCard;