import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Globe, Scale, BookText, Lightbulb, ShieldCheck, FileText, Download } from "lucide-react";
import { PageMeta } from "@/components/seo/PageMeta";
import { Button } from "@/components/ui/button";
import { PublicationCard } from "@/components/ui/PublicationCard";
import { ProgramCard } from "@/components/ui/ProgramCard";
import { ReportCover } from "@/components/ui/ReportCover";
import { publications } from "@/content/publications";
import { researchPrograms } from "@/content/researchPrograms";

const WHY_FSRC = [
  {
    label: "01",
    title: "Empirical Rigor",
    body: "Our analysis is grounded in systematic evidence, primary source research, and structured methodological frameworks — not opinion or advocacy.",
  },
  {
    label: "02",
    title: "Strategic Foresight",
    body: "We combine retrospective analysis with forward-looking scenario work to help institutions anticipate risk and identify emerging policy pressures.",
  },
  {
    label: "03",
    title: "Interdisciplinary Analysis",
    body: "Our research integrates political science, international law, economics, and technology policy to deliver analysis that captures systemic complexity.",
  },
  {
    label: "04",
    title: "Applied Innovation",
    body: "Through FSRC Public Utility Labs, we translate research insight and open data into practical digital tools and public-purpose technologies that extend the reach of evidence beyond specialist circles.",
  },
];

const THEMES = [
  { icon: Scale,       label: "Human Rights and Democratic Governance" },
  { icon: Lightbulb,  label: "Artificial Intelligence and Technology Policy" },
  { icon: Globe,       label: "African Political and Economic Futures" },
  { icon: ShieldCheck, label: "Corporate Accountability and Responsible Investment" },
  { icon: BookText,   label: "Global Justice and Institutional Accountability" },
];

const SERVICES = [
  {
    num: "01",
    title: "Strategic Policy Intelligence Reports",
    desc: "Commissioned long-form analysis and policy assessments for high-level decision-makers.",
  },
  {
    num: "02",
    title: "Country Risk and Governance Analysis",
    desc: "Structured assessments of governance quality, rule-of-law conditions, and institutional risk.",
  },
  {
    num: "03",
    title: "Policy Briefings",
    desc: "Concise, actionable intelligence on emerging policy issues for time-constrained decision-makers.",
  },
  {
    num: "04",
    title: "Expert Workshops and Advisory",
    desc: "Facilitated expert sessions, advisory panels, and institutional capacity-building engagements.",
  },
];

