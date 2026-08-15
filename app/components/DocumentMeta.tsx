"use client";

import { usePathname } from "next/navigation";
import { useLayoutEffect } from "react";
import { useLanguage } from "./LanguageProvider";
import { getRouteMeta } from "./pageMeta";

export function DocumentMeta() {
  const { language } = useLanguage();
  const pathname = usePathname();
  const route = pathname?.split("#")[0] || "/";
  const meta = getRouteMeta(route, language);

  useLayoutEffect(() => {
    document.title = meta.title;
    const description = document.querySelector('meta[name="description"]');
    if (description) {
      description.setAttribute("content", meta.description);
    } else {
      const tag = document.createElement("meta");
      tag.name = "description";
      tag.content = meta.description;
      document.head.appendChild(tag);
    }
  }, [meta.description, meta.title]);

  return null;
}
