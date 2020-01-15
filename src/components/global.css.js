import { createGlobalStyle } from 'styled-components';
import modernNormalize from 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
  ${modernNormalize}

  body {
    background-color: hsl(35, 10%, 86%);
    background-color: ${(props) =>
      props.backgroundColor || 'hsl(35, 10%, 86%)'};
    text-rendering: optimizeLegibility;
    transition-property: background-color;
    transition-timing-function: ease-in-out;
    transition-duration: 400ms;
    font-size: 20px;
  }

  section {
    color: hsla(0, 0%, 20%, 1);
    font-size: 20px;
    line-height: 1.4;
    margin-bottom: 64px;
  }

  p {
    margin-bottom: 1.5rem;
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

  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
}
`;
