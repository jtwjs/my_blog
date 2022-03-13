import { Global, css, Theme } from "@emotion/react";

const style = (theme: Theme) => css`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: ${theme.color.text_base};
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: "Noto Sans KR", sans-serif;
  }

  input,
  button {
    background-color: transparent;
    border: none;
    outline: none;
  }

  button {
    font-family: "Noto Sans KR", sans-serif;
    cursor: pointer;
  }

  ol,
  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  [tabindex]:focus-visible,
  label:focus-visible,
  button:focus-visible,
  input:focus-visible {
    outline: none;
    box-shadow: 0 0 0 2px rgba(106, 173, 164, 0.65);
  }

  .a11y {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`;

const globalStyles = <Global styles={style} />;

export default globalStyles;
