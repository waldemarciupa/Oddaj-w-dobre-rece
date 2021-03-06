import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    *, *::before, *::after {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale; 
        margin: 0;
        padding: 0;
    }

    /* happy rems */

    html {
        font-size: 62.5%;
        color: #3C3C3C;
        font-weight: 400;
        scroll-behavior: smooth;
    }

    body {
        font-size: 1.6rem;
        font-family: 'Open Sans', sans-serif;
    }

    li {
        list-style: none;
    }

`;

export default GlobalStyle;