# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.3.0] - 2023-02-11
### Added
- Force columns modifier class,
  incase the list is not part of the direct flow of rows modifier class

### Removed
- Cleanup unused variable (`--menu-items`)

## [1.2.0] - 2023-02-05
### Added
- support for `@layer` in components scope

## [1.1.2] - 2022-06-06
### Changed
- Slimmed down the CSS by using the `:is` selector
- Moved style logic to mixin

## [1.1.1] - 2022-03-21
### Fixed
- default auto-selector for use with Hyva (Tailwind `@apply`) with `.btn`
- Fixed import order for full Fylgja package, by moving base styles to top

## [1.1.0] - 2021-10-10
### Changed
- **[Possible Breaking Change]** Removed extra list layer from menu
  This makes the CSS component smaller and easier to edit

## [1.0.0] - 2021-06-22
Initial Release 🎉
