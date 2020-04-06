import { createGlobalStyle } from 'styled-components';

import ModernNormalize from './modern-normalize';
import Animations from './animations';
import Elements from './elements';
import Fonts from './fonts';
import Footnotes from './footnotes';
import Headings from './headings';

export const GlobalStyle = createGlobalStyle`
  ${ModernNormalize}
  ${Animations}
  ${Elements}
  ${Fonts}
  ${Footnotes}
  ${Headings}
`;
