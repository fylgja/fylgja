# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.0.7] - 2023-02-20
### Added
- support for dark mode

## [1.0.5] - 2023-01-02
### Added
- Support for mjs & cjs exports,
  to make this easier to maintain cjs export options in the Fylgja tokens pkg's,
  also adds the option for creating exports for [postcss-jit-props](https://github.com/GoogleChromeLabs/postcss-jit-props)

### Changed
- FileType return checker syntax, for readability
- Simplified the build steps in the main file for readability

## [1.0.4] - 2022-10-05
### Fixed
- json types

## [1.0.2] - 2022-08-18
### Added
- suffix support

## [1.0.1] - 2022-08-15
### Fixed
- use case where the scss escape for `/` is not needed,
  by adding an option to disable it,
  use `safeMode: false`

## [1.0.0] - 2022-07-20
Initial Release 🎉

## [0.1.0] - 2022-06-05
Beta Release
