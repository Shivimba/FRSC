# FSRC Website

**Five Senses Research Consultants (FSRC)** — Institutional website for a Canadian research and policy intelligence organization.

Built with: React + TypeScript + Vite + Tailwind CSS v4 + Wouter (routing) + Framer Motion (animations)

---

## Project Structure

```
artifacts/fsrc-website/
├── public/
│   ├── images/
│   │   ├── page-hero.png        # Hero background for inner pages (dark overlay applied)
│   │   └── home-hero.png        # Unused hero variant (available if needed)
│   ├── favicon.svg              # SVG favicon
│   └── opengraph.jpg            # Default OG image for social sharing
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx       # Fixed header with utility bar + mobile menu
│   │   │   ├── Footer.tsx       # Full-width footer with nav columns
│   │   │   └── PageHero.tsx     # Reusable dark hero banner for inner pages
│   │   ├── seo/
│   │   │   └── PageMeta.tsx     # Per-page document.title + meta description updater
│   │   └── ui/
│   │       ├── PublicationCard.tsx  # Card used in grid layouts
│   │       ├── ProgramCard.tsx      # Card for research program previews
│   │       ├── ReportCover.tsx      # Think-tank report cover component
│   │       └── SectionHeading.tsx   # Reusable section heading block
│   ├── content/
│   │   ├── siteConfig.ts        # ← Central content map (see below)
│   │   ├── publications.ts      # All publication data with TypeScript interface
│   │   └── researchPrograms.ts  # Research program descriptions
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── ResearchPrograms.tsx
│   │   ├── Publications.tsx
│   │   ├── AdvisoryServices.tsx
│   │   ├── ResearchThemes.tsx
│   │   ├── Contact.tsx
│   │   └── not-found.tsx
│   ├── App.tsx                  # Router + layout wrapper
│   ├── main.tsx                 # React entry point
│   └── index.css                # Tailwind v4 config + CSS variables
├── index.html                   # HTML shell with SEO meta + font preloads
└── vite.config.ts               # Vite config
```

---

## How to Update Site Content

### Site-wide metadata (name, tagline, contact info, social links)

Edit **`src/content/siteConfig.ts`**. This file is the single source of truth for:

- `SITE_META` — brand name, tagline, description, legal name, location
- `CONTACT_INFO` — email addresses and physical address
- `SOCIAL_LINKS` — LinkedIn and Twitter/X URLs with labels
- `NAV_LINKS` — primary navigation items (shared by Navbar and mobile menu)
- `RESEARCH_THEMES` — the 5 thematic research areas
- `ADVISORY_SERVICE_LINES` — 4 advisory service summaries used on the homepage
- `FOOTER_NAV` — grouped footer navigation columns

Changes here propagate to every component that imports from this file.

### Page-specific content

Each page manages its own body content as static JSX. To update:

| Page | File |
|------|------|
| Homepage hero, sections | `src/pages/Home.tsx` |
| About (mission, values, approach) | `src/pages/About.tsx` |
| Research Programs | `src/pages/ResearchPrograms.tsx` + `src/content/researchPrograms.ts` |
| Publications library | `src/pages/Publications.tsx` + `src/content/publications.ts` |
| Advisory Services | `src/pages/AdvisoryServices.tsx` |
| Research Themes | `src/pages/ResearchThemes.tsx` (data from `siteConfig.ts`) |
| Contact | `src/pages/Contact.tsx` |

---

## How to Add a New Publication

1. Open **`src/content/publications.ts`**
2. Add a new object to the `publications` array following this interface:

```typescript
{
  id: "unique-slug-here",              // URL-safe lowercase slug
  title: "Full Publication Title",
  subtitle: "Optional subtitle",       // appears on covers and featured sections
  category: "Flagship Report",         // one of: "Flagship Report" | "Policy Intelligence Brief" | "Futures Paper" | "Commentary"
  date: "March 2026",                  // display format: "Month YYYY"
  year: 2026,                          // used for sorting
  author: "Dr. Author Name",           // or "FSRC Research Team"
  affiliation: "FSRC Policy Intelligence",  // research program name
  abstract: "Full abstract text...",   // shown in the modal on Publications page
  excerpt: "One-sentence summary...",  // shown on publication cards
  tags: ["Tag One", "Tag Two"],        // research area keywords (max 4 recommended)
  link: "/publications/your-slug",     // link to full report page (use "#" if not live)
  pdfPlaceholder: "/assets/publications/your-report.pdf",  // see PDF section below
  featured: false,                     // set true to surface in homepage highlights
}
```

3. To feature the report cover on the homepage or publications page, also update:
   - The `ReportCover` component usage in `src/pages/Home.tsx` (hero panel)
   - The featured section in `src/pages/Publications.tsx`

### Adding PDF assets

