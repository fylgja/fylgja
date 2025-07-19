# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Unreleased

## 2.0.1 - 2025-07-19

### Fixed
- Incorrect type output in `design-token` syntax

## 2.0.0 - 2025-03-16

A complete rewrite of the props builder has resulted in a cleaner,
more efficient architecture.

The argument list has been significantly reduced,
and the parser layer has been redesigned for enhanced extensibility.

A direct output export option has been added,
enabling direct access and modification of the parsed props.

## 1.2.0 - 2024-06-22

### Changed
- default selector to `:where(:root)`

### Fixed
- `varPrefix` having no effect on JSON and JS files

## 1.1.0 - 2023-04-29

### Added
- Support for removing the default key from the name output, this enable by default

## 1.0.8 - 2023-04-28

### Added
- Support for array values

## 1.0.7 - 2023-02-20

### Added
- Support for dark mode

## 1.0.5 - 2023-01-02

### Added
- Support for mjs & cjs exports,
  to make this easier to maintain cjs export options in the Fylgja tokens pkg's,
  also adds the option for creating exports for postcss-jit-props(https://github.com/GoogleChromeLabs/postcss-jit-props)

### Changed
- FileType return checker syntax, for readability
- Simplified the build steps in the main file for readability

## 1.0.4 - 2022-10-05

### Fixed
- json types

## 1.0.2 - 2022-08-18

### Added
- Suffix support

## 1.0.1 - 2022-08-15

### Fixed
- use case where the scss escape for `/` is not needed,
  by adding an option to disable it,
  use `safeMode: false`

## 1.0.0 - 2022-07-20

Initial Release 🎉
