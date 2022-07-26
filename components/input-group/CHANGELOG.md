# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.1.1] - 2022-07-26
### Fixed
- Double CSS variables

## [1.1.0] - 2022-06-06
### Added
- The same CSS variables from the `@fylgja/form` to the `input-group` options

### Changed
- Moved logic for `input-extra` inside the `input-group`,
  using less class logic for building the layout,
  this also drops `input-extra` from the `input-group`
- Updated `@fylgja/form` to v1.0.6

### Removed
- flex grow/shrink styles from the form fields and input-extra,
  has no effect,
  if needed use the `@fylgja/utilpack` or any other utilities

## [1.0.1] - 2021-11-27
### Changed
- Removed input-group prefix from CSS imports for style versions

## [1.0.0] - 2021-06-22
Initial Release 🎉