Place PDF files in **`public/assets/publications/`** (create this directory if it doesn't exist).

Reference them in `publications.ts` as:
```typescript
pdfPlaceholder: "/assets/publications/your-report-name.pdf"
```

For the report cover component, any publication can be featured with:
```tsx
<ReportCover
  title="Your Report Title"
  subtitle="Optional subtitle"
  author="Author Name"
  division="FSRC Program Name"
  publicationType="Strategic Policy Intelligence Report"
  date="March 2026"
  size="sm" // "sm" | "md" | "lg"
/>
```

---

## How to Update Branding

### Colors

All brand colors are defined as CSS custom properties in **`src/index.css`** under `:root`:

```css
--primary: 153 70% 12%;      /* Forest Green #093421 — the logo's own field colour */
--accent: 36 75% 46%;        /* Gold #CF881E (from logo) */
--secondary: 33 33% 94%;     /* Cream #F4EFE9 (from logo) */
--foreground: 240 2% 14%;    /* Ink #242425 */
--destructive: 14 55% 42%;   /* Terracotta (deepened for contrast) */

/* supporting tokens */
--brand-cream / --brand-terracotta (#BD7058) / --brand-sage (#668165) / --brand-ink
```

Changing these values updates the entire site. The `@theme inline` block above also maps these to Tailwind utility classes.

### Typography

Fonts are loaded in **`index.html`**:

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700
  &family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />
```

Font assignments are in `src/index.css`:
```css
--font-sans: 'Inter', sans-serif;    /* Body text */
--font-serif: 'Playfair Display', serif;  /* Headings */
```

### Logo

The official FSRC logo is integrated site-wide:

- `public/images/fsrc-logo-stack-light.png` / `-452.png` — **the header logo**. Bulb + gold rule
  + the name in its original **four-line column** ("Five / Senses / Research / Consultants"),
  every element at the **master's own scale and spacing** — the word column is 0.809× the bulb's
  height, exactly as supplied, and never taller than the bulb. The canvas is padded to
  **1200×604** (rather than the master's 592) purely so the bulb renders at exactly 51.9px at
  `h-14`; do not "fix" that padding or the bulb changes size.
- `public/images/fsrc-logo-light.png` / `-640.png` — **the master lockup** as supplied, 1200×592.
  Used in the footer, where a tall block fits.
- `public/images/fsrc-logo-h-light.png` / `-520.png` — a *compact horizontal* two-line variant
  (4.15:1). **Not currently used**; kept because it is the most space-efficient lockup if the
  header ever has to get shorter still.
- `public/favicon.svg` + `public/apple-touch-icon.png` — icons generated from the bulb
- `public/opengraph.jpg` — 1200×630 social sharing card built from the logo

The **header is always solid `--primary` green** — the logo is a cream-on-transparent lockup,
so a white bar would render it invisible.

**Header sizing is an interlock — four values must move together.** The bar is `h-20 lg:h-24`
(80 / 96px) and the logo `h-12 lg:h-14` (48 / 56px), which is the smallest size that keeps the
wordmark as legible as body copy. Change either and you must also change:

1. `pt-[80px] lg:pt-[128px]` on `<main>` in `App.tsx` (desktop = 32px utility bar + 96px header)
2. `top-20` on the mobile drawer in `Navbar.tsx`
3. `max-h-[calc(100vh-5rem)]` on the same drawer

Note the trade this sizing makes: at a 48/56px logo height the four-line word column has a cap
height of roughly 6–7px — well under body copy. That is deliberate, and it is what keeps the
four-line column, the master's proportions, *and* an 80/96px bar all at once. Raising legibility
means raising the bar height (or switching the header to `fsrc-logo-h-light-520.png`, the
two-line variant).

The tagline beside the logo is set as a **vertical column**, one line per word, from
`SITE_META.taglineWords` in `siteConfig.ts` (`SITE_META.tagline` keeps the single-line form for
prose use). It is hidden below `md`, where the hamburger needs the room.

Master artwork: `C:\dev\fsrc-website\newFive_Senses_Logo\new_FSRC_Logo_03.png` — every asset
above (including the favicon and OG card) is cut from that one file.

### OG / Social sharing image

Replace **`public/opengraph.jpg`** with your new image (1200×630px recommended). Update the `<meta property="og:image">` tag in `index.html`.

---

## How to Connect the Contact Form Backend

The contact form in `src/pages/Contact.tsx` currently simulates submission with a `setTimeout`. To connect a real backend:

### Option A — Email service (Resend, SendGrid, Formspree)

1. Replace the `setTimeout` block in `onSubmit` with an API call:

```typescript
async function onSubmit(values: z.infer<typeof formSchema>) {
  setIsSubmitting(true);
  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });
    if (!res.ok) throw new Error("Submission failed");
    setIsSuccess(true);
    form.reset();
  } catch (err) {
    // handle error state
  } finally {
    setIsSubmitting(false);
  }
}
```

2. Create a backend endpoint at `artifacts/api-server/` (the API server workspace is already configured).

### Option B — Formspree (no backend required)

Change the form `action` approach:

```typescript
const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(values),
});
```

Sign up at [formspree.io](https://formspree.io) to get a form ID.

### Option C — Netlify / Vercel forms

Add `data-netlify="true"` or the equivalent attribute to the `<form>` element — handled automatically by those platforms.

---

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production (outputs to dist/)
npm run build
```

The site is a fully static SPA — no server-side rendering required for deployment.
