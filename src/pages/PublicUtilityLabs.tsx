import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { PageMeta } from "@/components/seo/PageMeta";

const OBJECTIVES = [
  {
    num: "01",
    title: "Transform Open Data into Useful Tools",
    body: "We treat publicly available data, open knowledge, and research insight as raw material — converting what is inaccessible or opaque into structured, usable services.",
  },
  {
    num: "02",
    title: "Build Public-Utility Software with Ethical Intent",
    body: "Every product is designed with a clear public purpose. Commercial sustainability is a means to durability, not an end in itself. We do not build extractive technologies.",
  },
  {
    num: "03",
    title: "Bridge Research, Intelligence, and Everyday Usability",
    body: "We apply the analytical standards of FSRC's research tradition to product design — ensuring that our tools are grounded, honest, and calibrated to genuine user needs.",
  },
  {
    num: "04",
    title: "Create Commercially Sustainable Tools Aligned with Public Good",
    body: "Sustainability funds independence. The Lab designs products that generate revenue through genuine value creation — not through user exploitation, data harvesting, or dark patterns.",
  },
  {
    num: "05",
    title: "Model Responsible Innovation Rooted in Evidence",
    body: "We approach technology development the way FSRC approaches research: with rigour, transparency, and a commitment to acknowledging what we do not yet know.",
  },
];

const FOCUS_AREAS = [
  "AI productivity tools",
  "Multilingual business utilities",
  "Open-data-powered public services",
  "Practical software for underserved users",
];

const PRODUCTS = [
  {
    category: "AI Productivity Platform",
    name: "Aristo",
    description:
      "A prompt-engineering and AI productivity platform that helps users turn rough ideas into clear, high-quality prompts and structured instructions. Aristo is designed for professionals, researchers, and knowledge workers who want to work more precisely and effectively with AI systems.",
    status: "In Development",
    link: "https://aristoprompt.ai",
    linkLabel: "aristoprompt.ai",
  },
  {
    category: "Business Utility Platform",
    name: "ZenBill",
    description:
      "An AI-powered invoicing and billing platform designed for mobile-first businesses, multilingual users, and low-bandwidth environments. ZenBill makes professional financial documentation accessible to small enterprises, freelancers, and entrepreneurs in underserved markets.",
    status: "In Development",
    link: "https://zenbill.pro",
    linkLabel: "zenbill.pro",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08 },
  }),
};

