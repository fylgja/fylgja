# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.2.2] - 2023-02-10
### Fixed
- Missing jit props export in `package.json`

## [1.2.1] - 2023-02-10
### Added
- Add jit props support

## [1.2.0] - 2022-12-15
### Added
- Support for `@layer` in components scope
  This is the last version as an CSS component,
  in the next release this will become a CSS Tokens pkg,
  dropping `@layer` and the legacy aspect-ratio CSS hack, for just tokens
- shadow dom support for props

## [1.1.1] - 2022-08-14
### Added
- Added support for both CommonJS and ESM import syntax's

## [1.1.0] - 2022-06-05
### Added
- Support for CSS design tokens,
  will become the default in v2 and moving the rest to a legacy import option

## [1.0.0] - 2021-06-22
Initial Release 🎉
