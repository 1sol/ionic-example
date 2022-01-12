import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
    ${normalize}
      html {
        font-size: 100%;
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
        -webkit-font-smoothing: antialiased;
      }
      
      body {
        color: #282828;
        font: 1.2em/1.3em "Noto Sans KR", sans-serif !important;
        overflow-x: hidden;
      }

      main {
        height: 100%;
      }
      
      legend,
      .hidden {
        position: absolute;
        clip: rect(0, 0, 0, 0);
        width: 1px;
        height: 1px;
        margin: -1px;
        overflow: hidden;
      }
      
      caption {
        position: relative;
        clip: rect(0 0 0 0);
        width: 1px;
        height: 1px;
        margin: -1px;
        overflow: hidden;
      }
      
      a {
        color: #282828;
        text-decoration: none;
      }
      
      * {
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
      }
      
      .icon,
      i[class^="icon-"] {
        display: inline-block;
        span {
          position: absolute;
          clip: rect(0, 0, 0, 0);
          width: 1px;
          height: 1px;
          margin: -1px;
          overflow: hidden;
        }
      }
      
      button,
      .button {
        border: 0;
        border-color: transparent;
        background-color: transparent;
        cursor: pointer;
        font-family: "Noto Sans KR", sans-serif;
        padding: 0;
        &:focus {
          outline: 0;
        }
      }
`;
