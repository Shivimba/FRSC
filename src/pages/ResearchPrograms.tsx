import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { PageMeta } from "@/components/seo/PageMeta";
import { researchPrograms } from "@/content/researchPrograms";
import { Button } from "@/components/ui/button";

const CORE_PROGRAMS = researchPrograms.filter((p) => p.id !== "public-utility-labs");

const PROGRAM_METADATA: Record<string, {
  focusAreas: string[];
  outputs: string[];
  audiences: string[];
}> = {
  "policy-intelligence": {
    focusAreas: [
      "Strategic governance and institutional integrity",
      "Digital rights and AI governance",
      "Civic space and civil society assessment",
      "Development policy intelligence",
    ],
    outputs: [
      "Strategic Policy Intelligence Reports",
      "Commissioned Country Risk Assessments",
      "Policy Briefings for Decision-Makers",
      "Expert Testimony and Advisory Panels",
    ],
    audiences: [
      "Foundations and philanthropic institutions",
      "Multilateral development agencies",
      "Civil society and advocacy organizations",
      "Government and public sector bodies",
    ],
  },
  "global-justice-intelligence": {
    focusAreas: [
      "Democratic backsliding and authoritarianism",
      "Human rights accountability and documentation",
      "Corporate human rights due diligence",
      "Transitional justice and rule-of-law reform",
    ],
    outputs: [
      "Human Rights Situation Reports",
      "Democratic Backsliding Trend Assessments",
      "Advocacy Briefings and Legal Analysis Memos",
      "Annual Civic Space Index Contributions",
    ],
    audiences: [
      "Human rights organizations and watchdogs",
      "International legal bodies and courts",
      "Investigative journalism outlets",
      "Academic and research institutions",
    ],
  },
  "african-futures-lab": {
    focusAreas: [
      "Continental integration and AfCFTA implementation",
      "Natural resource governance and extraction regimes",
      "Demographic dividend and youth policy",
      "Sovereign debt architecture and development finance",
    ],
    outputs: [
      "Long-Form African Futures Papers",
      "Political Economy Regional Analyses",
      "Continental Integration Assessments",
      "Scenario Planning and Strategic Foresight Reports",
    ],
    audiences: [
      "African policy institutes and think tanks",
      "International development organizations",
      "Diaspora advocacy and investment networks",
      "Regional intergovernmental bodies",
    ],
  },
};
const PUL_FOCUS_AREAS = [
  "AI productivity tools",
  "Multilingual business utilities",
  "Open-data-powered public services",
  "Practical software for underserved users",
];
const PUL_PRODUCTS = [
  {
    name: "Aristo",
    category: "AI Productivity Platform",
    desc: "A prompt-engineering and AI productivity platform that helps users turn rough ideas into clear, high-quality prompts and structured instructions.",
    status: "In Development",
    link: "https://aristoprompt.ai",
    linkLabel: "aristoprompt.ai",
  },
  {
    name: "ZenBill",
    category: "Business Utility Platform",
    desc: "An AI-powered invoicing and billing platform designed for mobile-first businesses, multilingual users, and low-bandwidth environments.",
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
    transition: { duration: 0.5, delay: i * 0.07 },
  }),
};

