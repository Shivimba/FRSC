import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { NAV_LINKS, SITE_META, SOCIAL_LINKS } from "@/content/siteConfig";

export function Navbar() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);


  return (
    <>
      {/* Skip to main content */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[200] focus:bg-accent focus:text-white focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:rounded"
      >
        Skip to main content
      </a>

      {/* ── Utility Bar (desktop only) ────────────────────────────── */}
      <div
        className="fixed top-0 left-0 right-0 z-50 bg-primary/95 border-b border-white/10 hidden lg:block"
        aria-hidden="true"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-8">
            <p className="text-white/50 text-xs tracking-wide">
              {SITE_META.utilityBarLabel}
            </p>
            <div className="flex items-center gap-6">
              <a
                href={SOCIAL_LINKS.linkedin.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={SOCIAL_LINKS.linkedin.label}
                className="text-white/40 hover:text-accent transition-colors text-xs tracking-wide"
              >
                {SOCIAL_LINKS.linkedin.display}
              </a>
              <span className="text-white/20 text-xs" aria-hidden="true">|</span>
              <a
                href={SOCIAL_LINKS.twitter.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={SOCIAL_LINKS.twitter.label}
                className="text-white/40 hover:text-accent transition-colors text-xs tracking-wide"
              >
                {SOCIAL_LINKS.twitter.display}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main Header ───────────────────────────────────────────── */}
      <header
        className={cn(
          "fixed left-0 right-0 z-50 transition-shadow duration-300 border-b",
          "lg:top-8 top-0 bg-primary text-white border-white/10",
          isScrolled && "shadow-lg"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-28 lg:h-32">

            {/* Logo — full lockup, sized so the wordmark stays legible */}
            <Link
              href="/"
              className="flex items-center shrink-0 rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
              aria-label={`${SITE_META.legalName} — return to homepage`}
            >
              <img
                src={`${import.meta.env.BASE_URL}images/fsrc-logo-light-640.png`}
                alt={SITE_META.legalName}
                width={640}
                height={316}
                className="h-20 lg:h-24 w-auto"
              />
            </Link>

            {/* Desktop Nav */}
            <nav aria-label="Primary navigation" className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {NAV_LINKS.map((link) => {
                const isActive = location === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-accent relative py-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1 rounded",
                      isActive ? "text-accent" : "text-white/80 hover:text-white"
                    )}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent rounded-full" aria-hidden="true" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              className="lg:hidden p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* ── Mobile Nav ─────────────────────────────────────────── */}
        <div
          id="mobile-nav"
          role="dialog"
          aria-label="Navigation menu"
          aria-modal="true"
          aria-hidden={!mobileMenuOpen}
          className={cn(
            "lg:hidden fixed inset-x-0 bg-primary border-t border-white/10 transition-all duration-300 ease-in-out overflow-hidden shadow-xl",
            "top-28",
            mobileMenuOpen
              ? "max-h-[calc(100vh-7rem)] opacity-100 pointer-events-auto"
              : "max-h-0 opacity-0 pointer-events-none"
          )}
        >
          <nav aria-label="Mobile navigation" className="flex flex-col px-4 py-6 space-y-1 max-w-7xl mx-auto h-full overflow-y-auto">
            {NAV_LINKS.map((link) => {
              const isActive = location === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "block px-4 py-3 text-base font-medium transition-colors border-b border-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset",
                    isActive ? "text-accent" : "text-white/80 hover:text-white"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-6 mt-4 border-t border-white/10 px-4">
              <p className="text-white/30 text-xs">
                {SITE_META.legalName} — Ottawa, Canada
              </p>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
