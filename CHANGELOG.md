# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
### Changed
- Make transform-utils easier to edit via a separate variable

### Fixed
- **[Breaking Change]** Transform util translate naming inconsistency
  the `-t-half` is now `-t-50` matching the naming used in the utilpack.

## [1.0.2] - 2021-08-22
### Changed
- Code moved SCSS variables to helper file

### Fixed
- Form input color radius var is empty when null
- Form missing focus style var,
  and merged border width and style to keep supporting CSSNano

## [1.0.0] - 2021-06-22
Initial Release 🎉
