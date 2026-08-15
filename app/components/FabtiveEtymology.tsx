"use client";

import { Fragment } from "react";
import { useLanguage } from "./LanguageProvider";

const etymology = {
  en: "The name combines FAB from FABRIC with TIVE from ACTIVE.",
  he: "השם משלב את FAB מתוך FABRIC עם TIVE מתוך ACTIVE.",
  ar: "يجمع الاسم بين FAB من FABRIC وTIVE من ACTIVE.",
  ru: "Название объединяет FAB из FABRIC и TIVE из ACTIVE.",
} as const;

const ENGLISH_FRAGMENTS = /^(FABRIC|ACTIVE|FAB|TIVE)$/;

function isolateBrandFragments(text: string) {
  return text.split(/(FABRIC|ACTIVE|FAB|TIVE)/g).map((part, index) => {
    if (ENGLISH_FRAGMENTS.test(part)) {
      return (
        <bdi dir="ltr" key={`${part}-${index}`}>
          {part}
        </bdi>
      );
    }
    return <Fragment key={`${part}-${index}`}>{part}</Fragment>;
  });
}

type FabtiveEtymologyProps = {
  className?: string;
};

/** Single, restrained explanation of how FABTIVE was formed. Keep brand fragments in English. */
export function FabtiveEtymology({ className = "" }: FabtiveEtymologyProps) {
  const { language } = useLanguage();
  const classes = ["fabtive-etymology", className].filter(Boolean).join(" ");

  return (
    <div className={classes} aria-label="FABTIVE — FABRIC plus ACTIVE">
      <p className="fabtive-etymology-word" dir="ltr" aria-hidden="true">
        <span className="fabtive-etymology-fab">FAB</span>
        <span className="fabtive-etymology-tive">TIVE</span>
      </p>
      <p className="fabtive-etymology-equation" dir="ltr" aria-hidden="true">
        FABRIC + ACTIVE
      </p>
      <p className="fabtive-etymology-note">{isolateBrandFragments(etymology[language])}</p>
    </div>
  );
}
