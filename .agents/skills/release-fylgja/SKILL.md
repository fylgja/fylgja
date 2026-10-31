---
name: release-fylgja
description: Use when preparing or publishing a release of packages in the Fylgja monorepo, including version bumps, changelogs, checking what changed since the last publish, and running the publish workflows. For Fylgja maintainers, not for projects that use Fylgja.
---

# Release Fylgja

Every package publishes on its own through a GitHub Actions workflow, so each version gets npm provenance. Never run `npm publish` by hand.

## 1. Check main

The `test` job must pass on main, because every publish workflow except props-builder depends on it. A failure from an unrelated package still blocks the publish.

## 2. Find what changed

Compare each package with what npm actually has, not only with git history:

```bash
npm pack --pack-destination /tmp/local
curl -s "$(npm view @fylgja/card dist.tarball)" | tar xz -C /tmp/published
diff -ru /tmp/published/package /tmp/local/package
```

- A package with no changes in its files does not need a release.
- Check that the built CSS matches the source. If `src/` differs but `index.css` does not, the build was skipped. Run `npm run build` in that package.
- Ignore whitespace only changes in `.min.css` files.

## 3. Pick the version

- **Major**: removes or renames something users rely on. The maintainer can choose a minor when the removed part never worked as intended.
- **Minor**: adds a feature, or changes how something looks by default.
- **Patch**: bug fixes and documentation.

## 4. Bump and write the changelog

Run this in the package folder. It updates `package.json` and the lockfile:

```bash
npm version 2.3.0 --no-git-tag-version --ignore-scripts
```

Then in that package's `CHANGELOG.md`, add a `## 2.3.0 - YYYY-MM-DD` heading below `## Unreleased`, using the publish date, and move the unreleased entries under it. Keep the empty `## Unreleased` heading.

## 5. Merge conflicts in built files

Two branches that both rebuild CSS will conflict in the `.min.css` files. Never resolve these by hand. Merge, run `npm run build` in the package, and stage the result.

## 6. Publish

The maintainer runs the workflows from the Actions tab, on main, once the release is merged. Each package has its own `publish-{name}.yml`, and `publish.yml` is the root package.

- Publish the packages first, and the root `fylgja` package last.
- Run one workflow first as a test. An auth error means the npm trusted publisher settings do not match the workflow filename.
- A new package has to exist on npm before it can use trusted publishing, so its first publish is manual.

## 7. Update the root package

The root depends on `@fylgja/base`, `@fylgja/tokens`, and `@fylgja/utilities`. `.npmrc` sets `min-release-age=1`, so a version from today cannot be installed. Only the maintainer may lower that setting. Ask them to, and do not change it yourself.

Then update the dependencies and add the release to the root `CHANGELOG.md`, with a section per package.

## 8. Verify

```bash
npm view @fylgja/card version dist.attestations.provenance.predicateType
```

Each published package should show its new version and a provenance type.

If a release renames or removes a class, variable, or import, update [fylgja/skills](https://github.com/fylgja/skills) too.
