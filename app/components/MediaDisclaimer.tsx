"use client";

import { useLanguage } from "./LanguageProvider";

const copy = {
  en: "Image for illustrative purposes only. Product design, appearance, and specifications may change.",
  he: "התמונה להמחשה בלבד. עיצוב המוצר, מראהו והמפרט שלו עשויים להשתנות.",
  ar: "الصورة لأغراض توضيحية فقط. قد يتغير تصميم المنتج ومظهره ومواصفاته.",
  ru: "Изображение носит иллюстративный характер. Дизайн, внешний вид и характеристики продукта могут измениться.",
} as const;

type MediaDisclaimerProps = {
  /** Use `caption` inside a figure; otherwise a flowing paragraph after media. */
  as?: "p" | "caption";
  className?: string;
  tone?: "dark" | "light";
};

export function MediaDisclaimer({
  as = "p",
  className = "",
  tone = "dark",
}: MediaDisclaimerProps) {
  const { language } = useLanguage();
  const text = copy[language];
  const classes = ["media-disclaimer", `media-disclaimer--${tone}`, className]
    .filter(Boolean)
    .join(" ");

  if (as === "caption") {
    return <figcaption className={classes}>{text}</figcaption>;
  }

  return <p className={classes}>{text}</p>;
}
