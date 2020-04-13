import { css } from 'styled-components';

import { breakpoint, color } from '../theme';

const Footnotes = css`
  .footnotes {
    font-size: 0.8rem;
    margin-bottom: 3rem;

    @media (min-width: ${breakpoint.md}) {
      margin-bottom: 3rem;
    }
  }

  .footnote-ref {
    text-decoration: none;
  }

  .footnotes hr {
    margin-bottom: 3rem;
    margin-top: 3rem;

    @media (min-width: ${breakpoint.md}) {
      margin-bottom: 3rem;
      margin-top: 3rem;
    }
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

  .footnote-backref::before {
    --aspectRatio: (4 / 5);
    --height: 0.6rem;
    background-image: url('data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAgMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTUuMzcxIDE1LjM5di00LjE5NWg4LjgxM2MxLjUyMyAwIDIuODItLjUzNyAzLjg5LTEuNjExIDEuMDctMS4wNzQgMS42MDYtMi4zNyAxLjYwNi0zLjg4NSAwLTEuNTE1LS41MzUtMi44MS0xLjYwNi0zLjg4NS0xLjA3LTEuMDc0LTIuMzY3LTEuNjEtMy44OS0xLjYxaC0uMjgydjEuNzM0aC4yODJjMS4wNDYgMCAxLjkzNS4zNjcgMi42NjYgMS4xMDFhMy42MzQgMy42MzQgMCAwIDEgMS4wOTUgMi42NmMwIDEuMDQtLjM2NSAxLjkyNi0xLjA5NSAyLjY2LS43My43MzUtMS42MiAxLjEwMi0yLjY2NiAxLjEwMkg1LjM3VjUuMjY2TC4zMSAxMC4zMjhsNS4wNjIgNS4wNjN6IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L3N2Zz4K');
    background-repeat: no-repeat;
    background-size: contain;
    content: '';
    display: inline-block;
    height: var(--height);
    margin-left: 0.25rem;
    opacity: 0.5;
    -webkit-tap-highlight-color: transparent;
    transition-duration: 200ms;
    transition-property: opacity;
    transition-timing-function: ease-in-out;
    visibility: visible;
    width: calc(var(--height) / var(--aspectRatio));
  }

  .footnote-backref {
    visibility: hidden;

    &:hover::before {
      opacity: 1;
    }
  }
`;

export default Footnotes;
