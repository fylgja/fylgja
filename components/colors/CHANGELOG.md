# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- Add oklch props support
- Add new colors Green Gray and Red Gray

### Changed
- Replaced [Open color](https://yeun.github.io/open-color/) with our own build colors, power by oklch color syntax
- Rebuild the generation tools for the building the colors

### Fixed
- Incorrect render of the color Indigo

## [1.1.1] - 2023-04-30
### Changed
- Swapped out the old hsl builder for the new one powered by [colorjs.io](https://colorjs.io/)

## [1.1.0] - 2023-02-10
### Added
- Add jit props support

### Changed
- Officially add shadow dom support with host import

### Removed
- **Possible Breaking Change** dropped older `shadowdom.css` import,
  use `hex.host.css` instead

## [1.0.8] - 2022-11-05
### Changed
- shadow dom naming from shadow to host

## [1.0.7] - 2022-08-18
### Fixed
- Dropped hsl suffix in JS map

## [1.0.6] - 2022-08-16
### Fixed
- Missing import option for JS hsl syntax

## [1.0.5] - 2022-08-13
### Added
- Added support for both CommonJS and ESM import syntax's

## [1.0.2] - 2022-07-24
### Fixed
- Docs

## [1.0.1] - 2022-07-24
### Changed
- Drop prefixed name from alternative import options

## [1.0.0] - 2022-07-24
Initial Release 🎉
