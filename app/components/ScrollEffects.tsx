"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

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

export function ScrollEffects() {
  const pathname = usePathname();

  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(revealSelector));
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    elements.forEach((element) => {
      const siblings = element.parentElement ? Array.from(element.parentElement.children) : [];
      const siblingIndex = Math.max(0, siblings.indexOf(element));

      element.classList.add("scroll-reveal");
      element.style.setProperty("--reveal-delay", `${Math.min(siblingIndex % 4, 3) * 65}ms`);
    });

    if (reducedMotion || !("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -8% 0px" },
    );

    const frame = window.requestAnimationFrame(() => {
      elements.forEach((element) => observer.observe(element));
    });

    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
      elements.forEach((element) => {
        element.classList.remove("scroll-reveal", "is-visible");
        element.style.removeProperty("--reveal-delay");
      });
    };
  }, [pathname]);

  return null;
}
