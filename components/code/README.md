# Fylgja - Code

[![NPM version](https://img.shields.io/npm/v/@fylgja/code)](https://www.npmjs.org/package/@fylgja/code)
![license](https://img.shields.io/github/license/fylgja/fylgja)

The Code component is a extension component on the base component.

This includes more styling to the `<code>`, `<pre>` and `<kbd>` elements.

## Installation

```bash
npm install @fylgja/code
```

Then include the component in to your code via;

```scss
@use "@fylgja/code";
// Or via PostCSS import
@import "@fylgja/code";
```

## How to use

Out of the box all the styling is done directly,
no extra steps are needed.

For a more complete code syntax highlighting in `<pre>` element,

use a frameworks like
[Prims](https://prismjs.com/),
[highlight](https://highlightjs.org/)
or [shiki](https://shiki.matsu.io/) instead,
or combine it with `@fylgja/code`.

## Config

As with almost all of our components,
CSS variables can be configured to add your own look/style.

Want direct control on the base styles,  
Here are the following SCSS variables can you modify.

```scss
$family-code: (
    SFMono-Regular,
    Consolas,
    "Liberation Mono",
    Menlo,
    monospace
) !default;

$code-padding: 0 0.15em !default;
$code-radius: 0.2rem !default;
$code-border: 1px solid rgba(0, 0, 0, 0.05) !default;
$code-bg: #eee !default;
$code-color: #111 !default;

$pre-margin: 1em 0 !default;
$pre-padding: 1rem !default;
$pre-radius: 0.2rem !default;
$pre-border: 1px solid rgba(0, 0, 0, 0.05) !default;
$pre-bg: #f2f2f2 !default;
$pre-color: #111 !default;
$pre-font-size: 0.875em !default;
$pre-tab-index: 4 !default;

$key-radius: 0.3em !default;
$key-border: 1px solid currentColor !default;
$key-shadow: inset 0 -1px 0 currentColor !default;
$key-padding: 0.1em 0.25em !default;
$key-bg: null !default;
$key-fg: null !default;
$key-font-size: 0.875em !default;
```
