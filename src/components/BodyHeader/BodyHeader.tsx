import styled from "styled-components";
import * as React from 'react';
import {Select, Dropdown} from '../Select/Select';
import TabNavigator from "../TabNavigator/TabNavigator";
import {IOption} from '../../types/html';

const Label = styled.label`
    color: #A8A8A8;
    font-weight: 400;
    margin-right: 1em;
    display: inline-block;
    text-align: center;
    justify-content: center;
    font-size: 0.8em;
`;

const Wrapper = styled.div`
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    padding: 1em 0;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
`;

const SortWrapper = styled.div`
    margin-left: auto;
    margin-right: 8%;
`;
interface IBodyHeader {
    queryString?: string;
}

const BodyHeader = ({
    queryString
}: IBodyHeader) => {
    const selectOptions:Array<IOption> = [{
        label: "GENRE",
        value: "GENRE"
    },{
        label: "RATING",
        value: "RATING"
    },{
        label: "DATE",
        value: "DATE"
    }]
    return (
        <Wrapper>
            <TabNavigator/>
            <SortWrapper>
                <Label>SORT BY</Label>
                <Dropdown options={selectOptions}/>
            </SortWrapper>
        </Wrapper>
        
    );
}

export default BodyHeader;