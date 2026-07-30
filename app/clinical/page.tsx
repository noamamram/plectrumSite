"use client";

import Link from "next/link";
import { SiteShell } from "../components/SiteShell";
import { useLanguage } from "../components/LanguageProvider";

const copy = {
  en: {
    eyebrow: "CLINICAL APPLICATION",
    title: "Remote care can finally include touch.",
    intro:
      "Plectrum’s first focused application is professional sensory integration for autistic people and people with sensory processing needs—inside and beyond the clinic.",
    cta: "Explore a clinical pilot",
    problemLabel: "THE TELEHEALTH BLIND SPOT",
    problemTitle: "The therapist can guide. The fabric can deliver.",
    problemBody:
      "Video and audio preserve conversation, but not tactile intervention. Plectrum is designed to let occupational therapists control where, when and how tactile input is delivered through a wearable.",
    controls: [
      ["Localization", "Select targeted areas across up to 24 tactile points."],
      ["Pattern", "Configure therapeutic vibration and pressure sequences."],
      ["Intensity", "Adapt delivery to the individual and the moment."],
      ["Follow-up", "Monitor sessions and build structured reports over time."],
    ],
    pathwayLabel: "A CLINICAL WORKFLOW",
    pathwayTitle: "Designed around the therapist—not around the device.",
    pathway: [
      ["Assess", "Define regulation needs and a personalized treatment objective."],
      ["Configure", "Choose placement, intensity and tactile pattern remotely."],
      ["Deliver", "Provide targeted input through the selected wearable."],
      ["Review", "Use documented sessions to support the next intervention."],
    ],
    complianceLabel: "REGULATORY PATH",
    complianceTitle: "A clear starting classification.",
    complianceBody:
      "Plectrum is registered and listed as an FDA Class I therapeutic vibrator under 21 CFR 890.5975. The company’s current reimbursement strategy references CPT 97533 and remote therapeutic monitoring code CPT 98977 with Modifier 95.",
    pilotLabel: "CLINICAL COLLABORATION",
    pilotTitle: "Preparing for broader pilot expansion.",
    pilotBody:
      "Plectrum has a letter of intent with Hadassah and is planning global clinical pilot expansion in 2026. We are seeking occupational therapy clinics, rehabilitation centers and medical partners.",
    pilotCta: "Start a pilot conversation",
  },
  he: {
    eyebrow: "היישום הקליני",
    title: "טיפול מרחוק יכול סוף־סוף לכלול מגע.",
    intro:
      "היישום הראשון והממוקד של Plectrum הוא אינטגרציה חושית מקצועית עבור אנשים על הרצף האוטיסטי ואנשים עם צורכי עיבוד חושי—בתוך הקליניקה ומחוצה לה.",
    cta: "בדיקת פיילוט קליני",
    problemLabel: "הנקודה העיוורת של הטיפול מרחוק",
    problemTitle: "המטפל מנחה. הבד מעביר.",
    problemBody:
      "וידאו ואודיו משמרים את השיחה, אך לא את ההתערבות המישושית. Plectrum נועדה לאפשר למרפאים בעיסוק לשלוט היכן, מתי ובאיזו צורה יועבר הקלט המישושי דרך לביש.",
    controls: [
      ["מיקום", "בחירה באזורים ממוקדים מתוך עד 24 נקודות מגע."],
      ["דפוס", "הגדרת רצפי רטט ולחץ טיפוליים."],
      ["עוצמה", "התאמת ההפעלה לאדם ולרגע."],
      ["מעקב", "ניטור מפגשים ובניית דיווח מובנה לאורך זמן."],
    ],
    pathwayLabel: "זרימת עבודה קלינית",
    pathwayTitle: "מתוכנן סביב המטפל—לא סביב המכשיר.",
    pathway: [
      ["הערכה", "הגדרת צורכי הוויסות ומטרה טיפולית אישית."],
      ["הגדרה", "בחירת מיקום, עוצמה ודפוס מישושי מרחוק."],
      ["הפעלה", "העברת קלט ממוקד דרך הלביש שנבחר."],
      ["בחינה", "שימוש בתיעוד המפגשים לתכנון ההתערבות הבאה."],
    ],
    complianceLabel: "המסלול הרגולטורי",
    complianceTitle: "נקודת פתיחה מוגדרת.",
    complianceBody:
      "Plectrum רשומה ומופיעה ברישומי ה־FDA כמכשיר רטט טיפולי Class I לפי 21 CFR 890.5975. אסטרטגיית ההחזר הנוכחית של החברה מתייחסת ל־CPT 97533 ולקוד הניטור הטיפולי מרחוק CPT 98977 עם Modifier 95.",
    pilotLabel: "שיתוף פעולה קליני",
    pilotTitle: "נערכים להרחבת פיילוטים.",
    pilotBody:
      "ל־Plectrum מכתב כוונות עם הדסה, והיא מתכננת הרחבה גלובלית של פיילוטים קליניים ב־2026. אנחנו מחפשים קליניקות לריפוי בעיסוק, מרכזי שיקום ושותפים רפואיים.",
    pilotCta: "פתיחת שיחה על פיילוט",
  },
} as const;

export default function ClinicalPage() {
  const { language } = useLanguage();
  const t = copy[language];

  return (
    <SiteShell>
      <section className="page-hero clinical-hero">
        <div className="clinical-rings" aria-hidden="true"><i /><i /><i /></div>
        <div className="page-hero-copy">
          <p className="eyebrow">{t.eyebrow}</p><h1>{t.title}</h1><p>{t.intro}</p>
          <a className="button button-primary" href="mailto:gabriel@plectrum.biz?subject=Plectrum%20clinical%20pilot">
            {t.cta}<span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      <section className="light-section">
        <div className="section-grid">
          <div><p className="eyebrow dark">{t.problemLabel}</p><h2>{t.problemTitle}</h2></div>
          <p className="section-lead">{t.problemBody}</p>
        </div>
        <div className="clinical-control-grid">
          {t.controls.map(([title, body], index) => (
            <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{body}</p></article>
          ))}
        </div>
      </section>

      <section className="blue-section clinical-path">
        <div className="section-heading">
          <p className="eyebrow">{t.pathwayLabel}</p><h2>{t.pathwayTitle}</h2>
        </div>
        <div className="clinical-path-steps">
          {t.pathway.map(([title, body], index) => (
            <article key={title}><strong>0{index + 1}</strong><div><h3>{title}</h3><p>{body}</p></div></article>
          ))}
        </div>
      </section>

      <section className="light-section compliance-section">
        <div><p className="eyebrow dark">{t.complianceLabel}</p><h2>{t.complianceTitle}</h2></div>
        <p>{t.complianceBody}</p>
      </section>

      <section className="pilot-section">
        <div>
          <p className="eyebrow">{t.pilotLabel}</p><h2>{t.pilotTitle}</h2><p>{t.pilotBody}</p>
        </div>
        <a className="button button-primary" href="mailto:gabriel@plectrum.biz?subject=Plectrum%20clinical%20pilot">
          {t.pilotCta}<span aria-hidden="true">→</span>
        </a>
        <Link className="text-link" href="/prototypes">
          {language === "en" ? "Explore the wearables" : "לצפייה בלבישים"}<span aria-hidden="true">→</span>
        </Link>
      </section>
    </SiteShell>
  );
}
