# AGENTS.md — AB506.church

> This is a **public repository**. Do not commit secrets, credentials, API keys, or internal URLs.

## Deployment Architecture

- **Hosting**: GitHub Pages (static export)
- **Build output**: `docs/` directory (via `next build` + `next export` → `out/` → `docs/`)
- **Branch**: `master` is production — merges trigger the GitHub Pages Actions workflow after Pages is configured for GitHub Actions
- **Build command**: `make build` (runs build, copies CNAME and .nojekyll)
- **Deploy command**: `.github/workflows/deploy-pages.yml` uploads the committed `docs/` directory to GitHub Pages. `make deploy` is legacy/admin-only and must not be used for PR work.

## Rules

1. **Never push directly to `master`.** Always create a feature branch and open a PR.
2. **Never merge your own PR.** Wait for operator approval.
3. **Screenshot required.** Every PR that touches UI must include a screenshot of the rendered result. Attach it to the PR description.
4. **Build and verify locally** before opening a PR:
    ```bash
    make build    # Build the NextJS site
    ```
    **Do NOT run `make deploy`** — that is admin-only.
5. **Keep PRs focused.** One logical change per PR. Don't bundle unrelated work.

## Repo Structure

```
├── src/
│   ├── pages/         # Next.js pages (file-based routing)
│   ├── components/    # React components
│   ├── constants/     # Site configuration (SEO, etc.)
│   └── styles/        # SCSS modules and global styles
├── docs/              # Static export output (committed for GitHub Pages)
├── next.config.js     # Next.js configuration
├── package.json       # Dependencies and scripts
└── Makefile           # Build and deploy commands
```

## Workflow

```
master ← PR ← feature-branch
```

1. `git checkout -b <descriptive-branch-name>` from `master`
2. Make changes
3. `make build` → verify locally
4. Take a screenshot of the relevant pages
5. Commit, push, open PR with screenshot attached
6. Wait for review and approval
7. Operator merges → GitHub Actions deploys the committed `docs/` site to GitHub Pages
8. After this workflow is merged, an admin must set repo **Settings → Pages → Source** to **GitHub Actions** and verify the first `Deploy GitHub Pages` run succeeds.

## Development

```bash
make install    # Install dependencies
make dev        # Start dev server on port 3000
make build      # Production build to docs/
make format     # Format code with prettier
```

## What Counts as UI Changes

If any of these files are touched, a screenshot is mandatory:

- Any `.js`, `.jsx`, `.css`, or `.scss` file
- Layout or component files
- Any page content that renders visually

Config-only or build-script changes don't require screenshots (but they're welcome).

## Security Guidelines

- Never commit `.env` files, API keys, or credentials
- This is a public repo — all code is visible

## AI Checklist

Before submitting changes:

- [ ] `make build` succeeds without errors
- [ ] No secrets or credentials in committed files
- [ ] Changes to `src/` are reflected in `docs/` via `make build`

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
