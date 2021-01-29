# Fylgja - Breadcrumbs

[![NPM version](https://img.shields.io/npm/v/@fylgja/breadcrumbs.svg)](https://www.npmjs.org/package/@fylgja/breadcrumbs)

Breadcrumbs component will show your visitors where they are
currently on the website.

- [Installation](#installation)
- [How to use](#how-to-use)
- [Config](#config)

## Installation

```bash
npm install @fylgja/breadcrumbs
```

And include the component in to your code via;

```scss
@use "@fylgja/breadcrumbs";
// Or via PostCSS and other options as plain CSS
@import "@fylgja/breadcrumbs/breadcrumbs.css";
```

## How to use

In your html you need besides the breadcrumb class also some html for the items.

We advice you to use of an ordered list.
As this tells the user the structure of the list of links.

```html
<nav aria-label="breadcrumb">
    <span>You are here: </span>
    <ol class="breadcrumb">
        <li><a href="/">Home</a></li>
        <li><a href="/path">Path</a></li>
        <li><a href="/path/cool-page" aria-current="page">Cool Page</a></li>
    </ol>
</nav>
```

Using an anchor for the current page allows your user to reload
the page via the breadcrumbs.
And any voiceover will also speak the item.

Using the `aria-current="page"`
will tell the user that this is the current page.
And it is also used to give it a different style
compared to the rest of the breadcrumb items.

_By default this is a black grayish text, still clickable if an anchor is used_

## Config

As with almost all of our components.
CSS variables can be configured to add your own look/style.

Want direct control on the base styles.
Down here are the following scss variables can you modify.

```scss
$breadcrumbs-divider: "  /  " !default;
$breadcrumbs-flow: row wrap !default;
$breadcrumbs-margin: 10px 0 !default;
$breadcrumbs-padding: 0 !default;
$breadcrumbs-color: inherit !default;
$breadcrumbs-current-color: var(--color-text-alt, #{$color-text-alt}) !default;
$breadcrumbs-divider-color: #ccc !default;
```
