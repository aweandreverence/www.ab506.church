# www.ab506.church

[![Deploy GitHub Pages](https://github.com/aweandreverence/www.ab506.church/actions/workflows/deploy-pages.yml/badge.svg)](https://github.com/aweandreverence/www.ab506.church/actions/workflows/deploy-pages.yml)

Static Next.js export for AB506.church. The generated site is committed in `docs/` for GitHub Pages.

## Deployment

Merges to `master` deploy the committed `docs/` directory through `.github/workflows/deploy-pages.yml` after the repository Pages source is set to GitHub Actions.

After this workflow is merged, an admin must set repo **Settings → Pages → Source** to **GitHub Actions** and verify the first `Deploy GitHub Pages` run succeeds.
