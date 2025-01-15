// src/styles/GlobalStyles.js


import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  
  body {
    font-family: 'Arial', sans-serif;
    background-color: #fff7f8;
    color: #333;
    line-height: 1.6;
    text-align: center;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
  }
`;

export default GlobalStyles;
