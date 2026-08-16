# Fylgja breadcrumbs

[![NPM version](https://img.shields.io/npm/v/@fylgja/breadcrumbs)](https://www.npmjs.com/package/@fylgja/breadcrumbs)
[![NPM Downloads](https://img.shields.io/npm/dt/%40fylgja%2Fbreadcrumbs)](https://www.npmjs.com/package/@fylgja/breadcrumbs)
[![License](https://img.shields.io/github/license/fylgja/fylgja?color=%23234)](https://github.com/fylgja/fylgja/blob/main/LICENSE)

The Fylgja breadcrumbs component provides a simple, accessible way to render breadcrumb navigation.

## Installation

You can install Fylgja breadcrumbs via npm or other Node-based package managers like pnpm or bun:

```bash
npm install @fylgja/breadcrumbs
```

Alternatively, you can use it directly via a CDN:

```html
<link href="https://cdn.jsdelivr.net/npm/@fylgja/breadcrumbs/index.min.css" rel="stylesheet">
```

## Usage

Once installed, you can import the full package with:

```css
@import "@fylgja/breadcrumbs";
```

### Basic Usage

Add the `.breadcrumbs` class to your list. Wrap it in a `<nav>` element with a descriptive
`aria-label` (its exact wording doesn't matter, it's only for accessibility, not styling).

```html
<nav aria-label="Breadcrumb">
  <ol class="breadcrumbs">
    <li><a href="#">Home</a></li>
    <li><a href="#">Category</a></li>
    <li><a href="#" aria-current="page">Current Page</a></li>
  </ol>
</nav>
```

## Customization

The breadcrumbs component uses CSS variables for easy customization. You can override these variables to match your design system.

| Variable | Default | Description |
|----------|---------|-------------|
| `--breadcrumbs-gap` | `0.5rem` | The space between breadcrumb items. |
| `--breadcrumbs-separator` | `"/"` | The character or string used as a separator. |

### Example

```css
.breadcrumbs {
    --breadcrumbs-gap: 1rem;
    --breadcrumbs-separator: ">";
}
```
