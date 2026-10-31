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

## Base

Classless defaults for HTML. Base is intentionally clean, and it does not define `--brand` or any other theme color.

| Import | Contains |
| --- | --- |
| `@fylgja/base` | Everything below |
| `@fylgja/base/preflight` | Global defaults, typography, and tables |
| `@fylgja/base/btn` | Button styles, plus `.btn` for links |
| `@fylgja/base/form` | Form styles |
| `@fylgja/base/dialog` | Dialog and popover styles |

**Theme:** `@import "@fylgja/base/theme";` adds dark mode, brand colors, primary buttons, and form error states. To customize it, copy it into the project with `npx fylgja@latest add theme`.

## Tokens

Design tokens as CSS variables. The full set is `@fylgja/tokens/css`, and each group has its own file, for example `@fylgja/tokens/css/colors`. SCSS, JS, Tailwind, and JSON formats are available too.

- **Colors**: `--color-1` and up. Set `--hue` or `--chroma` on an element to shift its whole scale, for example `style="--hue: var(--hue-green)"`.
- **Sizes**: `--size-1` and up, plus named sizes such as `--size-content`.
- **Other groups**: aspect ratios, borders, easing, fonts, shadows, and z-layers.
- **Media queries**: `--sm` (480px), `--md` (768px), `--lg` (1024px), `--xl` (1440px), `--xxl` (1920px), plus `--scheme-dark`, `--touch`, `--motion-safe`, and more.

## Utilities

Each utility is one class, or none at all, configured through CSS variables.

```html
<div class="align" style="--align: center">...</div>
<div class="auto-grid" style="--max-col-size: 15ch">...</div>
<div style="--my: 1rem; --px: var(--size-4)">...</div>
<div style="--my: 1rem; --lg_my: var(--size-8)">...</div>
```

- **Spacing and size**: `--m`, `--my`, `--mx`, `--p`, `--py`, `--px`, `--size`, `--size-x`, and `--size-y` need no class.
- **Breakpoints**: prefix a variable with `sm_`, `md_`, `lg_`, `xl_`, or `xxl_`, for example `--md_my` or `--sm_grid-cols`.
- **Inline only**: class-free variables match on the `style` attribute through `[style*="--my:"]`. They must be written inline with the colon right after the name, so setting them in a stylesheet does nothing.
- **Positioning**: use `.fixed`, `.absolute`, `.relative`, or `.sticky` with `--inset`, `--inset-t`, `--inset-b`, `--inset-s`, and `--inset-e`.
- **Alignment**: `.align-center` sets both `place-content` and `place-items`. Use `.align` with `--align` or `--align-items` to control one of them.

For a single utility, import `@fylgja/utilities/utils/flex.css`. To change the breakpoints, use `@fylgja/utilities/no-mq.css` (none) or `@fylgja/utilities/custom-mq.css` (`@media (--md)` style queries).

## Components

Buttons, forms, and dialogs are not components. They come from Base and the native elements. Do not rebuild a modal or a dropdown with divs when `<dialog>`, `<details>`, or `popover` covers it.

For what HTML does not cover, install a lightweight CSS component:

| Package | Use for |
| --- | --- |
| `@fylgja/badge` | Compact labels and status indicators |
| `@fylgja/breadcrumbs` | Breadcrumb navigation with the `.breadcrumbs` class |
| `@fylgja/callout` | Note, tip, and warning blocks |
| `@fylgja/card` | Grouped content such as product or blog items |
| `@fylgja/form-extend` | Validation messages, range, meter, and progress |
| `@fylgja/input-group` | Grouped inputs and buttons |
| `@fylgja/toast` | Brief messages and notifications |

Import a component by package name, for example `@import "@fylgja/card";`.

## Resources

- Documentation: https://fylgja.dev/
- UI gallery with copy-ready examples: https://fylgja.dev/ui/
- Source: https://github.com/fylgja/fylgja
