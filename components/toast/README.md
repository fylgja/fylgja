# Fylgja Toast

[![NPM version](https://img.shields.io/npm/v/@fylgja/toast)](https://www.npmjs.com/package/@fylgja/toast)
[![NPM Downloads](https://img.shields.io/npm/dt/%40fylgja%2Ftoast)](https://www.npmjs.com/package/@fylgja/toast)
[![License](https://img.shields.io/github/license/fylgja/fylgja?color=%23234)](https://github.com/fylgja/fylgja/blob/main/LICENSE)

The Fylgja Toast component allows you to display brief, transient messages and notifications across your UI.

This component is ideal for building UI elements such as toasts, banners, alerts, or short inline messages that provide quick feedback (confirmations, warnings, or errors).

## Installation

You can install Fylgja Toast via npm or other Node-based package managers like pnpm or bun:

```bash
npm install @fylgja/toast
```

Alternatively, you can use it directly via a CDN:

```html
<link href="https://cdn.jsdelivr.net/npm/@fylgja/toast/index.min.css" rel="stylesheet">
```

## Usage

Once installed, you can import the full package with:

```css
@import "@fylgja/toast";
```

Alternatively, if you only need specific parts, you can import them individually:

| Import Path            | Description                                                          |
| ---------------------- | -------------------------------------------------------------------- |
| `@fylgja/toast/base`   | Contains to core of the Toast                                        |
| `@fylgja/toast/styles` | Contains styles for each toast status, for example warning and error |

## Styles

By default, a toast appears as a lightweight floating panel. Use icons, a close action, or inline controls to provide richer interactions when needed.

The `styles` package makes visual customization straightforward. A single CSS variable — `--toast-style` — controls background, border, and text colors. Built on CSS Relative Colors, the system derives accessible color variations automatically, so you get consistent, readable results with minimal effort.

Three preset style tokens are provided: `info` (which uses the brand color), `warning`, and `error`. You can extend or override these tokens to match your design system.
