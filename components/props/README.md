# Fylgja - Props

[![NPM version](https://img.shields.io/npm/v/@fylgja/props)](https://www.npmjs.org/package/@fylgja/props)
![license](https://img.shields.io/github/license/fylgja/fylgja)

The complete Fylgja collection of Design Tokens (CSS props) to use in your projects.

This a collection of the Fylgja tokens, available as one CSS Component,
which makes it easier to install and to include,
if you just want to use all Fylgja tokens in your project.

## Installation

```bash
npm install @fylgja/props
```

Then include the component in to your code via;

```scss
@use "@fylgja/props";
// Or via PostCSS and other options as plain CSS
@import "@fylgja/props"; // *
```

## How to use

This component comes in 3 syntaxes.

- SCSS, offered in both:
  - the SCSS variable syntax
  - the CSS variable syntax
- CSS variables
- Javascript Style Tokens,
  if you want to use it in a Javascript based environment, like React or Vue.

### SCSS version

```scss
@use "@fylgja/props" as *;

.style {
    z-index: $layer-1;
    box-shadow: $shadow-1;
}

// CSS Syntax
@use "@fylgja/props/lib";

.style {
    z-index: var(--layer-1);
    box-shadow: var(--shadow-1);
}
```

### CSS version

```css
@import "@fylgja/props";

.style {
    z-index: var(--layer-1);
    box-shadow: var(--shadow-1);
}
```

### Javascript

```js
import { layer, shadow } from "@fylgja/props"

const style = {
    zIndex: layer[1],
    boxShadow: shadow[3];
}
```

## Config

This a collection of the following Fylgja CSS Components;


<!-- - `@fylgja/color`: Docs -->
- `@fylgja/easing`: Docs
<!-- - `@fylgja/fonts`: Docs -->
- `@fylgja/shadow`: Docs
- `@fylgja/layer`: Docs
