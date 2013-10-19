title: Creative Styling of :Visited Links
excerpt: Using CSS pseudo elements to check mark visited links.
date: 2013-10-18
tags: css
---

In HTML, `<a>` tags have 4 CSS pseudo classes that are used to style hyperlinks in different states: `:link` `:visited` `:hover` and `:active`

We used to be able to style these pseudo classes with whatever CSS we wanted, but in early 2010 a [privacy vulnerability](http://blog.mozilla.org/security/2010/03/31/plugging-the-css-history-leak/) forced browsers to restrict what CSS properties were allowed for the `:visited` class.

Here's what properties we're currently allowed to use for `:visited` elements:

```css
a:visited {
	outline-color: /* value */;
	border-color: /* value */;
	background-color: /* value */;
	color: /* value */;
}
```
Boring, eh? Not to worry, we can work with this.

## Basic Link Styling

First, we'll create a link and give it some styling.

*I'm using SCSS/Sass instead of vanilla CSS. If you are unfamiliar with Sass, [start here](http://sass-lang.com/guide).*

```html
<a href="#!" class="demo">AWESOME</a>
```

```scss
$accent: #3BA7BB;

a.demo {
	position: relative;
	display: inline-block;
	padding: 0.75rem 3rem;
	border: 2px solid $accent;
	border-radius: 3px;
	background: $accent;
	color: white;
	text-decoration: none;
	font-weight: 500;
	line-height: 1;
}
```
Result:

<a href="#!" class="demo">AWESOME</a>

Cool! Let's design a `:visited` style.

## CSS Pseudo Elements

Pseudo elements in CSS are **awesome**. [Chris Coyier](http://css-tricks.com/pseudo-element-roundup/) sums it up best:

>  For every element on the page, you get two more free ones that you can do just about anything another HTML element could do.

We'll use a CSS pseudo element to help style the `:visited` state of our link. While pseudo elements have the same CSS property restrictions as the `<a>` tag, with absolute positioning and some basic colour tricks we can essentially hide a `:visited` style in our link right from the start.

Let's add a check mark using pseudo element `:after`. I'm using a check mark from [icomoon](http://icomoon.io/), but if you aren't familiar with icon fonts, grab a character from [here](http://copypastecharacter.com/) and insert it on line 19 between the double quotes.

```scss
$accent: #3BA7BB;

a.demo {
	position: relative;
	display: inline-block;
	padding: 0.75rem 3rem;
	border: 2px solid $accent;
	border-radius: 3px;
	background: $accent;
	color: white;
	text-decoration: none;
	font-weight: 500;
	line-height: 1;
	&:after {
		position: absolute;
		right: 1.5rem;
		width: 1rem;
		height: 1rem;
		content: "\e602";
		font-family: icomoon;
	}
}
```

Result:

<a href="#!" class="demo step-two">AWESOME</a>

## Building Functionality

While we can't technically 'add' the check mark strictly to `:visited` links, we can hide it in a link's natural state by changing its colour to match the background.

Now we can style the `:visited` state to provide some visual contrast and show off the check mark and border, both of which were disguised originally.

```scss
$accent: #3BA7BB;

a.demo {
	position: relative;
	display: inline-block;
	padding: 0.75rem 3rem;
	border: 2px solid $accent;
	border-radius: 3px;
	background: $accent;
	color: white;
	text-decoration: none;
	font-weight: 500;
	line-height: 1;
	&:after {
		position: absolute;
		right: 1.5rem;
		width: 1rem;
		height: 1rem;
		color: $accent;
		content: "\e602";
		font-family: icomoon;
	}
	&:visited {
		border-color: #333333;
		background-color: #fafafa;
		color: #333333;
		&:after {
			color: #49b749;
		}
	}
}
```

Give it a try:

<a href="http://bit.ly/16m376q" class="demo step-two step-three">AWESOME</a>

Pretty cool, eh?

## Wrap-Up

With pure CSS we've created an interesting visual style for visited links without sacrificing user privacy or relying on Javascript. Kickass!


