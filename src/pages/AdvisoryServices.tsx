import { motion } from "framer-motion";
import { Link } from "wouter";
import { PageHero } from "@/components/layout/PageHero";
import { PageMeta } from "@/components/seo/PageMeta";
import { ArrowRight, FileText, Globe2, BookOpen, Users, ChevronRight } from "lucide-react";

const SERVICES = [
  {
    number: "01",
    icon: FileText,
    title: "Strategic Policy Intelligence Reports",
    what: "Commissioned long-form research reports providing structured analysis of complex policy environments, institutional dynamics, and governance challenges. Each report is tailored to the commissioning institution's strategic questions and delivered as a standalone, publication-ready document.",
    whoFor: "Foundations, development agencies, multilateral institutions, and civil society organizations that require deep, independent analysis to inform programming, advocacy, or investment decisions.",
    deliverables: [
      "Scoped research report (30–80 pages) with executive summary",
      "Structured evidence base with source documentation",
      "Policy recommendations and scenario analysis",
      "Optional accompanying brief for wider distribution",
    ],
    useCases: [
      "A foundation commissioning an assessment of AI governance readiness across five African countries to guide its digital rights grantmaking strategy",
      "A development agency requiring an independent analysis of civic space restrictions in a target country before designing a democracy support programme",
      "A multilateral institution seeking a political economy analysis to inform its governance reform programming",
    ],
  },
  {
    number: "02",
    icon: Globe2,
    title: "Country Risk and Governance Analysis",
    what: "Structured assessments of political stability, institutional integrity, rule-of-law conditions, and governance risk in specific jurisdictions. FSRC's analysis moves beyond surface-level ratings to examine the political economy drivers underlying institutional performance.",
    whoFor: "Investors, insurers, impact finance institutions, and development agencies requiring nuanced, evidence-based risk intelligence on specific countries or regions.",
    deliverables: [
      "Country risk assessment with governance and rights dimensions",
      "Structured risk ratings with qualitative narrative",
      "Scenario analysis for key risk variables",
      "Quarterly or event-driven update briefs (optional)",
    ],
    useCases: [
      "An impact investor conducting human rights due diligence ahead of a significant infrastructure investment in a high-risk jurisdiction",
      "A development institution requiring a pre-programme risk assessment for a governance reform engagement in a post-conflict state",
      "An insurer seeking independent analysis of political risk exposure in a frontier market portfolio",
    ],
  },
  {
    number: "03",
    icon: BookOpen,
    title: "Policy Briefings",
    what: "Concise, analytically grounded intelligence documents on emerging issues, policy developments, or thematic questions. Policy briefings are designed for time-constrained decision-makers who need accurate, contextualised analysis without the length of a full report.",
    whoFor: "Senior leadership teams, policy directors, communications professionals, and programme staff at NGOs, think tanks, foundations, and government agencies who need reliable, fast-turnaround intelligence.",
    deliverables: [
      "Concise briefing document (4–12 pages)",
      "Context, analysis, and implications structured for decision use",
      "Optional Q&A or talking points annex",
      "Rapid-turnaround timeline available on request",
    ],
    useCases: [
      "A regional human rights organisation needing an authoritative briefing on AI surveillance trends in East Africa before a major advocacy campaign",
      "A think tank preparing its leadership for engagement with a government delegation on digital governance reform",
      "A journalism organisation requiring a structured background briefing on extractive sector accountability in a specific jurisdiction",
    ],
  },
  {
    number: "04",
    icon: Users,
    title: "Expert Workshops and Advisory",
    what: "Facilitated expert sessions, advisory panels, and structured dialogues led or supported by FSRC researchers. These engagements are designed to build institutional knowledge, stress-test analytical frameworks, or develop shared understanding of complex policy questions.",
    whoFor: "Programme teams, senior leadership, and research departments at foundations, civil society organisations, universities, and policy institutes who want structured expert engagement beyond a written deliverable.",
    deliverables: [
      "Designed and facilitated workshop session (half-day to full-day)",
      "Pre-workshop preparatory brief or reading materials",
      "Post-session synthesis note with key findings and next steps",
      "Optional ongoing advisory relationship",
    ],
    useCases: [
      "A foundation convening its grantee network for a structured dialogue on digital rights strategy in the Global South",
      "A university research centre engaging FSRC to stress-test a research framework on African political economy before publication",
      "A policy institute seeking facilitation for an expert roundtable on corporate accountability and mandatory human rights due diligence legislation",
    ],
  },
];

