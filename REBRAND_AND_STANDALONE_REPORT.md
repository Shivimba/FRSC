# FSRC Website — Corporate Identity Rebrand + Standalone Build Report (August 3, 2026)

**2026-08-03** · prepared by Claude (Cowork)

## Status: REBRANDED + BUILDABLE — not yet deployed

The site now carries the official Five Senses logo as its corporate identity (forest green
`#0B3D26` · crimson `#A6121F` · gold `#C09030` · ink black), the emblem is in the navbar,
footer, favicon, apple-touch icon and a new 1200×630 social-sharing card, and the repo builds
standalone with plain `npm install && npm run build` — the Replit-monorepo dependencies that
previously made it unbuildable outside Replit are gone. Verified by a clean production build
(2,112 modules, zero errors) and headless-browser screenshots of Home, Publications, Contact
and the footer. All 19 changed/new files are already written to
`C:\dev\fsrc-website\artifacts\fsrc-website\`. Deployment is the remaining step — see
"To deploy (your machine)".

## What was found (repo review)

The repo is a complete, well-structured 8-page React SPA (React 18 + TypeScript + Vite +
Tailwind v4 + Wouter), lifted out of a Replit workspace. Three classes of problem stood between
it and "done":

1. **Not buildable standalone.** `package.json` used pnpm `catalog:` versions and a
   `@workspace/api-client-react` workspace package (never imported by any source file);
   `tsconfig.json` extended a missing `../../tsconfig.base.json`; `vite.config.ts` hard-crashed
   without `PORT`/`BASE_PATH` env vars and imported three `@replit/*` plugins.
2. **No corporate identity.** Branding was a text-only "FSRC" wordmark in deep navy
   `#0F1E2E`, the favicon was a placeholder orange square (`<rect fill="#FF3C00"/>`), the old
   tagline "Evidence. Insight. Foresight" contradicted the logo's "Insight · Intelligence ·
   Impact", and `index.html` had no `og:image` tag at all.
3. **Launch-blocking content gaps** (see "Not done") — simulated contact form, placeholder
   publication links, dead legal-page links.

## What was built

| Surface | Change |
|---|---|
| `package.json` | All `catalog:`/`workspace:` refs replaced with pinned semver; `@replit/*` and `@workspace/api-client-react` removed; `typescript` added |
| `vite.config.ts` | Standalone: `PORT` defaults to 5173, `BASE_PATH` to `/`, Replit plugins removed, output to `dist/` |
| `tsconfig.json` | Self-contained (no monorepo `extends`, no project references) |
| `src/index.css` | Full palette swap: primary navy→forest green `152 69% 14%`, accent gold re-tuned to logo gold `40 60% 47%`, destructive→logo crimson `355 80% 36%`, warm-cream secondary, `--brand-red`/`--brand-black` tokens added |
| `src/components/layout/Navbar.tsx` | Five-senses emblem (transparent PNG) beside the FSRC wordmark |
| `src/components/layout/Footer.tsx` | Emblem above the brand column |
| `src/content/siteConfig.ts` | Tagline → "Insight · Intelligence · Impact" (propagates to navbar, footer, mobile menu) |
| `src/components/ui/ReportCover.tsx`, `src/pages/not-found.tsx` | Hardcoded navy + old motto replaced |
| `src/pages/Home.tsx`, `src/components/layout/PageHero.tsx` | Grid-texture gold updated to logo gold |
| `index.html` | theme-color `#0B3D26`, `og:image` + `twitter:image` + `summary_large_image` added, apple-touch-icon linked |
| `public/favicon.svg` | Real favicon generated from the emblem (replaces orange placeholder) |
| `public/apple-touch-icon.png` | New, 180×180 |
| `public/opengraph.jpg` | New 1200×630 card: full logo + four-color brand bar |
| `public/images/fsrc-emblem.png`, `fsrc-emblem-96.png`, `fsrc-logo-full.png` | Logo assets cut from `Logo-04.png`; emblem background made transparent (flood-fill, inner whites preserved) so it sits on both white and green navbars |
| `README.md` | Branding + dev-command sections rewritten to match reality (npm, new palette, logo asset inventory) |

## Verification

| Check | Status | Observed |
|---|---|---|
| `npm install` (clean, no lockfile) | ✅ | resolves with pinned versions, no missing peers |
| `npm run build` | ✅ | 2,112 modules, `dist/` 681 kB JS / 117 kB CSS gzip-verified, **0 errors** (only Rollup's generic >500 kB chunk advisory) |
| Home page render (headless Chromium, `vite preview`) | ✅ | green navbar/hero, emblem left of FSRC wordmark, tagline "INSIGHT · INTELLIGENCE · IMPACT", gold CTA |
| Footer render | ✅ | emblem above wordmark, gold accents, green background |
| Publications + Contact pages | ✅ | PageHero green, report covers green, form renders |
| Emblem transparency | ✅ | composited on dark green test canvas — no white box, globe interior stays white |
| Console errors | ✅ | none from site code (only Google-Fonts fetches blocked by the sandbox's egress allowlist — will load normally in production) |
| Files written to your disk | ✅ | 19/19 committed to `C:\dev\fsrc-website\artifacts\fsrc-website\`, 0 rejected |

No test suite exists in this repo (static marketing SPA — none was added; flag if you want one).

## Not done (honest list)

- **Contact form is still simulated** — `src/pages/Contact.tsx` fakes success with `setTimeout`.
  Needs Formspree (no backend, ~10 min) or a real endpoint. README documents both paths.
- **Publication links/PDFs are placeholders** — several `link: "#"` and `pdfPlaceholder`
  entries in `src/content/publications.ts`; `public/assets/publications/` doesn't exist yet.
- **Privacy Policy / Terms of Use** footer links point to `#` — pages must be written or the
  links removed before launch.
- **Social links unverified** — `linkedin.com/company/fsrc` and `twitter.com/FSRC_ca` may not
  be your real handles; I could not check from the sandbox.
- **Hero images uncompressed** — `home-hero.png`/`page-hero.png` are ~1 MB each; worth a
  Squoosh pass before launch (checklist item, not blocking).
- **Live-deployment checks impossible from the sandbox** — Lighthouse, real-device mobile
  passes, and OG-card rendering on LinkedIn/X need the live URL. `DEPLOYMENT_CHECKLIST.md`
  covers all of these.
- The old `dist/public` output path changed to `dist/` — if any prior deploy config referenced
  `dist/public`, update it.

## Decisions taken (flag if you disagree)

1. **Tagline switched site-wide** to the logo's "Insight · Intelligence · Impact", replacing
   "Evidence. Insight. Foresight" everywhere including report-cover mock-ups. The logo is the
   identity source of truth per your instruction — but this is copy, so it's yours to reverse
   (one line in `siteConfig.ts` + two component strings).
2. **Logo red mapped to `--destructive` + `--brand-red`** rather than a third UI accent — red
   stays reserved for emphasis/errors so the site reads green-and-gold institutional, like the
   logo. 
3. **`Logo-04.png` used as the master** (it matches the file you attached). The other four
   variants in `C:\dev\fsrc-website\` were left untouched.
4. This repo has no `DECISIONS.md`/`CLAUDE.md` kit — worth scaffolding when you next touch it.

## To deploy (your machine)

The site is a static SPA — any static host works. Fastest path (Cloudflare Pages, matches your
existing Cloudflare setup):

```powershell
# 1) sanity-check the build locally (PowerShell, in the repo)
cd C:\dev\fsrc-website\artifacts\fsrc-website
npm install
npm run build          # output lands in dist\
npm run serve          # preview at http://localhost:5173 — click through all 8 pages

# 2) deploy dist\ to Cloudflare Pages (one-time: npm install -g wrangler; wrangler login)
npx wrangler pages deploy dist --project-name fsrc-website
```

Then in the Cloudflare dashboard: Pages → fsrc-website → Custom domains → add `fsrc.pro`
(DNS is automatic if fsrc.pro is already on Cloudflare). Re-runs are safe — every deploy is a
full replacement of static files. Vercel/Netlify work identically (framework preset: Vite,
build `npm run build`, output `dist`).

## Post-deploy: try these (5 minutes)

1. Open fsrc.pro on desktop — emblem left of "FSRC" in the navbar, tagline reads
   "INSIGHT · INTELLIGENCE · IMPACT", hero is forest green, CTA button gold.
2. Check the browser tab — the favicon must be the five-senses rosette, not an orange square.
3. Scroll — the navbar goes solid green with the emblem still crisp (transparency check).
4. Paste `https://fsrc.pro` into [opengraph.xyz](https://www.opengraph.xyz) — expect the full
   logo card with the green/red/gold/black bar, 1200×630.
5. Visit `/publications` and `/nonexistent` — report covers forest green; 404 page motto reads
   "FSRC — Insight. Intelligence. Impact."
6. Submit the contact form — it will *look* successful but sends nothing (known gap above).

Tell me which host you land on and I'll prep the exact config (headers, SPA fallback for deep
links like `/publications` on refresh — Pages/Netlify need a `_redirects` or it 404s).

## Running costs

Nothing new billable. Cloudflare Pages / Netlify / Vercel free tiers all cover a static site of
this size; fsrc.pro domain is presumably already paid.

## Local-preview addendum (August 3, 2026)

Closes the "see it on my machine" request without needing Node installed. New file
**`C:\dev\fsrc-website\FSRC-PREVIEW.html`** (~2.3 MB) — the entire site (JS, CSS, logo assets,
hero images, favicon) inlined into one HTML file. **Double-click it** and it opens in your
browser from disk; all 8 pages navigate normally (hash-based URLs like `#/publications`).
Verified from a `file://` open in headless Chromium: zero page errors, navbar navigation
confirmed Home → Research Programs → Contact.

Supporting changes committed to the repo: `vite.preview.config.ts` + an `npm run build:preview`
script (regenerates the preview; output in `dist-preview/`), and `src/App.tsx` now switches to
hash routing only when built with the preview config — the production build is untouched (normal
URLs, same output as before; rebuild re-verified green).

Caveats: fonts load from Google, so serif/sans typefaces need internet (layout still fine
offline); the preview is a snapshot — after content edits, run `npm run build:preview` and
re-inline, or just ask me. The contact form remains simulated, as reported above.

## Go-live prep addendum (August 3, 2026)

Hosting decision: **Cloudflare Pages** (free static hosting, no bandwidth caps, same dashboard
as kiliclip.com; Vercel's free tier disallows commercial use, Netlify adds a vendor for no
gain). Two new files close the "deploy" step of this report:

- **`GO_LIVE_RUNBOOK.md`** — numbered operator runbook: Node install check → one-time
  `wrangler login` → first deploy → fsrc.pro domain attach → free Cloudflare Email Routing so
  `info@`/`advisory@`/`inquiries@fsrc.pro` actually deliver → Formspree paste-back step that
  un-fakes the contact form → smoke-test checklist → operations table (redeploy, analytics,
  rollback).
- **`deploy_fsrc.bat`** — double-click deploy: install-if-needed → build →
  `wrangler pages deploy dist`. Stops safely on any error; re-runs always safe (each deploy
  fully replaces the previous).

Still open for you: run the runbook (Steps 1–5 ≈ 30–45 min, mostly DNS wait), then paste me
the Formspree endpoint (Step 6) and I'll wire the contact form for a second deploy.

## GitHub + contact-form addendum (August 3, 2026)

Closes three open items from the go-live prep, per your instruction to route deployment
through **github.com/Shivimba/FRSC** (verified: repo exists, empty, ready).

- **Contact form un-faked.** `src/pages/Contact.tsx` now POSTs to Formspree with JSON,
  subject-lines each inquiry (`[FSRC] <type>: <subject>`), keeps the success screen, and on
  failure shows a visible error pointing to `inquiries@fsrc.pro` — the old silent
  `setTimeout` fake is gone. One marked placeholder remains (`REPLACE_WITH_YOUR_FORM_ID`)
  pending your Formspree endpoint (runbook Step 6, paste-back). Build after the change:
  green (2,113 modules, 0 errors).
- **Git handoff prepared.** New `.gitignore` (node_modules, dist, dist-preview, .env
  guarded); `deploy_fsrc.bat` rewritten from wrangler-upload to **git add → commit → push**
  (Pages auto-builds on push; "nothing to commit" exits cleanly without deploying).
- **`GO_LIVE_RUNBOOK.md` rewritten as v2**: git init/push with the secrets tripwire →
  connect Pages to the FRSC repo (build `npm run build`, output `dist`, NODE_VERSION=22
  fallback documented) → fsrc.pro custom domain → Email Routing for `inquiries@` (+ `info@`,
  `advisory@`) → Formspree paste-back → smoke test → operations table.

Note: the GitHub repo is named **FRSC** (as you created it) while the product is FSRC — the
letter swap is harmless (nothing user-facing shows the repo name), but if you'd rather rename
it: GitHub → repo → Settings → rename to `FSRC` *before* running the runbook, and tell me so
I update the remote URL in Step 2 and the bat's comments.

Still open for you: run runbook Steps 1–5 (~40 min, mostly DNS wait), then paste me the
Formspree endpoint and I'll wire it for the final deploy.

## 🎉 LAUNCH addendum (August 3, 2026, evening) — fsrc.pro is LIVE

The deploy was executed live in your browser (Claude driving Cloudflare/Squarespace via
Chrome; you did the 2FA and GitHub authorization steps, plus the git push from PowerShell).
Verified state at close:

| Check | Status | Observed |
|---|---|---|
| https://fsrc.pro | ✅ LIVE | Green FSRC homepage over HTTPS at the real domain, emblem + tagline rendering |
| Pages deployments | ✅ | `7dfba14` (initial) and `c0721d5` (Formspree wiring) both built and served; production = c0721d5 |
| GitHub flow | ✅ | `Shivimba/FRSC` main → auto-build on push confirmed working end to end (bat → push → build → live) |
| Nameservers | ✅ | Squarespace switched to `danica`/`kurt.ns.cloudflare.com`; zone Active same evening |
| Custom domains | ✅ | fsrc.pro + www.fsrc.pro attached to project `fsrc-website` |
| Email Routing | ✅ Enabled | 3 rules Active: `inquiries@`/`info@`/`advisory@fsrc.pro` → dmmatsinhe@gmail.com; MX/DKIM/SPF records Enabled; old Squarespace SPF replaced cleanly |
| Contact form | ✅ deployed | POSTs to Formspree `f/mjgnnnnj` (recipient: your Gmail); failure fallback message points to inquiries@fsrc.pro |
| DNSSEC | ✅ | Was off at Squarespace — no handover conflict |

Your smoke tests (2 minutes): (1) send any email to `inquiries@fsrc.pro` → arrives in your
Gmail (check spam the first time); (2) submit the contact form on https://fsrc.pro/contact →
"Inquiry Received" on screen + the message in your Gmail via Formspree (the very first
submission may require clicking a one-time Formspree confirmation email).

Still open (unchanged from "Not done"): publication links/PDFs are placeholders, Privacy/Terms
pages unwritten, hero images uncompressed, footer social handles unverified. Running cost of
everything shipped tonight: **$0/month** (domain renewal CA$48/yr at Squarespace, unchanged).

Ops recap: ship updates = double-click `deploy_fsrc.bat` · rollback = Pages → Deployments →
previous → Rollback · traffic = Cloudflare dash → fsrc.pro → Analytics · form log =
formspree.io dashboard.

## Identity v2 addendum (August 4, 2026) — new Five Senses logo applied

You supplied a **new** logo (lightbulb + brain, five sense icons) in
`C:\dev\fsrc-website\newFive_Senses_Logo\`, replacing the five-petal rosette used at launch.
The whole identity layer was rebuilt from those five source files.

**Colours sampled from the artwork** (replacing the launch palette):

| Token | Was | Now | Source |
|---|---|---|---|
| `--primary` | `152 69% 14%` (#0B3D26) | `154 89% 15%` (**#04472B**) | bulb/brain green |
| `--accent` | `40 60% 47%` (#C09030) | `37 71% 47%` (**#CC8B22**) | filament/rays gold |
| `--secondary` / `--muted` | `42 25% 96%` | `33 33% 94%` (**#F4EFE9**) | logo cream ground |
| `--foreground` | `0 0% 13%` | `240 2% 14%` (**#242425**) | wordmark ink |
| `--destructive` | crimson `355 80% 36%` | terracotta `14 55% 42%` | tongue icon (**crimson retired — not in the new mark**) |
| new tokens | — | `--brand-cream`, `--brand-terracotta` (#BD7058), `--brand-sage` (#668165), `--brand-ink` | icon set |

**Assets generated** (backgrounds flood-filled to transparency, content-trimmed, web-optimised):

| File | Use |
|---|---|
| `fsrc-mark.png` / `-128.png` | mark with dark strokes — light backgrounds |
| `fsrc-mark-light.png` / `-128.png` | mark with cream strokes — dark green backgrounds |
| `fsrc-lockup.png` | full horizontal lockup, dark text |
| `fsrc-lockup-light.png` / `-640.png` | full horizontal lockup, light text |
| `favicon.svg`, `apple-touch-icon.png` | mark on a deep-green rounded plate (legible in light *and* dark tab bars) |
| `opengraph.jpg` | 1200×630 green card, full light lockup, cream/gold/terracotta rule |

**Code changes**: `index.css` (palette + brand tokens), `index.html` (theme-color `#04472B`),
`Navbar.tsx` (mark now **swaps to the light variant** when the header turns solid green on
scroll — the dark-stroke mark would otherwise vanish), `Footer.tsx` (brand block replaced by
the full lockup image, so the wordmark and tagline now come from the artwork itself),
`PageHero.tsx` + `Home.tsx` (grid-texture gold), `ReportCover.tsx` (cover green), `README.md`.

**Verification** (headless Chromium against the production build):

| Check | Status | Observed |
|---|---|---|
| `npm run build` | ✅ | 2,113 modules, 0 errors |
| Navbar — top state | ✅ | dark-stroke mark on white, gold tagline, green wordmark |
| Navbar — scrolled state | ✅ | light-stroke mark on solid `#04472B`, fully legible |
| Footer | ✅ | full "FIVE SENSES / INSIGHT. INTELLIGENCE. IMPACT." lockup renders clean on green |
| Mark transparency | ✅ | composited on white, cream and green test fields — no halo, no white box |
| Mobile 390px | ✅ | mark + wordmark fit the 80px bar, hamburger unaffected |
| Publications / ReportCover | ✅ | cover green matches new primary; cream section ground visible |
| Page errors | ✅ | none |

Old rosette assets (`fsrc-emblem.png`, `fsrc-emblem-96.png`, `fsrc-logo-full.png`) were moved
out of the repo to `C:\dev\fsrc-website\_old-logo-assets\` — `deploy_fsrc.bat` will record the
deletions automatically. Delete that folder yourself whenever you're happy.

**To deploy**: double-click `deploy_fsrc.bat`. After the build, hard-refresh fsrc.pro
(**Ctrl+F5**) — the old favicon and OG image are cached; ask LinkedIn/X to re-scrape by pasting
the URL into https://www.opengraph.xyz.
