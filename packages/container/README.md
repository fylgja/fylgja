# Container component

[![NPM version](https://img.shields.io/npm/v/@fylgja/container.svg)](https://www.npmjs.org/package/@fylgja/container)

The container component is wrapper component.
To make all child elements fit better in the section.

- [Installation](#installation)
- [How to use](#how-to-use)
- [Config](#config)

## Installation

```bash
npm install @fylgja/container
```

And include the component in to your code via;

```scss
@use "@fylgja/container";
// Or via PostCSS and other options as plain CSS
@import "@fylgja/container/container.css";
```

## How to use

To use the container create element with the class `.container`.

```html
<div class="container">..</div>
```

The container is pretty straight forward.
But its power if found in its customization via CSS variables.

Allowing for smaller of bigger countainers when needed.

## Config

As with almost all of our components.
CSS variables can be configured to add your own look/style.

Want direct control on the base styles.
Down here are the following scss variables can you modify.

```scss
$container-size: 1200px !default;
$container-gap: 0 1.25rem !default;
```