const PROCESS_STEPS = [
  {
    number: "01",
    title: "Initial Consultation",
    description:
      "We begin with a structured conversation to understand your institution's analytical needs, the decision context, and the type of intelligence that would be most useful. This consultation is obligation-free and shapes whether and how we can help.",
  },
  {
    number: "02",
    title: "Scope and Research Design",
    description:
      "We develop a clear scope of work — specifying the research question, methodology, evidence base, deliverable format, and timeline. We share this with you before proceeding so expectations are aligned from the outset.",
  },
  {
    number: "03",
    title: "Analysis and Delivery",
    description:
      "Our research team conducts structured analysis using primary and secondary sources. We deliver a draft for your review, incorporate feedback, and finalise the deliverable to meet your institutional standards.",
  },
  {
    number: "04",
    title: "Optional Follow-on Support",
    description:
      "Where useful, we offer follow-on support — update briefs, presentation of findings, additional briefings, or an ongoing advisory relationship. This is always optional and scoped to your needs.",
  },
];

const CLIENT_TYPES = [
  "Non-governmental organisations (NGOs)",
  "Philanthropic foundations",
  "Think tanks and policy institutes",
  "Universities and research institutions",
  "Bilateral and multilateral development agencies",
  "Impact investors and development finance institutions",
  "Journalism and investigative research organisations",
  "Civil society networks and advocacy coalitions",
];

