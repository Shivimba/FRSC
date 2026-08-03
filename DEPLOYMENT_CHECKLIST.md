# FSRC Website — Deployment Checklist

Use this checklist before publishing the site to production.

---

## Content

- [ ] All page titles and meta descriptions are final (check `src/content/siteConfig.ts` + each page's `<PageMeta>` call)
- [ ] The OG image (`public/opengraph.jpg`) is correct and sized 1200×630px
- [ ] Favicon (`public/favicon.svg`) is final
- [ ] All publication entries in `src/content/publications.ts` have real author names (replace any "FSRC Research Team" placeholders if named authors are available)
- [ ] All `link: "#"` and `pdfPlaceholder: "#"` values in `publications.ts` are replaced with real URLs or real PDF file paths
- [ ] Contact emails in `src/content/siteConfig.ts` are active and monitored (currently: `info@fsrc.pro`, `advisory@fsrc.pro`, `inquiries@fsrc.pro`)
- [ ] Social links in `src/content/siteConfig.ts` point to live FSRC accounts (LinkedIn, X/Twitter)
- [ ] The contact form is wired to a real backend (see README.md — currently simulates submission)
- [ ] Legal pages linked in the footer (Privacy Policy, Terms of Use) exist or those links are removed

## Technical

- [ ] Run `pnpm --filter @workspace/fsrc-website run build` locally and confirm it succeeds with zero errors
- [ ] Check the built `dist/` output loads correctly (no broken asset paths)
- [ ] Confirm `BASE_URL` is correct for the deployment path (Replit: set in `vite.config.ts`)
- [ ] All internal links (`/about`, `/publications`, etc.) resolve correctly in the built output
- [ ] No browser console errors on any page
- [ ] The `public/assets/publications/` directory contains real PDFs (or all PDF links are marked as "forthcoming")

## SEO

- [ ] `index.html` `<link rel="canonical">` updated to the live production URL
- [ ] `og:url` meta tag added to `index.html` with the production URL (optional but recommended)
- [ ] Each page has a unique `<PageMeta>` title and description
- [ ] OG and Twitter card tags render correctly (test with [opengraph.xyz](https://www.opengraph.xyz))
- [ ] `robots` meta tag is `index, follow` (currently set — confirm it's not accidentally set to `noindex` in production)
- [ ] Submit sitemap to Google Search Console after launch (generate one if needed)

## Accessibility

- [ ] Skip-to-content link functions correctly (tab from the top of any page)
- [ ] Mobile menu opens, closes, and traps focus correctly
- [ ] All forms can be submitted using keyboard only
- [ ] Contrast ratios pass on all text elements (check with browser DevTools accessibility panel)
- [ ] No images are missing `alt` text

## Performance

- [ ] Google Fonts load with `display=swap` (confirmed in `index.html`)
- [ ] No large uncompressed images in `public/` — compress hero images with Squoosh or similar
- [ ] Run Lighthouse audit in Chrome DevTools and address any score below 85

## Mobile

- [ ] Test all 7 pages on 375px (iPhone SE), 390px (iPhone 14), and 768px (iPad) viewports
- [ ] Mobile menu opens/closes correctly and links navigate properly
- [ ] Publication grid collapses to 1 column correctly
- [ ] Report cover on Publications page is readable at mobile size
- [ ] Advisory Services page service sections are readable on mobile (stacked layout)
- [ ] Contact form fields are large enough to tap (min 44×44px touch target)

## Post-Deployment

- [ ] Visit the live URL and verify all 7 pages load without errors
- [ ] Test the contact form submission end-to-end
- [ ] Verify social sharing cards (LinkedIn, Twitter) show the correct OG image and title
- [ ] Set up uptime monitoring (UptimeRobot or similar) for the production URL
- [ ] Add Google Analytics or privacy-respecting analytics (Plausible, Fathom) if needed

---

*Last updated: March 2026*
