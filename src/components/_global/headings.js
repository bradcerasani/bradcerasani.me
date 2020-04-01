import { css } from 'styled-components';

import { font } from '../theme';

const Headings = css`
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
