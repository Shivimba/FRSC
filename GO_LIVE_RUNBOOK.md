# FSRC Website — Go-Live Runbook v2 (GitHub → Cloudflare Pages)

This takes the site from code on your disk to live at **https://fsrc.pro**, deployed through
your GitHub repo **github.com/Shivimba/FRSC** (confirmed: it exists and is empty, ready to
receive the code). After setup, every future deploy is: double-click `deploy_fsrc.bat`.
No developer experience assumed.

Steps marked **[you]** only you can do (they need your accounts/credentials); steps marked
**[you → me]** you run or set up, then paste me the output and I finish the wiring.

Total time: ~40–50 minutes, most of it waiting on DNS. Total cost: **$0/month**.

> **v2 replaces v1** (which used direct upload via `wrangler`). This version deploys through
> GitHub instead — same result, but you get version history, and deploys become a git push.
> `deploy_fsrc.bat` has been rewritten accordingly; `wrangler` is no longer needed.

---

## 0. Owner checklist — accounts & decisions only you can do **[you]**

| # | Item | Where | Notes |
|---|---|---|---|
| 1 | Cloudflare account | https://dash.cloudflare.com | Already set up ✓ (kiliclip.com lives there) |
| 2 | GitHub account + repo `Shivimba/FRSC` | https://github.com/Shivimba/FRSC | Already created ✓ (empty) |
| 3 | fsrc.pro domain registered | Your registrar | If not yet registered, register it first — Step 4 needs it |
| 4 | Node.js and Git on this PC | https://nodejs.org · https://git-scm.com | Checked in Step 1; both free |
| 5 | Formspree account (free) | https://formspree.io | Created in Step 6 — powers the contact form |
| 6 | An inbox to receive fsrc.pro email | Your Gmail | Used in Step 5 — `inquiries@fsrc.pro` etc. forward there |

## 1. Install the two tools (skip what's already installed) **[you]**

> **Do this first.** Everything below depends on them.

Open **Windows Terminal** (or PowerShell) and run these two lines **one at a time**:

```powershell
node --version

git --version
```

**Confirm it worked:** each prints a version (`v22.x.x` / `git version 2.x`).

- If node is *"not recognized"*: install the **LTS** from https://nodejs.org (all defaults,
  ~5 min), then close and reopen the terminal.
- If git is *"not recognized"*: install from https://git-scm.com/download/win (all defaults,
  ~5 min), then close and reopen the terminal.

## 2. Push the code to GitHub **[you]**

> **This runs in Windows Terminal / PowerShell on your computer** — one line at a time.
> First time only; after this, `deploy_fsrc.bat` does the pushing.

```powershell
cd C:\dev\fsrc-website\artifacts\fsrc-website

git init -b main

git add -A

git status
```

> **Tripwire:** look at the `git status` list. `node_modules/`, `dist/`, and any `.env` file
> must **NOT** appear (the `.gitignore` I added excludes them). If one does appear, stop and
> tell me before committing.

```powershell
git commit -m "FSRC website - rebranded, standalone build"

git remote add origin https://github.com/Shivimba/FRSC.git

git push -u origin main
```

A window pops up asking you to sign in to GitHub → **Sign in with browser** → authorize.
(This is Git Credential Manager; it remembers the login.)

**Confirm it worked:** refresh https://github.com/Shivimba/FRSC — you should see the project
files (`src/`, `public/`, `package.json`, `README.md`…) instead of "This repository is empty."

## 3. Connect Cloudflare Pages to the repo **[you]**

1. https://dash.cloudflare.com → **Workers & Pages** (left menu) → **Create** →
   **Pages** tab → **Connect to Git**
2. Sign in to GitHub when asked → grant access to the **FRSC** repository → select it →
   **Begin setup**
3. On the build settings screen, set exactly:

| Field | Value |
|---|---|
| Project name | `fsrc-website` |
| Production branch | `main` |
| Framework preset | **Vite** (if offered; otherwise None) |
| Build command | `npm run build` |
| Build output directory | `dist` |

4. Click **Save and Deploy**. The first build takes ~2–3 minutes.

> If the build fails with a Node-version error (unlikely): the project's **Settings →
> Environment variables** → add `NODE_VERSION` = `22`, then **Deployments → Retry**.

**Confirm it worked:** the deployment shows a green **Success**, and the project page shows a
URL like `https://fsrc-website.pages.dev`. Open it — green FSRC homepage, logo in the navbar.
Click **Publications** and **Contact** — both load.

## 4. Point fsrc.pro at the site **[you]**

### 4a. If fsrc.pro is NOT yet on Cloudflare (first time only)

