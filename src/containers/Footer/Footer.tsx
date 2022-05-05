import styled from "styled-components";
import * as React from 'react';
import netflixRoulette from '../../components/Header/netflixRoulette.png'

const FooterDiv = styled.div`
    position: fixed;
    bottom: 0%;
    width: 100%;
    background: #424242;
    height: 4%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Logo = styled.img.attrs({
    src: `${netflixRoulette}`
})`
    float: bottom;
    height: 50%;
    width: auto;
`;

const Footer = () => {
    return(

        <FooterDiv>
            <Logo/>
        </FooterDiv>

    );
}

export default Footer;