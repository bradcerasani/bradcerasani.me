import styled from 'styled-components';

export const StyledMarkdown = styled.div`
  font-family: 'Untitled Sans', 'Scto Grotesk A';
  font-size: 18px;

  h2 {
    font-family: Canela;
    font-size: 2.5rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    margin-top: 0;
    padding-top: 1rem;
  }

  h3 {
    font-size: 2rem;
    font-weight: 400;
    letter-spacing: -0.5px;
    margin-bottom: 0.5rem;
    margin-top: 0;
    padding-top: 1rem;
  }

  p {
    line-height: 1.5;
  }

  blockquote {
    display: block;
    margin-left: 0;
    padding-bottom: 0.75rem;
    padding-right: 2rem;
    padding-top: 0.5rem;
    position: relative;
    width: 80%;

    &::before {
      content: '“';
      font-family: 'Canela';
      font-size: 100px;
      left: -60px;
      position: absolute;
      top: -20px;
    }

    p {
      background-color: HSLA(48, 64%, 94%, 1);
      display: inline;
      font-size: 22px;
      font-style: italic;
    }
  }

  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
  }

  ol,
  ul {
    margin-left: 0;
    padding-left: 0;
  }

  hr {
    background-color: currentColor;
    border: none;
    height: 4px;
    margin-bottom: 2.5rem;
    margin-top: 2.5rem;
  }

  /* footnotes */

  .footnotes {
    font-size: 16px;
  }

  .footnotes ol li {
    margin-bottom: 1rem;
  }

  .footnotes p {
    display: inline;
  }

  .footnote-backref {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    text-decoration: none;
  }

  .footnote-ref {
    text-decoration: none;
  }
`;
