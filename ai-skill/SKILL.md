---
name: fylgja-css
description: Guidance on using the Fylgja CSS library, its class-less base, design tokens, dynamic utilities, and native HTML components. Trigger when the user wants to use Fylgja CSS for styling.
---

# Fylgja CSS Skill

This skill provides context and instructions for working with the Fylgja CSS library. Fylgja emphasizes native HTML, design tokens, and dynamic utilities. It operates differently from standard utility-first frameworks like Tailwind.

**GitHub Repository:** https://github.com/fylgja/fylgja

## Fylgja Base

Fylgja Base provides a streamlined starting point for any web project. It is a collection of class-less solutions, allowing you to focus on building your site using plain HTML without needing additional classes.

- **GitHub**: https://github.com/fylgja/fylgja/tree/main/base
- **Installation**: `npm install @fylgja/base`
- **Full Import**: `@import "@fylgja/base";`
- **Granular Imports**:
  - `@fylgja/base/preflight.css` (typography and tables)
  - `@fylgja/base/btn.css` (HTML Button styles + `.btn` class for links)
  - `@fylgja/base/form.css` (form styles)
  - `@fylgja/base/dialog.css` (dialog and popover styles)
- **Theme**: Base is intentionally clean. To apply a pre-defined theme, use `@import "@fylgja/base/theme.css";`. The theme includes styles for dark mode, brand colors, primary buttons, and more. You can customize the theme by running `npx @fylgja/base`.

## Fylgja Tokens

Fylgja Tokens establish a consistent design language using a predefined set of design tokens (variables) for spacing, colors, typography, etc.

- **GitHub**: https://github.com/fylgja/fylgja/tree/main/tokens
- **Installation**: `npm install @fylgja/tokens`
- **Full Import**: `@import "@fylgja/tokens/css";` (Also available in `scss`, `js`, and `tailwind` formats).
- **Key Token Categories**:
  - **Colors**: Uses dynamic colors modifying ranges via `--hue` and `--chroma`.
  - **Typography**: Responsive font sizes and line heights.
  - **Media Queries**: Named `@custom-media` queries (e.g., `--md`, `--scheme-dark`, `--touch`).
  - **Layout**: Aspect ratios, border sizes/radii, shadows, sizes, and z-layers.
- **Granular Imports**: Import only what you need, like `@fylgja/tokens/css/colors.css`.

## Fylgja Utilities

A focused collection of production-ready CSS utilities. Fylgja relies heavily on "Dynamic CSS Utilities" which use CSS variables to modify behavior, minimizing the number of classes.

- **GitHub**: https://github.com/fylgja/fylgja/tree/main/utilities
- **Installation**: `npm install @fylgja/utilities`
- **Full Import**: `@import "@fylgja/utilities";`
- **Granular Imports**: Use specific utilities like `@import "@fylgja/utilities/flex.css";`.
- **Key Concept**: Instead of generating a specific utility class for every possible value (like Tailwind's `my-4`, `lg:my-8`, `justify-center`), Fylgja uses a main utility class (or sometimes none at all) and relies on CSS variables set via inline styles.
  - **Values**: Set behavior using variables. Example: `class="align" style="--align: center"` or `class="auto-grid" style="--max-cols-size: 15ch"`.
  - **Spacing Utilities**: Margin and padding can be set directly via inline style variables without any class, e.g., `style="--my: 1rem; --px: 2rem"`.
  - **Breakpoints**: Responsive variations are applied directly within the inline styles using prefixes on the variable name, e.g., `style="--my: 1rem; --lg_my: var(--size-4)"` (where `lg_` corresponds to the large breakpoint).

## Components

Fylgja embraces native HTML over heavy, class-based component structures. Instead of relying on complex custom classes for every component, it leverages **Fylgja Base** styles applied to semantic HTML elements.

- **GitHub**: https://github.com/fylgja/fylgja/tree/main/components
- **Native HTML First**: For example, a **Button** actually uses the Fylgja Base directly. By simply using the native `<button>` element or adding the `.btn` class to an `<a>` tag, you inherit the Fylgja Base styles without needing a dedicated component library import.
- **Styling**: For visual styling of these components, you can reference the **Fylgja Base Theme** import (`@fylgja/base/theme.css`). The theme provides the actual colors, dark mode support, and interactive states (like primary button styles) on top of the base HTML functionality.
- **Custom Components**: For UI elements not covered by native HTML, Fylgja provides lightweight CSS components that follow the same token-driven design principles. The offered components include:
  - **Badge**: Display compact labels or status indicators alongside other UI elements.
  - **Breadcrumbs**: A simple, accessible way to render breadcrumb navigation.
  - **Card**: Create grouped content for product items, blog items, or a dropdown panel.
  - **Form Extend**: Enhance forms with advanced features, including native validation and flexible styling for a wide range of form fields.
  - **Input Group**: Create smarter, intuitive form controls by grouping inputs and buttons together.
  - **Toast**: Display brief, transient messages and notifications (such as alerts or inline messages) across your UI.
