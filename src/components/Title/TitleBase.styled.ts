import styled from "styled-components";

const TitleBase = styled.h1`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap');
  font-family: 'Roboto', sans-serif;
  color: ${props => props.color};
`;

export default TitleBase;