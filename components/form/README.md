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

For more information see the [form docs on the Fylgja.dev](https://fylgja.dev/components/form/).
