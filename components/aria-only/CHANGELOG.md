# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.2.2] - 2022-11-05
### Changed
- use Fylgja Theme atLayer for building the `@layer` variant

## [1.2.1] - 2022-11-05
### Added
- `@layer` support

### Fixed
- aria-only-focusable now also visible if it has focus within
- imports for PostCSS import [#121](https://github.com/fylgja/fylgja/issues/121)

## [1.1.1] - 2022-06-05
### Changed
- Import path for CSS mq version,
  instead of `@import @fylgja/aria-only/aria-only-mq` you can now use `@import @fylgja/aria-only/mq`,
  The old version will be dropped in v2

## [1.1.0] - 2021-10-10
### Added
- breakpoint option, (enable this option with `$enable-aria-only-mq`)

## [1.0.0] - 2021-06-22
Initial Release 🎉
