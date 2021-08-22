import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html {
  overflow-y: hidden;
}

html,
body {
  padding: 0;
  margin: 0;
  font-family: 'Poppins', sans-serif;
  height: 100%;
  width: 100%;
  overflow-x: hidden;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
  margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    vertical-align: baseline;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

h1, h2, h3, h4, h5, h6 {
  font-size: revert;
  font-weight: revert;
}


`;




export default GlobalStyle;