export default function PublicUtilityLabs() {
  return (
    <div className="pb-0 min-h-screen bg-white">
      <PageMeta
        title="FSRC Public Utility Labs"
        description="FSRC Public Utility Labs is the applied innovation arm of FSRC, designing and building practical digital tools and public-facing intelligence systems that translate open data and research insight into accessible, useful services."
      />
      <PageHero
        title="FSRC Public Utility Labs"
        description="The applied innovation arm of FSRC — translating open data, research insight, and public knowledge into practical digital tools and intelligence systems."
      />

      {/* ── Mission ─────────────────────────────────────────────── */}
      <section className="py-20 border-b border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4">
              <span className="text-accent text-[10px] font-semibold uppercase tracking-[0.25em] block mb-3">Applied Innovation Division</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary leading-snug">
                Knowledge that works in the real world
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-5 text-foreground/70 leading-relaxed">
              <p className="text-lg font-serif text-primary/80 leading-relaxed">
                FSRC Public Utility Labs is the applied innovation arm of FSRC. It designs and builds practical digital tools, SaaS products, and public-facing intelligence systems that transform open data, public knowledge, and analytical insight into accessible, useful services.
              </p>
              <p>
                The division exists to ensure that knowledge does not remain trapped in reports, institutions, or specialist circles — but is translated into technologies that improve decision-making, productivity, inclusion, and everyday utility. Every product the Lab builds is grounded in the same values that define FSRC's research: empirical integrity, public responsibility, and strategic foresight.
              </p>
              <p>
                Unlike generic software studios or startup incubators, FSRC Public Utility Labs is a mission-aligned institutional unit. It does not build technology for its own sake. It builds technologies that serve a demonstrable public purpose, that operate with ethical clarity, and that extend the reach of evidence-based insight to users who benefit from it most.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Objectives ──────────────────────────────────────────── */}
      <section className="py-20 bg-secondary border-b border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <span className="text-accent text-[10px] font-semibold uppercase tracking-[0.25em]">What We Stand For</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mt-2">Objectives</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 divide-y md:divide-y-0 md:[&>*:nth-child(odd)]:border-r md:[&>*:nth-child(odd)]:border-border/40 lg:[&>*:nth-child(3n)]:border-r-0 lg:[&>*:not(:nth-child(n+4))]:border-b lg:[&>*:not(:nth-child(n+4))]:border-border/40">
            {OBJECTIVES.map((obj, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={fadeUp}
                className="p-8 md:p-10 last:col-span-full last:border-r-0"
              >
                <span className="text-[10px] font-semibold text-accent/70 uppercase tracking-[0.25em] block mb-5">
                  {obj.num}
                </span>
                <h3 className="font-serif text-lg font-bold text-primary mb-3">{obj.title}</h3>
                <div className="w-7 h-0.5 bg-accent/50 mb-4" aria-hidden="true" />
                <p className="text-[15px] text-foreground/65 leading-relaxed">{obj.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What We Build ───────────────────────────────────────── */}
      <section className="py-20 border-b border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4">
              <span className="text-accent text-[10px] font-semibold uppercase tracking-[0.25em] block mb-3">Output Types</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">What We Build</h2>
              <div className="w-8 h-0.5 bg-accent mb-6" aria-hidden="true" />
              <p className="text-foreground/60 text-[15px] leading-relaxed">
                The Lab produces four categories of applied digital output — each grounded in research insight and designed for genuine, practical use.
              </p>
            </div>
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  title: "AI Productivity Tools",
                  desc: "Platforms and utilities that help individuals and organizations work more precisely and effectively with AI systems — reducing friction, improving output quality, and making AI capability more accessible.",
                },
                {
                  title: "Multilingual Business Utilities",
                  desc: "Practical business software designed from the outset for multilingual users and diverse institutional contexts — addressing the gap between tools designed for Western markets and the needs of global users.",
                },
                {
                  title: "Open-Data Intelligence Systems",
                  desc: "Applications that aggregate, structure, and surface publicly available data in forms that are useful for decision-making — transforming raw open data into actionable intelligence.",
                },
                {
                  title: "Public-Utility SaaS Products",
                  desc: "Software-as-a-service tools designed explicitly for underserved users, low-bandwidth environments, and contexts where existing commercial products fail to meet real-world needs.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="bg-white border border-border/50 p-7"
                >
                  <h4 className="font-serif font-bold text-primary mb-3 text-base">{item.title}</h4>
                  <div className="w-6 h-0.5 bg-accent/50 mb-4" aria-hidden="true" />
                  <p className="text-sm text-foreground/60 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Current Products ─────────────────────────────────────── */}
      <section className="py-20 bg-primary border-b border-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <span className="text-accent text-[10px] font-semibold uppercase tracking-[0.25em]">Portfolio</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mt-2">Current Products</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
            {PRODUCTS.map((product, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="p-10 md:p-12 first:pl-0 last:pr-0 lg:first:pl-0 lg:last:pl-12 lg:first:pr-12"
              >
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    <span className="text-[10px] font-semibold text-accent/70 uppercase tracking-[0.25em] block mb-3">
                      {product.category}
                    </span>
                    <h3 className="font-serif text-3xl font-bold text-white">{product.name}</h3>
                  </div>
                  <span className="text-[10px] font-semibold text-white/30 border border-white/15 px-2.5 py-1 uppercase tracking-widest shrink-0 mt-1">
                    {product.status}
                  </span>
                </div>

                <div className="w-8 h-0.5 bg-accent mb-7" aria-hidden="true" />

                <p className="text-white/60 leading-relaxed text-[15px] mb-7">{product.description}</p>

                {product.link && (
                  <a
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-accent text-[11px] font-semibold uppercase tracking-[0.2em] hover:text-accent/70 transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                    {product.linkLabel}
                  </a>
                )}
              </motion.div>
            ))}
          </div>

          <div className="mt-14 pt-12 border-t border-white/10">
            <p className="text-white/40 text-sm leading-relaxed max-w-xl mb-8">
              FSRC Public Utility Labs operates on a phased development model. Products are built, tested, and iterated in response to real user feedback. We publish progress notes as significant milestones are reached.
            </p>
            <Link href="/contact">
              <button className="inline-flex items-center gap-2 px-7 py-3.5 bg-accent text-white text-sm font-semibold hover:bg-accent/90 transition-colors">
                Inquire About Products
                <ExternalLink className="w-4 h-4" aria-hidden="true" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Current Focus Areas ──────────────────────────────────── */}
      <section className="py-20 border-b border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4">
              <span className="text-accent text-[10px] font-semibold uppercase tracking-[0.25em] block mb-3">2025–2026</span>
              <h2 className="font-serif text-3xl font-bold text-primary mb-4">Current Focus Areas</h2>
              <div className="w-8 h-0.5 bg-accent" aria-hidden="true" />
            </div>
            <div className="lg:col-span-8">
              <div className="divide-y divide-border/50">
                {FOCUS_AREAS.map((area, i) => (
                  <motion.div
                    key={i}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="flex items-center gap-5 py-5"
                  >
                    <span className="text-[10px] font-semibold text-accent/60 uppercase tracking-[0.25em] w-6 shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-serif font-semibold text-primary text-lg">{area}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why It Matters ──────────────────────────────────────── */}
      <section className="py-20 bg-secondary border-b border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <span className="text-accent text-[10px] font-semibold uppercase tracking-[0.25em] block mb-4">Rationale</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-6">Why It Matters</h2>
            <div className="w-10 h-0.5 bg-accent mb-8" aria-hidden="true" />
            <p className="font-serif text-xl text-primary/80 leading-relaxed mb-5">
              Knowledge that cannot be used is not truly useful.
            </p>
            <div className="space-y-4 text-foreground/65 leading-relaxed text-[15px]">
              <p>
                The policy research community produces extraordinary volumes of analysis — but much of it reaches only a narrow audience of specialists, funders, and institutional decision-makers. FSRC Public Utility Labs addresses the gap between research production and public utility by building tools that carry the insights of research into the everyday decisions of people who need them.
              </p>
              <p>
                In a landscape dominated by technology products that monetize attention, extract data, and deepen inequality, we believe there is a meaningful role for a differently motivated actor: one that builds technology as an act of institutional responsibility, not commercial opportunism. FSRC Public Utility Labs models a form of innovation that is accountable, grounded, and oriented toward genuine public benefit.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-border/50 bg-white p-10 md:p-16 flex flex-col md:flex-row md:items-center justify-between gap-10">
            <div className="max-w-xl">
              <span className="text-accent text-[10px] font-semibold uppercase tracking-[0.25em] block mb-3">Get Involved</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-5">
                Explore FSRC Products
              </h2>
              <div className="w-10 h-0.5 bg-accent mb-6" aria-hidden="true" />
              <p className="text-foreground/60 leading-relaxed text-[15px]">
                Whether you are a potential user, an institutional partner, or a developer interested in contributing, we welcome serious inquiry about FSRC Public Utility Labs and its products.
              </p>
            </div>
            <div className="flex flex-col gap-4 shrink-0">
              <Link href="/contact">
                <button className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-colors w-full md:w-auto whitespace-nowrap">
                  Inquire About Products
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </Link>
              <Link
                href="/research-programs"
                className="text-center text-[11px] font-semibold text-primary/55 hover:text-accent transition-colors uppercase tracking-widest"
              >
                All Research Programs
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
