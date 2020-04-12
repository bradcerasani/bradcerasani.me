import { css } from 'styled-components';

import { breakpoint, color, font } from '../theme';

const Headings = css`
  h1 {
    align-self: flex-end;
    font-family: ${font.family.serif};
    font-size: 2.75rem;
    font-weight: 700;
    line-height: 1.05;
    margin: 0;
    position: relative;
    text-shadow: none;

    @media (min-width: ${breakpoint.sm}) {
      font-size: 3.25rem;
    }

    @media (min-width: ${breakpoint.md}) {
      font-size: 4rem;
      line-height: 1.1;
      margin-left: -4rem;
    }
  }

  h2 {
    font-family: ${font.family.serif};
    font-size: 2.5rem;
    font-weight: 500;
    line-height: 1.1;
    margin-bottom: 0.5rem;
    margin-top: 0;
    padding-top: 1rem;
  }

  h3 {
    font-size: 1.5rem;
    font-weight: 400;
    letter-spacing: -0.025em;
    line-height: 1.25;
    margin-bottom: 0.5rem;
    margin-top: 0;

    @media (min-width: ${breakpoint.sm}) {
      font-size: 2.2rem;
    }
  }

  h4 {
    color: ${color.grey.dark};
    font-size: 1rem;
    font-weight: 400;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }

  h6 {
    font-family: ${font.family.serif};
    font-size: 1.5rem;
    font-weight: 500;
    letter-spacing: 0;
    margin-bottom: 1rem;
    margin-top: 0;

    @media (min-width: ${breakpoint.sm}) {
      font-size: 1.25rem;
    }
  }
`;

export default Headings;
