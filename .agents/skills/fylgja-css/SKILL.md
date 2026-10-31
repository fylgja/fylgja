---
name: fylgja-css
description: Guidance on styling with the Fylgja CSS library, its classless base, design tokens, dynamic utilities, and native HTML components. Use when a project depends on `fylgja` or any `@fylgja/*` package, or when the user asks to build or style UI with Fylgja.
---

# Fylgja CSS

Fylgja is a modular CSS library built on native HTML, design tokens, and dynamic utilities. It is not a utility-first framework like Tailwind, so do not write Fylgja the way you would write Tailwind.

## Rules

1. Start with semantic HTML. Fylgja Base styles native elements, so `<button>`, `<dialog>`, `<details>`, `<table>`, and form fields need no classes.
2. Reach for a native element before a component, and a component before custom CSS.
3. Use a single utility class plus CSS variables, never one class per value. Classes like `my-4`, `lg:my-8`, `justify-center`, or `items-center` do not exist.
4. Use token variables such as `var(--size-4)` over hard-coded values.
5. When unsure about a class or variable, read the CSS in `node_modules/@fylgja/`. Do not guess a name.

## Setup

```bash
npm install fylgja
```

```css
@import "@fylgja/base";
@import "@fylgja/tokens/css";
@import "@fylgja/utilities";
```

The `fylgja` package installs Base, Tokens, and Utilities. Each one can also be installed on its own, and components are always installed separately.

Without a build step, use `npx fylgja@latest add <target>` to copy a file into the project (`npx fylgja@latest help` lists the targets), or link the `.min.css` files from a CDN:

```html
<link href="https://cdn.jsdelivr.net/npm/@fylgja/base/index.min.css" rel="stylesheet">
<link href="https://cdn.jsdelivr.net/npm/@fylgja/tokens/css/index.min.css" rel="stylesheet">
<link href="https://cdn.jsdelivr.net/npm/@fylgja/utilities/index.min.css" rel="stylesheet">
```

## References

Read the file for the part you are working on. Each lists the real classes, variables, and imports.

| File | Read when |
| --- | --- |
| [references/base.md](references/base.md) | Styling HTML elements, buttons, forms, dialogs, or the theme |
| [references/tokens.md](references/tokens.md) | Using colors, sizes, shadows, or media queries |
| [references/utilities.md](references/utilities.md) | Doing layout, spacing, positioning, or responsive work |
| [references/components.md](references/components.md) | Using a badge, breadcrumbs, callout, card, form extend, input group, or toast |

## Utilities in short

Each utility is one class, or none, configured through CSS variables.

```html
<div class="align" style="--align: center">...</div>
<div class="auto-grid" style="--max-col-size: 15ch">...</div>
<div style="--my: 1rem; --lg_my: var(--size-8)">...</div>
```

- Spacing variables like `--my` need no class, but they only work inline in the `style` attribute.
- Breakpoints are variable prefixes: `sm_`, `md_`, `lg_`, `xl_`, and `xxl_`.
- A single utility is imported from `@fylgja/utilities/utils/flex.css`.

## Components

Buttons, forms, and dialogs are not components. They come from Base and the native elements. Do not rebuild a modal or a dropdown with divs when `<dialog>`, `<details>`, or `popover` covers it.

For what HTML does not cover, install a component: `@fylgja/badge`, `@fylgja/breadcrumbs`, `@fylgja/callout`, `@fylgja/card`, `@fylgja/form-extend`, `@fylgja/input-group`, or `@fylgja/toast`.

## Resources

- Documentation: https://fylgja.dev/
- UI gallery with copy-ready examples: https://fylgja.dev/ui/
- Source: https://github.com/fylgja/fylgja
