# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Unreleased

### Added

- Custom `-webkit-tap-highlight-color` to buttons to prevent the default browser highlight from affecting brand colors.

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
