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

The breadcrumbs component can be used with a utility class or completely classless by relying on standard HTML5 accessibility attributes.

#### Classless (Recommended)

To use the breadcrumbs without adding specific CSS classes, simply wrap your list in a `<nav>` element with `aria-label="breadcrumbs"`. This approach promotes semantic HTML and automatic accessibility.

```html
<nav aria-label="breadcrumbs">
  <ol>
    <li><a href="#">Home</a></li>
    <li><a href="#">Category</a></li>
    <li><a href="#" aria-current="page">Current Page</a></li>
  </ol>
</nav>
```

#### Class-based

If you prefer using classes or need to style a list that isn't inside a navigation landmark, you can use the `.breadcrumbs` class.

```html
<ol class="breadcrumbs">
  <li><a href="#">Home</a></li>
  <li><a href="#">Category</a></li>
  <li><a href="#" aria-current="page">Current Page</a></li>
</ol>
```

## Customization

The breadcrumbs component uses CSS variables for easy customization. You can override these variables to match your design system.

| Variable | Default | Description |
|----------|---------|-------------|
| `--breadcrumbs-gap` | `0.5rem` | The space between breadcrumb items. |
| `--breadcrumbs-separator` | `"/"` | The character or string used as a separator. |

### Example

```css
.breadcrumbs,
nav[aria-label="breadcrumbs"] {
    --breadcrumbs-gap: 1rem;
    --breadcrumbs-separator: ">";
}
```
