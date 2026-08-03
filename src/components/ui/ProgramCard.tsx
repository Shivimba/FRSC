import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

interface ProgramCardProps {
  program: {
    id: string;
    name: string;
    shortDescription: string;
  };
  index: number;
}

export function ProgramCard({ program, index }: ProgramCardProps) {
  return (
    <div className="bg-white border border-border/40 hover:border-accent/40 transition-colors duration-300 group flex flex-col">
      <div className="p-8 md:p-10 flex-1">
        <div className="flex items-center gap-3 mb-7">
          <span className="text-[10px] font-semibold text-accent/70 uppercase tracking-[0.25em]">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div className="flex-1 h-px bg-border/60" aria-hidden="true" />
        </div>

        <h3 className="font-serif text-xl font-bold text-primary group-hover:text-accent transition-colors duration-250 mb-4">
          {program.name}
        </h3>

        <div className="w-7 h-0.5 bg-accent mb-5" aria-hidden="true" />

        <p className="text-foreground/65 leading-relaxed text-[15px]">
          {program.shortDescription}
        </p>
      </div>

      <div className="px-8 md:px-10 pb-8 md:pb-10 pt-0">
        <div className="border-t border-border/30 pt-6">
          <Link
            href="/research-programs"
            className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-accent hover:text-primary transition-colors focus-visible:outline-none focus-visible:underline"
          >
            Learn More
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  );
}
