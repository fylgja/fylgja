# Fylgja - Details

[![NPM version](https://img.shields.io/npm/v/@fylgja/details)](https://www.npmjs.org/package/@fylgja/details)
![license](https://img.shields.io/github/license/fylgja/fylgja)

The details component enhances the default details behavior.

## Installation

```bash
npm install @fylgja/details
```

Then include the component in to your code via;

```scss
@use "@fylgja/details";
// Or via PostCSS import
@import "@fylgja/details";
```

## How to use

Out of the box all the styling is done directly, 
so no extra steps are needed.

And the details element wil look relativity the same as the browser default.

The style should be changeable for many purposes, 
think a sub menu toggle or a accordion.

## Config

As with almost all of our components,
CSS variables can be configured to add your own look/style.

Want direct control on the base styles,
here are the following SCSS variables can you modify.

```scss
$details-animation: details-show 200ms ease-in-out !default;
$details-margin: 1em 0 !default;
```

## Tip

If you need the common accordion style you can use the Card component,
and a little extra CSS.

```html
<style>
    .accordion {
        --card-elevation: none;
        --card-border: 1px solid #ccc;
        --card-padding: 0.5em 0.8em;
    }

    .accordion > details:first-of-type {
        border-radius: 4px 4px 0 0;
        margin-bottom: 0;
    }

    .accordion > details:last-of-type {
        border-radius: 0 0 4px 4px;
        margin-top: 0;
    }

    .accordion > details:not(:last-of-type) {
        border-bottom: 0;
    }

    .accordion > details:not(:first-of-type):not(:last-of-type) {
        border-radius: 0;
        margin-top: 0;
        margin-bottom: 0;
    }
</style>
<div class="accordion">
    <details class="card">
        <summary class="card-action">Details element 1</summary>
        <div class="card-content pt-0">..</div>
    </details>
    <details class="card">
        <summary class="card-action">Details element 2</summary>
        <div class="card-content pt-0">..</div>
    </details>
    <details class="card">
        <summary class="card-action">Details element 3</summary>
        <div class="card-content pt-0">..</div>
    </details>
</div>
```
