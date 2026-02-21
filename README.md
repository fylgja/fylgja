<div align="center">

<a href="https://fylgja.dev/">
  <img src="https://raw.githubusercontent.com/fylgja/.github/main/assets/logo.svg" alt="Fylgja: Your Modular CSS Toolkit" width="300" height="130">
</a>

# Fylgja

**Your Modular CSS Companion**

[![Fylgja](https://img.shields.io/endpoint?url=https%3A%2F%2Fraw.githubusercontent.com%2Ffylgja%2F.github%2Frefs%2Fheads%2Fmain%2Fassets%2Fbadge%2Fv1.0.0.json)](https://fylgja.dev/)
[![CI](https://img.shields.io/github/actions/workflow/status/fylgja/fylgja/test.yml?color=%230969da&label=&branch=main&logo=github&labelColor=black)](https://github.com/fylgja/fylgja/actions)
[![Version](https://img.shields.io/npm/v/fylgja?color=%230969da&label=&logo=npm&labelColor=black)](https://www.npmjs.com/package/fylgja)
[![License](https://img.shields.io/github/license/fylgja/fylgja?color=%23ffb900&labelColor=black)](/LICENSE)

</div>

Built with modularity in mind, Fylgja CSS allows you to pick exactly what you need and combine it seamlessly with other solutions. Whether you're starting a new project or integrating complex UIs, Fylgja provides a flexible, lightweight foundation to streamline your development.

## Why Choose Fylgja?

- **🧩 Modular Design:** Include only the components you need, keeping your bundle lean and efficient.
- **⚡ Lightweight Core:** Start with a minimal footprint, optimized for performance.
- **🎨 Customization First:** Override styles effortlessly with low specificity and extensive CSS variable support.
- **🤝 Seamless Integration:** Works in harmony with frameworks like TailwindCSS, UnoCSS, and other tools.

## Core Ecosystem

Fylgja offers a suite of packages tailored to your development needs:

### [Fylgja Base](https://fylgja.dev/base/)
A robust foundation that goes beyond basic resets.
- Provides sensible default styles for common HTML elements using classless styling.
- Ensures cross-browser consistency without unnecessary overrides, leveraging `:where` for zero specificity.
- **Includes:** Improved browser defaults, form controls, and button styles out of the box.

### [Fylgja Tokens](https://fylgja.dev/tokens/)
A centralized system for managing design values (colors, spacing, typography).
- Available as SCSS or CSS variables for easy integration.
- Use Fylgja's build tools to tailor tokens to your specific brand requirements.

### [Fylgja Utilities](https://fylgja.dev/utilities/)
A collection of focused CSS utility classes.
- Designed to complement—not replace—utility-first frameworks.
- Seamlessly integrates with Fylgja Tokens and other variable-driven systems.

### [Fylgja Components](https://fylgja.dev/components/components/)
Ready-to-use, single-class components for building complex UI elements.
- Accelerates development with pre-styled, accessible components.
- Available as individual packages (e.g., `@fylgja/card`, `@fylgja/dialog`).

## Modularity in Action

Fylgja's modular architecture puts you in control. For instance, you can use **Fylgja Base** solely for its form styles without importing the entire library. This granular control ensures optimal performance and eliminates bloat.

## Performance Optimized

We prioritize performance. The minified **Fylgja Base** Preflight is only ~6kb, significantly smaller than many comparable libraries, ensuring your site loads fast.

## Effortless Customization

Designed for flexibility, Fylgja uses low CSS specificity and CSS variables, enabling you to adapt styles to your unique design system easily. The `:where` selector in **Fylgja Base** ensures your custom styles always take precedence without fighting specificity wars.

## Getting Started

Install the full Fylgja suite via NPM:

```bash
npm install fylgja
```

Or install individual packages as needed:

```bash
npm install @fylgja/base @fylgja/tokens
```

### Usage

Import the packages in your CSS:

```css
@import "@fylgja/base";
@import "@fylgja/tokens";
@import "@fylgja/utilities";
```

Or use via CDN:

```html
<link href="https://cdn.jsdelivr.net/npm/@fylgja/base/index.min.css" rel="stylesheet">
<link href="https://cdn.jsdelivr.net/npm/@fylgja/tokens/css/index.min.css" rel="stylesheet">
<link href="https://cdn.jsdelivr.net/npm/@fylgja/utilities/index.min.css" rel="stylesheet">
```

## Documentation

Explore the full documentation and component library at [fylgja.dev](https://fylgja.dev/).

## License

This project is licensed under the [MIT License](/LICENSE).
