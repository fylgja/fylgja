# Fylgja - Progress

[![NPM version](https://img.shields.io/npm/v/@fylgja/progress)](https://www.npmjs.org/package/@fylgja/progress)
![license](https://img.shields.io/github/license/fylgja/fylgja)

The progress component is used to show progress indication in a form or somethings else.

Fylgja supports both the native HTML progress element and the class based option.

## Installation

```bash
npm install @fylgja/progress
```

Then include the component in to your code via;

```scss
@use "@fylgja/progress";
// Or via PostCSS and other options as plain CSS
@import "@fylgja/progress/progress.css";
```

## How to use

No instructions are really needed.
The progress styles are automatically added when loaded.

That said no site is the same.
And if you need more than this basis.
Then consider adding you own styles to improve on this basis.

## Config

Want more control on the base styles, than the CSS variable.
Down here are the following SCSS variables you can modify.

```scss
$progress-height: 0.8em !default;
$progress-margin: 1em 0 !default;
$progress-radius: 0.5em !default;
$progress-border: 0 !default;
$progress-bg: rgba(#ddd, 0.3) !default;
$progress-color: var(--color-theme, #{$color-theme}) !default;
$progress-animation-timing: 1s linear infinite !default;
$progress-transition: width 0.6s ease !default;
$progress-loader-bg: rgba($color-on-theme, 0.2) !default;
```
