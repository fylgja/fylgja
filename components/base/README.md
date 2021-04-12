# Fylgja - Base

[![NPM version](https://img.shields.io/npm/v/@fylgja/base)](https://www.npmjs.org/package/@fylgja/base)
![license](https://img.shields.io/github/license/fylgja/fylgja)

Common defaults to make your body and typography look good.
And easy to change to your needs.

## Installation

```bash
npm install @fylgja/base
```

And include the component in to your code via;

```scss
@use "@fylgja/base";
// Or via PostCSS and other options as plain CSS
@import "@fylgja/base/base.css";
```


## How to use

The base component comes with a little more than any of our other CSS components.
And can be considered as more than one component.
But everything makes more sense together.
Since these are small CSS setters to the body, typography and media.

Down here is a small list of each component
and what main things each component does.

| Component Parts | Description                                          |
| --------------- | ---------------------------------------------------- |
| Action          | Acts as CSS reset for any clickable element behavior |
| Body            | Sets the base font, box-sizing and root vars         |
| Figure          | Set default spacing                                  |
| List            | Set default spacing                                  |
| Media           | Makes images responsive by default                   |
| Typography      | Sets defaults for all common text elements           |

There are also few helper classes.
But next to that all styles are set on the html elements directly.

| Class          | Description                               |
| -------------- | ----------------------------------------- |
| `.h1` to `.h6` | Same as the html element of the same name |
| `.hr`          | Same as the `<hr>` element                |
| `.text-small`  | Same as the `<small>` element             |

## Config

As with almost all of our components.
CSS variables can be configured to add your own look/style.

Want direct control on the base styles.
Down here are the following SCSS variables can you modify.

```scss
// Typography
$family-main: (system-ui, -apple-system, Helvetica, Arial, sans-serif) !default;
$family-header: $family-main !default;
$font-size: 1rem !default;
$font-weight: normal !default;
$line-height: 1.5 !default;
$letter-spacing: normal !default;
$caption-size: 0.9em !default;

$quotes: "“" "”" "‘" "’" !default;

$link-color: var(--color-theme, #{$color-theme}) !default;
$link-color-state: var(--color-theme, #{$color-theme}) !default;
$link-style: underline !default;
$link-style-state: none !default;

$selection-bg: $color-theme-soft !default;
$selection-color: inherit !default;

$hr-size: 1px !default;
$hr-style: solid !default;
$hr-color: currentColor !default;
$hr-margin: 1em 0 !default;

$mark-padding: 0 0.15em !default;
$mark-bg: var(--selection-bg, #{$selection-bg}) !default;
$mark-color: var(--selection-color, #{$selection-color}) !default;

// List
$list-margin: $item-spacer;
$dl-margin: $item-spacer;
$dd-margin: 0 0 0.5rem;

// Headings
$h-margin: 1.33em 0 0.67em !default;
$h-family: inherit !default;
$h-font-size: 1em !default;
$h-line-height: inherit !default;
$h-font-weight: normal !default;

$h1-margin: 0 0 0.45em !default;
$h1-family: null !default;
$h1-font-size: 2.5em !default;
$h1-line-height: null !default;
$h1-font-weight: null !default;

$h2-margin: 1.33em 0 0.55em !default;
$h2-family: null !default;
$h2-font-size: 2em !default;
$h2-line-height: null !default;
$h2-font-weight: null !default;

$h3-margin: 1.33em 0 0.6em !default;
$h3-family: null !default;
$h3-font-size: 1.75em !default;
$h3-line-height: null !default;
$h3-font-weight: null !default;

$h4-margin: null !default;
$h4-family: null !default;
$h4-font-size: 1.5em !default;
$h4-line-height: null !default;
$h4-font-weight: null !default;

$h5-margin: null !default;
$h5-family: null !default;
$h5-font-size: 1.25em !default;
$h5-line-height: null !default;
$h5-font-weight: 500 !default;

$h6-margin: null !default;
$h6-family: null !default;
$h6-font-size: null !default;
$h6-line-height: null !default;
$h6-font-weight: bold !default;
```

## FAQ

<details class="faq-panel" open><summary>Is this a Rest CSS or Normalizer CSS component?</summary>

No. The base component is a setter for common styles but not a reset file.

Each reset for a specific html element is handled by the component that needs it.
And not first set by one reset file and then restyled by the component,
which creates double CSS.

</details>

<details class="faq-panel"><summary>Do I need everything in this CSS component?</summary>

No. If you need only parts of the base component just import these parts only.

```scss
@use "@fylgja/base/body";
@use "@fylgja/base/media";
```

</details>
