import * as React from 'react';
import styled from 'styled-components';

const TabHeader = styled.div`
    padding: 0 1em 0.5em 1em;
    color: white;
    text-transform: uppercase;
    cursor: pointer;
    font-size: 0.9em;
    border-style: none none solid none;
    border-color: #424242;

    &:hover {
        opacity: 0.6;
        border-color: #f65261;
    }
`;

const Wrapper = styled.div`
    display:flex;
    flex-flow: row wrap;
`;


const TabNavigator = () => {
    return(
        <Wrapper>
            <TabHeader key={1}>ALL</TabHeader>
            <TabHeader key={2}>DOCUMENTARY</TabHeader>
            <TabHeader key={3}>COMEDY</TabHeader>
            <TabHeader key={4}>HORROR</TabHeader>
            <TabHeader key={5}>CRIME</TabHeader>
        </Wrapper>
    )
};

export default TabNavigator;