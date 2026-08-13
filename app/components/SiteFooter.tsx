"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "./LanguageProvider";

const copy = {
  en: {
    line: "Connect. Sense. Interact.",
    body: "Bridging the tangibility gap in digital health.",
    contactEyebrow: "START A CONVERSATION",
    contactTitle: "Bring a physical dimension into what you're building.",
    email: "Email Gabriel",
    call: "Call us",
    linkedin: "Follow Plectrum",
    nav: ["Home", "Technology", "Clinical", "Prototypes", "Company"],
    rights: "© 2026 Plectrum. All rights reserved.",
    disclaimerLink: "Product disclaimer",
  },
  he: {
    line: "לחבר. לחוש. לתקשר.",
    body: "מגשרים על פער המגע בבריאות הדיגיטלית.",
    contactEyebrow: "מתחילים שיחה",
    contactTitle: "הוסיפו ממד פיזי למה שאתם בונים.",
    email: "שליחת מייל לגבריאל",
    call: "שיחה איתנו",
    linkedin: "לעמוד של Plectrum",
    nav: ["בית", "טכנולוגיה", "היישום הקליני", "אבות טיפוס", "החברה"],
    rights: "© 2026 Plectrum. כל הזכויות שמורות.",
    disclaimerLink: "הבהרת מוצר",
  },
  ar: {
    line: "نتّصل. نشعر. نتفاعل.",
    body: "نسد فجوة اللمس في الصحة الرقمية.",
    contactEyebrow: "ابدأ محادثة",
    contactTitle: "أضف بُعدًا جسديًا إلى ما تعمل على بنائه.",
    email: "راسل غابرييل",
    call: "اتصل بنا",
    linkedin: "تابع Plectrum",
    nav: ["الرئيسية", "التكنولوجيا", "التطبيق السريري", "النماذج الأولية", "الشركة"],
    rights: "© 2026 Plectrum. جميع الحقوق محفوظة.",
    disclaimerLink: "تنويه المنتج",
  },
  ru: {
    line: "Связывать. Чувствовать. Взаимодействовать.",
    body: "Устраняем дефицит осязания в цифровой медицине.",
    contactEyebrow: "НАЧАТЬ ДИАЛОГ",
    contactTitle: "Добавьте физическое измерение в то, что вы создаёте.",
    email: "Написать Габриэлю",
    call: "Позвонить нам",
    linkedin: "Plectrum в LinkedIn",
    nav: ["Главная", "Технология", "Клиническое применение", "Прототипы", "Компания"],
    rights: "© 2026 Plectrum. Все права защищены.",
    disclaimerLink: "Уточнение о продукте",
  },
} as const;

export function SiteFooter() {
  const { language } = useLanguage();
  const pathname = usePathname();
  const t = copy[language];
  const links = ["/", "/technology", "/clinical", "/prototypes", "/company"];
  const showContactCta = pathname !== "/" && pathname !== "/company";

  return (
    <footer className="site-footer">
      {showContactCta ? <div className="footer-cta">
        <div>
          <p>{t.contactEyebrow}</p>
          <h2>{t.contactTitle}</h2>
        </div>
        <div className="footer-cta-actions">
          <a className="footer-contact-button primary" href="mailto:gabriel@plectrum.biz">
            <span>{t.email}</span>
            <strong><bdi dir="ltr">gabriel@plectrum.biz</bdi></strong>
          </a>
          <a className="footer-contact-button" href="tel:+972526808756">
            <span>{t.call}</span>
            <strong><bdi dir="ltr">+972 52 680 8756</bdi></strong>
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
      </div> : null}
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
        <a href="mailto:gabriel@plectrum.biz"><bdi dir="ltr">gabriel@plectrum.biz</bdi></a>
        <a href="tel:+972526808756"><bdi dir="ltr">+972 52 680 8756</bdi></a>
        <a href="https://www.linkedin.com/company/plectrum-af/" target="_blank" rel="noreferrer">
          LinkedIn
        </a>
        <Link href="/prototypes#product-disclaimer">{t.disclaimerLink}</Link>
        <p>{t.rights}</p>
      </div>
    </footer>
  );
}
