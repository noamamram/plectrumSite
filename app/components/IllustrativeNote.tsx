"use client";

import Link from "next/link";
import { useLanguage } from "./LanguageProvider";

const copy = {
  en: {
    label: "Images for illustration only. Appearance may change.",
    aria: "Images for illustration only; appearance may change — read the product disclaimer",
  },
  he: {
    label: "התמונות להמחשה בלבד. ייתכנו שינויים.",
    aria: "התמונות להמחשה בלבד וייתכנו שינויים — לקריאת דיסקליימר המוצר",
  },
  ar: {
    label: "الصور للتوضيح فقط. قد تتغير.",
    aria: "الصور للتوضيح فقط وقد تتغير — اقرأ تنويه المنتج",
  },
  ru: {
    label: "Изображения только для иллюстрации. Внешний вид может измениться.",
    aria: "Изображения только для иллюстрации; внешний вид может измениться — читать отказ от ответственности",
  },
} as const;

type IllustrativeNoteProps = {
  className?: string;
};

/**
 * Short linked caption for illustrative media.
 * Full legal copy lives at /prototypes#product-disclaimer.
 */
export function IllustrativeNote({ className = "" }: IllustrativeNoteProps) {
  const { language } = useLanguage();
  const t = copy[language];
  const classes = ["illustrative-note", className].filter(Boolean).join(" ");

  return (
    <Link
      className={classes}
      href="/prototypes#product-disclaimer"
      aria-label={t.aria}
    >
      {t.label}
    </Link>
  );
}
