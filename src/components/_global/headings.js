import { css } from 'styled-components';

import { font, breakpoints } from '../theme';

const Headings = css`
  h1 {
    align-self: flex-end;
    font-family: ${font.family.serif};
    font-size: 3rem;
    font-weight: 600;
    line-height: 1.1;
    margin: 0;
    position: relative;
    text-shadow: none;

    @media (min-width: ${breakpoints.sm}) {
      font-size: 4rem;
      margin-left: -4rem;
    }
  }

  h2 {
    font-family: ${font.family.serif};
    font-size: 2.5rem;
    font-weight: 600;
    line-height: 1.1;
    margin-bottom: 0.5rem;
    margin-top: 0;
    padding-top: 1rem;
  }

  h3 {
    font-size: 2rem;
    font-weight: 400;
    letter-spacing: -0.05em;
    line-height: 1.25;
    margin-bottom: 0.5rem;
    margin-top: 0;
  }

  h4 {
    color: hsl(0, 0%, 30%);
    font-size: 1rem;
    font-weight: 400;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }

  h6 {
    font-family: ${font.family.serif};
    font-size: 1.15rem;
    font-weight: 600;
    letter-spacing: 0;
    margin-bottom: 1rem;
    margin-top: 0;
  }
`;

export default Headings;
