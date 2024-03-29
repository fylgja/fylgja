# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.2.2] - 2023-02-20
### Changed
- update `@fylgja/mq`

## [1.2.1] - 2023-02-19
### Changed
- Simplified `@layer` support,
  CSS can use native, for SCSS use the new variable `$transform-layer`,
  the options from v1.2 are deprecated

## [1.2.0] - 2023-02-05
### Added
- support for `@layer` in utilities scope

## [1.1.1] - 2021-10-10
### Added
- More Transform translate utilities

### Changed
- Make it easier to edit via a separate variable

### Fixed
- **[Breaking Change]** translate naming inconsistency
  the `-t(y/x)-half` is now `-t(y/x)-50` matching the naming used in the Utilpack

## [1.0.0] - 2021-06-22
Initial Release 🎉