export default function Home() {
  const featuredPubs = publications.slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      <PageMeta
        title="FSRC"
        description="FSRC is an independent Canadian research, policy intelligence, and applied innovation organization producing rigorous analysis and practical tools on governance, human rights, artificial intelligence, and African futures."
      />

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center bg-primary overflow-hidden pt-16 lg:pt-20 pb-20">
        {/* Grid texture */}
        <div
          className="absolute inset-0 z-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(to right, #CC8B22 1px, transparent 1px), linear-gradient(to bottom, #CC8B22 1px, transparent 1px)`,
            backgroundSize: "80px 80px",
          }}
          aria-hidden="true"
        />
        {/* Vignette */}
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_90%_90%_at_15%_50%,_rgba(15,30,46,0)_0%,_rgba(15,30,46,0.85)_100%)]" aria-hidden="true" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-12 gap-12 items-center">

            {/* Headline */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <span className="inline-block text-accent text-[10px] font-semibold uppercase tracking-[0.25em] mb-7 border border-accent/30 px-3 py-1.5">
                  Research · Policy Intelligence · Applied Innovation · Ottawa, Canada
                </span>

                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif text-white font-bold mb-7 text-balance">
                  Evidence-Based Policy Intelligence for a Changing World
                </h1>

                <div className="w-14 h-0.5 bg-accent mb-8" aria-hidden="true" />

                <p className="text-lg text-white/65 mb-10 leading-relaxed max-w-xl">
                  FSRC advances evidence-based policy intelligence and public-purpose innovation — producing rigorous research, strategic analysis, and practical digital tools on governance, human rights, AI, and the future of Africa and the Global South.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/publications">
                    <Button variant="primary" size="lg" className="w-full sm:w-auto">
                      View Publications
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button variant="white-outline" size="lg" className="w-full sm:w-auto">
                      Commission Research
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Report cover */}
            <motion.div
              className="lg:col-span-5 hidden lg:flex justify-center items-center"
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.25, ease: "easeOut" }}
            >
              <div className="relative">
                <div className="absolute -inset-6 bg-accent/4 blur-3xl rounded-full" aria-hidden="true" />
                <ReportCover
                  title="Artificial Intelligence, Governance, and Human Rights in Africa"
                  subtitle="Risks, Institutional Gaps, and Strategic Policy Pathways"
                  author="Dr. D. Mario Matsinhe"
                  division="FSRC Policy Intelligence"
                  publicationType="Strategic Policy Intelligence Report"
                  date="March 2025"
                  size="sm"
                  className="relative shadow-2xl"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── LATEST REPORT (featured strip) ───────────────────────── */}
      <section className="bg-white border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="flex flex-col lg:flex-row lg:items-stretch gap-0 border border-border/60 shadow-sm overflow-hidden">
            {/* Accent left bar */}
            <div className="w-full h-0.5 lg:w-0.5 lg:h-auto bg-accent shrink-0" aria-hidden="true" />

            <div className="flex flex-col lg:flex-row flex-1">
              {/* Meta + title */}
              <div className="flex-1 p-8 lg:p-10 lg:border-r border-border/40">
                <div className="flex flex-wrap items-center gap-3 mb-5">
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-accent border border-accent/30 px-2.5 py-1">
                    Strategic Policy Intelligence Report
                  </span>
                  <span className="text-xs text-muted-foreground">March 2025</span>
                  <span className="text-[10px] text-muted-foreground border border-border/50 px-2 py-0.5 uppercase tracking-widest">
                    Latest Report
                  </span>
                </div>
                <h2 className="font-serif text-2xl lg:text-3xl font-bold text-primary leading-snug mb-4 max-w-xl">
                  Artificial Intelligence, Governance, and Human Rights in Africa
                </h2>
                <p className="text-foreground/60 leading-relaxed max-w-lg text-[15px]">
                  An analytical briefing on AI adoption, governance gaps, and human-rights risks across African contexts. Examines institutional readiness, regulatory frameworks, and civil society responses.
                </p>
              </div>

              {/* CTA panel */}
              <div className="lg:w-60 p-8 lg:p-10 bg-secondary/50 flex flex-col justify-between gap-6 shrink-0">
                <div>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-widest mb-1">Research Program</p>
                  <p className="text-sm font-serif font-semibold text-primary leading-snug">FSRC African Futures Lab</p>
                </div>
                <div className="flex flex-col gap-3">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-primary text-white text-[11px] font-semibold hover:bg-primary/90 transition-colors uppercase tracking-wider"
                  >
                    <FileText className="w-3.5 h-3.5" aria-hidden="true" />
                    Read Abstract
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 border border-border/70 text-primary text-[11px] font-semibold hover:border-accent hover:text-accent transition-colors uppercase tracking-wider"
                  >
                    <Download className="w-3.5 h-3.5" aria-hidden="true" />
                    Download PDF
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── INSTITUTIONAL STATEMENT ───────────────────────────────── */}
      <section className="py-28 bg-white border-b border-border/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            {/* Chapter marker */}
            <div className="flex items-center gap-5 mb-10 justify-center">
              <div className="w-12 h-px bg-accent/50" aria-hidden="true" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.3em] text-accent">FSRC</span>
              <div className="w-12 h-px bg-accent/50" aria-hidden="true" />
            </div>

            <p className="text-xl md:text-2xl lg:text-[1.6rem] font-serif text-primary/85 leading-relaxed text-center text-balance">
              FSRC is an independent Canadian research, policy intelligence, and applied innovation organization. We produce rigorous analysis, strategic intelligence, and practical digital tools for governments, foundations, civil society organizations, and institutions worldwide — operating across three modes: research, intelligence, and applied innovation.
            </p>

            {/* 3-mode pillars */}
            <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-0 border border-border/50 divide-y sm:divide-y-0 sm:divide-x divide-border/50">
              {[
                { label: "01", mode: "Research", desc: "Rigorous, peer-quality analysis grounded in primary evidence, comparative methodology, and disciplined foresight." },
                { label: "02", mode: "Intelligence", desc: "Commissioned briefs, risk assessments, and strategic intelligence designed for institutional decision-makers." },
                { label: "03", mode: "Applied Innovation", desc: "Public-purpose digital tools that carry research insight into practical reach — beyond specialist circles." },
              ].map((item) => (
                <div key={item.label} className="px-8 py-7 text-left">
                  <span className="text-[10px] font-semibold text-accent/60 uppercase tracking-[0.25em] block mb-3">{item.label}</span>
                  <h3 className="font-serif text-base font-bold text-primary mb-2">{item.mode}</h3>
                  <p className="text-foreground/55 text-[13px] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Closing mark */}
            <div className="flex items-center gap-5 mt-10 justify-center">
              <div className="w-12 h-px bg-border/50" aria-hidden="true" />
              <div className="w-1.5 h-1.5 bg-accent/50 rotate-45" aria-hidden="true" />
              <div className="w-12 h-px bg-border/50" aria-hidden="true" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── WHY FSRC ─────────────────────────────────────────────── */}
      <section className="py-24 bg-secondary border-b border-border/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <span className="text-accent text-[10px] font-semibold uppercase tracking-[0.25em]">Why FSRC</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mt-2">Our Institutional Approach</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 divide-y md:divide-y-0 md:divide-x divide-border/60">
            {WHY_FSRC.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="px-0 md:px-12 py-10 md:py-0 first:pl-0 last:pr-0"
              >
                <span className="text-[10px] font-semibold text-accent/70 uppercase tracking-[0.25em] block mb-5">
                  {item.label}
                </span>
                <h3 className="font-serif text-xl font-bold text-primary mb-4">
                  {item.title}
                </h3>
                <div className="w-7 h-0.5 bg-accent/50 mb-5" aria-hidden="true" />
                <p className="text-foreground/65 text-[15px] leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RESEARCH PROGRAMS ────────────────────────────────────── */}
      <section className="py-24 bg-white border-b border-border/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <span className="text-accent text-[10px] font-semibold uppercase tracking-[0.25em]">Divisions</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mt-2">Our Research & Innovation Divisions</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {researchPrograms.map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProgramCard program={program} index={index} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RECENT PUBLICATIONS ──────────────────────────────────── */}
      <section className="py-24 bg-secondary border-b border-border/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
            <div>
              <span className="text-accent text-[10px] font-semibold uppercase tracking-[0.25em]">Intelligence</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mt-2">Recent Publications</h2>
            </div>
            <Link
              href="/publications"
              className="hidden md:inline-flex items-center gap-2 text-primary/60 text-[11px] font-semibold hover:text-accent transition-colors uppercase tracking-widest mt-4 md:mt-0"
            >
              View All Publications <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredPubs.map((pub, index) => (
              <motion.div
                key={pub.id}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <PublicationCard pub={pub} />
              </motion.div>
            ))}
          </div>

          <div className="mt-8 md:hidden text-center">
            <Link href="/publications">
              <Button variant="outline" className="w-full">View All Publications</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── PUBLIC UTILITY LABS ──────────────────────────────────── */}
      <section className="py-24 bg-primary text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* Left text block */}
            <div className="lg:col-span-5">
              <span className="text-accent text-[10px] font-semibold uppercase tracking-[0.25em] block mb-4">Applied Innovation Division</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mt-0 mb-5 leading-snug">
                FSRC Public Utility Labs
              </h2>
              <div className="w-10 h-0.5 bg-accent mb-7" aria-hidden="true" />
              <p className="text-white/55 text-[15px] leading-relaxed mb-5">
                The applied innovation arm of FSRC — building practical digital tools that translate research insight and open data into accessible, public-purpose technologies.
              </p>
              <p className="text-white/40 text-sm leading-relaxed mb-9">
                FSRC Public Utility Labs exists to ensure that knowledge does not remain trapped in reports or specialist circles. Our products are grounded in FSRC's values of empirical integrity, public responsibility, and practical usefulness.
              </p>
              <Link href="/public-utility-labs">
                <Button variant="primary" size="sm" className="inline-flex items-center gap-2">
                  Explore FSRC Products <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>

            {/* Right product cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/8">
              {[
                {
                  name: "Aristo",
                  category: "AI Productivity Platform",
                  status: "In Development",
                  desc: "A prompt-engineering and AI productivity platform that helps users turn rough ideas into clear, structured prompts and high-quality AI outputs.",
                  link: "https://aristoprompt.ai",
                  linkLabel: "aristoprompt.ai",
                },
                {
                  name: "ZenBill",
                  category: "Business Utility Platform",
                  status: "In Development",
                  desc: "An AI-powered invoicing and billing platform designed for mobile-first businesses, multilingual users, and low-bandwidth environments.",
                  link: "https://zenbill.pro",
                  linkLabel: "zenbill.pro",
                },
              ].map((product, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-primary hover:bg-white/5 transition-colors duration-200 p-8 md:p-9 flex flex-col"
                >
                  <div className="flex items-start justify-between gap-4 mb-5">
                    <span className="text-[10px] font-semibold text-accent/70 uppercase tracking-[0.25em]">{product.category}</span>
                    <span className="text-[10px] font-semibold text-white/30 border border-white/15 px-2 py-0.5 uppercase tracking-widest shrink-0">{product.status}</span>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-white mb-4">{product.name}</h3>
                  <div className="w-7 h-0.5 bg-accent/50 mb-5" aria-hidden="true" />
                  <p className="text-white/50 text-sm leading-relaxed mb-6 flex-1">{product.desc}</p>
                  {product.link && (
                    <a
                      href={product.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-accent text-[11px] font-semibold uppercase tracking-[0.2em] hover:text-accent/70 transition-colors"
                    >
                      <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                      {product.linkLabel}
                    </a>
                  )}
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── ADVISORY SERVICES ────────────────────────────────────── */}
      <section className="py-24 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* Column: intro */}
            <div className="lg:col-span-4">
              <span className="text-accent text-[10px] font-semibold uppercase tracking-[0.25em]">For Institutions</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mt-2 mb-6">Advisory Services</h2>
              <p className="text-white/50 text-[15px] leading-relaxed mb-8">
                We work with governments, foundations, civil society organizations, and development institutions requiring commissioned research and expert briefings.
              </p>
              <Link href="/advisory-services">
                <Button variant="primary" size="sm" className="inline-flex items-center gap-2">
                  View All Services <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>

            {/* Column: service tiles */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/8">
              {SERVICES.map((service, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="bg-primary hover:bg-white/5 transition-colors duration-200 p-8 md:p-9"
                >
                  <span className="text-[10px] font-semibold text-accent/60 uppercase tracking-[0.25em] block mb-5">
                    {service.num}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-white mb-3 leading-snug">
                    {service.title}
                  </h3>
                  <div className="w-6 h-px bg-accent/30 mb-4" aria-hidden="true" />
                  <p className="text-white/45 text-sm leading-relaxed">{service.desc}</p>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ── RESEARCH THEMES ──────────────────────────────────────── */}
      <section className="py-24 bg-white border-b border-border/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-3">
              <span className="text-accent text-[10px] font-semibold uppercase tracking-[0.25em]">Areas of Inquiry</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mt-2 mb-6">Research Themes</h2>
              <Link
                href="/research-themes"
                className="inline-flex items-center gap-2 text-[11px] font-semibold text-primary/55 hover:text-accent transition-colors uppercase tracking-widest"
              >
                Explore All <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            <div className="lg:col-span-9">
              <div className="divide-y divide-border/50">
                {THEMES.map(({ icon: Icon, label }, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.06 }}
                    className="flex items-center gap-5 py-5 group cursor-default"
                  >
                    <div className="w-8 h-8 border border-border/50 flex items-center justify-center shrink-0 group-hover:border-accent/50 transition-colors text-primary/35 group-hover:text-accent">
                      <Icon className="w-4 h-4" aria-hidden="true" />
                    </div>
                    <span className="font-serif font-semibold text-primary group-hover:text-accent transition-colors duration-200 text-lg">
                      {label}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-accent ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-200 shrink-0" aria-hidden="true" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMMISSION RESEARCH CTA ───────────────────────────────── */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-border/50 bg-white p-10 md:p-16 flex flex-col md:flex-row md:items-center justify-between gap-10">
            <div className="max-w-xl">
              <span className="text-accent text-[10px] font-semibold uppercase tracking-[0.25em] block mb-3">Commissioned Research</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-5">
                Partner With FSRC
              </h2>
              <div className="w-10 h-0.5 bg-accent mb-6" aria-hidden="true" />
              <p className="text-foreground/60 leading-relaxed text-[15px]">
                Governments, foundations, development agencies, and civil society organizations engage FSRC to produce rigorous, independent analysis tailored to their strategic and institutional needs. We deliver policy intelligence that is analytically sound, contextually grounded, and decision-ready.
              </p>
            </div>
            <div className="flex flex-col gap-4 shrink-0">
              <Link href="/contact">
                <Button variant="primary" size="lg" className="w-full md:w-auto whitespace-nowrap">
                  Start a Conversation
                </Button>
              </Link>
              <Link
                href="/advisory-services"
                className="text-center text-[11px] font-semibold text-primary/55 hover:text-accent transition-colors uppercase tracking-widest"
              >
                View Advisory Services
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
