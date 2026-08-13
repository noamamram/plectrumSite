"use client";

import { useLanguage } from "./LanguageProvider";

const copy = {
  en: "Image for illustrative purposes only. Product design, appearance, and specifications may change.",
  he: "התמונה להמחשה בלבד. עיצוב המוצר, מראהו והמפרט שלו עשויים להשתנות.",
  ar: "الصورة لأغراض توضيحية فقط. قد يتغير تصميم المنتج ومظهره ومواصفاته.",
  ru: "Изображение носит иллюстративный характер. Дизайн, внешний вид и характеристики продукта могут измениться.",
} as const;

type MediaDisclaimerProps = {
  /** Overlay sits on media; below sits under it (preferred on small screens for overlays). */
  variant?: "overlay" | "below" | "caption";
  className?: string;
};

export function MediaDisclaimer({
  variant = "below",
  className = "",
}: MediaDisclaimerProps) {
  const { language } = useLanguage();
  const text = copy[language];
  const classes = ["media-disclaimer", `media-disclaimer--${variant}`, className]
    .filter(Boolean)
    .join(" ");

  if (variant === "caption") {
    return <figcaption className={classes}>{text}</figcaption>;
  }

  return <p className={classes}>{text}</p>;
}
