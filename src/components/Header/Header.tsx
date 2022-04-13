import * as React from 'react';
import styled from 'styled-components';
import Button from '../Button/Button.styled';
import SearchBar from '../SearchBar/SearchBar.styled';
import Title from '../Title/Title.styled';

const Wrapper = styled.div`
    background: white;
    margin-left: 2em;
`;

const TopHeader = styled.div`
    text-align: right;
    margin-right: 3em;
`;

const Logo = styled.span`
    line-height: 20px;
    width: 18px;
    font-size: 0.9em;
    font-family: Arial;
    margin-top: 1px;
    margin-right: 2px;
    position:absolute;
    top: 1em;
    left: 3em;
`;

const Header = () => {
    return (
        <div>
            <Wrapper>
                <TopHeader>
                    <Logo>netflixroulette</Logo>
                    <Button>+ ADD MOVIE</Button>
                </TopHeader>
                <Title color="#F65261">FIND YOUR MOVIE</Title>
                <SearchBar />
                <Button>SEARCH</Button>
            </Wrapper>
        </div>
    );
}

export default Header;
