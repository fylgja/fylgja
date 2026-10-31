# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Unreleased

## 2.3.0 - 2026-10-31

### Added

- A Design Tokens Resolver 2025.10 file (`tokens/fylgja.resolver.json`).
  Sizes using `calc()`, `clamp()` or `ch` are left out, since the specification can't express them.

### Fixed

- The full CSS bundle (`css/index.css`) defined colors and shadows on `:root`, so setting `--hue`, `--chroma`, or `--shadow-color` on an element had no effect. They now use `*`, like their granular files.
- Dark mode shadows never applied, because `*` set the light `--shadow-color` on every element. `--shadow-color` now stays on `:root` in `css/shadows.css`, and the dark override comes after it in the bundle.
- Restored the copyright banner in `css/index.css`.

### Changed

- Published through GitHub Actions with npm provenance

## 2.2.1 - 2026-06-10

### Added

- Missing copyright banners to the CSS files so the new npx command, has the right meta information.

## 2.2.0 - 2026-01-02

### Added

- Gray colors to static colors output
- Static Colors to CSS import options
- Support for TailwindCSS

### Changed

- **Partial Breaking change**: Reworked the shadows to simpler solution for colors, allowing easier adjustmen using only 1 CSS var
  if you used the internal option for shadow weights, make sure to update this import.
  If you used the `--shadow-color-{umbra,penumbra,ambient}` or `--shadow-strength` CSS vars, make sure to update this to `--shadow-color`.

## 2.1.0 - 2025-07-19

### Added

- Support for animations on the **hue** values

### Fixed

- Incorrect type output in `design-token` syntax

## 2.0.0 - 2025-03-16

Fylgja Tokens has been completely rebuilt,
consolidating core v1 tokens components into a single,
highly optimized package.

## 1.0.0 - 2023-02-20

Initial Release 🎉
