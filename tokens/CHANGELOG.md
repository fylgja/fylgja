# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Unreleased

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

