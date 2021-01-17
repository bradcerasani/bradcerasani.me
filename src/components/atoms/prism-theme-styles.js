import { createGlobalStyle } from 'styled-components';

export const PrismThemeStyles = createGlobalStyle`
:root {
  --codeBackgroundColor: #1a1a1a;
  --codeColor: #f0f0f0;
  --codeCyan: #64edff;
  --codeGreen: #67ffb8;
  --codeGrey: #85a19f;
  --codeBlue: #028BE8;
  --codePink: #ff55b5;
  --codePurple: #bd93f9;
  --codeRed: #f84e3b;
  --codeYellow: #faec8f;
}

@font-face {
  font-display: block;
  font-family: 'JBM';
  font-weight: 400;
  src: url('/fonts/JBM-Regular.woff2') format('woff2'),
    url('/fonts/JBM-Regular.woff') format('woff');
}

@font-face {
  font-display: block;
  font-family: 'JBM';
  font-style: italic;
  font-weight: 400;
  src: url('/fonts/JBM-Italic.woff2') format('woff2'),
    url('/fonts/JBM-Italic.woff') format('woff');
}

code[class*='language-'],
pre[class*='language-'] {
  -moz-hyphens: none;
  -moz-tab-size: 4;
  -ms-hyphens: none;
  -o-tab-size: 4;
  -webkit-hyphens: none;
  background: none;
  font-family: JBM, Consolas, Menlo, Monaco, source-code-pro, 'Courier New',
    monospace;
  font-size: 0.8rem;
  font-weight: 400;
  hyphens: none;
  line-height: 1.5;
  tab-size: 4;
  text-align: left;
  white-space: pre;
  word-break: normal;
  word-spacing: normal;
  word-wrap: normal;
}

/* Code blocks */
pre[class*='language-'] {
  background-color: var(--codeBackgroundColor);
  border-radius: 0.5rem;
  color: var(--codeColor);
  margin-bottom: 1.5rem;
  overflow: auto;
  padding: 0.625rem 0.75rem;
}

@media (min-width: 768px) {
  pre[class*='language-'] {
    padding: 1.5rem;
    margin-left: -1.5rem;
    margin-right: -1.5rem;
  }
}

pre *::selection {
  background-color: rgb(255, 255, 255, 0.05);
  text-shadow: 0 0 4px var(--codeBackgroundColor), 0 0 6px currentColor;
}

/* Inline code */
:not(pre) > code[class*='language-'] {
  background-color: var(--codeColor);
  border-radius: 2px;
  font-size: 0.8375rem;
  padding: 4px 4px 2px;
  white-space: normal;
}

.token.italic {
  font-style: italic;
}

.token.entity {
  cursor: help;
}

.token.datetime.number {
  color: var(--codeColor);
}

.token.comment,
.token.block-comment,
.token.prolog,
.token.doctype,
.token.cdata {
  color: var(--codeGrey);
  font-style: italic;
}

.token.namespace,
.token.deleted {
  color: var(--codeRed);
}

.token.tag,
.token.punctuation,
.token.function-name {
  color: var(--codePurple);
}

.token.selector,
.token.attr-name,
.token.function {
  color: var(--codeCyan);
}

.token.class-name,
.token.constant,
.token.symbol {
  color: var(--codeYellow);
}

.token.operator,
.token.entity,
.token.url,
.token.alternation,
.token.group,
.token.important,
.token.atrule,
.token.keyword,
.token.builtin {
  color: var(--codePink);
}

.token.property,
.token.charset,
.token.quantifier,
.token.string,
.token.char,
.token.regex,
.token.variable,
.token.attr-value {
  font-style: normal;
  color: var(--codeGreen);
}

.token.boolean,
.token.number {
  color: var(--codeBlue);
}

/* Custom rules (see gatsby-config.js) */

.token.js_keyword {
  color: var(--codeYellow);
}

.token.js_period {
  color: var(--codePink);
}
`