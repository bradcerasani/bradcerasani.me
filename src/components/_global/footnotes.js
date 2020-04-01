import { css } from 'styled-components';

const Footnotes = css`
  .footnotes {
    font-size: 0.9rem;
    margin-bottom: 10rem;
  }

  .footnotes hr {
    margin-bottom: 4rem;
    margin-top: 4rem;
  }

  .footnotes ol li {
    color: hsl(0, 0%, 40%);
    line-height: 1.5;
    margin-bottom: 1rem;
    position: relative;
  }

  .footnotes p {
    display: inline;
  }

  .footnote-backref {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin-left: 4px;
    padding: 4px 3px 0px;
    text-decoration: none;
    vertical-align: -1px;

    &:hover {
      background-color: hsl(48, 64%, 94%);
      color: black;
    }
  }

  .footnote-ref {
    text-decoration: none;
  }
`;

export default Footnotes;
