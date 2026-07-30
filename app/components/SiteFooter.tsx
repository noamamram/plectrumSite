"use client";

import Link from "next/link";
import { useLanguage } from "./LanguageProvider";

const copy = {
  en: {
    line: "Connect. Sense. Interact.",
    body: "Bridging the tangibility gap in digital health.",
    contactEyebrow: "START A CONVERSATION",
    contactTitle: "Bring touch into what you’re building.",
    email: "Email Gabriel",
    call: "Call us",
    linkedin: "Follow Plectrum",
    nav: ["Home", "Technology", "Clinical", "Prototypes", "Company"],
    rights: "© 2026 Plectrum. All rights reserved.",
  },
  he: {
    line: "לחבר. לחוש. לתקשר.",
    body: "מגשרים על פער המגע בבריאות הדיגיטלית.",
    contactEyebrow: "מתחילים שיחה",
    contactTitle: "בואו להכניס מגע אל הדבר הבא שאתם בונים.",
    email: "שליחת מייל לגבריאל",
    call: "שיחה איתנו",
    linkedin: "לעמוד של Plectrum",
    nav: ["בית", "טכנולוגיה", "היישום הקליני", "אבות טיפוס", "החברה"],
    rights: "© 2026 Plectrum. כל הזכויות שמורות.",
  },
} as const;

export function SiteFooter() {
  const { language } = useLanguage();
  const t = copy[language];
  const links = ["/", "/technology", "/clinical", "/prototypes", "/company"];

  return (
    <footer className="site-footer">
      <div className="footer-cta">
        <div>
          <p>{t.contactEyebrow}</p>
          <h2>{t.contactTitle}</h2>
        </div>
        <div className="footer-cta-actions">
          <a className="footer-contact-button primary" href="mailto:gabriel@plectrum.biz">
            <span>{t.email}</span>
            <strong>gabriel@plectrum.biz</strong>
          </a>
          <a className="footer-contact-button" href="tel:+972526808756">
            <span>{t.call}</span>
            <strong>+972 52 680 8756</strong>
          </a>
          <a
            className="footer-contact-button"
            href="https://www.linkedin.com/company/plectrum-af/"
            target="_blank"
            rel="noreferrer"
          >
            <span>{t.linkedin}</span>
            <strong>LinkedIn ↗</strong>
          </a>
        </div>
      </div>
      <div className="footer-brand">
        <Link className="brand" href="/">
          <i className="brand-symbol" aria-hidden="true" />
          <span>Plectrum</span>
        </Link>
        <h2>{t.line}</h2>
        <p>{t.body}</p>
      </div>
      <nav aria-label="Footer">
        {links.map((href, index) => (
          <Link href={href} key={href}>{t.nav[index]}</Link>
        ))}
      </nav>
      <div className="footer-contact">
        <a href="mailto:gabriel@plectrum.biz">gabriel@plectrum.biz</a>
        <a href="tel:+972526808756">+972 52 680 8756</a>
        <a href="https://www.linkedin.com/company/plectrum-af/" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <p>{t.rights}</p>
      </div>
    </footer>
  );
}
