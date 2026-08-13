"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "./LanguageProvider";

const copy = {
  en: { label: "Back to top", arrow: "↑" },
  he: { label: "חזרה למעלה", arrow: "↑" },
  ar: { label: "العودة إلى الأعلى", arrow: "↑" },
  ru: { label: "Наверх", arrow: "↑" },
} as const;

const SHOW_AFTER_PX = 600;

export function BackToTop() {
  const { language } = useLanguage();
  const t = copy[language];
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > SHOW_AFTER_PX);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const top = document.getElementById("top");
    if (reduceMotion) {
      if (top) top.scrollIntoView();
      else window.scrollTo(0, 0);
      return;
    }
    if (top) top.scrollIntoView({ behavior: "smooth" });
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      className={visible ? "back-to-top is-visible" : "back-to-top"}
      onClick={handleClick}
      aria-label={t.label}
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
    >
      <span>{t.label}</span>
      <span aria-hidden="true">{t.arrow}</span>
    </button>
  );
}
