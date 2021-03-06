---
title: The Black Pixel Web Stack
description: Written shortly after the formalization of Black Pixel's Web Services team, this post features our go-to tools and technologies for developing great experiences.
date: '2016-06-08'
---

<Note>

This article was originally published on [BPXL Craft](https://medium.com/bpxl-craft).

</Note>

Every day there’s a shiny new framework or library that seemingly everyone is talking about. While it can be tempting to adopt the flavour of the month, being too liberal with technology choices often leads to churn and frustration, the opposite of productivity. As developers, we’re constantly learning, so avoiding new technology is not the answer. But we need to approach these decisions with pragmatism.

Here are some of the tried, tested, and true language choices and frameworks that we at Black Pixel keep coming back to to get work done.

#### JavaScript

As the programming language of the web browser, JavaScript has always been popular, but it’s evolved to become really powerful too.

In 2009, Ryan Dahl coerced Chrome’s V8 JavaScript engine to run on Linux with an event loop and low-level I/O, calling it [Node.js](https://nodejs.org/). In 2010, Backbone.js and Angular.js were introduced. These two client-side MV\* frameworks pushed the limits of what was possible in JavaScript applications. In 2013, Facebook released [React.js](https://facebook.github.io/react/), a lightweight and super performant view library that powers user interfaces used by billions of people all over the world. [ES2015](http://www.ecma-international.org/ecma-262/6.0/) arrived last year as the next generation of JavaScript, which added a slew of new features in development since its last major release in 2009.

![dam-break.gif](./dam-break.gif)

Suddenly the programming language once treated as a toy had proper module support, destructuring, template strings, a spread operator, arrow functions, and even classes ([but don’t use those](https://github.com/joshburgess/not-awesome-es6-classes)).

Today, modern browsers and the latest version of Node are [nearing 100-percent compatibility](http://kangax.github.io/compat-table/es6/) with this latest version of JavaScript. The language is more ubiquitous than ever before, and new use cases for it emerge every day.

<!-- Copied from Twitter embed w/o script -->
<blockquote><p lang="en" dir="ltr"><a href="https://twitter.com/CollinEstes">@CollinEstes</a> I heard a rumor that NASA uses Node.js for space-suits. I&#39;m curious, do you use the npm ecosystem to develop these apps?</p> &mdash; Benjamin Coe (<a href="https://twitter.com/BenjaminCoe/status/738764829746286592">@BenjaminCoe</a>) </blockquote>

<!-- Copied from Twitter embed w/o script -->
<blockquote><p lang="en" dir="ltr"><a href="https://twitter.com/BenjaminCoe">@BenjaminCoe</a> You heard correctly, and yes we do.</p> &mdash; Collin Estes (<a href="https://twitter.com/collinestes/status/738765249407504384">@CollinEstes</a>)</blockquote>

However, the rising popularity of JavaScript also brings a certain amount of “[JavaScript fatigue](https://medium.com/@ericclemmons/javascript-fatigue-48d4011b6fc4),” especially when six years of language development land in a single release as happened with ES2015 last year. Fortunately steps are being taken to ensure [future releases of ECMAScript/JS](http://www.2ality.com/2015/11/tc39-process.html) are smaller and more frequent, and there are many [roundup-style newsletters](http://javascriptweekly.com/) and [websites](http://www.echojs.com/) that help filter signal through the noise of the bustling ecosystem that is modern-day JS development.

## Frameworks and Libraries

#### React

[React](https://facebook.github.io/react/) is “a JavaScript library for building user interfaces.” Where Angular tried to solve the Model, View, and Controller components of traditional MVC application architecture, React focuses solely on the view layer. React introduced us to the virtual DOM, a tree of JavaScript objects that mimics the browser’s DOM. When state changes in a React application, it updates the virtual DOM first, then diffs the result with the browser’s DOM, and propagates these changes only to the elements that have changed instead of the entire view. This makes React super performant. And, since it only focuses on view logic, it’s easy to drop into existing applications without a complete rewrite.

#### Redux

[Redux](http://redux.js.org/) is “a predictable state container for JavaScript applications.” When React was first announced, Facebook’s engineers also announced something called Flux. Flux described a unidirectional application architecture well-suited for React apps but was more conceptual than tangible code or API. As such, many developers began working on their own Flux implementations for use with React. In June of 2015, developer Dan Abramov released Redux, a simple Flux-inspired state manager that borrows some patterns of immutability from [Elm](https://github.com/evancz/elm-architecture-tutorial). The simple API and excellent developer tooling of Redux helped it quickly become the de facto Flux implementation. While basic React applications can get by using its built-in state methods, passing state through component props gets unruly fast. That’s where a global state container like Redux saves the day.

#### Node

As mentioned above, Node marries an event-based, asynchronous API with Chrome’s super fast V8 engine, and runs on the server. Using JavaScript for server-side development with Node allows developers to tap into the largest open-source module ecosystem in the world with npm. It also reduces the amount of context switching that’s necessary when bouncing between different parts of the application stack. With the modern-day proliferation of JavaScript, many companies employ Node middleware that sits between older, monolithic application code and newer, interactive client-side experiences. Node and pure JavaScript applications are also being used in greenfield projects where few technical constraints exist. When this is the case, our team leans on application frameworks like the Sinatra-inspired [Express](http://expressjs.com/) or batteries-included [Hapi](http://hapijs.com/) to be productive right away.

#### PostCSS

[PostCSS](http://postcss.org/) takes CSS source files and creates an abstract syntax tree (AST) of the contents it exposes via API. The rich plugin ecosystem of PostCSS allows developers to do almost anything imaginable to a CSS file’s contents. One of the most common uses for PostCSS is transpiling future CSS syntax to current-day syntax, so browsers can reliably interpret features like custom properties and the `var()` function for variable support. PostCSS is often referred to as some lofty technology that is _more_ proprietary than popular preprocessors like Sass, but this is far from the truth. PostCSS allows developers to write _less_ proprietary syntax. Bypassing Sass removes an enormous amount of abstraction between style input and output, resulting in better code. PostCSS forces you to think about what plugins you’d like to use to manipulate your code, instead of giving you more than you need.

## Linting and Best Practices

![6ix-lint.gif](./6ix-lint.gif)

#### JavaScript

When writing JavaScript, we follow the paradigms of [functional programming](https://drboolean.gitbooks.io/mostly-adequate-guide/content/). Functional programming is programming without [side effects](<https://en.wikipedia.org/wiki/Side_effect_(computer_science)>). It focuses on small, composable functions rather than object-oriented programming that relies heavily on classes and mutation.

To lint our JavaScript, we use [ESlint](http://eslint.org/) with an adapted version of [Airbnb’s style guide](https://github.com/airbnb/javascript). This ensures consistent formatting and code style between developers and helps check code for unused variables, typos, and mutations.

#### CSS

When writing CSS we use [atomic, immutable classes](http://csswizardry.com/2015/03/immutable-css/) and [ITCSS](https://www.youtube.com/watch?v=1OKZOV-iLj4) architecture, with [SUITCSS](https://suitcss.github.io/)-inspired naming convention and [object/utility namespaces](http://csswizardry.com/2015/03/more-transparent-ui-code-with-namespaces/). [UsonianCSS](https://github.com/bradcerasani/usoniancss) is a cumulation of these ideas and serves as our baseline CSS boilerplate on greenfield projects.

To lint our CSS, we use [Stylelint](http://stylelint.io/) and [postcss-bem-linter](https://github.com/postcss/postcss-bem-linter) with a [custom config for UsonianCSS](https://github.com/bradcerasani/stylelint-config-usoniancss). Stylelint is ESlint for CSS. It helps us maintain an alphabetical order of CSS properties, consistent block formatting, and naming conventions.

## Future Tech

![future-tech.gif](./future-tech.gif)

Facebook’s [GraphQL](http://graphql.org/docs/getting-started/) is a new way to facilitate client-server communication. It could be really interesting to use on a project where we’re building server-side support for a mobile client. Instead of having individual RESTful API endpoints, GraphQL gives you a single endpoint for specifying what data you’d like in a [syntax that resembles JSON but without property values](https://facebook.github.io/react/blog/2015/05/01/graphql-introduction.html#what-is-graphql). You request the keys you’d like, and GraphQL returns the key-value pairs.

Netflix’s [Falcor](https://netflix.github.io/falcor/) attempts to solve the same problem with a slightly different approach that could also have drastic impact on client-server data transfers.

The [upcoming Koa 2 release](https://github.com/koajs/koa/issues/533) has some really smart people working on it and makes use of newer JavaScript features like [async and await](https://zeit.co/blog/async-and-await).

We’ve also been checking out [RethinkDB](https://www.rethinkdb.com/) and [Horizon](https://horizon.io/), which show a lot of promise for building real-time web applications.

At [Black Pixel](https://blackpixel.com/), we are privileged to work with some of the best technology companies in the world. Because of this, we’re exposed to a myriad of different approaches that help us become better developers. Whether we’re prototyping internal projects for our clients or working on scalable web services that need to support millions of users, there’s no shortage of tooling and techniques to explore.
