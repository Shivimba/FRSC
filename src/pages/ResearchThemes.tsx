import { motion } from "framer-motion";
import { Scale, Lightbulb, Globe, Building2, Landmark, Cpu } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { PageMeta } from "@/components/seo/PageMeta";
import { RESEARCH_THEMES } from "@/content/siteConfig";

const THEME_ICONS = [Scale, Lightbulb, Globe, Building2, Landmark, Cpu];

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.07 },
  }),
};

export default function ResearchThemes() {
  return (
    <div className="pb-24">
      <PageMeta
        title="Research Themes"
        description="FSRC's research themes span human rights and democratic governance, AI and technology policy, African political economy, corporate accountability, global institutional reform, and public-purpose digital systems — cross-cutting all four of FSRC's divisions."
      />
      <PageHero
        title="Research Themes"
        description="FSRC directs its analytical rigour toward the most consequential intersections of power, governance, rights, and emerging technology — themes that cut across all four institutional divisions."
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <div className="mb-14">
          <span className="text-accent text-xs font-semibold uppercase tracking-[0.2em]">Areas of Inquiry</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-primary mt-2">Core Research Areas</h2>
          <p className="text-foreground/60 mt-4 max-w-2xl leading-relaxed">
            Six interconnected themes anchor FSRC's analytical work — each substantive in its own right, and together forming a coherent institutional lens on the challenges of governance, rights, and technology in a rapidly changing world.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border/30">
          {RESEARCH_THEMES.map((theme, index) => {
            const Icon = THEME_ICONS[index] ?? Scale;
            return (
              <motion.div
                key={theme.id}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                variants={fadeUp}
                className="bg-white hover:bg-secondary transition-colors duration-200 p-8 md:p-10 flex flex-col"
              >
                <div className="flex items-start gap-5 mb-6">
                  <div className="w-10 h-10 border border-border/60 flex items-center justify-center shrink-0 text-primary/35">
                    <Icon className="w-4.5 h-4.5" aria-hidden="true" />
                  </div>
                  <span className="font-serif text-4xl font-bold text-accent/15 select-none leading-none mt-0.5">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="font-serif text-lg font-bold text-primary mb-3 leading-snug">
                  {theme.title}
                </h3>
                <div className="w-7 h-0.5 bg-accent mb-4" aria-hidden="true" />
                <p className="text-foreground/65 text-sm leading-relaxed flex-1">
                  {theme.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Cross-cutting note */}
        <div className="mt-16 border-t border-border/40 pt-12 grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <span className="text-accent text-xs font-semibold uppercase tracking-[0.2em] block mb-3">Cross-Divisional</span>
            <h3 className="font-serif text-xl font-bold text-primary">How themes map to divisions</h3>
          </div>
          <div className="md:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                { division: "FSRC Policy Intelligence", themes: "Strategic governance · Digital rights · Development policy" },
                { division: "FSRC Global Justice Intelligence", themes: "Human rights · Democratic backsliding · Corporate accountability" },
                { division: "FSRC African Futures Lab", themes: "African futures · Natural resources · Continental integration" },
                { division: "FSRC Public Utility Labs", themes: "Digital systems · Open innovation · Applied technology ethics" },
              ].map((item, i) => (
                <div key={i} className="border-l-2 border-accent/30 pl-5 py-1">
                  <p className="font-serif text-sm font-bold text-primary mb-1">{item.division}</p>
                  <p className="text-foreground/50 text-xs leading-relaxed">{item.themes}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
