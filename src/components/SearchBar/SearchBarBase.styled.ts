import styled from "styled-components";

const InputBase = styled.input`
    @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap');
    font-family: 'Roboto', 'sans-serif';
    cursor: text;
    font-size: 1em;
    background: rgba(35, 35, 35, .8);
    max-width: 100%;
    width: auto;
    padding: 0.5em 1em 0.5em 2em;
    margin: 8px 0;
    box-sizing: border-box;
    margin: 0px 5px 0px 0px;
    border: 0;
    outline: 0;
    color: ${props=> props.color || 'white'};
    flex: 1;
`;

export default InputBase;