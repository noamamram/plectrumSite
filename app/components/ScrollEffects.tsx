"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useLanguage } from "./LanguageProvider";

const revealSelector = [
  ".reveal",
  ".section-heading",
  ".section-grid > *",
  ".fact-grid article",
  ".clinical-control-grid article",
  ".clinical-path-steps article",
  ".traction-metrics article",
  ".company-milestones article",
  ".relationship-grid article",
  ".team-card",
  ".pathway-card",
  ".split-story > *",
  ".compliance-section > *",
  ".market-section > *",
  ".pilot-section > *",
  ".footer-cta",
].join(",");

function isInInitialViewport(element: HTMLElement) {
  const rect = element.getBoundingClientRect();
  return rect.top < window.innerHeight * 0.92 && rect.bottom > 0;
}

export function ScrollEffects() {
  const pathname = usePathname();
  const { language } = useLanguage();

  useEffect(() => {
    const root = document.documentElement;
    const elements = Array.from(document.querySelectorAll<HTMLElement>(revealSelector));
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Progressive enhancement: only hide after JS init, and reveal anything already on screen.
    root.classList.add("js-scroll-reveal");

    elements.forEach((element) => {
      const siblings = element.parentElement ? Array.from(element.parentElement.children) : [];
      const siblingIndex = Math.max(0, siblings.indexOf(element));
      element.classList.add("scroll-reveal");
      element.style.setProperty("--reveal-delay", `${Math.min(siblingIndex % 4, 3) * 40}ms`);
    });

    if (reducedMotion || !("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return () => {
        root.classList.remove("js-scroll-reveal");
        elements.forEach((element) => {
          element.classList.remove("scroll-reveal", "is-visible");
          element.style.removeProperty("--reveal-delay");
        });
      };
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const target = entry.target as HTMLElement;
          target.classList.add("is-visible");
          target.style.removeProperty("will-change");
          observer.unobserve(target);
        });
      },
      { threshold: 0.01, rootMargin: "0px 0px 20% 0px" },
    );

    elements.forEach((element) => {
      if (isInInitialViewport(element)) {
        element.classList.add("is-visible");
        return;
      }
      element.style.willChange = "opacity, transform";
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
      root.classList.remove("js-scroll-reveal");
      elements.forEach((element) => {
        element.classList.remove("scroll-reveal", "is-visible");
        element.style.removeProperty("--reveal-delay");
        element.style.removeProperty("will-change");
      });
    };
  }, [language, pathname]);

  return null;
}
