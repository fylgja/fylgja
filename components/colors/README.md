# Fylgja - Colors

[![NPM version](https://img.shields.io/npm/v/@fylgja/colors)](https://www.npmjs.org/package/@fylgja/colors)
![license](https://img.shields.io/github/license/fylgja/fylgja)

Add a collection of prebuild colors to any project with ease  using Fylgja Colors.

This one of the Fylgja Design Token components,
that is offered in both SCSS and CSS syntax.

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

The Fylgja Colors components also a offers a CSS version for SCSS using;

```scss
@use "@fylgja/colors/hex";
```

And also in HSL syntax for both SCSS and CSS;

```scss
@use "@fylgja/colors/hsl"; // scss
@import "@fylgja/colors/hsl"; // css
```

## How to use

The syntax may differ per language,
but the keys are always the same.

### SCSS variables

```scss
@use "@fylgja/color" as *;

.box {
    background-color: $indigo-800;
    color: $indigo-50;
}
```

### CSS variables (for both version)

```css
.box {
    background-color: var(--indigo-800);
    color: var(--indigo-50);
}
```

For a full list of available colors see https://fylgja.dev/components/colors/