export default function AdvisoryServices() {
  return (
    <div className="pb-0 min-h-screen bg-white">
      <PageMeta
        title="Advisory Services"
        description="FSRC provides commissioned research intelligence, country risk analysis, policy briefings, and expert advisory services to foundations, development agencies, and institutions worldwide — grounded in rigorous analysis and designed for institutional decision use."
      />
      <PageHero
        title="Advisory Services"
        description="FSRC works with institutions that require serious, independent research intelligence — not generic consulting. Every engagement is grounded in rigorous analysis and calibrated to your institution's specific strategic questions."
      />

      {/* ── Intro ──────────────────────────────────────────────────── */}
      <section className="py-20 border-b border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="font-serif text-xl text-primary/80 leading-relaxed mb-6">
              FSRC's advisory services are designed for institutions that recognise the limits of generic research and need analysis that is contextually grounded, methodologically rigorous, and calibrated to their specific strategic questions. Our work is delivered by the same researchers who produce FSRC's independent publications.
            </p>
            <p className="text-foreground/65 leading-relaxed mb-4">
              We do not offer off-the-shelf products. Each engagement begins with a genuine attempt to understand your institution's needs, and produces analysis that serves those needs directly. We work selectively, and we maintain the independence that makes our research credible.
            </p>
            <p className="text-foreground/65 leading-relaxed">
              Advisory services are one of three modes through which FSRC operates — alongside independent research and applied innovation through FSRC Public Utility Labs. All three are unified by the same commitment to empirical integrity and public purpose.
            </p>
          </div>
        </div>
      </section>

      {/* ── Service Lines ──────────────────────────────────────────── */}
      <section className="py-20 border-b border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <span className="text-accent text-xs font-semibold uppercase tracking-[0.2em]">What We Offer</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mt-2">Service Lines</h2>
          </div>

          <div className="space-y-0 divide-y divide-border/50">
            {SERVICES.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5 }}
                  className="py-14 grid grid-cols-1 lg:grid-cols-12 gap-10"
                >
                  {/* Left: number + title */}
                  <div className="lg:col-span-4">
                    <div className="flex items-start gap-5 mb-5 lg:mb-0">
                      <span className="font-serif text-4xl font-bold text-accent/25 select-none leading-none mt-1">{service.number}</span>
                      <div>
                        <div className="w-9 h-9 border border-border/50 flex items-center justify-center mb-4 text-primary/50">
                          <Icon className="w-4 h-4" />
                        </div>
                        <h3 className="font-serif text-xl font-bold text-primary leading-snug mb-4">
                          {service.title}
                        </h3>
                        <Link href="/contact">
                          <button className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent hover:text-primary transition-colors uppercase tracking-wider mt-2">
                            Enquire <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Right: detail columns */}
                  <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
                    {/* What it is */}
                    <div className="md:col-span-2">
                      <p className="text-foreground/70 leading-relaxed">{service.what}</p>
                    </div>

                    {/* Who it's for */}
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">Who This Is For</h4>
                      <p className="text-sm text-foreground/65 leading-relaxed">{service.whoFor}</p>
                    </div>

                    {/* Deliverables */}
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">Typical Deliverables</h4>
                      <ul className="space-y-2">
                        {service.deliverables.map((d, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-foreground/65">
                            <span className="w-1 h-1 rounded-full bg-accent mt-2 shrink-0" />
                            {d}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Use cases */}
                    <div className="md:col-span-2 bg-secondary/60 p-6">
                      <h4 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-4">Sample Engagements</h4>
                      <div className="space-y-4">
                        {service.useCases.map((uc, j) => (
                          <div key={j} className="flex items-start gap-3">
                            <ChevronRight className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                            <p className="text-sm text-foreground/65 leading-relaxed italic">{uc}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── How Institutions Work With FSRC ───────────────────────── */}
      <section className="py-20 bg-secondary border-b border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <span className="text-accent text-xs font-semibold uppercase tracking-[0.2em]">Process</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mt-2">How Institutions Work With FSRC</h2>
            <p className="text-foreground/60 mt-4 max-w-xl text-sm leading-relaxed">
              Our engagement process is straightforward and transparent. We prioritise clarity of scope, methodological honesty, and timely delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 divide-y md:divide-y-0 md:divide-x divide-border/50">
            {PROCESS_STEPS.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="px-0 md:px-8 py-8 md:py-0 first:pl-0 last:pr-0"
              >
                <span className="font-serif text-5xl font-bold text-accent/20 select-none block mb-5 leading-none">
                  {step.number}
                </span>
                <h3 className="font-serif text-lg font-bold text-primary mb-3">
                  {step.title}
                </h3>
                <div className="w-6 h-0.5 bg-accent/50 mb-4" />
                <p className="text-sm text-foreground/60 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Typical Clients ────────────────────────────────────────── */}
      <section className="py-20 bg-white border-b border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4">
              <span className="text-accent text-xs font-semibold uppercase tracking-[0.2em]">Who We Work With</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mt-2 mb-5">
                Typical Clients
              </h2>
              <p className="text-foreground/60 text-sm leading-relaxed">
                FSRC works with institutions across sectors that require independent, rigorous research intelligence to support their programming, advocacy, investment, or institutional decisions.
              </p>
            </div>
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 divide-y sm:divide-y-0">
                {CLIENT_TYPES.map((client, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: i * 0.06 }}
                    className={`
                      flex items-center gap-4 py-5 sm:py-6
                      ${i % 2 === 0 ? "sm:pr-10 sm:border-r border-border/40" : "sm:pl-10"}
                      ${i < CLIENT_TYPES.length - 2 ? "border-b border-border/40" : ""}
                    `}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    <span className="text-primary font-medium text-sm">{client}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Commissioned Research CTA Banner ──────────────────────── */}
      <section className="bg-primary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8">
              <span className="text-accent text-xs font-semibold uppercase tracking-[0.2em] block mb-4">Commissioned Research Inquiry</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-5 leading-snug">
                Ready to discuss a research engagement?
              </h2>
              <p className="text-white/60 leading-relaxed max-w-xl text-sm">
                We welcome inquiries from institutions at any stage — whether you have a well-defined research question or are still thinking through what you need. An initial conversation is always the right starting point.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-4 lg:items-end">
              <Link href="/contact">
                <button className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent text-white font-semibold text-sm hover:bg-accent/90 transition-colors w-full lg:w-auto whitespace-nowrap">
                  Submit a Research Inquiry
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
              <Link href="/publications">
                <button className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white/70 font-semibold text-sm hover:border-white/40 hover:text-white transition-colors w-full lg:w-auto whitespace-nowrap">
                  Review Our Publications
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
