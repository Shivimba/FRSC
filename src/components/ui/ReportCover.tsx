import { cn } from "@/lib/utils";

export interface ReportCoverProps {
  title: string;
  subtitle?: string;
  author: string;
  division: string;
  publicationType: string;
  date: string;
  /** visual size preset */
  size?: "sm" | "md" | "lg";
  className?: string;
}

/**
 * ReportCover
 * A standardised title-page preview component styled after
 * institutional think-tank report covers. Reusable across the site.
 */
export function ReportCover({
  title,
  subtitle,
  author,
  division,
  publicationType,
  date,
  size = "md",
  className,
}: ReportCoverProps) {
  const sizeStyles = {
    sm: {
      root: "w-full max-w-[320px]",
      inner: "p-6",
      logoText: "text-lg",
      logoTag: "text-[9px]",
      typeLabel: "text-[9px]",
      title: "text-lg leading-snug",
      subtitle: "text-[11px]",
      rule: "my-4",
      author: "text-[11px]",
      divisionLabel: "text-[9px]",
      divisionText: "text-[11px]",
      bottomBar: "px-6 py-3",
      diamond: "w-10 h-10",
    },
    md: {
      root: "w-full max-w-[380px]",
      inner: "p-8",
      logoText: "text-xl",
      logoTag: "text-[10px]",
      typeLabel: "text-[10px]",
      title: "text-xl leading-snug",
      subtitle: "text-xs",
      rule: "my-5",
      author: "text-xs",
      divisionLabel: "text-[10px]",
      divisionText: "text-xs",
      bottomBar: "px-8 py-4",
      diamond: "w-14 h-14",
    },
    lg: {
      root: "w-full max-w-[480px]",
      inner: "p-10",
      logoText: "text-2xl",
      logoTag: "text-[11px]",
      typeLabel: "text-[11px]",
      title: "text-2xl leading-snug",
      subtitle: "text-sm",
      rule: "my-6",
      author: "text-sm",
      divisionLabel: "text-[10px]",
      divisionText: "text-sm",
      bottomBar: "px-10 py-5",
      diamond: "w-16 h-16",
    },
  }[size];

  return (
    <div
      className={cn(
        "relative flex flex-col overflow-hidden shadow-2xl select-none",
        "aspect-[1/1.41]", /* A4 portrait ratio */
        sizeStyles.root,
        className
      )}
      style={{ background: "#04472B" }}
    >
      {/* ── Decorative geometry ───────────────────────── */}
      {/* Large faint circle top-right */}
      <div
        className="absolute -top-10 -right-10 rounded-full border border-white/5"
        style={{ width: "55%", paddingTop: "55%" }}
      />
      {/* Gold accent line top */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-accent" />
      {/* Rotated diamond accent bottom-right */}
      <div
        className={cn(
          "absolute bottom-12 right-6 border border-accent/15 rotate-45 opacity-40",
          sizeStyles.diamond
        )}
      />
      {/* Very subtle inner gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent" />

      {/* ── Main content ──────────────────────────────── */}
      <div className={cn("relative z-10 flex flex-col flex-1", sizeStyles.inner)}>

        {/* Top: logo lockup + publication type */}
        <div className="flex items-start justify-between mb-auto">
          {/* Logo lockup */}
          <div>
            <div
              className={cn(
                "font-serif font-bold text-white tracking-tight",
                sizeStyles.logoText
              )}
            >
              FSRC
            </div>
            <div
              className={cn(
                "font-sans font-medium text-accent tracking-[0.18em] uppercase mt-0.5",
                sizeStyles.logoTag
              )}
            >
              Insight. Intelligence. Impact.
            </div>
          </div>

          {/* Publication type badge */}
          <div
            className={cn(
              "border border-accent/30 text-accent uppercase tracking-widest font-semibold px-2 py-1 text-right",
              sizeStyles.typeLabel
            )}
          >
            {publicationType}
          </div>
        </div>

        {/* ── Centre: title block ───────────────────────── */}
        <div className="mt-auto pt-10">
          <h2
            className={cn(
              "font-serif font-bold text-white",
              sizeStyles.title
            )}
          >
            {title}
          </h2>

          {subtitle && (
            <p
              className={cn(
                "text-white/55 italic font-serif mt-2",
                sizeStyles.subtitle
              )}
            >
              {subtitle}
            </p>
          )}

          {/* Gold rule */}
          <div className={cn("w-10 h-0.5 bg-accent", sizeStyles.rule)} />

          {/* Author */}
          <p
            className={cn(
              "text-white/70 font-medium",
              sizeStyles.author
            )}
          >
            {author}
          </p>

          {/* Division */}
          <div className="mt-2">
            <span
              className={cn(
                "text-white/35 uppercase tracking-widest block",
                sizeStyles.divisionLabel
              )}
            >
              Research Program
            </span>
            <span
              className={cn("text-white/55", sizeStyles.divisionText)}
            >
              {division}
            </span>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ────────────────────────────────── */}
      <div
        className={cn(
          "relative z-10 border-t border-white/10 flex items-center justify-between bg-white/[0.04]",
          sizeStyles.bottomBar
        )}
      >
        {/* FSRC wordmark repeated, very faint */}
        <span className="text-white/15 font-serif font-bold text-xs tracking-widest uppercase">
          Five Senses Research Consultants
        </span>
        <span className="text-white/40 text-[10px] font-medium tracking-wide shrink-0 ml-4">
          {date}
        </span>
      </div>
    </div>
  );
}
