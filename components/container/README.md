# Container component

[![NPM version](https://img.shields.io/npm/v/@fylgja/container)](https://www.npmjs.org/package/@fylgja/container)
![license](https://img.shields.io/github/license/fylgja/fylgja)

The container component is wrapper component,
to make all child elements fit better in the page.

## Installation

```bash
npm install @fylgja/container
```

Then include the component in to your code via;

```scss
@use "@fylgja/container";
// Or via PostCSS import
@import "@fylgja/container";
```

### `@layer` support

If you need support for `@layer`,
use the following import;

```scss
@use "@fylgja/container" with ($enable-container-layer: true);
// Or via PostCSS import
@import "@fylgja/container/layer";
```

## How to use

To use the container create element with the class `.container`.

```html
<div class="container">..</div>
```

The container is pretty straight forward,
its power is found in its customization via CSS variables.

Allowing for smaller of bigger containers when needed.

A more content max width based solution, can be made via;

```html
<div class="container" style="--container-size: 65ch;">..</div>
```

Making your content better readable for your users when needed.

## Config

As with almost all of our components,
CSS variables can be configured to add your own look/style.

Want direct control on the base styles,
Here are the following SCSS variables can you modify.

```scss
$enable-container-layer: false !default;

$container-layer-name: components !default;

$container-size: 1280px !default;
$container-padding-y: 0 !default;
$container-padding-x: 1.25rem !default;
```
