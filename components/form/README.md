# Fylgja - Form

[![NPM version](https://img.shields.io/npm/v/@fylgja/form.svg)](https://www.npmjs.org/package/@fylgja/form)
![license](https://img.shields.io/github/license/fylgja/fylgja)

The form component is super easy to use,
it's a zero config module that styles all form elements directly.

Allowing you to focus on the form itself.

## Installation

```bash
npm install @fylgja/form
```

Then include the component in to your code via;

```scss
@use "@fylgja/form";
// Or via PostCSS import
@import "@fylgja/form";
```

### Styles

By default all form styles are set to the fylgja default style.

If you want to use the field or box style,
change the variable `$form-style` to one of the other options.

Or if you are importing this as plain CSS or in PostCSS use;

```css
@import "@fylgja/form/field.css";
@import "@fylgja/form/box.css";
```

_For versions older than v1.2 use `style-{field|box}.css`_

### `@layer` support

If you need support for `@layer`,
use the following import;

```scss
@use "@fylgja/form" with ($form-layer: "components");
// Or via native CSS import, also supported by PostCSS import
@import "@fylgja/form" layer("components");
```

## How to use

Out of the box all the styling is done directly,
so no extra steps are needed.

## Config

As with almost all of our components,
CSS variables can be configured to add your own look/style.

For direct control of the base styles,
here are the following SCSS variables can you modify.

<details class="faq-panel"><summary>View SCSS variables</summary>

```scss
$enable-webkit-autofill-dark-mode: true !default;
$enable-form-layer: false !default;

$form-layer-name: base !default;

$form-focus-color: var(--color-theme, #{$color-theme}) !default;
$form-placeholder-opacity: 0.5 !default;
$form-disabled-opacity: 0.7 !default;
$form-not-editable-border-style: dotted !default;

$form-transition-property: border-color, box-shadow !default;
$form-transition-speed: 150ms !default;
$form-transition-effect: linear !default;

$fieldset-margin: 1rem 0 !default;
$fieldset-padding: 0 !default;
$fieldset-border: 0 !default;

$legend-font-size: 1.25em !default;
$legend-margin: 1rem 0 !default;
$legend-padding: 0 !default;
$legend-border: 0 !default;

$label-margin: 0 !default;

$form-style: default !default;
$form-styles: (
    field: (
        padding: 0.375em 1px,
        border-width: 1px,
        border-style: solid,
        border-color: transparent transparent currentcolor,
        radius: 0,
        shadow: inset 0 -1px 0 $form-focus-color,
        bg: transparent,
        color: inherit,
        file-btn-padding: 0.375em 0.625em,
        file-btn-radius: 3px 3px 0 0,
    ),
    box: (
        padding: 0.375em 0.625em,
        border-width: 1px,
        border-style: solid,
        border-color: transparent transparent currentcolor,
        radius: 4px 4px 0 0,
        shadow: inset 0 -1px 0 $form-focus-color,
        bg: if($root-fg == #000, #eee, #222),
        color: inherit,
        file-btn-padding: 0.375em 0.625em,
        file-btn-radius: 4px 4px 0 0,
    ),
) !default;

// Set styles var's
$form-padding: form-style-get(padding) !default;
$form-border-width: form-style-get(border-width) !default;
$form-border-style: form-style-get(border-style) !default;
$form-border-color: form-style-get(border-color) !default;
$form-radius: form-style-get(radius) !default;
$form-focus-style: form-style-get(shadow) !default;
$form-bg: form-style-get(bg) !default;
$form-color: form-style-get(color) !default;

// Form fields to load the styling on
$form-fields: (
    text,
    number,
    email,
    tel,
    password,
    search,
    url,
    date,
    time,
    month,
    week,
    color,
    file
) !default;

// Form select
$form-icon-size: 1.25em !default;
$form-icon-color: $color-text !default;
// This a static svg turned to to a dataUri,
// you can also use the `@fylgja/sass` package to generate this
$form-select-icon: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#{$form-icon-color}"><path d="M0 0h24v24H0z" fill="none"/><path d="M7 10l5 5 5-5z"/></svg>') !default;
```

> `form-style-get()` is the `map-get()` function.
>
> It gets the values from the `$form-styles` variable
> that contains the predefined form styles.
>
> Inspect the `helper.scss` file tot see what is in the default styles.

</details>
