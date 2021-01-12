import styled from 'styled-components';

import { color, breakpoint } from 'src/components/theme';

export const Note = styled.div`
  background-color: ${color.highlight};
  border-color: currentColor;
  border-style: double;
  border-width: 6px;
  font-size: 0.9rem;
  font-style: italic;
  line-height: 1.5;
  margin-bottom: 2rem;
  padding: 1.5rem;

  p {
    /* prevents :first-of-type treatment on project-detail */
    font: inherit !important;
    margin-bottom: 0;
  }

  @media (min-width: ${breakpoint.md}) {
    font-size: 0.8rem;
    margin-bottom: 3rem;
    margin-top: 3rem;
  }
`;
