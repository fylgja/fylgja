# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Unreleased

## 2.1.0 - 2025-08-02

### Added

- `gap-sm` as alias for `gap` with `--gap: 0.5em`, commen for cases where we use text with a icon
- `font-bold` and `font-normal` for basic font-weight control.
- `lead` utility for styling introductory text or footer headings.
- `radial-gradient` and `conic-gradient` as alternative styles for `bg-gradient`.

### Changed

- `border-gradient` now uses a background-based approach to support `border-radius`.
  This requires an inner background color for cross-browser compatibility until `background-clip: border-area` is widely adopted.
- Gradients now default to the **oklab** color space, when supported, creating smoother color transitions.

### Fixed

- Corrected the default `from` color in the `text-gradient` utility.

## 2.0.0 - 2025-03-12

This is a complete rebuild of the Fylgja Utilpak and renamed to Fylgja Utilities.

## 1.0.0 - 2021-06-22

Initial Release 🎉
