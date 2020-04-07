import { createGlobalStyle } from 'styled-components';

import ModernNormalize from './modern-normalize';
import Animations from './animations';
import Elements from './elements';
import Footnotes from './footnotes';
import Headings from './headings';

export const GlobalStyle = createGlobalStyle`
  ${ModernNormalize}
  ${Animations}
  ${Elements}
  ${Footnotes}
  ${Headings}
`;
