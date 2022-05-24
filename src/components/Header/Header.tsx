import * as React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { useGetMovies } from '../../hooks/useGetMovies';
import { setIsAddingMovie } from '../../store/movie/action';
import Button from '../Button/Button.styled';
import SearchBar from '../SearchBar/SearchBar.styled';
import Title from '../Title/Title.styled';
import BackImage from './back.jpg';
import netflixRoulette from './netflixRoulette.png';

const Wrapper = styled.div`
    background: linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.6));
    padding-bottom: 50px;
    padding-left: 3em;

`;

const Background = styled.div`
    background: white;
    background-image: url(${BackImage});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
`

const TopHeader = styled.div`
    text-align: right;
    align-items: end;
    margin-right: 2.5em;
    padding-top: 1em;
`;

const SearchWrapper = styled.div`
    display: flex;
    flex-flow: row wrap;
    align-items: end;
    margin-right: 20%;
`;

const Logo = styled.img.attrs({
    src: `${netflixRoulette}`
})`
    max-width: 12%;
    position: absolute;
    margin-top: 1em;
    margin-left: 2em;
`;

const Header = () => {

    const [setMoviesArray] = useGetMovies();
    const dispatch = useDispatch();

    const handleButtonClick = () => {
        dispatch(setIsAddingMovie(true));
    }

    const handleSearchClick = () => {
        setMoviesArray();
    }

    return (
        <div>
            <Background>
                <Logo />
                <Wrapper>
                    <TopHeader>
                        <Button 
                        onClick={handleButtonClick}
                        kind="secondary">
                            + ADD MOVIE
                        </Button>
                    </TopHeader>
                    <Title 
                    color="#FFFFFF">
                        FIND YOUR MOVIE
                    </Title>
                    <SearchWrapper>
                        <SearchBar placeholder='What do you want to watch?' />
                        <Button onClick={handleSearchClick} kind="primary">
                            SEARCH
                        </Button>
                    </SearchWrapper>
                </Wrapper>
            </Background>
        </div>
    );
}

export default Header;
