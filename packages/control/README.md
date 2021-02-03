# Fylgja - Control

[![NPM version](https://img.shields.io/npm/v/@fylgja/control.svg)](https://www.npmjs.org/package/@fylgja/control)

The control component styles the default input[radio] and input[checkbox].
Allwing an easier control on the the style of both these elements.

- [Installation](#installation)
- [How to use](#how-to-use)
- [Config](#config)

## Installation

```bash
npm install @fylgja/control
```

And include the component in to your code via;

```scss
@use "@fylgja/control";
// Or via PostCSS and other options as plain CSS
@import "@fylgja/control/control.css";
```

## How to use

Out of the box all the styling is done directly,
to the `input[type=radio]` and `input[type=checkbox]`.
So no extra steps are needed.

Except for the switch style.
This requires a class on the `input[type=checkbox]`.

```html
<input type="checkbox" class="control-switch">
```

If you want to apply this style to other elements, like button.
You can use the class `.control-radio`, `.control-checkbox` and `.control-switch`.

## Config

As with almost all of our components.
CSS variables can be configured to add your own look/style.

Want direct control on the base styles.
Down here are the following scss variables can you modify.

```scss
$control-size: 1em !default;
$control-margin: 2px !default;
$control-padding: 2px !default;
$control-radius: 0.25rem !default;
$control-border-width: 1px !default;
$control-border-style: solid !default;
$control-border-color: currentColor !default;
$control-bg: transparent !default;
$control-color: inherit !default;
$control-transition: opacity 0.15s !default;

$control-icon-size: $control-size !default;
$control-icon-bg: #fff;

$control-focus-color: var(
    --selection-bg,
    color.change($color-theme, $alpha: 0.3)
) !default;
$control-focus-shadow: 0 0 0 0.2rem $control-focus-color !default;

$control-disabled-bg: change-color(#fff, $alpha: 0.1) !default;
$control-disabled-opacity: 0.5 !default;

$control-checked-stroke: var(--color-theme, #{$color-theme}) !default;
$control-checked-bg: var(--color-theme, #{$color-theme}) !default;
$control-checked-color: var(--color-on-theme, #{$color-on-theme}) !default;

// Checkbox
$enable-control-checkbox-indeterminate: true !default;
$control-checkbox-icon-as-mask: true !default;
$control-checkbox-icon-checked: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>') !default;
$control-checkbox-icon-indeterminate: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="3"><line x1="5" y1="12" x2="19" y2="12"></line></svg>') !default;

// Radio
$control-radio-icon-gap: 3px !default;
$control-checked-radio-stroke: var(--color-theme, #{$color-theme}) !default;
$control-checked-radio-bg: var(--color-on-theme, #{$color-on-theme}) !default;
$control-checked-radio-color: var(--color-theme, #{$color-theme}) !default;

// Switch
$enable-control-switch: true !default;
$control-switch-width: ($control-size * 2.5 / 1.5) !default;
$control-switch-height: $control-size !default;
$control-switch-radius: 3rem !default;
$control-switch-transition: transform 0.15s !default;
$control-switch-icon-gap: 3px !default;
$control-switch-icon-size: $control-switch-height !default;
```
