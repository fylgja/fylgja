# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.1.3] - 2023-02-19
### Changed
- Simplified `@layer` support,
  CSS can use native, for SCSS use the new variable `$auto-grid-layer`,
  the options from v1.1 are deprecated

## [1.1.2] - 2022-11-05
### Changed
- use Fylgja Theme atLayer for building the `@layer` variant

## [1.1.1] - 2022-11-05
### Fixed
- imports for PostCSS import [#121](https://github.com/fylgja/fylgja/issues/121)

## [1.1.0] - 2022-07-24
### Added
- support for `@layer` in components scope

## [1.0.4] - 2022-06-05
_Nothing besides docs_

## [1.0.3] - 2022-03-21
### Fixed
- **[Possible Breaking Change]** Also Scoped the gap variable,
  making all of the auto-grid variables scoped.
- Relative PostCSS import option

## [1.0.2] - 2021-11-27
### Fixed
- **[Possible Breaking Change]** Scoped the variables

## [1.0.0] - 2021-06-22
Initial Release 🎉
