# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.1.1] - 2022-07-24
### Fixed
- Lint warning

## [1.1.0] - 2022-06-05
### Added
- block and inline SCSS vars for v2,
  you can use them, but each value will be passed to the current SCSS var for now

### Changed
- ul and ol nested syntax to `:is` selector, this makes the CSS smaller
- h{1/6} syntax to `:is` selector, this makes the CSS smaller

## [1.0.2] - 2021-10-17
### Fixed
- Corrected heading first child insistent margin-top unset

## [1.0.1] - 2021-10-10
### Added
- `accent-color` option

### Fixed
- heading not inheriting the family-header CSS variable

## [1.0.0] - 2021-06-22
Initial Release 🎉
