import { useEffect } from "react";

interface PageMetaProps {
  title: string;
  description: string;
}

const SITE_NAME = "FSRC";
const SITE_URL = "https://fsrc.pro";

function setMeta(name: string, content: string) {
  let el = document.querySelector(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setOg(property: string, content: string) {
  let el = document.querySelector(`meta[property="${property}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("property", property);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(href: string) {
  let el = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link") as HTMLLinkElement;
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export function PageMeta({ title, description }: PageMetaProps) {
  useEffect(() => {
    const fullTitle =
      title === SITE_NAME
        ? `${SITE_NAME} — Evidence-Based Policy Intelligence`
        : `${title} | ${SITE_NAME}`;

    const pageUrl = SITE_URL + window.location.pathname;

    document.title = fullTitle;
    setMeta("description", description);
    setOg("og:title", fullTitle);
    setOg("og:description", description);
    setOg("og:url", pageUrl);
    setMeta("twitter:title", fullTitle);
    setMeta("twitter:description", description);
    setCanonical(pageUrl);

    return () => {
      document.title = `${SITE_NAME} — Evidence-Based Policy Intelligence`;
    };
  }, [title, description]);

  return null;
}
