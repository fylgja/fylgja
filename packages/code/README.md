# Fylgja - Code

The Code package is a extension package to the base package.

This includes more styling to the `<code>`, `<pre>` and `<kbd>` element.

## Installation

```bash
npm install @fylgja/code
```

And include the component in to your code via;

```scss
@use "@fylgja/code";
// Or via PostCSS and other options as plain CSS
@import "@fylgja/code/code.css";
```

## How to use

Out of the box all the styling is done directly.
So no extra steps are needed.

But for more complete code syntax highlighting in `<pre>` element.
Use a framework like
[Prims](https://prismjs.com/),
[highlight.js](https://highlightjs.org/)
or [shiki](https://shiki.matsu.io/).

## Config

As with almost all of our components.
CSS variables can be configured to add your own look/style.

Want direct control on the base styles.
Down here are the following scss variables can you modify.

```scss
$code-padding: 0 0.15em !default;
$code-radius: 0.2rem !default;
$code-border: 1px solid rgba(0, 0, 0, 0.05) !default;
$code-bg: #eee !default;
$code-color: #111 !default;

$pre-margin: 1em 0 !default;
$pre-padding: 1rem !default;
$pre-radius: 0.2rem !default;
$pre-border: 1px solid rgba(0, 0, 0, 0.05) !default;
$pre-bg: #eee !default;
$pre-color: #111 !default;
$pre-font-size: 0.85em !default;

$key-radius: 0.3em !default;
$key-border: 1px solid currentColor !default;
$key-shadow: inset 0 -1px 0 currentColor !default;
$key-padding: 0.1em 0.35em !default;
$key-bg: null !default;
$key-fg: null !default;
$key-font-size: 0.85em !default;
```
