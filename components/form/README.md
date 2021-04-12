# Fylgja - Form

[![NPM version](https://img.shields.io/npm/v/@fylgja/form)](https://www.npmjs.org/package/@fylgja/form)
![license](https://img.shields.io/github/license/fylgja/fylgja)

The form component is super easy to use.
Since it is a zero config module that styles the form elements directly.
Allowing you to focus on the form it self.

## Installation

```bash
npm install @fylgja/form
```

And include the component in to your code via;

```scss
@use "@fylgja/form";
// Or via PostCSS and other options as plain CSS
@import "@fylgja/form/form.css";
```

### Styles

By default the form style is set to our default style.

To use the field or box style.
Change the variable `$form-style` to any of the other 2 options.
Or if you are importing this as plain CSS, in PostCSS or any other option.

```css
@import "@fylgja/form/form-style-field.css";
@import "@fylgja/form/form-style-box.css";
```

## How to use

Out of the box all the styling is done directly.
So no extra steps are needed.

## Config

As with almost all of our components.
CSS variables can be configured to add your own look/style.

Want direct control on the base styles.
Down here are the following SCSS variables can you modify.

```scss
$enable-webkit-autofill-dark-mode: true !default;

$form-focus-color: var(
    --form-focus-color,
    var(--color-theme, #{$color-theme})
) !default;
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

$form-style: default !default;
$form-styles: (
    field: (
        padding: 0.375em 1px,
        border-width: 0 0 1px,
        border-style: solid,
        border-color: currentColor,
        radius: 0,
        shadow: inset 0 -1px 0 $form-focus-color,
        bg: transparent,
        color: inherit,
        file-btn-padding: 0.375em 0.625em,
        file-btn-radius: 3px 3px 0 0
    ),
    box: (
        padding: 0.375em 0.625em,
        border-width: 0 0 1px,
        border-style: solid,
        border-color: currentColor,
        radius: 4px 4px 0 0,
        shadow: inset 0 -1px 0 $form-focus-color,
        bg: if($root-fg == #000, #eee, #222),
        color: inherit,
        file-btn-padding: 0.375em 0.625em,
        file-btn-radius: 4px 4px 0 0
    )
) !default;

// Set styles var's
$form-padding: form-style-get(padding) !default;
$form-padding-y: if(
    list.length($form-padding) == 2,
    list.nth($form-padding, 1),
    $form-padding
);
$form-padding-x: if(
    list.length($form-padding) == 2,
    list.nth($form-padding, 2),
    $form-padding
);
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
    textarea,
    select,
    color,
    file
) !default;

// Form select
$form-icon-size: 1.25em !default;
$form-icon-color: $color-text !default;
$form-select-icon: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#{$form-icon-color}"><path d="M0 0h24v24H0z" fill="none"/><path d="M7 10l5 5 5-5z"/></svg>') !default;

// Form color
$form-color-radius: null !default;
$form-color-size: 2.375rem !default;
$form-color-padding: ($form-padding-y / 2) !default;

// Form file
$form-file-gap-y: $form-padding-y !default;
$form-file-gap-x: $form-padding-x !default;
$form-file-btn-gap: 1ch !default;
$form-file-btn-padding: form-style-get(file-btn-padding) !default;
$form-file-btn-radius: form-style-get(file-btn-radius) !default;
$form-file-btn-bg: var(--color-theme, #{$color-theme}) !default;
$form-file-btn-color: var(--color-on-theme, #{$color-on-theme}) !default;
```

> `form-style-get()` is `map-get()` function.
> That gets the values from the `$form-styles`.
> Which contains premade form styles.
> 
> See the `helper.scss` for what is in this map
