import { Link } from "wouter";
import { Linkedin, Twitter, Mail, MapPin, Globe } from "lucide-react";
import { SITE_META, CONTACT_INFO, SOCIAL_LINKS, FOOTER_NAV } from "@/content/siteConfig";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white" aria-label="Site footer">
      <div className="h-px bg-accent/60 w-full" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">

          {/* Brand Column */}
          <div className="md:col-span-4 lg:col-span-4">
            <div className="mb-6">
              <img
                src={`${import.meta.env.BASE_URL}images/fsrc-logo-light-640.png`}
                alt={SITE_META.legalName}
                width={640}
                height={316}
                className="w-full max-w-[300px] h-auto mb-5"
              />
              <div className="w-10 h-px bg-accent" aria-hidden="true" />
            </div>
            <p className="text-white/55 text-sm leading-relaxed mb-8 max-w-xs">
              {SITE_META.description}
            </p>
            <div className="flex gap-3 mb-8">
              <a
                href={SOCIAL_LINKS.linkedin.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-white/15 flex items-center justify-center hover:border-accent hover:text-accent transition-all duration-200 text-white/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                aria-label={SOCIAL_LINKS.linkedin.label}
              >
                <Linkedin className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href={SOCIAL_LINKS.twitter.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-white/15 flex items-center justify-center hover:border-accent hover:text-accent transition-all duration-200 text-white/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                aria-label={SOCIAL_LINKS.twitter.label}
              >
                <Twitter className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>
            <p className="text-white/25 text-xs leading-relaxed">
              {SITE_META.legalName}<br />
              Incorporated in {SITE_META.incorporatedIn}
            </p>
          </div>

          <div className="hidden lg:block lg:col-span-1" aria-hidden="true" />

          {/* Organization Links */}
          <div className="md:col-span-3 lg:col-span-2">
            <h2 className="text-white/60 text-xs font-semibold uppercase tracking-[0.2em] mb-6">Organization</h2>
            <ul className="space-y-4" role="list">
              {FOOTER_NAV.organization.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-white/65 hover:text-accent transition-colors text-sm focus-visible:outline-none focus-visible:underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Research Links */}
          <div className="md:col-span-3 lg:col-span-2">
            <h2 className="text-white/60 text-xs font-semibold uppercase tracking-[0.2em] mb-6">Research</h2>
            <ul className="space-y-4" role="list">
              {FOOTER_NAV.research.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-white/65 hover:text-accent transition-colors text-sm focus-visible:outline-none focus-visible:underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-2 lg:col-span-3">
            <h2 className="text-white/60 text-xs font-semibold uppercase tracking-[0.2em] mb-6">Contact</h2>
            <ul className="space-y-4" role="list">
              <li className="flex items-start gap-3 text-white/60 text-sm">
                <Mail className="w-4 h-4 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                <a
                  href={`mailto:${CONTACT_INFO.emails.inquiries}`}
                  className="hover:text-accent transition-colors focus-visible:outline-none focus-visible:underline"
                >
                  {CONTACT_INFO.emails.inquiries}
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/60 text-sm">
                <Globe className="w-4 h-4 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                <a
                  href="https://fsrc.pro"
                  className="hover:text-accent transition-colors focus-visible:outline-none focus-visible:underline"
                >
                  fsrc.pro
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/60 text-sm">
                <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                <address className="not-italic">
                  {CONTACT_INFO.address.city}, {CONTACT_INFO.address.province}<br />
                  {CONTACT_INFO.address.country}
                </address>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
          <p className="text-white/30 text-xs">
            © {year} {SITE_META.legalName}. All rights reserved.
          </p>
          <nav aria-label="Legal" className="flex gap-6 text-xs text-white/30">
            <Link href="#" className="hover:text-white/60 transition-colors focus-visible:outline-none focus-visible:underline">Privacy Policy</Link>
            <Link href="#" className="hover:text-white/60 transition-colors focus-visible:outline-none focus-visible:underline">Terms of Use</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
