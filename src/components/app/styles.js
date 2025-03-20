import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

*,
*::before,
*::after {
  box-sizing: border-box;
}

body,
html {
  height: 100%;
  padding: 0;
  margin: 0;
}

  body {
    position: relative;
    min-height: 100%;
    font-family: ${(props) => props.theme.fontFamily};
    font-size: ${(props) => props.theme.fontSizeDefault};
    line-height: 27px;
    font-weight: 400;
    color: ${(props) => props.theme.colorBlackForText};
  }

  #root {
    position: relative;
    min-height: 100%;
    min-width: ${(props) => props.theme.mobileWidth};
    display: flex;
    flex-direction: column;
    background-image: linear-gradient(180deg, #f0e9e0, #ccb79f);
    overflow: hidden;
  }
`;
