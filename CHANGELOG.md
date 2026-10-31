# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Unreleased

### Changed

- The Fylgja CSS skill moved from `ai-skill` to `.agents/skills/fylgja-css`, and now has reference files for Base, Tokens, Utilities, and Components, so reinstall the whole folder. It has been rewritten around clear rules, with corrected paths and variable names.
- Added the `create-fylgja-modal` and `create-fylgja-offcanvas` skills.
- The skills can now be installed as a Claude Code plugin with `/plugin marketplace add fylgja/fylgja`.
- All packages are now published through GitHub Actions with npm provenance.

### [@fylgja/base] 2.2.0

Adds defaults for popovers that are not a dialog, a search input clear button that scales with the font size and follows the text color, and a print rule for the content of closed `details`. The theme now colors the `legend` of an invalid `fieldset`. For full details see the [@fylgja/base] changelog.

### [@fylgja/tokens] 2.3.0

Adds a Design Tokens Resolver 2025.10 file. Also fixes `--hue`, `--chroma`, and `--shadow-color` having no effect on an element when using the full CSS bundle, and dark mode shadows not applying. For full details see the [@fylgja/tokens] changelog.

### [@fylgja/utilities] 2.2.0

Toggle utilities now react to popover invokers. Also fixes the `scroll-mask` fade in minified builds and `sr-only` text wrapping. For full details see the [@fylgja/utilities] changelog.

## 2.2.2 - 2026-07-06

### [@fylgja/utilities] 2.1.4

Minor fixes and improvements. For full details see the [@fylgja/utilities] changelog.

## 2.2.1 - 2026-06-10

### Added

- New CLI via `npx fylgja@latest add <target>`. Copy any Fylgja CSS file directly into your project without installing anything. Run `npx fylgja@latest help` to see all available targets.

### [@fylgja/base] 2.1.6

Minor fixes and improvements. For full details see the [@fylgja/base] changelog.

### [@fylgja/tokens] 2.2.1

Minor fixes and improvements. For full details see the [@fylgja/tokens] changelog.

### [@fylgja/utilities] 2.1.3

Updated Sass `if()` syntax to the modern CSS-compatible form. Requires Sass 1.77.0 or higher when compiling from source. Also fixes `flex-col` and `flex-wrap` shorthands incorrectly overriding display on dialog and popover elements. For full details see the [@fylgja/utilities] changelog.

## 2.1.0 - 2025-08-06

This release brings a host of improvements across the Fylgja library, focusing on new features, performance enhancements, and an improved developer experience.

### [@fylgja/base]

This update enhances accessibility with improved `aria` attribute support, boosts performance by optimizing smooth scrolling, and refines form styles. For more details, see the [@fylgja/base] changelog.

### [@fylgja/tokens]

This version introduces support for animating hue values and fixes the design token output for better standards compliance. For more details, see the [@fylgja/tokens] changelog.

### [@fylgja/utilities]

This release is packed with new utilities like `scroll-mask` and `nowrap`, modernizes gradients, and refactors the divide utilities. This version includes breaking changes. For more details, see the [@fylgja/utilities] changelog.

## 2.0.0 - 2025-03-17

**Modular Core:** We've decoupled Fylgja into three distinct, highly optimized packages:
- [@fylgja/base]: A comprehensive starter, normalization, and preflight CSS solution. It consolidates core v1 classless components, previously distributed across multiple packages like @fylgja/forms, into a single, lean package.
- [@fylgja/tokens]: A focused package containing all core v1 token components, now consolidated and optimized.
- [@fylgja/utilities]: A complete rebuild of the former Utilpak, now providing a powerful set of utility classes.

**Decoupled CSS Components:** CSS components are no longer included in the meta package fylgja. They now need to be installed separately, giving you greater control over your project's dependencies.

**Meta Package Refinement:** The fylgja meta package has been refined to solely manage dependencies. It no longer includes any code, ensuring a lighter footprint.

For a deep-dive into everything that's new, [check out the announcement post](https://fylgja.dev/blog/release-of-version-2/)

## 1.0.0 - 2021-06-22 / 1.3.4 - 2023-10-10

For all changed from v1, please see: https://github.com/fylgja/fylgja/blob/version-1/CHANGELOG.md

[@fylgja/base]: https://github.com/fylgja/fylgja/blob/main/base/CHANGELOG.md
[@fylgja/tokens]: https://github.com/fylgja/fylgja/blob/main/tokens/CHANGELOG.md
[@fylgja/utilities]: https://github.com/fylgja/fylgja/blob/main/utilities/CHANGELOG.md
