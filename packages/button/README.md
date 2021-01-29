# Fylgja - Button

[![NPM version](https://img.shields.io/npm/v/@fylgja/breadcrumbs.svg)](https://www.npmjs.org/package/@fylgja/breadcrumbs)

The Button component serves as an interactive element.
To call your users to an action.

Since not all buttons need to be an Call To Action.
The base button is as simple as possible.
And many styles can be build on top of this foundation.

- [Installation](#installation)
- [How to use](#how-to-use)
  - [Modifier classes](#modifier-classes)
- [Config](#config)

## Installation

```bash
npm install @fylgja/buttons
```

And include the component in to your code via;

```scss
@use "@fylgja/button";
// Or via PostCSS and other options as plain CSS
@import "@fylgja/button/button.css";
```

## How to use

In your html you only need the btn class to use the button style.

```html
<a href="#link" class="btn">..</a>
<button class="btn">..</button>
```

The buttons component is by default is blank with a soft focus and active color.
Based on the root-fg color, which is black by default.

Besides that the buttons component also comes with allot of CSS variables.
Which allow easier construction of specific btn styles via an modifier class.

### Modifier classes

By default we also offer some base default modifiers class.
Which you can disabled via de scss variables if needed.

| Class      | Description                                          |
| ---------- | ---------------------------------------------------- |
| `-outline` | Paints the btn with an outlined `$color-theme` color |
| `-theme`   | Paints the btn with and filled `$color-theme` color  |
| `-icon`    | Creates a icon btn's with equal width and height     |

Besides these modifier classes.
We try to keep away from adding more modifier classes.
As this will create to much extra CSS you will most likely never use.

## Config

As with almost all of our components.
CSS variables can be configured to add your own look/style.

Want direct control on the base styles.
Down here are the following scss variables can you modify.

```scss
$enable-btn-theme: true !default;
$enable-btn-outline: true !default;
$enable-btn-icon: true !default;

$btn-icon-size: 2.125em !default;

$btn-padding: 0.375rem 0.8rem !default;
$btn-border-size: 1px !default;
$btn-border-style: solid !default;
$btn-radius: 4px !default;
$btn-font-size: inherit !default;
$btn-line-height: inherit !default;
$btn-font-weight: 500 !default;
$btn-transition: 0.2s linear;
$btn-transition-property: (
    color,
    background-color,
    border-color,
    box-shadow
) !default;

$btn-stroke: transparent !default;
$btn-bg: transparent !default;
$btn-color: inherit !default;

$btn-focus-stroke: transparent !default;
$btn-focus-bg: change-color($root-fg, $alpha: 0.1) !default;
$btn-focus-color: inherit !default;

$btn-active-stroke: transparent !default;
$btn-active-bg: change-color($root-fg, $alpha: 0.2) !default;
$btn-active-color: inherit !default;

$btn-disabled-opacity: 0.7 !default;
```
