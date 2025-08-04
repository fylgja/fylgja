# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Unreleased

### Changed

- Selector for smooth scrolling to improve render performance

## 2.1.0 - 2025-08-01

### Added

- Support for `[aria-disabled="true"]` on buttons to better accommodate JavaScript-driven disabled states.
- Support for `[aria-selected="true"]` on buttons to better accommodate JavaScript-driven active states.

### Changed

- Removed `-webkit-tap-highlight-color` on buttons to prevent the default browser highlight from affecting the active color.
  Also add consistency between link and normal buttons when clicked or tapped.
- Trimmed down the selector for the default styles for the `::file-selector-button`, not scoping it by default under the `input:file`

### Removed

- `article` element from scoped preflight styles, allowing only class-based options.
  This change was made because lists of products or posts can also be considered articles,
  making the previous default behavior for the scoped version less appropriate.
- Opacity style from disabled form state, allowing custom color options and fixed the A11Y bug with `input:file`
- `flow-root` from `article` and `section`, makes more sense as a utility
- the cursor style from `abbr[title]`,
  This feature, should be avoided and inline explanation should be used instead for better A11Y.
- margin between sibling fieldsets, for easier access for flex and grid layouts

## 2.0.0 - 2025-03-12

Fylgja Base has been completely rebuilt,
consolidating core v1 classless components into a single,
highly optimized package.

Designed for minimal size without sacrificing features,
it delivers a comprehensive starter, normalization, and preflight CSS solution.

## 1.0.0 - 2021-06-22

Initial Release 🎉
