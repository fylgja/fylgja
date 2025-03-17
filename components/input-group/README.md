# Fylgja Input Group

[![NPM version](https://img.shields.io/npm/v/@fylgja/input-group)](https://www.npmjs.com/package/@fylgja/input-group)
[![NPM Downloads](https://img.shields.io/npm/dt/%40fylgja%2Finput-group)](https://www.npmjs.com/package/@fylgja/input-group)
[![License](https://img.shields.io/github/license/fylgja/fylgja?color=%23234)](/LICENSE)

The Fylgja Input Group component allows you to group inputs and buttons together
to create more intuitive form controls.

This component is ideal for building various UI elements such as
search bars, button groups, or rating systems using radio buttons.

## Installation

You can install Fylgja Input Group via npm or other Node-based package managers like pnpm or bun:

```bash
npm install @fylgja/input-group
```

Alternatively, you can use it directly via a CDN:

```html
<link href="https://cdn.jsdelivr.net/npm/@fylgja/input-group/index.min.css" rel="stylesheet">
```

## Usage

Once installed, you can import the full package with:

```css
@import "@fylgja/input-group";
```

Alternatively, if you only need specific parts, you can import them individually:

| Import Path                 | Description                           |
| --------------------------- | ------------------------------------- |
| `@fylgja/input-group/base`  | Contains to core of the Input Group   |
| `@fylgja/input-group/merge` | Contains the `--merge` modifier class |
| `@fylgja/input-group/steps` | Contains the `--steps` modifier class |

## Modifiers

### `--merge`

The `--merge` modifier merges all borders between elements in an input group, making them appear as a unified component.

### `--steps`

The `--steps` modifier adds stepping functionality, mainly used with radio buttons or checkbox groups to create a range-like input.
