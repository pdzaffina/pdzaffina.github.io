# AGENTS.md

## Purpose
This document provides build, lint, test commands and coding style guidelines for the *Peter Zaffina* Jekyll site.  It is intended for both human contributors and automated “agentic” coding agents.

---

## Quick‑start
```bash
# Install dependencies (once)
bundle install

# Build the static site
bundle exec jekyll build

# Serve locally for development
bundle exec jekyll serve --livereload
```

---

## Lint & Validation
````bash
# After a successful Jekyll build, run HTML‑Proofer to validate links and markup
bundle exec htmlproofer _site --disable-external
````

*If the linter reports errors, fix the offending file(s) and re‑run the pipeline.*

---

## Testing
Because this is a static site, the most useful “test” is a build followed by linting:

```bash
# Run build and linter atomically
bundle exec jekyll build && bundle exec htmlproofer _site --disable-external
```

**Running a single test** – e.g., verify that a new Markdown post renders:
```bash
# Add or modify a file in _posts
# Commit the change
git add .
git commit -m "docs: add new post"

# Run the build‑lint pipeline
bundle exec jekyll build && bundle exec htmlproofer _site --disable-external
```

---

## File & Naming Conventions
- **Layouts** – `/_layouts/*.html` (kebab‑case).
- **Includes** – `/_includes/*.html`.
- **Sass** – `/_sass/_variables.scss`, `reset`, `highlights`, `svg-icons`.
- **Posts** – `/_posts/YYYY-MM-DD‑kebab‑case.md`.
- **Static assets** – `images/`, `fonts/`, `scripts/`.

---

## Markdown Style
1. Front‑matter keys (one per line, lowercase):
   ```yaml
   layout: post
   title: "Title in Title‑Case"
   published: true
   tags:
     - tag1
     - tag2
   ```
2. Use GitHub Flavored Markdown (GFM).
3. Headers: `#`, `##`, `###` matching the section hierarchy.
4. Lists: 2‑space indentation for nested lists.
5. No trailing whitespace; run `git diff --check` before commit.
6. Images: `<img src="/images/foo.png" alt="Descriptive text">`.
7. Links: absolute or root‑relative; external URLs start with `https://`.

---

## SCSS/CSS Style
- 2‑space indentation, semicolons mandatory.
- Variables in `_variables.scss`; prefix with `$` for Sass, `--` for CSS custom props.
- No nesting deeper than 3 levels.
- Vendor prefixing handled by Jekyll’s built‑in autoprefixer.
- Import order: `variables`, `reset`, `svg-icons`, `highlights`.
- ```:root``` defines CSS custom properties used throughout the site.
- Avoid `!important`; use specificity instead.

---

## HTML Structure
- Semantic tags: `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`.
- Navigation uses `<ul>`/`<li>` with `<a>`; `rel="nofollow"` when linking to external sites.
- Form elements use descriptive `label` tags.
- No inline styles; instead use classes defined in the global stylesheet.
- Every image has an `alt` attribute; decorative images use `alt=""`.

---

## JavaScript Guidelines
- Pure ES6, no modules.
- Variables: `const` or `let`; no `var`.
- File: `assets/scripts/main.js` (if needed).  Keep script at end of `<body>`.
- Use unobtrusive patterns: attach event listeners after DOM load.
- Comments: one‑line `//` only where logic isn’t obvious.
- No global namespace pollution.

---

## General Coding Practices
- All files encoded as UTF‑8 without BOM.
- Commit messages: `type: short summary` (e.g., `docs: add new post`).
- No large binary files in repo; use external hosting when possible.
- Avoid magic numbers – use variables/constants.
- Consistent indentation: 2 spaces for all languages.
- Run `bundle exec stylelint` (if configured) before pushing.
- Keep dependency versions pinned in `Gemfile`.

---

## Continuous Integration Setup
A minimal GitHub Actions workflow (ci.yml) can be added:

````yaml
name: CI
on:
  push:
    branches:
      - main
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-ruby@v1
        with:
          ruby-version: '3.1'
      - run: bundle install --jobs 4 --retry 3
      - run: bundle exec jekyll build
      - run: bundle exec htmlproofer _site --disable-external
````

---

## Cursor and Copilot Rules
- No `.cursor` or `.cursorrules` directories found.
- No `.github/copilot-instructions.md` present.
- If you wish to enable Copilot instructions, create `.github/copilot-instructions.md` with your guidance.

---

## Contact & Feedback
- For questions about the coding style or build process, open an issue or contact the maintainer.
- Contributions are welcome—please follow the guidelines above.

---

*End of AGENTS.md*