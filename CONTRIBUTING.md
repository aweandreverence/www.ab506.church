# Contributing to AB506.church

## Branch Policy

**No direct pushes to `master`.** All changes must go through a Pull Request.

1. Create a feature branch from `master`
2. Make your changes
3. Open a PR against `master`
4. Get at least one approval
5. Merge the PR

## Screenshot Requirement

**Every PR that touches UI must include a screenshot** attached to the PR description. This is non-negotiable — reviewers need to see what changed visually before approving.

For non-visual changes (config, docs-only, build scripts), a screenshot is optional but appreciated.

## Build & Deploy

This site uses NextJS with static export to the `docs/` directory, deployed via GitHub Pages Actions from the committed `docs/` directory.

```bash
# Build the NextJS site (all contributors)
make build
```

**`make deploy` is legacy/admin-only and not part of PR work.** Contributors should only run `make build` to verify their changes locally.

After the Pages Actions workflow is merged, an admin must set repo **Settings → Pages → Source** to **GitHub Actions** and verify the first `Deploy GitHub Pages` workflow run succeeds.

## Architecture

- **NextJS** — shared components, layouts, headers/footers
- **Static export** — `docs/` directory serves via GitHub Pages
- **Source code** — lives in `src/` directory

<!-- ar-engineering-handbook:start -->
## A&R maintainers: Shared engineering guidance

Reference revision: `5cef9e63509ede20e776b614ef44464454b57ebe`.

- [Engineering handbook](https://github.com/aweandreverence/engineering/blob/5cef9e63509ede20e776b614ef44464454b57ebe/README.md)
- [Architecture and ownership](https://github.com/aweandreverence/engineering/blob/5cef9e63509ede20e776b614ef44464454b57ebe/architecture.md)
- [Applicable style guide](https://github.com/aweandreverence/engineering/blob/5cef9e63509ede20e776b614ef44464454b57ebe/style/typescript-ui.md)
- [Review checklist](https://github.com/aweandreverence/engineering/blob/5cef9e63509ede20e776b614ef44464454b57ebe/review-checklist.md)
- [Adoption and exceptions](https://github.com/aweandreverence/engineering/blob/5cef9e63509ede20e776b614ef44464454b57ebe/adoption.md)

This is a private, optional reference for A&R maintainers. Outside contributors
are not required to access it; this repository's public instructions remain
self-contained and authoritative for their contributions. Do not copy private
handbook contents into this public repository or upstream PRs.

Keep repository-specific security, domain, build and deployment instructions in
this repo. This reference does not authorize migrations, runtime upgrades, merges
or deployments. Resolve substantive conflicts explicitly and record local
exceptions; do not silently overwrite existing policy. Follow SPEAR proportionately:
scope, plan, execute, assess, resolve. Update the pinned revision through a PR.
<!-- ar-engineering-handbook:end -->
