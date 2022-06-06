# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.0.5] - 2022-06-06
### Fixed
- Padding inline end missing for file input text

## [1.0.5] - 2022-06-05
### Added
- Moved select style logic to mixin

### Fixed
- file input incorrect rendering of negative margin padding hack,
  **[Possible Breaking Change]** `$form-file-gap-[y/x]` has no effect anymore,
  will be dropped in v2
- safari data input height difference
- safari overflow in long option text for select field [(fixes #66)](https://github.com/fylgja/fylgja/issues/66)

## [1.0.4] - 2022-03-21
### Added
- scss option added, to set the `$label-margin`

## [1.0.3] - 2021-11-27
### Changed
- **[Possible Breaking Change]** removed input prefix from type,
  Making it easier to edit the form styles with utility classes
- Removed form prefix from CSS imports for style versions

## [1.0.2] - 2021-08-22
### Fixed
- input color radius var is empty when null
- missing focus style var,
  and merged border width and style to keep supporting CSSNano

## [1.0.0] - 2021-06-22
Initial Release 🎉
