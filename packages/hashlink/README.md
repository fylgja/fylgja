# Fylgja - Hashlink

[![NPM version](https://img.shields.io/npm/v/@fylgja/hashlink.svg)](https://www.npmjs.org/fylgja/hashlink)

The Hashlink is a small utility component,
Which adds smooth scrolling to the page, via CSS.
And a scroll offset to any element with a id.

Making it perfect for hashlinks.
But also works with Javascript scrollto actions.

- [Installation](#installation)
- [How to use](#how-to-use)
- [Config](#config)

## Installation

```bash
npm install hashlink
```

And include the component in to your code via;

```scss
@import "@fylgja/hashlink";
// Or via PostCSS and other options as plain CSS
@import "@fylgja/hashlink/hashlink.css";
```

## How to use

The styles require no additional html markup.
But will only take affect if a hashlink points to the correct id.

Now the page will smooth scroll to the target id.
And with a specific offset.

_Which is also be super handy with sticky headers._

## Config

As with almost all of our components.
CSS variables can be configured to add your own look/style.

Want direct control on the base styles.
Down here are the following scss variables can you modify.

```scss
$enable-hashlink-scroll-behavior: true !default;
$enable-hashlink-id-offset: true !default;
$hashlink-scroll-offset: 1rem !default;
```
