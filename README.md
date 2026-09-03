# aketec.com

Source for the AKETEC public website, served via GitHub Pages.

## Structure

- `index.html` — the homepage (single file, no build step)
- `assets/js/company.js` — single source of truth for company facts, see below
- `assets/logo/` — wordmark and mark, SVG + PNG
- `assets/img/` — Open Graph / social preview image
- `assets/docs/` — capability statement PDF
- `CNAME` — custom domain for GitHub Pages (`aketec.com`)

## Editing

`index.html` is plain HTML/CSS with one small script, no build step.

**Company facts** (legal entity, contact info, UEI, CAGE, SAM/CMBL status,
NAICS, PSC, insurance, etc.) live in one place: `assets/js/company.js`.
Every place a fact appears in `index.html` is tagged `data-c="fieldName"`
(or `data-c-href="email"` / `data-c-href="phone"` for link targets) and is
overwritten at page load from that module. The literal text already sitting
inside those tagged elements is a fallback for no-JS clients and crawlers —
keep it in sync with `company.js` by hand if you ever edit one without the
other, but the module is the source of truth. Do not hardcode a company
fact anywhere else; add a `data-c` tag and a field on the module instead.

Fields still showing a dotted brass underline (`<span class="placeholder">`)
are intentionally incomplete or unverified — CAGE code and Texas CMBL
status are still pending. Search for `class="placeholder"` to find them.

## Deploy

GitHub Pages serves directly from this repo. Push to `main` and the
site rebuilds automatically. DNS for `aketec.com` must point at GitHub
Pages (A/AAAA records to GitHub's IPs, or a CNAME if using a subdomain)
for the custom domain in `CNAME` to resolve.
