import { createGlobalStyle } from 'styled-components';
import modernNormalize from 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
  ${modernNormalize}

  body {
    ${'' /* background-color: #fafafa; */}
    ${'' /* background-color: #EBEBE8; */}
    ${'' /* background-color: #CDBDA5; */}
    ${'' /* background-color: #e5dccf; */}
    background-color: HSLA(35, 10%, 86%, 1.00);
    text-rendering: optimizeLegibility;
  }

  section {
    color: hsla(0, 0%, 20%, 1);
    font-size: 20px;
    line-height: 1.4;
    margin-bottom: 64px;
  }

  p {
    margin-bottom: 24px;
    margin-top: 0;
  }

  a {
    color: inherit;
    text-decoration-color: hsla(0,0%,36%,1);

    &:hover {
      color: black;
      text-decoration-color: black;
    }
  }
`;
