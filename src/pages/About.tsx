import { motion } from "framer-motion";
import { Link } from "wouter";
import { PageHero } from "@/components/layout/PageHero";
import { PageMeta } from "@/components/seo/PageMeta";
import { ArrowRight } from "lucide-react";

const VALUES = [
  {
    number: "01",
    title: "Empirical Integrity",
    description:
      "Our analysis is grounded in verifiable evidence, primary sources, and transparent methodology. We do not allow advocacy, ideology, or institutional convenience to shape our findings. The integrity of our evidence base is non-negotiable.",
  },
  {
    number: "02",
    title: "Intellectual Independence",
    description:
      "FSRC does not accept mandates that require predetermined conclusions. We maintain structural independence from government, party politics, and commercial interests, ensuring that our analysis reflects the evidence as we find it — not as funders or partners might prefer.",
  },
  {
    number: "03",
    title: "Public Responsibility",
    description:
      "Research that matters should be accessible to those who can act on it. We are committed to producing analysis that enters the public domain in forms that are usable — for policymakers, practitioners, and engaged citizens alike.",
  },
  {
    number: "04",
    title: "Strategic Foresight",
    description:
      "Good analysis anticipates the future as well as accounting for the present. FSRC's work is explicitly oriented toward emerging challenges and structural trends, equipping institutions with intelligence that prepares them for what is coming, not only what has already arrived.",
  },
];

const APPROACH_PILLARS = [
  {
    label: "Rigorous Methodology",
    text: "Every FSRC engagement is defined by a clear methodological framework. We draw on comparative political economy, qualitative and quantitative social science, legal analysis, and area expertise — selecting the tools appropriate to the question, not the most familiar.",
  },
  {
    label: "Contextual Depth",
    text: "We reject thin, acontextual analysis. Understanding a governance problem in Nairobi, Lagos, or Abuja requires historical grounding, political economy literacy, and familiarity with local institutional realities. FSRC's research partners bring exactly that depth.",
  },
  {
    label: "Actionable Output",
    text: "Rigor and clarity are not in tension. We present our findings in formats calibrated to institutional decision use — structured reports, policy briefs, and scenario analyses that translate complex evidence into strategic clarity without sacrificing analytical honesty.",
  },
  {
    label: "Collaborative Inquiry",
    text: "We work with, not merely about, the institutions and communities our research engages. Where possible, we build research partnerships with local scholars, practitioners, and civil society actors in the regions we study.",
  },
];

const STRUCTURE_ITEMS = [
  {
    label: "Research Programs",
    text: "FSRC's substantive analytical work is organised into three core research divisions: FSRC Policy Intelligence, which delivers commissioned policy analysis and strategic research; FSRC Global Justice Intelligence, focusing on human rights, democratic governance, and accountability; and the FSRC African Futures Lab, which produces long-form research and strategic foresight on Africa's political and economic trajectories. Each division produces independent publications as well as commissioned research.",
  },
  {
    label: "Public Utility Labs",
    text: "FSRC Public Utility Labs is the applied innovation arm of FSRC. It designs and builds practical digital tools, SaaS products, and public-facing intelligence systems that transform open data, public knowledge, and research insight into accessible, useful technologies. The division exists to ensure that knowledge does not remain trapped in reports or specialist circles — but is translated into tools that improve decision-making, productivity, and inclusion.",
  },
  {
    label: "Advisory Services",
    text: "Alongside its independent research agenda, FSRC provides commissioned intelligence and advisory services to institutional clients. This work is scoped, contracted, and delivered independently of FSRC's editorial agenda.",
  },
  {
    label: "Publications",
    text: "FSRC publishes across four formats: Flagship Reports, Policy Intelligence Briefs, Futures Papers, and Commentary. All publications undergo internal peer review and are released under FSRC's editorial authority.",
  },
  {
    label: "Legal Registration",
    text: "FSRC operates under the legal name Five Senses Research Consultants, a research and policy intelligence organization incorporated in Canada.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08 },
  }),
};

