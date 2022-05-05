import styled, { css } from "styled-components";
import { switchProp } from "styled-tools";

const ButtonBase = styled.button<any>`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');
    font-family: 'Roboto', sans-serif;
    font-size: 0.9em;
    font-weight: bolder;
    padding-right: max(3em, 1em);
    padding-left: max(3em, 1em);
    padding-top: 0.6em;
    padding-bottom: 0.6em;
    border-radius: 0.2em;
    border: 0;
    outline: 0;
    text-transform: uppercase;
    cursor: pointer;

    &:hover {
        opacity: 0.9;
    }

    ${switchProp("kind", {
        primary: css`
            background: #F65261;
            color: #FFFFFF;
        `,
        secondary: css`
            background: rgba(85,85,85,.8);
            color: #F65261;
        `,
        altern: css`
            background: #232323;
            border-style: solid;
            border-color: #F65261;
            border-width: 1px;
            color: #F65261;
            padding-right: max(2.7em, 0.8em);
            padding-left: max(2.7em, 0.8em);
            padding-top: 0.45em;
            padding-bottom: 0.5em;
        `
    })}
`;

export default ButtonBase;