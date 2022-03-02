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
    width: 8px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #3F3F3F;
    margin: 4px;
    border-radius: 8px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #5F5F5F;
    border-radius: 8px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #8c8c8c;
  }
`;
