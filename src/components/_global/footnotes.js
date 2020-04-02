import { css } from 'styled-components';

import { color } from '../theme';

const Footnotes = css`
  .footnotes {
    font-size: 0.8rem;
    margin-bottom: 4rem;
  }

  .footnote-ref {
    text-decoration: none;
  }

  .footnotes hr {
    margin-bottom: 4rem;
    margin-top: 4rem;
  }

  .footnotes ol li {
    color: ${color.grey.default};
    line-height: 1.5;
    margin-bottom: 1rem;
    position: relative;
  }

  .footnotes p {
    display: inline;
  }

  .footnote-backref {
    padding-left: 0.25rem;
    text-decoration: none;
    vertical-align: -1px;

    &:hover {
      color: ${color.black};
    }
  }
`;

export default Footnotes;
