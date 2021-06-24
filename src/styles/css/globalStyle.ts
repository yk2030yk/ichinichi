import { css } from '@emotion/react';

import { resetCss } from './reset';

export const globalStyle = css`
  ${resetCss}

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body,
  #app,
  #root,
  #__next {
    width: 100%;
    height: 100vh;
    background-color: #000;
    font-size: 12px;
  }

  a {
    text-decoration: none;
  }
`;
