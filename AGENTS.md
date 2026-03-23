# AGENTS.md — AB506.church

> This is a **public repository**. Do not commit secrets, credentials, API keys, or internal URLs.

## Deployment Architecture

- **Hosting**: GitHub Pages (static export)
- **Build output**: `docs/` directory (via `next build` + `next export` → `out/` → `docs/`)
- **Branch**: `master` is production — merges trigger deployment
- **Build command**: `make build` (runs build, copies CNAME and .nojekyll)
- **Deploy command**: `make deploy` (builds, commits `docs/`, pushes to master)

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
7. Operator merges → admin runs `make deploy` → GitHub Pages deploys from `docs/`

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
