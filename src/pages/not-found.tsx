import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { PageMeta } from "@/components/seo/PageMeta";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-white px-4">
      <PageMeta
        title="Page Not Found"
        description="The page you are looking for could not be found. Return to the FSRC homepage."
      />

      <div className="max-w-xl text-center">
        {/* Decorative number */}
        <div className="font-serif text-[120px] md:text-[160px] font-bold text-primary/8 leading-none select-none mb-2">
          404
        </div>

        <div className="w-10 h-0.5 bg-accent mx-auto mb-8" aria-hidden="true" />

        <h1 className="font-serif text-3xl md:text-4xl font-bold text-primary mb-4">
          Page Not Found
        </h1>
        <p className="text-foreground/60 leading-relaxed mb-10 max-w-sm mx-auto">
          The page you are looking for does not exist or may have been moved. Please use the navigation above or return to the homepage.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/">
            <button className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-primary text-white text-sm font-semibold hover:bg-primary/90 transition-colors w-full sm:w-auto">
              Return to Homepage
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </button>
          </Link>
          <Link href="/publications">
            <button className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-border text-primary text-sm font-semibold hover:border-accent hover:text-accent transition-colors w-full sm:w-auto">
              Browse Publications
            </button>
          </Link>
        </div>

        <p className="text-xs text-muted-foreground mt-10 uppercase tracking-widest">
          FSRC — Insight. Intelligence. Impact.
        </p>
      </div>
    </div>
  );
}
