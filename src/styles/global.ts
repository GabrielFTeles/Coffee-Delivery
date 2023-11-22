import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
    scrollbar-gutter: stable;

    @media (max-width: 400px) {
      font-size: 55%;
    }
  }

  /* Firefox */
  * {
    scrollbar-width: auto;
    scrollbar-color: #004cff #ffffff;
  }

  /* Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 5px;
  }

  *::-webkit-scrollbar-track {
    background: transparent;
  }

  *::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme["yellow-300"]};
    border-radius: 8px;
    border: 2px solid transparent;
  }

  body {
    -webkit-font-smooothing: antialiased;
    padding-bottom: 12rem;
  }

  body, input, button, textarea {
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    font-weight: 400;
  }

  button {
    cursor: pointer;
  }
`;
