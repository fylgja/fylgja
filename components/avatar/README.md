# Fylgja - Avatar

[![NPM version](https://img.shields.io/npm/v/@fylgja/avatar)](https://www.npmjs.org/package/@fylgja/avatar)
![license](https://img.shields.io/github/license/fylgja/fylgja)

The avatar component allows you to make an avatar style with ease.

## Installation

```bash
npm install @fylgja/avatar
```

Then include the component in to your code via;

```scss
@use "@fylgja/avatar";
// Or via PostCSS import
@import "@fylgja/avatar";
```

### `@layer` support

If you need support for `@layer`,
use the following import;

```scss
@use "@fylgja/avatar" with ($enable-avatar-layer: true);
// Or via PostCSS import
@import "@fylgja/avatar/layer";
```

## How to use

To use the avatar create element with the class `.avatar`.

```html
<img class="avatar" src="..">
```

Avatars are by default round and are `3em` big, allowing to scale with your text.

You can change this via the CSS variables or via the SCSS variables, if it is your default style.

## Config

As with almost all of our components, CSS variables can be configured to add your own look/style.

Want direct control on the base styles, here are the following SCSS variables can you modify.

```scss
$avatar-size: 3em !default;
$avatar-radius: 50% !default;
$avatar-bg: #eee !default;
$avatar-color: null !default;
```
