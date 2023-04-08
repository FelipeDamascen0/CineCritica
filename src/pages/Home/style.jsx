import styled, { createGlobalStyle } from "styled-components";


export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    color: #fff;
    background: #222;
    border: box-sizing;
    font-family: 'Barlow', sans-serif;
    overflow-x: hidden;
  }
`;

export const Title = styled.div`
  color: #222;
  font-size: 22em;
  background-color: #222;
  
`