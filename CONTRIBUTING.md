# Contributing to Fylgja

Thanks for helping out! This guide covers the specifics of working in this repository. For general etiquette on raising issues and PRs, see the [org-wide contributing guide](https://github.com/fylgja/.github/blob/main/.github/contributing.md).

## Repository structure

This is a monorepo. Each package is published independently to npm under the `@fylgja` scope:

- `base/`, `tokens/`, `utilities/` — core packages, also bundled together into the root `fylgja` metapackage.
- `components/*` — individual components (`badge`, `breadcrumbs`, `card`, `form-extend`, `input-group`, `toast`).
- `props-builder/` — the Design Token → CSS custom properties build tool.
- `_tests/base` and `_tests/components` — example Vite apps for manually previewing changes in a browser.

## Getting set up

```bash
nvm use   # repo targets the Node version in .nvmrc
npm ci
```

## Making changes

Each package builds independently from its own directory, e.g.:

```bash
cd base
npm run build
```

To visually check a change in the browser, run one of the example apps:

```bash
cd _tests/base        # or _tests/components
npm install
npm start
```

## Code style / Testing

Run `npm test` from the repo root before submitting a PR — this lints all CSS against the shared [`@fylgja/stylelint-config`](https://github.com/fylgja/stylelint-config).

`props-builder` also has its own unit tests:

```bash
cd props-builder
npm test
```

## Commit messages

Commits in this repo are prefixed by type, e.g. `ADD:`, `FIX:`, `IMP:` (improvement), `UPD:` (dependency/version update). Please follow this convention.

## Changelog

If your change is user-facing, add an entry under `## Unreleased` in the relevant `CHANGELOG.md` (root and/or the affected package), following [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## Security

Please don't report security vulnerabilities via a public issue — see [SECURITY.md](./SECURITY.md).
