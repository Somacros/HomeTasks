import styled from "styled-components";
import * as React from "react";

const FlexDiv = styled.div`
    display: flex;
`;

interface IFlexContainer {
    children: React.ReactNode
}

const FlexContainer = ({
    children
}: IFlexContainer) => {
    return(
        <FlexDiv>{children}</FlexDiv>
    )
}


export default FlexContainer;