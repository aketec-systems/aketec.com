# aketec.com

Source for the AKETEC public website, served via GitHub Pages.

## Structure

- `index.html` — the entire site (single file, no build step)
- `assets/logo/` — wordmark and mark, SVG + PNG
- `assets/img/` — Open Graph / social preview image
- `CNAME` — custom domain for GitHub Pages (`aketec.com`)

## Editing

`index.html` is plain HTML/CSS. Fields still showing a dotted brass
underline (`<span class="placeholder">`) are intentionally incomplete —
UEI, CAGE code, street address, and telephone are pending and marked
"Available on request" until confirmed. Search for `class="placeholder"`
to find them.

## Deploy

GitHub Pages serves directly from this repo. Push to `main` and the
site rebuilds automatically. DNS for `aketec.com` must point at GitHub
Pages (A/AAAA records to GitHub's IPs, or a CNAME if using a subdomain)
for the custom domain in `CNAME` to resolve.
