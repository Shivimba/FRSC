/**
 * siteConfig.ts — FSRC Central Content Map
 *
 * This is the single source of truth for site-wide content that appears
 * across multiple pages or components. Update values here and they
 * propagate everywhere.
 *
 * For publication data, see: src/content/publications.ts
 * For research program data, see: src/content/researchPrograms.ts
 */

// ---------------------------------------------------------------------------
// Site Metadata
// ---------------------------------------------------------------------------

export const SITE_META = {
  /** Public brand name shown in UI */
  name: "FSRC",
  /** Legal entity name — used in footer and About page only */
  legalName: "Five Senses Research Consultants",
  /** Brand tagline shown in navbar and footer */
  tagline: "Insight. Intelligence. Impact.",
  /** Default meta description for the homepage */
  description:
    "FSRC is an independent research, policy intelligence, and applied innovation organization producing rigorous analysis and practical tools on governance, human rights, artificial intelligence, African futures, and public-purpose digital systems.",
  /** Default OG description */
  ogDescription:
    "Research, policy intelligence, and applied innovation on governance, human rights, AI, and African futures. FSRC advances evidence-based policy intelligence and public-purpose innovation for institutions that cannot afford to act on assumptions.",
  /** Short institutional descriptor for utility bar */
  utilityBarLabel:
    "Research · Policy Intelligence · Applied Innovation — Ottawa, Canada",
  /** Canonical site URL */
  siteUrl: "https://fsrc.pro",
  /** Location line */
  location: "Ottawa, Ontario, Canada",
  /** Jurisdiction note */
  incorporatedIn: "Canada",
} as const;

// ---------------------------------------------------------------------------
// Contact Information
// ---------------------------------------------------------------------------

export const CONTACT_INFO = {
  emails: {
    general: "info@fsrc.pro",
    advisory: "advisory@fsrc.pro",
    inquiries: "inquiries@fsrc.pro",
  },
  address: {
    city: "Ottawa",
    province: "Ontario",
    country: "Canada",
    display: "Ottawa, ON\nCanada",
  },
} as const;

// ---------------------------------------------------------------------------
// Social Links
// ---------------------------------------------------------------------------

export const SOCIAL_LINKS = {
  linkedin: {
    href: "https://linkedin.com/company/fsrc",
    label: "FSRC on LinkedIn (opens in new tab)",
    display: "LinkedIn",
  },
  twitter: {
    href: "https://twitter.com/FSRC_ca",
    label: "FSRC on X / Twitter (opens in new tab)",
    display: "X (Twitter)",
  },
} as const;

// ---------------------------------------------------------------------------
// Primary Navigation
// ---------------------------------------------------------------------------

export const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/research-programs", label: "Research Programs" },
  { href: "/publications", label: "Publications" },
  { href: "/advisory-services", label: "Advisory Services" },
  { href: "/research-themes", label: "Research Themes" },
  { href: "/contact", label: "Contact" },
] as const;

// ---------------------------------------------------------------------------
// Research Themes
// (Source of truth — also used by ResearchThemes page)
// ---------------------------------------------------------------------------

export const RESEARCH_THEMES = [
  {
    id: "human-rights-governance",
    title: "Human Rights and Democratic Governance",
    description:
      "We analyze the mechanisms of democratic backsliding, the resilience of civic space, and the evolution of human rights frameworks. Our research focuses on how institutions can be fortified against authoritarian pressures and how civil society can effectively advocate for fundamental freedoms.",
  },
  {
    id: "ai-technology-policy",
    title: "Artificial Intelligence and Technology Policy",
    description:
      "Technology is reordering power dynamics globally. We examine the governance of artificial intelligence, digital surveillance, and data rights, with a specific focus on how these technologies impact the Global South and vulnerable populations. We seek policy frameworks that balance innovation with human rights.",
  },
  {
    id: "african-futures",
    title: "African Political and Economic Futures",
    description:
      "Moving beyond monolithic narratives, we conduct granular analysis of African political economies. We track regional integration efforts (like the AfCFTA), natural resource governance, debt architectures, and the demographic shifts that will define the continent's trajectory over the coming decades.",
  },
  {
    id: "corporate-accountability",
    title: "Corporate Accountability and Responsible Investment",
    description:
      "We investigate the human rights and environmental footprints of multinational corporations. Our research informs the development of mandatory human rights due diligence frameworks, ESG standards, and mechanisms for holding corporate actors accountable in complex jurisdictions.",
  },
  {
    id: "global-justice",
    title: "Global Justice and Institutional Accountability",
    description:
      "We scrutinize the architecture of global governance — from international financial institutions to multilateral bodies. Our work identifies structural deficits in accountability and proposes reforms to make these institutions more transparent, equitable, and responsive to the populations they affect.",
  },
  {
    id: "public-purpose-digital",
    title: "Public-Purpose Digital Systems and Open Innovation",
    description:
      "We examine the design, governance, and equity implications of digital public infrastructure — from open-data platforms and algorithmic public services to multilingual tools and low-bandwidth digital systems. This theme anchors FSRC Public Utility Labs' research-to-product pipeline and informs the ethics of applied innovation.",
  },
] as const;

// ---------------------------------------------------------------------------
// Advisory Service Lines (summary for UI — full detail in AdvisoryServices.tsx)
// ---------------------------------------------------------------------------

export const ADVISORY_SERVICE_LINES = [
  {
    id: "strategic-reports",
    title: "Strategic Policy Intelligence Reports",
    summary:
      "Commissioned long-form analysis and policy assessments for high-level decision-makers.",
  },
  {
    id: "country-risk",
    title: "Country Risk and Governance Analysis",
    summary:
      "Structured assessments of governance quality, rule-of-law conditions, and institutional risk.",
  },
  {
    id: "policy-briefings",
    title: "Policy Briefings",
    summary:
      "Concise, actionable intelligence on emerging policy issues for time-constrained decision-makers.",
  },
  {
    id: "expert-workshops",
    title: "Expert Workshops and Advisory",
    summary:
      "Facilitated expert sessions, advisory panels, and institutional capacity-building engagements.",
  },
] as const;

// ---------------------------------------------------------------------------
// Footer Navigation (subset of full nav, grouped)
// ---------------------------------------------------------------------------

export const FOOTER_NAV = {
  organization: [
    { href: "/about", label: "About FSRC" },
    { href: "/research-programs", label: "Research Programs" },
    { href: "/advisory-services", label: "Advisory Services" },
    { href: "/contact", label: "Contact" },
  ],
  research: [
    { href: "/publications", label: "Publications" },
    { href: "/research-themes", label: "Research Themes" },
    { href: "/public-utility-labs", label: "Public Utility Labs" },
    { href: "/advisory-services", label: "Advisory Services" },
  ],
} as const;
