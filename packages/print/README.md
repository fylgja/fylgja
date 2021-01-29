# Fylgja - Print

[![NPM version](https://img.shields.io/npm/v/@fylgja/print.svg)](https://www.npmjs.org/package/@fylgja/print)

Print component will add solid foundation for printing.

- [Installation](#installation)
- [How to use](#how-to-use)
- [Config](#config)

## Installation

```bash
npm install @fylgja/print
```

And include the component in to your code via;

```scss
@import "@fylgja/print";
// Or via PostCSS and other options as plain CSS
@import "@fylgja/print/print.css";
```

## How to use

No instruction are really needed.
The print styles are automatically added when loaded.

That said no site is the same.
And if you need more than this basis.
Then consider adding you own styles to improve on this basis.

## Config

Need to show color in printing.
Or don't like the link urls in your print.
Simply disable them.

```scss
$enable-print-economic: true !default;
$enable-print-urls: true !default;
```
