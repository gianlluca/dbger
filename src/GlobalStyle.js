import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
    -webkit-touch-callout: none;  /* iOS Safari */
    -webkit-user-select: none;    /* Safari */
    -khtml-user-select: none;     /* Konqueror HTML */
    -moz-user-select: none;       /* Old versions of Firefox */
    -ms-user-select: none;        /* Internet Explorer/Edge */
    user-select: none;            /* Non-prefixed version, currently
                                    supported by Chrome, Edge, Opera and Firefox */
  }

  *:focus{
    outline: none;
  }

  html{
    @media (max-width: 1440px){
      font-size: 93.75%;
    }
    @media (max-width: 1080px){
      font-size: 87.5%;
    }
    @media (max-width: 720px){
      font-size: 81.25%;
    }
    @media (max-width: 360px){
      font-size: 75%;
    }
  }

  body{
    background: #181818;
    -webkit-font-smoothing: antialiased;
    color: #a2a2a2;
    overflow: hidden;
  }

  button{
    cursor: pointer;
  }

  #root{
    height: 100vh;
    display: flex;
    flex-flow: column nowrap;
  }

  .noselect {
      -webkit-touch-callout: none;  /* iOS Safari */
      -webkit-user-select: none;    /* Safari */
      -khtml-user-select: none;     /* Konqueror HTML */
      -moz-user-select: none;       /* Old versions of Firefox */
      -ms-user-select: none;        /* Internet Explorer/Edge */
      user-select: none;            /* Non-prefixed version, currently
                                      supported by Chrome, Edge, Opera and Firefox */
  }

  /* ScrollBar */
  ::-webkit-scrollbar {
    width: 0.5rem;
    height: 0.5rem;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #3F3F3F;
    margin: 0.25rem;
    border-radius: 0.5rem;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #5F5F5F;
    border-radius: 0.5rem;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #8c8c8c;
  }
`;
