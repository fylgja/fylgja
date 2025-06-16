# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Unreleased

### Added

- Support for `[aria-disabled="true"]` on buttons to better accommodate JavaScript-driven disabled states.

### Changed

- Removed `-webkit-tap-highlight-color` on buttons to prevent the default browser highlight from affecting the active color.
  Also add consistency between link and normal buttons when clicked or tapped.

### Removed

- `article` element from scoped preflight styles, allowing only class-based options.
  This change was made because lists of products or posts can also be considered articles,
  making the previous default behavior for the scoped version less appropriate.

## 2.0.0 - 2025-03-12

Fylgja Base has been completely rebuilt,
consolidating core v1 classless components into a single,
highly optimized package.

Designed for minimal size without sacrificing features,
it delivers a comprehensive starter, normalization, and preflight CSS solution.

## 1.0.0 - 2021-06-22

Initial Release 🎉
