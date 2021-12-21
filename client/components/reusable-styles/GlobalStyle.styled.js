import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* http://meyerweb.com/eric/tools/css/reset/
    v2.0 | 20110126
    License: none (public domain)
  */

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    // font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /* App Styles Below */

  :root {
    --black: rgb(40, 40, 40);
    --yellow: rgb(255, 227, 105);
    --light-yellow: rgb(255, 237, 158);
    --grey: rgb(200, 200, 200);
  }

  @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

  * {
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    color: var(--black);
  }

  html {
    height: 100vh;
  }

  body {
    height: 100vh;
  }

  #root {
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;

    > * {
      width: 100%;
      // max-width: 1400px;
    }
  }
`;

export default GlobalStyle;
