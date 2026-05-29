import { useEffect } from "react";

type SeoInput = {
  title: string;
  description?: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogUrl?: string;
};

function upsertMeta(attr: "name" | "property", key: string, content: string) {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

// Lightweight per-page <head> management for the SPA, mirrors the per-route
// metadata the app declared under TanStack Router, without any SSR runtime.
export function useSeo({ title, description, canonical, ogTitle, ogDescription, ogUrl }: SeoInput) {
  useEffect(() => {
    document.title = title;
    if (description) upsertMeta("name", "description", description);
    if (ogTitle ?? title) upsertMeta("property", "og:title", ogTitle ?? title);
    if (ogDescription ?? description)
      upsertMeta("property", "og:description", (ogDescription ?? description)!);
    if (ogUrl) upsertMeta("property", "og:url", ogUrl);
    if (canonical) upsertCanonical(canonical);
  }, [title, description, canonical, ogTitle, ogDescription, ogUrl]);
}
