# Fylgja - MQ

[![NPM version](https://img.shields.io/npm/v/@fylgja/mq)](https://www.npmjs.org/package/@fylgja/mq)
![license](https://img.shields.io/github/license/fylgja/fylgja)

The Fylgja MQ offers Design Tokens (CSS props) for consistent use of media queries.

## Installation

```bash
npm install @fylgja/mq
```

Then include the component in to your code via;

```scss
@use "@fylgja/mq";
// Or via PostCSS and other options as plain CSS
@import "@fylgja/mq"; // *
```

> \* The PostCSS version is using the newer spec with `@custom-media`,
> and also requires the [PostCSS Custom Media](https://github.com/csstools/postcss-plugins/tree/main/plugins/postcss-custom-media) plugin to work,
> until Custom Media queries are better supported

## How to use

For more information see the [mq docs on the Fylgja.dev](https://fylgja.dev/components/mq/).
