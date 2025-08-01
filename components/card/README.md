# Fylgja Card

[![NPM version](https://img.shields.io/npm/v/@fylgja/card)](https://www.npmjs.com/package/@fylgja/card)
[![NPM Downloads](https://img.shields.io/npm/dt/%40fylgja%2Fcard)](https://www.npmjs.com/package/@fylgja/card)
[![License](https://img.shields.io/github/license/fylgja/fylgja?color=%23234)](/LICENSE)

The Fylgja Card component allows you to group content together, for a more contained content element.

This component is ideal for building various UI elements such as
Product items, Blog items or for a Dropdown Panel.

## Installation

You can install Fylgja Card via npm or other Node-based package managers like pnpm or bun:

```bash
npm install @fylgja/card
```

Alternatively, you can use it directly via a CDN:

```html
<link href="https://cdn.jsdelivr.net/npm/@fylgja/card/index.min.css" rel="stylesheet">
```

## Usage

Once installed, you can import the full package with:

```css
@import "@fylgja/card";
```

Alternatively, if you only need specific parts, you can import them individually:

| Import Path             | Description                                |
| ----------------------- | ------------------------------------------ |
| `@fylgja/card/base`     | Contains to core of the Card               |
| `@fylgja/card/elevated` | Contains the `--elevated` modifier classes |
| `@fylgja/card/hover`    | Contains the `--hover` modifier classes    |

## Modifiers

### `--elevated`

The `--elevated` modifier unset the border color and add a shadow with a depth of 2 to the card.

This variant requires the Design Token `--shadow-2`.
This token is provided by the `@fylgja/tokens` or by other Token/Props frameworks such as [Open Props](https://open-props.style/)

### `--hover`

Simliar to the `--elevated` modifier, only instead this work on the hover interaction and does not unset the border.
This version uses a shadow dept of 4, so the Design Token `--shadow-4` is required.

This modifier is paired best with solutions such as the [`stretched-link`](https://fylgja.dev/library/utilities/#stretched-link) which makes the card clickable.
