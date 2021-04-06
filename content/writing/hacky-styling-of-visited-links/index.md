---
title: Hacky styling of :visited links
description: Using CSS pseudo elements to expand on what's possible when styling visited links.
date: '2013-10-18'
---

import { DemoButton } from './demo-button';

<Note>

This post outlines a method to 'hide' a glyph on an anchor tag using a pseudo-element in order to expand the boundaries of what :visited styles typically allow.

</Note>

In HTML, `<a>` tags have 4 CSS pseudo classes that are used to style hyperlinks in different states: `:link` `:visited` `:hover` and `:active`.

We used to be able to style these states with whatever CSS we wanted, but in early 2010 a [privacy vulnerability](http://blog.mozilla.org/security/2010/03/31/plugging-the-css-history-leak/) forced browsers to restrict what properties were allowed to be used with the `:visited` selector.

Here's what we're left with:

```css
a:visited {
  outline-color: ;
  border-color: ;
  background-color: ;
  color: ;
}
```

Boring, eh? Not to worry, we can work with this.

## Basic link styling

First, we'll create a link and give it some styling. Note: I'm using Sass here instead of vanilla CSS[^1].

```html
<!-- HTML -->
<a href="#!" class="demo">Link</a>
```

```scss
// Sass
$buttonColor: #3ba7bb;

a.demo {
  background: $buttonColor;
  border-radius: 4px;
  border: 2px solid $buttonColor;
  color: white;
  display: inline-block;
  font-weight: 500;
  line-height: 1;
  padding: 0.75rem 3rem;
  position: relative;
  text-decoration: none;
}
```

Result:

<DemoButton>Link</DemoButton>

Cool! Let's design a `:visited` style.

## CSS pseudo elements

Pseudo elements in CSS are great. [Chris Coyier](http://css-tricks.com/pseudo-element-roundup/) describes them well:

> For every element on the page, you get two more free ones that you can do just about anything another HTML element could do.

We'll use a CSS pseudo element to help style the `:visited` state of our link. While pseudo elements have the same CSS property restrictions as the `<a>` tag, with absolute positioning and some basic colour tricks we can essentially hide a `:visited` style in our link right from the start.

Let's add a check mark using the pseudo element `::after`.

```scss
$buttonColor: #3ba7bb;
$textColor: white;

a.demo {
  background-color: $buttonColor;
  border-radius: 4px;
  border: 2px solid $buttonColor;
  color: $textColor;
  display: inline-block;
  font-weight: 500;
  line-height: 1;
  padding: 0.75rem 3rem;
  position: relative;
  text-decoration: none;

  &::after {
    content: '✓';
    height: 1rem;
    position: absolute;
    right: 1.5rem;
    width: 1rem;
  }
}
```

Result:

<DemoButton stepTwo>Link</DemoButton>

## Completing functionality

While we can't technically 'add' the check mark strictly to `:visited` links, we can hide it in the link's default state by changing it to the same colour as the background.

Now we can style the `:visited` state to provide some visual contrast and show off the check mark and border, both of which were disguised originally.

```scss
$buttonColor: #3ba7bb;
$textColor: white;

a.demo {
  background-color: $buttonColor;
  border-radius: 4px;
  border: 2px solid $buttonColor;
  color: $textColor;
  display: inline-block;
  font-weight: 500;
  line-height: 1;
  padding: 0.75rem 3rem;
  position: relative;
  text-decoration: none;

  &::after {
    color: $buttonColor;
    content: '✓';
    height: 1rem;
    position: absolute;
    right: 1.5rem;
    width: 1rem;
  }

  &:visited {
    background-color: #fff;
    border-color: currentColor;
    color: #333;

    &::after {
      color: #49b749;
    }
  }
}
```

Give it a try:

<DemoButton
href="http://bit.ly/16m376q"
target="\_blank"
rel="noopener noreferrer"
stepTwo
stepThree>
Click Me
</DemoButton>

## Wrap-up

With pure CSS we've created an interesting visual style for visited links without sacrificing user privacy.

[^1]: 2020 – Sass is not required, and this could be done with [CSS custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) or some other means that wasn't available or practical in 2013. The demo link that appears inline in this article uses the same technique described but is implemented in React with [styled-components](https://styled-components.com/) and integrated into the post using [MDX](https://github.com/mdx-js/mdx).
