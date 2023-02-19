# Fylgja - Shadow

[![NPM version](https://img.shields.io/npm/v/@fylgja/shadow)](https://www.npmjs.org/package/@fylgja/shadow)
![license](https://img.shields.io/github/license/fylgja/fylgja)

The Fylgja Shadow offers Design Tokens (CSS props) for consistent and semantic shadows.

## Installation

```bash
npm install @fylgja/shadow
```

Then include the component in to your code via;

```scss
@use "@fylgja/shadow/base"; // *Note
@use "@fylgja/shadow";
// Or via PostCSS and other options as plain CSS
@import "@fylgja/shadow"; // *
```

> **Note** The sass version has the color and weight as CSS variables,
> but it is by default not set as CSS variable any where,
> for this you need to include the base package as well, or build it your self
>
> Or use `@use "@fylgja/shadow/props` as plain CSS, works the same as the CSS version

## How to use

For more information see the [shadow docs on the Fylgja.dev](https://fylgja.dev/components/shadow/).
