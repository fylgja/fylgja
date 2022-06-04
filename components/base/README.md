# Fylgja - Base

[![NPM version](https://img.shields.io/npm/v/@fylgja/base)](https://www.npmjs.org/package/@fylgja/base)
![license](https://img.shields.io/github/license/fylgja/fylgja)

Common defaults to make your body and typography look good
and easy to change to your needs.

## Installation

```bash
npm install @fylgja/base
```

Then include the component in to your code via;

```scss
@use "@fylgja/base";
// Or via PostCSS import
@import "@fylgja/base";
```


## How to use

The base component can be considered as more than one component, everything makes more sense together,
since these are small CSS setters to the body, typography and media.

Here is a list of each component and the main things each component does.

| Component Parts | Description                                          |
| --------------- | ---------------------------------------------------- |
| Action          | Acts as CSS reset for any clickable element behavior |
| Body            | Sets the base font, box-sizing and root vars         |
| Figure          | Set default spacing                                  |
| List            | Set default spacing                                  |
| Media           | Makes images responsive by default                   |
| Typography      | Sets defaults for all common text elements           |

There are also helper classes, but mostly all styles are set directly on the html elements.

| Class          | Description                               |
| -------------- | ----------------------------------------- |
| `.h1` to `.h6` | Same as the html element of the same name |
| `.hr`          | Same as the `<hr>` element                |
| `.text-small`  | Same as the `<small>` element             |

## Config

As with almost all of our components, you can configure CSS variables to add your own look/style.

Direct control on the base styles, you can you modify the following SCSS variables.

<details class="faq-panel"><summary>View SCSS variables</summary>

```scss
// Typography
$family-main: (
    system-ui,
    -apple-system,
    Helvetica,
    Arial,
    sans-serif,
    "Apple Color Emoji",
    "Segoe UI Emoji"
) !default;
$family-header: $family-main !default;
$font-size: 1rem !default;
$font-weight: normal !default;
$line-height: 1.5 !default;
$letter-spacing: normal !default;
$caption-size: 0.875em !default;

$quotes: "“" "”" "‘" "’" !default;
$blockquote-margin: 2em 0 !default;
$blockquote-padding-start: 1em !default;
$blockquote-border-color: var(
    --quote-border-color,
    var(--color-theme, currentcolor)
) !default;
$blockquote-border-start: 0.25em solid $blockquote-border-color !default;
$blockquote-font-style: italic !default;

$accent-color: var(--color-theme) !default;

$link-color: var(--color-theme) !default;
$link-color-focus: var(--color-theme) !default;
$link-style: none !default;
$link-style-focus: underline !default;

$selection-bg: $color-theme-fade !default;
$selection-color: inherit !default;

$hr-size: 1px !default;
$hr-style: solid !default;
$hr-color: currentcolor !default;
$hr-margin: 1em 0 !default;

$mark-padding: 0 0.15em !default;
$mark-bg: var(--selection-bg) !default;
$mark-color: var(--selection-color) !default;

// List
$list-margin: $item-spacer;
$dl-margin: $item-spacer;
$dd-margin: 0 0 0.5rem;

// Headings
$h-margin: 1.33em 0 0.67em !default;
$h-family: var(--family-header) !default;
$h-font-size: 1em !default;
$h-line-height: inherit !default;
$h-font-weight: normal !default;

$h1-margin: 0 0 0.45em !default;
$h1-family: null !default;
$h1-font-size: 2.2em !default;
$h1-line-height: null !default;
$h1-font-weight: null !default;

$h2-margin: 1.33em 0 0.55em !default;
$h2-family: null !default;
$h2-font-size: 1.6em !default;
$h2-line-height: null !default;
$h2-font-weight: null !default;

$h3-margin: 1.33em 0 0.6em !default;
$h3-family: null !default;
$h3-font-size: 1.35em !default;
$h3-line-height: null !default;
$h3-font-weight: null !default;

$h4-margin: null !default;
$h4-family: null !default;
$h4-font-size: 1.25em !default;
$h4-line-height: null !default;
$h4-font-weight: null !default;

$h5-margin: null !default;
$h5-family: null !default;
$h5-font-size: 1.125em !default;
$h5-line-height: null !default;
$h5-font-weight: 500 !default;

$h6-margin: null !default;
$h6-family: null !default;
$h6-font-size: 1em !default;
$h6-line-height: null !default;
$h6-font-weight: bolder !default;
```

</details>

## FAQ

<details class="faq-panel" open><summary>Is this a Reset CSS or Normalizer CSS component?</summary>

No, the base component is a setter for common styles but not a reset file.

Each reset for a specific html element is handled by the component that needs it,

not first set by one reset file and then restyled by the component.

Doing that would be considered bad practice and creates double CSS.

</details>

<details class="faq-panel"><summary>Do I need everything in this CSS component?</summary>

No. If you only need parts of the base component, just import each part.

```scss
@use "@fylgja/base/body";
@use "@fylgja/base/media";
```

</details>
