# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Unreleased

## 2.1.1 - 2025-08-04

### Changed

- Updated the divide utilities to support both `gap` and `flow` for more flexible horizontal spacing.

## 2.1.0 - 2025-08-03

### Added

- `gap-sm` as an alias for `gap`, setting `--gap` to `0.5em` for spacing icons next to text.
- `font-bold` and `font-normal` for basic font-weight control.
- `lead` utility for styling introductory text or footer headings.
- `nowrap` for keeping text one line.
- `scroll-mask` utility to apply a gradient mask, indicating more content is available in scrollable areas.

### Changed

- Updated `border-gradient` to a background-based method to support `border-radius`. This includes a fallback requiring an inner background color for browsers that do not support `background-clip: border-area`.
- Gradients now default to the **oklab** color space where supported, resulting in smoother color transitions.
- Refactored `divide-y` and `divide-x` to use the `flow` utility for managing gaps.
- Cleaned up selectors to reduce overall file size.

### Fixed

- Corrected the default `from` color in the `text-gradient` utility.

### Removed

- **Breaking Change:** Removed specific `:not()` selectors from the Divide and Flow utilities, streamlining the implementation with CSS variables.
- **Breaking Change:** Removed the `divide-y-gap` and `divide-x-gap` utilities. Please use the `flow` utility directly to achieve similar results.

## 2.0.0 - 2025-03-12

This is a complete rebuild of the Fylgja Utilpak and renamed to Fylgja Utilities.

## 1.0.0 - 2021-06-22

Initial Release 🎉
