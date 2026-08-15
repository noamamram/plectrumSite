"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
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
    closeMenu: "Close menu",
    language: "Select language",
  },
  he: {
    home: "בית",
    technology: "טכנולוגיה",
    clinical: "היישום הקליני",
    prototypes: "אבות טיפוס",
    company: "החברה",
    partner: "לשותפות איתנו",
    menu: "פתיחת תפריט",
    closeMenu: "סגירת תפריט",
    language: "בחירת שפה",
  },
  ar: {
    home: "الرئيسية",
    technology: "التكنولوجيا",
    clinical: "التطبيق السريري",
    prototypes: "النماذج الأولية",
    company: "الشركة",
    partner: "شاركنا",
    menu: "فتح القائمة",
    closeMenu: "إغلاق القائمة",
    language: "اختيار اللغة",
  },
  ru: {
    home: "Главная",
    technology: "Технология",
    clinical: "Клиника",
    prototypes: "Прототипы",
    company: "Компания",
    partner: "Партнёрство",
    menu: "Открыть меню",
    closeMenu: "Закрыть меню",
    language: "Выбрать язык",
  },
} as const;

const languages = [
  { code: "en", label: "English", dir: "ltr" },
  { code: "he", label: "עברית", dir: "rtl" },
  { code: "ar", label: "العربية", dir: "rtl" },
  { code: "ru", label: "Русский", dir: "ltr" },
] as const;

export function SiteHeader() {
  const { language, setLanguage } = useLanguage();
  const [open, setOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const languagePickerRef = useRef<HTMLDivElement>(null);
  const menuToggleRef = useRef<HTMLButtonElement>(null);
  const navId = useId();
  const pathname = usePathname();
  const t = labels[language];
  const currentLanguage = languages.find((item) => item.code === language) ?? languages[0];
  const links = [
    ["/", t.home],
    ["/technology", t.technology],
    ["/clinical", t.clinical],
    ["/prototypes", t.prototypes],
    ["/company", t.company],
  ] as const;

  const closeMenu = () => {
    setOpen(false);
    window.requestAnimationFrame(() => menuToggleRef.current?.focus());
  };

  useEffect(() => {
    if (!languageOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (!languagePickerRef.current?.contains(event.target as Node)) {
        setLanguageOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLanguageOpen(false);
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [languageOpen]);

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const [navPath, setNavPath] = useState(pathname);
  if (pathname !== navPath) {
    setNavPath(pathname);
    if (open) setOpen(false);
    if (languageOpen) setLanguageOpen(false);
  }

  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Plectrum home">
        <i className="brand-symbol" aria-hidden="true" />
        <span>Plectrum</span>
      </Link>

      <button
        className={open ? "menu-toggle is-open" : "menu-toggle"}
        type="button"
        ref={menuToggleRef}
        aria-expanded={open}
        aria-controls={navId}
        aria-label={open ? t.closeMenu : t.menu}
        onClick={() => {
          setOpen((current) => !current);
          setLanguageOpen(false);
        }}
      >
        <i />
        <i />
      </button>

      <nav id={navId} className={open ? "main-nav is-open" : "main-nav"} aria-label="Primary">
        {links.map(([href, label]) => {
          const active = pathname === href;
          return (
            <Link
              className={active ? "active" : ""}
              href={href}
              key={href}
              aria-current={active ? "page" : undefined}
              onClick={() => {
                setOpen(false);
                setLanguageOpen(false);
              }}
            >
              {label}
            </Link>
          );
        })}
        <Link
          className="mobile-partner-cta"
          href="/company#connect"
          onClick={() => {
            setOpen(false);
            setLanguageOpen(false);
          }}
        >
          {t.partner}
        </Link>
      </nav>

      <div className="header-actions">
        <div
          className={languageOpen ? "language-switch is-open" : "language-switch"}
          ref={languagePickerRef}
        >
          <button
            className="language-trigger"
            type="button"
            aria-expanded={languageOpen}
            aria-haspopup="menu"
            aria-label={t.language}
            onClick={() => {
              setLanguageOpen((current) => !current);
              setOpen(false);
            }}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="12" cy="12" r="8.5" />
              <path d="M3.8 12h16.4M12 3.5c2.1 2.3 3.2 5.1 3.2 8.5S14.1 18.2 12 20.5M12 3.5C9.9 5.8 8.8 8.6 8.8 12s1.1 6.2 3.2 8.5" />
            </svg>
            <span dir={currentLanguage.dir}>{currentLanguage.label}</span>
            <i className="language-trigger-chevron" aria-hidden="true" />
          </button>
          <div className="language-menu" role="menu" aria-label={t.language}>
            {languages.map((item) => (
              <button
                className="language-option"
                type="button"
                role="menuitemradio"
                aria-checked={language === item.code}
                dir={item.dir}
                onClick={() => {
                  setLanguage(item.code);
                  setLanguageOpen(false);
                }}
                key={item.code}
              >
                <span>{item.label}</span>
                <small>{item.code.toUpperCase()}</small>
              </button>
            ))}
          </div>
        </div>
        <Link className="header-cta" href="/company#connect">
          {t.partner}
        </Link>
      </div>
    </header>
  );
}
