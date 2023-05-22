# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.2.2] - 2023-05-22
### Changed
- Made prevent controll from shrinking by default when used in flex containers

## [1.2.1] - 2023-02-19
### Changed
- Simplified `@layer` support,
  CSS can use native, for SCSS use the new variable `$control-layer`,
  the options from v1.2 are deprecated

## [1.2.0] - 2023-02-04
### Added
- support for `@layer` in components scope

## [1.1.0] - 2022-06-05
### Added
- Moved style logic to mixin

### Changed
- Slimmed down the CSS by using the `:is` selector

### Fixed
- Unable to change control disable state trough CSS variables

## [1.0.0] - 2021-06-22
Initial Release 🎉
