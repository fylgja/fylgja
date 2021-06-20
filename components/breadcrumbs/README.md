# Fylgja - Breadcrumbs

[![NPM version](https://img.shields.io/npm/v/@fylgja/breadcrumbs)](https://www.npmjs.org/package/@fylgja/breadcrumbs)
![license](https://img.shields.io/github/license/fylgja/fylgja)

The breadcrumbs component is a navigational aid,
it allows users to maintain awareness of their location in an app or a website.

## Installation

```bash
npm install @fylgja/breadcrumbs
```

Then include the component in to your code via;

```scss
@use "@fylgja/breadcrumbs";
// Or via PostCSS and other options as plain CSS
@import "@fylgja/breadcrumbs/breadcrumbs.css";
```

## How to use

In your html for the breadcrumb class, you also need some html for the items.

We advice you to use of an ordered list, as this tells the user the structure of the list of links.

```html
<nav aria-label="breadcrumb">
    <span>You are here: </span>
    <ol class="breadcrumbs">
        <li><a href="/">Home</a></li>
        <li><a href="/path">Path</a></li>
        <li><a href="/path/cool-page" aria-current="page">Cool Page</a></li>
    </ol>
</nav>
```

Using an anchor for the current page allows your user to reload the page via the breadcrumbs.

And most voiceovers tools will also speak the list items.

Using the `aria-current="page"` will tell the user that this is the current page.

It is also used to give anchor links a different style compared to the rest of the breadcrumb items.

_By default this is a black grayish text, still clickable if an anchor is used_

## Config

As with almost all of our components, CSS variables can be configured to add your own look/style.

Want direct control on the base styles,
here are the following SCSS variables can you modify.

```scss
$breadcrumbs-divider: "  /  " !default;
$breadcrumbs-flow: row wrap !default;
$breadcrumbs-margin: 10px 0 !default;
$breadcrumbs-padding: 0 !default;
$breadcrumbs-color: inherit !default;
$breadcrumbs-current-color: var(--color-text-alt, #{$color-text-alt}) !default;
$breadcrumbs-divider-color: #ccc !default;
```
