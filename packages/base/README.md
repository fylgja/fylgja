# Base component

[![NPM version](https://img.shields.io/npm/v/@fylgja/base.svg)](https://www.npmjs.org/package/@fylgja/base)

Common defaults to make your body and typography look good.
And easy to change to your needs.

- [Installation](#installation)
- [How to use](#how-to-use)
- [Config](#config)
- [FAQ](#faq)

## Installation

```bash
npm install @fylgja/base
```

And include the component in to your code via;

```scss 
@import "@fylgja/base"; // DartSass or LibSass >= 3.6
@import "@fylgja/base/index"; // LibSass <= 3.5
@import "@fylgja/base/base.css"; // CSS or PostCSS
```


## How to use

The base component comes with a little more than any of our other css components.
And can be considered as more than one component.
But everything makes more sense together.
Since these are small css setters to the body, typography and media.

Down here is small list of each component.
And what main things each component does.

| Component Parts | Description                                                |
| --------------- | ---------------------------------------------------------- |
| Action          | Acts as css reset for any clickable elements               |
| Body            | Sets the base font, box-sizing and root vars               |
| Figure          | Set default spacing                                        |
| List            | Set default spacing                                        |
| Media           | Makes images responsive by default                         |
| Typography      | Sets defaults for all common text elements, mainly spacing |

There are also few helper classes.
But next to that all styles are set on the html elements directly.

Helper classes that can be found in the typography component;

| Class          | Description                               |
| -------------- | ----------------------------------------- |
| `.h1` to `.h6` | Same as the html element of the same name |
| `.text-small`  | Same as the `<small>` element             |

## Config

The base component comes with allot of config.
So the naming had to be simple and easy to understand.

Down here is a full list of each variable;

```scss
$root-font-size: null !default;
$root-bg: #fff !default;
$root-fg: #000 !default;

$color-text: change-color($root-fg, $alpha: 0.87) !default;
$color-text-alt: change-color($root-fg, $alpha: 0.68) !default;
$color-text-muted: change-color($root-fg, $alpha: 0.56) !default;

// Color pallet
$color-theme: #1565c0 !default;
$color-on-theme: #fff !default;

$color-alert: #d50000 !default;
$color-warning: #ffab40 !default;
$color-success: #00e676 !default;

// Typography
$family-main: (system-ui, -apple-system, Helvetica, Arial, sans-serif) !default;
$family-header: $family-main !default;
$family-code: (Consolas, Liberation Mono, Menlo, monospace) !default;
$font-size: 1rem !default;
$font-weight: normal !default;
$line-height: 1.5 !default;
$letter-spacing: normal !default;
$caption-size: 0.9em !default;

$item-spacer: 1em 0 !default;

$quotes: "“" "”" "‘" "’" !default;

$link-color: $color-theme !default;
$link-color-state: $color-theme !default;
$link-style: underline !default;
$link-style-state: none !default;

$hr-size: 1px !default;
$hr-style: inset !default;
$hr-color: currentColor !default;
$hr-gap: 1.25em 0 !default;

$mark-padding: 0 0.3125rem !default;
$mark-bg: change-color($color-theme, $alpha: 0.3) !default;
$mark-color: inherit !default;

$selection-bg: $color-theme !default;
$selection-color: $color-on-theme !default;

$h1: (
    line-height: 1.1,
    font-weight: 300
) !default;
$h2: (
    line-height: 1.1
) !default;
$h3: (
    line-height: 1.1
) !default;
$h4: (
    line-height: 1.2
) !default;
$h5: (
    line-height: 1.3
) !default;
$h6: () !default;

// List
$list-margin: $item-spacer;
$dl-margin: $item-spacer;
$dd-margin: 0 0 0.5rem;
```

## FAQ

<details><summary>Is this a restCSS or Normalizer css component?</summary>

**No!**

The base component is a setter for common styles but not a reset file.

Each reset for a specific html element is handled by the component that needs it.
And not first set by one reset file and then restyled by the component.
Which creates double css.

</details>

<details><summary>Do I need everything in this css component?</summary>

**No!**

If you need only parts of the base component just import these parts only.

```scss
@import "@fylgja/base/body";
@import "@fylgja/base/media";
```

</details>