1. https://dash.cloudflare.com → **Add a site** → type `fsrc.pro` → **Continue**
2. Choose the **Free** plan → Cloudflare shows two nameservers (like `ada.ns.cloudflare.com`)
3. At your **registrar** (wherever you bought fsrc.pro): **Nameservers** → replace with the
   two Cloudflare gave you → save
4. Wait — minutes to an hour. Cloudflare emails you when the site is **Active**. Don't start
   4b until it is.

### 4b. Attach the domain to the Pages project

1. **Workers & Pages** → **fsrc-website** → **Custom domains** tab → **Set up a custom domain**
2. Type `fsrc.pro` → **Continue** → **Activate domain** (Cloudflare creates the DNS record
   itself — you don't edit DNS by hand)
3. Repeat for `www.fsrc.pro`

**Confirm it worked:** https://fsrc.pro loads the site with a padlock. An SSL error in the
first ~10 minutes is certificate issuance in progress — expected; wait and refresh.

## 5. Email — make inquiries@fsrc.pro real **[you]**

> The Contact page and footer advertise `inquiries@`, `info@`, and `advisory@fsrc.pro`, and
> the contact form's error message tells people to email `inquiries@`. This step makes them
> all deliver to your real inbox. Free, no mail server.

1. https://dash.cloudflare.com → click the **fsrc.pro** site → **Email** → **Email Routing**
   → **Get started**
2. **Create address**: `inquiries` → destination: your real inbox → Cloudflare emails that
   inbox a verification link → click it
3. Repeat for `info` and `advisory` (same destination is fine)
4. When prompted, click **Add records automatically** (adds the MX records for you)

**Confirm it worked:** send a test email from any account to `inquiries@fsrc.pro` — it
arrives in your inbox within a minute (check spam the first time).

## 6. Activate the contact form **[you → me]**

The form code is already wired for real submission (I replaced the old fake-success code) —
it just needs your Formspree endpoint:

1. https://formspree.io → **Sign up** (free) → **New form** → name: `FSRC Contact` →
   recipient email: `inquiries@fsrc.pro` (real as of Step 5)
2. Formspree emails `inquiries@fsrc.pro` a confirmation link — click it (it lands in your
   inbox via Step 5's forwarding)
3. Formspree shows the form's endpoint, like `https://formspree.io/f/abcd1234`

**Paste me that endpoint URL.** I'll drop it into `src/pages/Contact.tsx` (one marked line),
hand the file back to your disk, and you double-click `deploy_fsrc.bat` to ship it.

> Until this step, the form shows visitors a polite error pointing them to
> `inquiries@fsrc.pro` — no more silent fake success, and no inquiry is lost even pre-Formspree.
> Free tier: 50 submissions/month — plenty to start.

## 7. Smoke test — verify end to end **[you]**

- [ ] https://fsrc.pro loads with HTTPS padlock; tab favicon is the five-senses rosette
- [ ] All 7 nav pages load, **and** refreshing directly on https://fsrc.pro/publications
      does NOT 404 (deep-link check)
- [ ] Phone check: site readable, mobile menu opens and navigates
- [ ] Paste `https://fsrc.pro` into https://www.opengraph.xyz — logo card with the
      green/red/gold/black bar appears
- [ ] Test email to `inquiries@fsrc.pro` arrives
- [ ] (After Step 6) submit the contact form — message arrives at `inquiries@fsrc.pro`,
      and the site shows "Inquiry Received"
- [ ] Footer LinkedIn/X links point where you want (currently `linkedin.com/company/fsrc`
      and `twitter.com/FSRC_ca` — tell me if wrong and I'll fix + you redeploy)

## 8. Ongoing operations

| Task | When | How |
|---|---|---|
| Ship any update | Whenever content/code changes | Double-click `deploy_fsrc.bat` (commits + pushes; Pages rebuilds in ~2–3 min) |
| Change site content | As needed | Ask me — I edit, write to your disk, you double-click the bat |
| Watch a deploy | After each push | dash.cloudflare.com → Workers & Pages → fsrc-website → Deployments |
| Rollback a bad deploy | Rarely | Same Deployments list → previous deployment → **⋯ → Rollback** |
| See traffic | Anytime | Cloudflare dash → fsrc.pro → **Analytics** (free) |
| Form submissions log | Anytime | formspree.io dashboard → FSRC Contact |

## 9. Known gaps shipping with v1 (from the rebrand report)

- Publication `link: "#"` / PDF placeholders — fine for launch; replace as real PDFs exist
- Privacy Policy / Terms of Use footer links go nowhere — I can draft both pages next
- Hero images uncompressed (~1 MB each) — cosmetic performance item, not blocking
