"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useLanguage } from "./LanguageProvider";

const labels = {
  en: {
    home: "Home",
    technology: "Technology",
    clinical: "Clinical",
    prototypes: "Prototypes",
    company: "Company",
    partner: "Partner with us",
    menu: "Open menu",
  },
  he: {
    home: "בית",
    technology: "טכנולוגיה",
    clinical: "היישום הקליני",
    prototypes: "אבות טיפוס",
    company: "החברה",
    partner: "לשותפות איתנו",
    menu: "פתיחת תפריט",
  },
} as const;

export function SiteHeader() {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const t = labels[language];
  const links = [
    ["/", t.home],
    ["/technology", t.technology],
    ["/clinical", t.clinical],
    ["/prototypes", t.prototypes],
    ["/company", t.company],
  ];

  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Plectrum home">
        <i className="brand-symbol" aria-hidden="true" />
        <span>Plectrum</span>
      </Link>

      <button
        className="menu-toggle"
        type="button"
        aria-expanded={open}
        aria-label={t.menu}
        onClick={() => setOpen((current) => !current)}
      >
        <i />
        <i />
      </button>

      <nav className={open ? "main-nav is-open" : "main-nav"} aria-label="Primary">
        {links.map(([href, label]) => (
          <Link
            className={pathname === href ? "active" : ""}
            href={href}
            key={href}
            onClick={() => setOpen(false)}
          >
            {label}
          </Link>
        ))}
      </nav>

      <div className="header-actions">
        <div className="language-switch" aria-label="Language">
          <button
            className={language === "en" ? "active" : ""}
            type="button"
            onClick={() => setLanguage("en")}
          >
            EN
          </button>
          <span>|</span>
          <button
            className={language === "he" ? "active" : ""}
            type="button"
            onClick={() => setLanguage("he")}
          >
            HE
          </button>
        </div>
        <Link className="header-cta" href="/company#connect">
          {t.partner}
        </Link>
      </div>
    </header>
  );
}
