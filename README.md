<div align="center">
<div role="heading" aria-level="1">
  <a href="https://fylgja.dev/">
    <img src="https://raw.githubusercontent.com/fylgja/.github/main/assets/logo.svg" alt="Fylgja: Your Modular CSS Toolkit" width="300" height="130">
  </a>
</div>

The flexible and lightweight CSS library designed to streamline your web development.

[![GitHub Workflow Status](https://img.shields.io/github/actions/workflow/status/fylgja/fylgja/test.yml?branch=main&logo=github)](https://github.com/fylgja/fylgja/actions)
[![NPM version](https://img.shields.io/npm/v/fylgja?logo=npm)](https://www.npmjs.com/package/fylgja)
[![License](https://img.shields.io/github/license/fylgja/fylgja?color=%23234)](/LICENSE)

</div>

**Fylgja CSS** empowers developers with a modular and customizable approach to styling web projects. Unlike monolithic frameworks, Fylgja provides focused solutions that enhance your workflow without adding unnecessary bloat.

## Why Choose Fylgja?

* **Modular Design:** Include only the components you need, keeping your CSS lean and efficient.
* **Lightweight Core:** Start with a minimal footprint, thanks to optimized components and a size-conscious philosophy.
* **Customization First:** Easily override styles with low specificity and leverage CSS variables for quick adjustments.
* **Seamless Integration:** Works harmoniously with existing tools like TailwindCSS or UnoCSS.

## Core Components

Fylgja offers a suite of modular components to suit your development needs:

* **Fylgja Base:**
    * A robust foundation that goes beyond basic resets.
    * Provides sensible default styles for common HTML elements using classless styling.
    * Ensures cross-browser consistency without unnecessary overrides, leveraging `:where` for zero specificity.
    * Example: A better browser default, form and button styles out of the box.
* **Fylgja Tokens (Props):**
    * A centralized system for managing design values (colors, spacing, etc.).
    * Available as SCSS or CSS variables for easy integration and customization.
    * Use Fylgja's build tools to tailor tokens to your project's specific requirements.
* **Fylgja Utilities:**
    * A collection of focused CSS utility classes.
    * Designed to complement, not replace, utility-first frameworks.
    * Seamlessly integrates with Fylgja Tokens, Open Props, or other variable-driven systems.
* **Fylgja Components:**
    * Ready-to-use, single-class components for building complex UI elements.
    * Accelerates development by providing pre-styled, reusable components.

## Modularity in Action

Fylgja's modularity allows you to pick and choose the components that fit your project's needs. For instance, you can use **Fylgja Base** solely for its form styles, without importing other elements. This granular control ensures optimal performance and minimal bloat.

## Performance Optimized

Fylgja prioritizes performance by delivering lightweight components. For example, the minified **Fylgja Base** Preflight is only 6kb, significantly smaller than many comparable libraries.

## Effortless Customization

Fylgja is designed for effortless customization. Low CSS specificity and the use of CSS variables enable you to easily adapt styles to your project's unique design. The `:where` selector within **Fylgja Base** ensures that your custom styles are never overridden unintentionally.

## Getting Started

Explore the Fylgja documentation at [fylgja.dev](https://fylgja.dev/) to learn how to integrate Fylgja into your workflow.

```bash
npm install fylgja
```

Start building your next project with the flexibility and efficiency of Fylgja.