export default function About() {
  return (
    <div className="pb-0 min-h-screen bg-white">
      <PageMeta
        title="About FSRC"
        description="FSRC is an independent research, policy intelligence, and applied innovation organization. Learn about our mission, values, four institutional divisions, and why evidence-based analysis and public-purpose technology matter."
      />
      <PageHero
        title="About FSRC"
        description="FSRC is an independent research, policy intelligence, and applied innovation organization — producing rigorous analysis and practical tools on governance, human rights, artificial intelligence, and African futures."
      />

      {/* ── 1. Who We Are ───────────────────────────────────────────── */}
      <section className="py-20 border-b border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4">
              <span className="text-accent text-xs font-semibold uppercase tracking-[0.2em] block mb-3">Who We Are</span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary leading-snug">
                An independent institute for rigorous policy intelligence
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-5 text-foreground/70 leading-relaxed">
              <p className="text-lg font-serif text-primary/80 leading-relaxed">
                FSRC transforms empirical evidence into strategic clarity and practical utility for institutions that cannot afford to act on assumptions. We operate across three modes of work: research, intelligence, and applied innovation — producing rigorous analysis, commissioned policy intelligence, and public-purpose digital tools that address governance, human rights, artificial intelligence, and the structural trajectories shaping Africa's political and economic futures.
              </p>
              <p>
                We occupy a distinct position in the policy landscape: rigorous enough to produce analysis that holds up to peer scrutiny, practically oriented enough to be useful to the institutions that need to act on it, and innovative enough to translate knowledge into tools that extend its reach beyond specialist circles. Independence is not a marketing claim for FSRC; it is the structural condition that makes our work credible.
              </p>
              <p>
                Our four divisions — FSRC Policy Intelligence, FSRC Global Justice Intelligence, FSRC African Futures Lab, and FSRC Public Utility Labs — reflect an integrated institutional vision: that rigorous knowledge and useful technology, produced with integrity and public purpose, are the most powerful contributions an independent research organization can make.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2 & 3. Mission + Vision ──────────────────────────────────── */}
      <section className="py-20 bg-secondary border-b border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 divide-y md:divide-y-0 md:divide-x divide-border/50">

            {/* Mission */}
            <div className="md:pr-16 pb-12 md:pb-0">
              <span className="text-accent text-xs font-semibold uppercase tracking-[0.2em] block mb-5">Mission</span>
              <div className="w-8 h-0.5 bg-accent mb-7" />
              <p className="font-serif text-xl md:text-2xl text-primary leading-snug font-medium italic">
                "FSRC advances evidence-based policy intelligence and public-purpose innovation by producing rigorous research, strategic analysis, and practical digital tools on governance, human rights, artificial intelligence, and the future of Africa and the Global South."
              </p>
            </div>

            {/* Vision */}
            <div className="md:pl-16 pt-12 md:pt-0">
              <span className="text-accent text-xs font-semibold uppercase tracking-[0.2em] block mb-5">Vision</span>
              <div className="w-8 h-0.5 bg-accent mb-7" />
              <p className="font-serif text-xl md:text-2xl text-primary leading-snug font-medium italic">
                "To become a globally respected center of policy intelligence and applied public-purpose innovation — shaping debates on governance, human rights, and technological transformation while equipping institutions and societies with the analytical and digital tools needed to anticipate risk, strengthen accountability, and expand human possibility."
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── 4. Core Values ──────────────────────────────────────────── */}
      <section className="py-20 border-b border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <span className="text-accent text-xs font-semibold uppercase tracking-[0.2em]">Guiding Principles</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mt-2">Core Values</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 divide-y md:divide-y-0">
            {VALUES.map((value, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
                className={`
                  py-10
                  ${i % 2 === 0 ? "md:pr-16 md:border-r border-border/40" : "md:pl-16"}
                  ${i < VALUES.length - 2 ? "border-b border-border/40" : ""}
                `}
              >
                <div className="flex items-start gap-6">
                  <span className="font-serif text-4xl font-bold text-accent/20 select-none leading-none shrink-0 mt-1">
                    {value.number}
                  </span>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-primary mb-3">{value.title}</h3>
                    <div className="w-6 h-0.5 bg-accent/50 mb-4" />
                    <p className="text-sm text-foreground/65 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Our Approach ─────────────────────────────────────────── */}
      <section className="py-24 bg-primary border-b border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <span className="text-accent text-xs font-semibold uppercase tracking-[0.2em] block mb-3">How We Work</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white leading-snug">
              Three Modes of Operation
            </h2>
            <p className="text-white/45 text-sm mt-4 max-w-xl mx-auto leading-relaxed">
              FSRC's institutional work operates across three interconnected modes — each distinct in method and output, unified by a commitment to empirical integrity and public purpose.
            </p>
          </div>

          {/* Flow steps */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-white/8">
            {[
              {
                step: "01",
                mode: "Research",
                heading: "Independent Research",
                body: "We produce rigorous, peer-quality analysis grounded in primary sources, comparative methodology, and structured evidence. Our research divisions cover policy intelligence, global justice, and African political economies.",
                details: ["Flagship Reports", "Futures Papers", "Policy Analyses", "Peer-reviewed Working Papers"],
              },
              {
                step: "02",
                mode: "Intelligence",
                heading: "Policy Intelligence",
                body: "We translate analytical insight into decision-ready intelligence for institutions. Every commissioned engagement is scoped to the client's strategic context and delivered with full methodological transparency.",
                details: ["Commissioned Briefs", "Country Risk Assessments", "Expert Advisory", "Scenario Planning"],
              },
              {
                step: "03",
                mode: "Applied Innovation",
                heading: "Applied Innovation",
                body: "Through FSRC Public Utility Labs, we build practical digital tools that carry knowledge beyond reports and specialist circles — into the hands of practitioners, entrepreneurs, and citizens.",
                details: ["Public-Purpose SaaS", "AI-Powered Tools", "Open-Data Systems", "Multilingual Platforms"],
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-primary hover:bg-white/5 transition-colors duration-200 p-10 md:p-12 flex flex-col"
              >
                <div className="flex items-center gap-4 mb-7">
                  <span className="font-serif text-5xl font-bold text-white/8 select-none leading-none">{item.step}</span>
                  <div>
                    <span className="text-[10px] font-semibold text-accent/60 uppercase tracking-[0.25em] block mb-1">{item.mode}</span>
                    <h3 className="font-serif text-xl font-bold text-white">{item.heading}</h3>
                  </div>
                </div>
                <div className="w-8 h-0.5 bg-accent/50 mb-6" aria-hidden="true" />
                <p className="text-white/55 text-sm leading-relaxed mb-8 flex-1">{item.body}</p>
                <div className="space-y-2.5">
                  {item.details.map((d, j) => (
                    <div key={j} className="flex items-center gap-3">
                      <div className="w-1 h-1 bg-accent/50 rounded-full shrink-0" aria-hidden="true" />
                      <span className="text-[12px] text-white/40 font-medium">{d}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Flow connector label */}
          <div className="mt-10 flex items-center justify-center gap-0">
            {["Research", "→", "Intelligence", "→", "Applied Innovation"].map((item, i) => (
              <span
                key={i}
                className={item === "→"
                  ? "mx-4 text-white/20 font-light text-lg select-none"
                  : "text-[11px] font-semibold text-white/30 uppercase tracking-[0.2em]"
                }
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── 6. Institutional Structure ──────────────────────────────── */}
      <section className="py-20 border-b border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <span className="text-accent text-xs font-semibold uppercase tracking-[0.2em]">Organization</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mt-2">Institutional Structure</h2>
          </div>

          <div className="space-y-0 divide-y divide-border/40">
            {STRUCTURE_ITEMS.map((item, i) => (
              <motion.div
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={fadeUp}
                className="py-8 grid grid-cols-1 md:grid-cols-12 gap-6 items-start"
              >
                <div className="md:col-span-3">
                  <h4 className="font-serif font-bold text-primary">{item.label}</h4>
                </div>
                <div className="md:col-span-9">
                  <p className="text-sm text-foreground/65 leading-relaxed">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 7. Why Evidence Matters ─────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-accent text-xs font-semibold uppercase tracking-[0.2em] block mb-6">A Closing Reflection</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-8">
              Why Evidence and Innovation Matter
            </h2>
            <div className="w-12 h-0.5 bg-accent mx-auto mb-10" />
            <p className="font-serif text-lg md:text-xl text-primary/75 leading-relaxed mb-6">
              We operate in a moment defined by information abundance and analytical scarcity — and by the widening gap between what knowledge institutions produce and what the people who need it can access. The volume of data, commentary, and opinion available to decision-makers has never been greater; yet the quality of structured, evidence-grounded analysis that reliably informs institutional choices has not kept pace, and much of that analysis never reaches the practitioners and citizens who could act on it.
            </p>
            <p className="text-foreground/60 leading-relaxed max-w-2xl mx-auto mb-5">
              FSRC's work is premised on the conviction that both gaps are unacceptable. Institutions that must navigate complex governance environments deserve analysis that holds up — built on evidence, tested against alternative explanations, delivered with intellectual honesty. And the communities that live within those governance environments deserve tools that put knowledge within their reach.
            </p>
            <p className="text-foreground/60 leading-relaxed max-w-2xl mx-auto">
              Research. Intelligence. Applied innovation. These are not separate activities at FSRC — they are three expressions of one institutional commitment: that evidence, honestly produced and responsibly translated, is the most durable contribution an independent organization can make to a complex world.
            </p>

            <div className="mt-14 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/research-programs">
                <button className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-colors">
                  Our Divisions
                  <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
              <Link href="/public-utility-labs">
                <button className="inline-flex items-center gap-2 px-7 py-3.5 border border-border text-primary text-sm font-semibold hover:border-primary/50 transition-colors">
                  Public Utility Labs
                </button>
              </Link>
              <Link href="/contact">
                <button className="inline-flex items-center gap-2 px-7 py-3.5 border border-border text-primary text-sm font-semibold hover:border-primary/50 transition-colors">
                  Get in Touch
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
