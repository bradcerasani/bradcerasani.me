import styled from 'styled-components';

import { color, breakpoint } from '../theme';

export const Note = styled.div`
  background-color: ${color.highlight};
  border-color: currentColor;
  border-style: double;
  border-width: 6px;
  font-size: 0.9rem;
  font-style: italic;
  line-height: 1.5;
  margin-bottom: 3rem;
  margin-top: 3rem;
  padding: 1.5rem;

  p {
    margin-bottom: 0;
  }

  @media (min-width: ${breakpoint.md}) {
    font-size: 0.8rem;
  }
`;
