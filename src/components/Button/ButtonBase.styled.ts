import styled from "styled-components";

const ButtonBase = styled.button`
    padding-right: 3em;
    padding-left: 3em;
    padding-top: 0.6em;
    padding-bottom: 0.6em;
    border-radius: 0.2em;
    border-width: thin;
    border-color: white;
    color: ${props => props.color};
    font-size: 0.9em;
    font-family: Arial;
    background: #F65261;
    text-transform: uppercase;
    cursor: pointer;
`;

export default ButtonBase;