# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
### Added
- _Utilpack_: Visibility utility class
- _Transform_: More Transform translate utilities
- New Mq helper package

### Changed
- _Transform_: Make easier to edit via a separate variable

### Fixed
- _Utilpack_: text-break has wrong css value option
- _Base_: heading not inheriting the family-header CSS variable
- _Transform_: **[Breaking Change]** translate naming inconsistency
  the `-t-half` is now `-t-50` matching the naming used in the Utilpack.

## [1.0.2] - 2021-08-22
### Changed
- _Code_: moved SCSS variables to helper file

### Fixed
- _Form_: input color radius var is empty when null
- _Form_: missing focus style var,
  and merged border width and style to keep supporting CSSNano

## [1.0.0] - 2021-06-22
Initial Release 🎉
