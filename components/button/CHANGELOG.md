# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
### Added
- _Only for this version (v1.2.0),_
  support to enable native element/button,
  with the SCSS version of Fylgja by setting `$enable-native-btn` to true
  This will be default behavior for v2

### Changed
- Prepare for Fylgja v2 with native focus rings,
  This will drop any variables with focus for hover,
  since the logic is split from the focus style
- Slimmed down the CSS by using the `:is` selector

### Fixed
- Disabled state from top level, for forms

## [1.0.1] - 2022-03-21
### Changed
- Moved style logic to mixin

## [1.0.0] - 2021-06-22
Initial Release 🎉