export default function ResearchPrograms() {
  return (
    <div className="pb-0">
      <PageMeta
        title="Research Programs"
        description="FSRC organizes its work into four institutional divisions: Policy Intelligence, Global Justice Intelligence, African Futures Lab, and Public Utility Labs — each producing rigorous, independent research, analysis, and applied tools."
      />
      <PageHero
        title="Research Programs"
        description="FSRC organises its work into four institutional divisions, each producing distinct streams of research, analysis, strategic foresight, and applied innovation."
      />

      {/* ── Core Research Programs ─────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="mb-14">
          <span className="text-accent text-[10px] font-semibold uppercase tracking-[0.25em]">Research Divisions</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mt-2">Core Research Programs</h2>
        </div>

        <div className="space-y-24 pb-24 border-b border-border/40">
          {CORE_PROGRAMS.map((program, index) => (
            <motion.div
              key={program.id}
              id={program.id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={fadeUp}
              className={`flex flex-col lg:flex-row gap-12 lg:gap-20 items-start ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}
            >
              {/* Abstract visual */}
              <div className="w-full lg:w-5/12 aspect-[4/3] bg-secondary relative flex items-center justify-center overflow-hidden border border-border/40 shrink-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(15,30,46,0.06)_0%,_transparent_70%)]" aria-hidden="true" />
                <span className="font-serif text-[160px] font-bold text-primary/8 select-none leading-none">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-accent/60 to-transparent" aria-hidden="true" />
              </div>

              {/* Content */}
              <div className="w-full lg:w-7/12">
                <span className="text-[10px] font-semibold text-accent/70 uppercase tracking-[0.25em] block mb-4">
                  Research Division
                </span>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-5">
                  {program.name}
                </h2>
                <div className="w-10 h-0.5 bg-accent mb-7" aria-hidden="true" />
                <p className="text-lg text-foreground/80 font-medium mb-5 leading-relaxed">
                  {program.shortDescription}
                </p>
                <p className="text-foreground/60 leading-relaxed text-[15px] mb-10">
                  {program.fullDescription}
                </p>

                {/* Metadata grid */}
                {PROGRAM_METADATA[program.id] && (() => {
                  const meta = PROGRAM_METADATA[program.id];
                  return (
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 border border-border/50 mb-10 divide-y sm:divide-y-0 sm:divide-x divide-border/50">
                      <div className="p-5">
                        <p className="text-[10px] font-semibold text-accent/70 uppercase tracking-[0.25em] mb-4">Focus Areas</p>
                        <ul className="space-y-2">
                          {meta.focusAreas.map((a, j) => (
                            <li key={j} className="flex items-start gap-2 text-[12px] text-foreground/60 leading-relaxed">
                              <div className="w-1 h-1 bg-accent/50 rounded-full mt-1.5 shrink-0" aria-hidden="true" />
                              {a}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="p-5">
                        <p className="text-[10px] font-semibold text-accent/70 uppercase tracking-[0.25em] mb-4">Outputs</p>
                        <ul className="space-y-2">
                          {meta.outputs.map((o, j) => (
                            <li key={j} className="flex items-start gap-2 text-[12px] text-foreground/60 leading-relaxed">
                              <div className="w-1 h-1 bg-accent/50 rounded-full mt-1.5 shrink-0" aria-hidden="true" />
                              {o}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="p-5">
                        <p className="text-[10px] font-semibold text-accent/70 uppercase tracking-[0.25em] mb-4">Audiences</p>
                        <ul className="space-y-2">
                          {meta.audiences.map((a, j) => (
                            <li key={j} className="flex items-start gap-2 text-[12px] text-foreground/60 leading-relaxed">
                              <div className="w-1 h-1 bg-accent/50 rounded-full mt-1.5 shrink-0" aria-hidden="true" />
                              {a}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  );
                })()}

                <div className="flex flex-wrap gap-4">
                  <Link href="/publications">
                    <Button variant="outline">View Program Output</Button>
                  </Link>
                  <Link href="/contact">
                    <Button variant="ghost" className="text-accent hover:text-primary">
                      Commission Research
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── FSRC Public Utility Labs ─────────────────────────────── */}
      <section className="py-24 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16 pb-16 border-b border-white/10">
            <div className="lg:col-span-5">
              <span className="text-accent text-[10px] font-semibold uppercase tracking-[0.25em] block mb-4">Applied Innovation Division</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-white leading-snug mb-5">
                FSRC Public Utility Labs
              </h2>
              <div className="w-10 h-0.5 bg-accent mb-7" aria-hidden="true" />
              <p className="text-white/55 text-[15px] leading-relaxed mb-8">
                The applied innovation arm of FSRC — designing and building practical digital tools, SaaS products, and public-facing intelligence systems that transform open data, public knowledge, and analytical insight into accessible, useful technologies.
              </p>
              <Link href="/public-utility-labs">
                <button className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-white text-sm font-semibold hover:bg-accent/90 transition-colors">
                  Explore FSRC Products
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
              </Link>
            </div>
            <div className="lg:col-span-7 lg:pl-10 lg:border-l border-white/10">
              <p className="text-[10px] font-semibold text-white/40 uppercase tracking-[0.25em] mb-6">What It Produces</p>
              <div className="space-y-5 text-white/60 text-[15px] leading-relaxed">
                <p>
                  FSRC Public Utility Labs exists to ensure that knowledge does not remain trapped in reports, institutions, or specialist circles. The Lab builds technologies that carry the insights of research into the everyday decisions of people who need them.
                </p>
                <p>
                  Its outputs span digital productivity tools, multilingual business utilities, open-data intelligence systems, and public-utility SaaS products — all grounded in FSRC's values of empirical integrity, public responsibility, and strategic foresight.
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-white/10">
                <p className="text-[10px] font-semibold text-white/40 uppercase tracking-[0.25em] mb-4">Who It Serves</p>
                <p className="text-white/55 text-sm leading-relaxed">
                  Individuals, small enterprises, professionals, and institutions who need practical, ethically designed tools — particularly in multilingual, low-bandwidth, or underserved contexts where existing commercial products fall short.
                </p>
              </div>
            </div>
          </div>

          {/* Current Products */}
          <div className="mb-14">
            <span className="text-accent text-[10px] font-semibold uppercase tracking-[0.25em] block mb-3">Portfolio</span>
            <h3 className="font-serif text-2xl font-bold text-white">Current Products</h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/8 mb-16">
            {PUL_PRODUCTS.map((product, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-primary p-8 md:p-10 hover:bg-white/5 transition-colors"
              >
                <div className="flex items-start justify-between gap-4 mb-5">
                  <span className="text-[10px] font-semibold text-accent/70 uppercase tracking-[0.25em]">
                    {product.category}
                  </span>
                  <span className="text-[10px] font-semibold text-white/30 border border-white/15 px-2 py-0.5 uppercase tracking-widest shrink-0">
                    {product.status}
                  </span>
                </div>
                <h4 className="font-serif text-2xl font-bold text-white mb-4">{product.name}</h4>
                <div className="w-7 h-0.5 bg-accent/50 mb-5" aria-hidden="true" />
                <p className="text-white/50 text-sm leading-relaxed mb-6">{product.desc}</p>
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

          {/* Focus Areas */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 pt-8 border-t border-white/10">
            <div className="lg:col-span-4">
              <span className="text-[10px] font-semibold text-white/40 uppercase tracking-[0.25em] block mb-3">2025–2026</span>
              <h3 className="font-serif text-xl font-bold text-white">Current Focus Areas</h3>
            </div>
            <div className="lg:col-span-8 divide-y divide-white/10">
              {PUL_FOCUS_AREAS.map((area, i) => (
                <div key={i} className="flex items-center gap-5 py-4">
                  <span className="text-[10px] text-accent/60 font-semibold uppercase tracking-[0.25em] shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-serif text-white/70 font-semibold">{area}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────── */}
      <section className="py-24 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border border-border/50 bg-white p-10 md:p-16 flex flex-col md:flex-row md:items-center justify-between gap-10">
            <div className="max-w-xl">
              <span className="text-accent text-[10px] font-semibold uppercase tracking-[0.25em] block mb-3">Commissioned Research</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-5">Engage FSRC</h2>
              <div className="w-10 h-0.5 bg-accent mb-6" aria-hidden="true" />
              <p className="text-foreground/60 leading-relaxed text-[15px]">
                Commission research through our core programs, explore applied tool development through Public Utility Labs, or inquire about advisory services for your institution.
              </p>
            </div>
            <div className="flex flex-col gap-4 shrink-0">
              <Link href="/contact">
                <button className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-colors w-full md:w-auto whitespace-nowrap">
                  Start a Conversation
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </button>
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
