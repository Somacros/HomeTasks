import * as React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import SearchRedIcon from '../../icons/search_red.png';
import { IMovie } from '../../types/Movie';
import { setIsSearching } from '../../store/movie/action';

const MovieDetailsDiv = styled.div`
    padding 1em 0em 2em 6em;
    background-color: #232323;
    display: flex;
    flex-flow: row wrap;
    font-family: 'Montserrat', sans-serif;
`;

const DetailsRoW = styled.div`
    display: flex;
    flex-flow: row wrap;
    width: 50%;
    margin-left: 2em;
    align-items: center;
`;

const SearchIcon = styled.img.attrs({
    src: SearchRedIcon,
})`
    width: max(3%, 10px);
    height: auto;
    position: absolute;
    top: 1%;
    left: 90%;

    &:hover {
        cursor: pointer;
        opacity: 0.8;
    }
`;

const MoviePicture = styled.img`
    width: 100%;
    height: auto;

    &:hover {
        cursor: pointer;
    }
`;

const DetailsTitle = styled.h3`
    color: white;
    font-family: 'Montserrat', sans-serif;
    font-weight: 100;
    font-size: 2em;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin: 0;
`;

const MovieRate = styled.span`
    color: white;
    text-align: center;
    font-size: 1em;
    font-weight: 400;
    border: 1px solid #FFFFFF;
    border-radius: 50%;
    width: 3em;
    line-height: 3em;
    margin: 0em 1em;
    
`;

const MovieCategories = styled.p`
    color: #919191;
    width: 100%;
    margin: 0;
`;

const SecondaryText = styled.h5`
    color: #F65261;
    font-size: 1.5em;
    font-weight: 100;
    font-family: 'Montserrat', sans-serif;
    margin: 30px 30px 30px 0px;
`;

const MovieDetailsText = styled.p`
    color: #919191;
    font-size: 1em;
    margin: 0;
    font-family: 'Montserrat', sans-serif;
`;

interface TMovieDetails {
    movie: IMovie;
}

const MovieDetails = ({
    movie,
}: TMovieDetails) => {
    const { title, rate, categories, year, duration, details, posterLink } = movie;
    const dispatch = useDispatch();
    return (
        <MovieDetailsDiv>
            <SearchIcon onClick={() => dispatch(setIsSearching(true))}/>
            <div style={{width: "20%"}}>
                <MoviePicture src={posterLink}/>
            </div>
            <DetailsRoW>
                <DetailsTitle>{title}</DetailsTitle>
                <MovieRate>{rate}</MovieRate>
                <MovieCategories>{categories.length > 2 ? categories.join(", ") : categories.join(" & ")}</MovieCategories>
                <SecondaryText>{year}</SecondaryText>
                <SecondaryText>{duration}</SecondaryText>
                <MovieDetailsText>{details}</MovieDetailsText>
            </DetailsRoW>
        </MovieDetailsDiv>
    );
}


export default MovieDetails;