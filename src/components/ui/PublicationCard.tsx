import { Download, FileText } from "lucide-react";
import { Link } from "wouter";
import { cn } from "@/lib/utils";
import type { Publication } from "@/content/publications";

interface PublicationCardProps {
  pub: Publication;
  /** If provided, clicking "Read Abstract" opens the abstract modal.
   *  If omitted (e.g. on the homepage), the button links to /publications instead. */
  onReadAbstract?: (pub: Publication) => void;
}

const CATEGORY_BADGE: Record<string, string> = {
  "Flagship Report":       "text-accent border-accent/40 bg-accent/5",
  "Policy Intelligence Brief": "text-primary border-primary/30 bg-primary/5",
  "Commentary":            "text-foreground/60 border-border bg-secondary",
  "Futures Paper":         "text-emerald-700 border-emerald-200 bg-emerald-50",
};

const CATEGORY_BORDER: Record<string, string> = {
  "Flagship Report":       "border-l-accent",
  "Policy Intelligence Brief": "border-l-primary/30",
  "Commentary":            "border-l-border/50",
  "Futures Paper":         "border-l-emerald-300",
};

export function PublicationCard({ pub, onReadAbstract }: PublicationCardProps) {
  const badgeStyle   = CATEGORY_BADGE[pub.category]   ?? "text-foreground/60 border-border bg-secondary";
  const borderColor  = CATEGORY_BORDER[pub.category]  ?? "border-l-border/50";

  return (
    <article
      className={cn(
        "group flex flex-col bg-white",
        "border border-border/50 border-l-[3px]",
        borderColor,
        "hover:border-accent/40 hover:border-l-accent hover:shadow-sm transition-all duration-300"
      )}
    >
      <div className="flex flex-col flex-1 p-7 md:p-8">
        {/* Meta row */}
        <div className="flex flex-wrap items-center gap-2 mb-5">
          <span className={cn("text-[10px] font-semibold uppercase tracking-widest px-2 py-0.5 border", badgeStyle)}>
            {pub.category}
          </span>
          <span className="text-xs text-muted-foreground">{pub.date}</span>
        </div>

        {/* Title */}
        <h3 className="font-serif text-[1.1rem] font-bold text-primary leading-snug mb-3 group-hover:text-accent transition-colors duration-200">
          {pub.title}
        </h3>

        {/* Affiliation */}
        <p className="text-[11px] text-muted-foreground/80 mb-5 font-medium tracking-wide">
          {pub.affiliation}
        </p>

        {/* Excerpt */}
        <p className="text-sm text-foreground/65 leading-relaxed flex-1 mb-5 line-clamp-3">
          {pub.excerpt}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-6" aria-label="Research areas">
          {pub.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-[10px] text-muted-foreground/70 border border-border/40 px-2 py-0.5 uppercase tracking-wide"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex items-center gap-4 pt-5 border-t border-border/40 mt-auto">
          {onReadAbstract ? (
            <button
              onClick={() => onReadAbstract(pub)}
              className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-primary hover:text-accent transition-colors uppercase tracking-wider focus-visible:outline-none focus-visible:underline"
              aria-label={`Read abstract for ${pub.title}`}
            >
              <FileText className="w-3.5 h-3.5" aria-hidden="true" />
              Read Abstract
            </button>
          ) : (
            <Link
              href="/publications"
              className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-primary hover:text-accent transition-colors uppercase tracking-wider focus-visible:outline-none focus-visible:underline"
              aria-label={`View ${pub.title} in Publications`}
            >
              <FileText className="w-3.5 h-3.5" aria-hidden="true" />
              View Abstract
            </Link>
          )}
          <span className="text-border/70" aria-hidden="true">·</span>
          {pub.pdfPlaceholder && pub.pdfPlaceholder !== "#" ? (
            <a
              href={pub.pdfPlaceholder}
              className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-muted-foreground hover:text-accent transition-colors uppercase tracking-wider focus-visible:outline-none focus-visible:underline"
              aria-label={`Download PDF of ${pub.title}`}
            >
              <Download className="w-3.5 h-3.5" aria-hidden="true" />
              Download PDF
            </a>
          ) : (
            <span
              className="inline-flex items-center gap-1.5 text-[11px] font-medium text-muted-foreground/40 uppercase tracking-wider cursor-default"
              aria-label="PDF not yet available"
            >
              <Download className="w-3.5 h-3.5" aria-hidden="true" />
              PDF Forthcoming
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
