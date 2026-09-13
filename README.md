# pranavkapale.github.io

> **Pranav Kapale | Data, AI & Backend Engineer** — Personal portfolio built with [MkDocs Material](https://squidfunk.github.io/mkdocs-material/).

## Local Development

```bash
# Install dependencies
pip install mkdocs-material

# Serve locally with hot-reload
mkdocs serve

# Build static site
mkdocs build
```

## Project Structure

```text
.
├── mkdocs.yml                  # MkDocs configuration
├── overrides/                  # Custom templates (Hero section)
├── docs/
│   ├── index.md                # Single-page Portfolio content
│   ├── stylesheets/            # Custom CSS (Gruvbox theme)
│   └── javascripts/            # Custom JS (Interactivity)
├── .github/workflows/          # CI/CD Deployment pipeline
├── _archive_legacy_site/       # Archived legacy Jekyll site
└── README.md
```

## Deployment

This portfolio uses GitHub Actions for continuous deployment. Every push to `main` or `portfolio_Mkdocs` triggers the workflow located in `.github/workflows/deploy.yml`.

The workflow automatically builds the MkDocs site and forcefully deploys it to the `gh-pages` branch. 

**Note:** Ensure your repository's GitHub Pages settings are configured to source from the `gh-pages` branch, `/ (root)` folder.
Deployed via GitHub Actions to GitHub Pages (Phase 4).
