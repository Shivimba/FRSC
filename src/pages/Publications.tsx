import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, Download, ExternalLink, ChevronRight, FileText } from "lucide-react";
import { PageHero } from "@/components/layout/PageHero";
import { PageMeta } from "@/components/seo/PageMeta";
import { PublicationCard } from "@/components/ui/PublicationCard";
import { ReportCover } from "@/components/ui/ReportCover";
import { publications, type Publication, type PublicationCategory } from "@/content/publications";

const CATEGORIES: (PublicationCategory | "All")[] = [
  "All",
  "Flagship Report",
  "Policy Intelligence Brief",
  "Futures Paper",
  "Commentary",
];

const CATEGORY_COUNTS = (cat: PublicationCategory | "All") =>
  cat === "All" ? publications.length : publications.filter((p) => p.category === cat).length;

export default function Publications() {
  const [activeCategory, setActiveCategory] = useState<PublicationCategory | "All">("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [modalPub, setModalPub] = useState<Publication | null>(null);

  const filtered = useMemo(() => {
    let list = publications;
    if (activeCategory !== "All") {
      list = list.filter((p) => p.category === activeCategory);
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.abstract.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q)) ||
          p.affiliation.toLowerCase().includes(q)
      );
    }
    return list;
  }, [activeCategory, searchQuery]);

  return (
    <div className="pb-24 min-h-screen bg-white">
      <PageMeta
        title="Publications"
        description="Access FSRC's latest publications — flagship reports, policy intelligence briefs, futures papers, and commentary on governance, human rights, AI, African futures, and public-purpose digital systems."
      />
      <PageHero
        title="Publications"
        description="Rigorous research, policy intelligence, and strategic analysis produced across FSRC's four institutional divisions — on governance, human rights, AI, and the futures of Africa and the Global South."
      />

      {/* ── Featured Report Cover ──────────────────────────────────── */}
      <section className="bg-secondary border-b border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

            {/* Cover preview */}
            <div className="lg:col-span-4 flex justify-center lg:justify-start">
              <ReportCover
                title="Artificial Intelligence, Governance, and Human Rights in Africa"
                subtitle="Risks, Institutional Gaps, and Strategic Policy Pathways"
                author="Dr. D. Mario Matsinhe"
                division="FSRC Policy Intelligence"
                publicationType="Strategic Policy Intelligence Report"
                date="March 2025"
                size="md"
                className="shadow-xl"
              />
            </div>

            {/* Description */}
            <div className="lg:col-span-8">
              <div className="flex flex-wrap items-center gap-2 mb-5">
                <span className="text-[10px] font-semibold uppercase tracking-widest text-accent border border-accent/30 px-2 py-0.5">
                  Flagship Report
                </span>
                <span className="text-xs text-muted-foreground">March 2025</span>
                <span className="text-xs text-muted-foreground border border-border/50 px-2 py-0.5">Featured</span>
              </div>

              <h2 className="font-serif text-2xl lg:text-3xl font-bold text-primary leading-snug mb-2">
                Artificial Intelligence, Governance, and Human Rights in Africa
              </h2>
              <p className="font-serif italic text-base text-foreground/60 mb-5">
                Risks, Institutional Gaps, and Strategic Policy Pathways
              </p>

              <div className="w-8 h-0.5 bg-accent mb-5" />

              <p className="text-xs text-muted-foreground uppercase tracking-widest mb-4">
                Dr. D. Mario Matsinhe · FSRC Policy Intelligence
              </p>

              <p className="text-foreground/65 leading-relaxed text-sm max-w-xl mb-7">
                This report examines the governance gaps and human rights implications of the rapid deployment of artificial intelligence systems across African contexts. It analyses national AI strategies, regulatory readiness, and the civil society landscape, and proposes a framework for rights-respecting AI governance calibrated to African institutional realities.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-colors"
                >
                  <FileText className="w-4 h-4" />
                  Read Abstract
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border text-primary text-sm font-semibold hover:border-accent hover:text-accent transition-colors"
                >
                  <Download className="w-4 h-4" />
                  Download PDF
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Intro + Search bar ─────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-14">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10">
          <p className="max-w-2xl text-foreground/65 leading-relaxed text-sm">
            FSRC publications translate empirical evidence into strategic insight for policymakers,
            civil society organizations, researchers, and institutions navigating complex political
            and technological change.
          </p>

          {/* Search */}
          <div className="relative w-full lg:w-72 shrink-0">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
            <input
              type="text"
              placeholder="Search publications…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-9 py-2.5 text-sm border border-border/60 focus:border-primary focus:outline-none focus:ring-0 bg-white placeholder:text-muted-foreground text-foreground transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* ── Category Filters ─────────────────────────────────────── */}
        <div className="border-b border-border/50 mb-10">
          <div className="flex gap-0 overflow-x-auto -mb-px">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`
                    whitespace-nowrap px-5 py-3 text-xs font-semibold uppercase tracking-wider border-b-2 transition-all duration-150
                    ${isActive
                      ? "border-accent text-primary"
                      : "border-transparent text-muted-foreground hover:text-primary hover:border-border"}
                  `}
                >
                  {cat}
                  <span className={`ml-1.5 text-[10px] ${isActive ? "text-accent" : "text-border"}`}>
                    ({CATEGORY_COUNTS(cat)})
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Results count ─────────────────────────────────────────── */}
        <div className="flex items-center justify-between mb-8">
          <p className="text-xs text-muted-foreground uppercase tracking-wide">
            {filtered.length} {filtered.length === 1 ? "publication" : "publications"}
            {activeCategory !== "All" && ` · ${activeCategory}`}
            {searchQuery && ` matching "${searchQuery}"`}
          </p>
          {(activeCategory !== "All" || searchQuery) && (
            <button
              onClick={() => { setActiveCategory("All"); setSearchQuery(""); }}
              className="text-xs text-muted-foreground hover:text-accent transition-colors flex items-center gap-1 uppercase tracking-wider"
            >
              <X className="w-3 h-3" /> Clear filters
            </button>
          )}
        </div>

        {/* ── Publication Grid ──────────────────────────────────────── */}
        {filtered.length > 0 ? (
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((pub) => (
                <motion.div
                  key={pub.id}
                  layout
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.25 }}
                >
                  <PublicationCard pub={pub} onReadAbstract={setModalPub} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <div className="py-24 text-center">
            <p className="font-serif text-xl text-primary/40 mb-2">No publications found</p>
            <p className="text-sm text-muted-foreground">Try adjusting your search or category filter.</p>
          </div>
        )}

        {/* ── Footer note ──────────────────────────────────────────── */}
        <div className="mt-20 pt-8 border-t border-border/40 text-center">
          <p className="text-xs text-muted-foreground uppercase tracking-widest">
            Additional publications forthcoming — subscribe for updates
          </p>
        </div>
      </div>

      {/* ── Abstract Modal ───────────────────────────────────────────── */}
      <AnimatePresence>
        {modalPub && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 bg-primary/70 backdrop-blur-sm"
              onClick={() => setModalPub(null)}
            />

            {/* Panel */}
            <motion.div
              key="modal"
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed inset-y-0 right-0 z-50 w-full max-w-xl bg-white shadow-2xl flex flex-col overflow-hidden"
            >
              {/* Modal header */}
              <div className="flex items-center justify-between px-8 py-5 border-b border-border/50 shrink-0">
                <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Publication Abstract
                </span>
                <button
                  onClick={() => setModalPub(null)}
                  className="p-1.5 text-muted-foreground hover:text-foreground transition-colors rounded"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal body */}
              <div className="flex-1 overflow-y-auto px-8 py-8">
                {/* Category + date */}
                <div className="flex flex-wrap items-center gap-2 mb-5">
                  <span className="text-[10px] font-semibold uppercase tracking-widest text-accent border border-accent/30 px-2 py-0.5">
                    {modalPub.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{modalPub.date}</span>
                </div>

                {/* Title */}
                <h2 className="font-serif text-2xl font-bold text-primary leading-snug mb-4">
                  {modalPub.title}
                </h2>

                {/* Gold rule */}
                <div className="w-10 h-0.5 bg-accent mb-6" />

                {/* Affiliation */}
                <p className="text-xs text-muted-foreground uppercase tracking-widest mb-8">
                  {modalPub.affiliation} · {modalPub.author}
                </p>

                {/* Abstract */}
                <div className="mb-8">
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">Abstract</h3>
                  <p className="text-sm text-foreground/75 leading-relaxed">
                    {modalPub.abstract}
                  </p>
                </div>

                {/* Tags */}
                <div className="mb-8">
                  <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">Research Areas</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {modalPub.tags.map((tag) => (
                      <span key={tag} className="text-[10px] text-muted-foreground border border-border/60 px-2 py-0.5 uppercase tracking-wide">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-border/40 pt-8">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={modalPub.pdfPlaceholder}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-colors"
                    >
                      <Download className="w-4 h-4" />
                      Download Full PDF
                    </a>
                    <a
                      href={modalPub.link}
                      className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 border border-border text-primary text-sm font-semibold hover:border-accent hover:text-accent transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Full Report
                    </a>
                  </div>

                  <div className="mt-6">
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      To request physical copies, institutional licensing, or media briefings on this publication, please{" "}
                      <a href="/contact" className="text-accent hover:underline" onClick={() => setModalPub(null)}>
                        contact FSRC
                      </a>.
                    </p>
                  </div>
                </div>
              </div>

              {/* Modal bottom nav */}
              <div className="border-t border-border/40 px-8 py-4 bg-secondary/30 shrink-0">
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => {
                      const currentIdx = filtered.findIndex((p) => p.id === modalPub.id);
                      const prev = filtered[currentIdx - 1];
                      if (prev) setModalPub(prev);
                    }}
                    disabled={filtered.findIndex((p) => p.id === modalPub.id) === 0}
                    className="text-xs uppercase tracking-wider text-muted-foreground hover:text-primary disabled:opacity-30 disabled:cursor-not-allowed transition-colors flex items-center gap-1"
                  >
                    <ChevronRight className="w-3.5 h-3.5 rotate-180" /> Previous
                  </button>
                  <span className="text-xs text-muted-foreground">
                    {filtered.findIndex((p) => p.id === modalPub.id) + 1} of {filtered.length}
                  </span>
                  <button
                    onClick={() => {
                      const currentIdx = filtered.findIndex((p) => p.id === modalPub.id);
                      const next = filtered[currentIdx + 1];
                      if (next) setModalPub(next);
                    }}
                    disabled={filtered.findIndex((p) => p.id === modalPub.id) === filtered.length - 1}
                    className="text-xs uppercase tracking-wider text-muted-foreground hover:text-primary disabled:opacity-30 disabled:cursor-not-allowed transition-colors flex items-center gap-1"
                  >
                    Next <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
