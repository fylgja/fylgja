# Fylgja - Colors

[![NPM version](https://img.shields.io/npm/v/@fylgja/colors)](https://www.npmjs.org/package/@fylgja/colors)
![license](https://img.shields.io/github/license/fylgja/fylgja)

Add a collection of prebuild colors to any project with ease, using Fylgja Colors.

## Installation

```bash
npm install @fylgja/colors
```

Then include the component in to your code via;

```scss
@use "@fylgja/colors";
// Or via PostCSS and other options as plain CSS
@import "@fylgja/colors"; // *
```

## How to use

This component comes in 3 syntaxes.

- SCSS is offered in both the SCSS and CSS variable syntax
- CSS is offered as CSS variables
- Javascript Style Tokens,
  if you want to use it in a Javascript based environment, like React or Vue.

And comes packing in both HEX and HSL syntax;

### Color options

> **Info**: For a full list of available colors see https://fylgja.dev/components/colors/

### SCSS version

```scss
@use "@fylgja/colors" as *;

.style {
    color: $blue-500;
}

// CSS Syntax
@use "@fylgja/colors/props";

.style {
    color: var(--blue-500);
}
```

### CSS version

```css
@import "@fylgja/colors";

.style {
    color: var(--blue-500);
}
```

### Javascript

```js
import props from "@fylgja/colors"

const style = {
    color: props.blue[500]
}
```

### Using HSL syntax

Instead of importing the default version you can import the hsl version using;

```scss
@use "@fylgja/colors/hsl";
// Or via PostCSS and other options as plain CSS
@import "@fylgja/colors/hsl"; // *

.silver-card {
    background-color: hsl(var(--blue-gray-400) / 10%);
}
```

### Using a single colors

Instead of importing all the color options you can import 1 of the many colors, using the following import path;

```css
@use "@fylgja/colors/hex/blue"; /* As HEX */
@use "@fylgja/colors/hsl/blue"; /* As HSL */
```

_This only available for the CSS syntax_
