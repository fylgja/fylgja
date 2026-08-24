# Fylgja Callout

[![NPM version](https://img.shields.io/npm/v/@fylgja/callout)](https://www.npmjs.com/package/@fylgja/callout)
[![NPM Downloads](https://img.shields.io/npm/dt/%40fylgja%2Fcallout)](https://www.npmjs.com/package/@fylgja/callout)
[![License](https://img.shields.io/github/license/fylgja/fylgja?color=%23234)](https://github.com/fylgja/fylgja/blob/main/LICENSE)

The Fylgja Callout component styles the highlighted blocks that markdown plugins generate from blockquote syntax, known as callouts, alerts, or admonitions.

Use it for notes, tips, warnings, and other remarks that need to stand apart from the surrounding prose.

## Installation

You can install Fylgja Callout via npm or other Node-based package managers like pnpm or bun:

```bash
npm install @fylgja/callout
```

Alternatively, you can use it directly via a CDN:

```html
<link href="https://cdn.jsdelivr.net/npm/@fylgja/callout/index.min.css" rel="stylesheet">
```

## Usage

Once installed, you can import the full package with:

```css
@import "@fylgja/callout";
```

Alternatively, if you only need specific parts, you can import them individually:

| Import Path              | Description                                                              |
| ------------------------ | ------------------------------------------------------------------------ |
| `@fylgja/callout/base`   | Contains the core of the Callout                                         |
| `@fylgja/callout/styles` | Contains the accent color for each callout type, for example tip and warning |

The component expects the structure below, where `data-callout` carries the type.

```html
<div class="callout" data-callout="note">
    <p class="callout-title">
        <svg aria-hidden="true">...</svg>
        <strong>Note</strong>
    </p>
    <p>Useful information that users should know.</p>
</div>
```

Only three classes are shipped, `callout`, `callout-title`, and `callout-fold-icon`. Everything else is left to HTML, so the title takes its weight from `<strong>` rather than from CSS.

For Astro, the `@fylgja/astro` integration ships a `callouts` markdown plugin that renders exactly this, from GitHub alert syntax with the collapse markers of Obsidian callouts. Any other plugin works too, as long as it emits these names.

For a collapsible callout, swap the `<div>` for `<details>` and the title `<p>` for a `<summary>`. The marker the browser puts on a summary is hidden, and a `.callout-fold-icon` in the title turns as the callout opens. Add `open` to start it expanded.

```html
<details class="callout" data-callout="warning">
    <summary class="callout-title">
        <svg aria-hidden="true">...</svg>
        <strong>Warning</strong>
        <svg class="callout-fold-icon" aria-hidden="true">...</svg>
    </summary>
    <p>Urgent info that needs immediate user attention.</p>
</details>
```

## Styles

By default a callout is a bordered block with no background, so it sits quietly inside a body of text. A single CSS variable, `--callout-style`, drives the border and title color, and each type maps onto it.

Five types are provided: `note`, `tip`, `important`, `warning`, and `caution`. Anything unrecognized falls back to your brand color.

Icons are left to your markdown plugin. The component only keeps whatever `<svg>` it finds in the title from being squashed, so any icon set works. Give the icon `fill="currentcolor"`, or `stroke="currentcolor"` for an outline set, and it picks up the accent color.

## Customization

To restyle a type, override its color variable. Each type has one, `--callout-note` through `--callout-caution`, set with `light-dark()`.

```css
.callout {
    --callout-tip: hotpink;
}
```

To add a tinted background, or to change the spacing:

```css
.callout {
    --callout-bg: color-mix(in oklab, var(--callout-style) 8%, transparent);
    --callout-px: 1.5rem;
}
```
