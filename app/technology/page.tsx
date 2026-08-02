"use client";

import Link from "next/link";
import { SiteShell } from "../components/SiteShell";
import { useLanguage } from "../components/LanguageProvider";

const copy = {
  en: {
    eyebrow: "THE TECHNOLOGY",
    title: "A textile that can deliver touch.",
    intro:
      "FABTIVE is Plectrum’s patented active-fabric platform: a software-controlled layer designed to bring localized, continuous tactile output into wearable products.",
    cta: "Discuss a technology partnership",
    systemLabel: "FROM SIGNAL TO SENSATION",
    systemTitle: "A closed loop, woven into the product.",
    systemBody:
      "The platform connects sensing, software and textile actuation—turning a therapist’s intent into targeted tactile input, then recording the response.",
    steps: [
      ["Sense", "The wearable captures response and connected biometric data."],
      ["Analyze", "Software translates clinical goals into an adaptive protocol."],
      ["Respond", "The fabric delivers localized patterns, intensity and timing."],
      ["Learn", "Each session becomes structured information for follow-up."],
    ],
    fabricLabel: "THE ACTIVE LAYER",
    fabricTitle: "Depth and continuity—not a collection of gadgets.",
    fabricBody:
      "Plectrum is developing the technology to integrate directly into textile fibers. The goal is an active surface that preserves the familiarity, flexibility and wearability of fabric while adding controllable tactile depth.",
    facts: [
      ["Up to 24", "individually localized tactile points"],
      ["3.5–5.2V DC", "operating range · 1.2A maximum"],
      ["Bluetooth + USB-C", "wireless control and charging"],
      ["Android · Windows · XR", "cross-platform SDK environments"],
    ],
    ipLabel: "DEFENSIBLE FOUNDATION",
    ipTitle: "Protected IP. Built for integration.",
    ipBody:
      "Patent applications have been filed in the United States, Europe and Israel. Adaptive protocols have been developed with IBM, alongside industrial relationships with NILIT and Delta Galil.",
    futureTitle: "Touch belongs in more than one market.",
    futureBody:
      "Clinical sensory integration is the first focused application. The same platform can later extend into XR, gaming, training and defense.",
    futureNote: "Clinical validation comes first.",
  },
  he: {
    eyebrow: "הטכנולוגיה",
    title: "טקסטיל שיודע להעביר מגע.",
    intro:
      "FABTIVE היא פלטפורמת הבד האקטיבי המוגנת בפטנט של Plectrum: שכבה הנשלטת בתוכנה ונועדה להכניס פלט מישושי מקומי ורציף למוצרים לבישים.",
    cta: "שיחה על שותפות טכנולוגית",
    systemLabel: "מאות לתחושה",
    systemTitle: "לולאה סגורה, בתוך הבד.",
    systemBody:
      "הפלטפורמה מחברת בין חישה, תוכנה והפעלה טקסטילית—מתרגמת את כוונת המטפל לקלט מישושי ממוקד ומתעדת את התגובה.",
    steps: [
      ["חישה", "הלביש אוסף תגובות ומדדים ביומטריים ממערכות מחוברות."],
      ["ניתוח", "התוכנה מתרגמת יעדים קליניים לפרוטוקול אדפטיבי."],
      ["תגובה", "הבד מעביר דפוסים, עוצמה ותזמון באופן ממוקד."],
      ["למידה", "כל מפגש הופך למידע מובנה לצורך המשך הטיפול."],
    ],
    fabricLabel: "השכבה האקטיבית",
    fabricTitle: "עומק ורציפות—לא אוסף של גאדג׳טים.",
    fabricBody:
      "Plectrum מפתחת טכנולוגיה שתשתלב ישירות בסיבי הטקסטיל. המטרה היא משטח אקטיבי ששומר על המוכרות, הגמישות והלבישות של בד, ומוסיף להן עומק מישושי נשלט.",
    facts: [
      ["עד 24", "נקודות מגע הניתנות לשליטה מקומית"],
      ["3.5–5.2V DC", "טווח הפעלה · עד 1.2A"],
      ["Bluetooth + USB-C", "שליטה אלחוטית וטעינה"],
      ["Android · Windows · XR", "סביבות SDK חוצות־פלטפורמות"],
    ],
    ipLabel: "בסיס בר־הגנה",
    ipTitle: "קניין רוחני מוגן. מוכן לאינטגרציה.",
    ipBody:
      "בקשות פטנט הוגשו בארצות הברית, אירופה וישראל. פרוטוקולים אדפטיביים פותחו עם IBM, לצד קשרים תעשייתיים עם NILIT ודלתא גליל.",
    futureTitle: "מגע שייך ליותר משוק אחד.",
    futureBody:
      "אינטגרציה חושית קלינית היא היישום הראשון והממוקד. בהמשך, אותה פלטפורמה תוכל להתרחב ל־XR, גיימינג, הדרכה וביטחון.",
    futureNote: "האימות הקליני קודם.",
  },
} as const;

export default function TechnologyPage() {
  const { language } = useLanguage();
  const t = copy[language];

  return (
    <SiteShell>
      <section className="page-hero technology-hero">
        <div className="page-hero-copy">
          <p className="eyebrow">{t.eyebrow}</p>
          <h1>{t.title}</h1>
          <p>{t.intro}</p>
          <a className="button button-primary" href="mailto:gabriel@plectrum.biz?subject=Plectrum%20technology%20partnership">
            {t.cta}<span aria-hidden="true">→</span>
          </a>
        </div>
        <div className="fabric-core" aria-hidden="true"><i /><i /><i /><i /><i /></div>
      </section>

      <section className="light-section">
        <div className="section-grid">
          <div>
            <p className="eyebrow dark">{t.systemLabel}</p>
            <h2>{t.systemTitle}</h2>
          </div>
          <p className="section-lead">{t.systemBody}</p>
        </div>
        <div className="loop-steps">
          {t.steps.map(([title, body], index) => (
            <article className="loop-step reveal" key={title}>
              <span>0{index + 1}</span><h3>{title}</h3><p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="blue-section fabric-detail">
        <div className="fabric-detail-visual" aria-hidden="true"><div /></div>
        <div className="fabric-detail-copy">
          <p className="eyebrow">{t.fabricLabel}</p>
          <h2>{t.fabricTitle}</h2>
          <p>{t.fabricBody}</p>
        </div>
      </section>

      <section className="light-section facts-section">
        <div className="fact-grid">
          {t.facts.map(([value, label]) => (
            <article key={label}><strong>{value}</strong><span>{label}</span></article>
          ))}
        </div>
        <div className="split-story">
          <div><p className="eyebrow dark">{t.ipLabel}</p><h2>{t.ipTitle}</h2></div>
          <p>{t.ipBody}</p>
        </div>
      </section>

      <section className="future-section compact-future">
        <div className="future-copy">
          <h2>{t.futureTitle}</h2>
          <p>{t.futureBody}</p>
          <span>{t.futureNote}</span>
          <Link className="text-link centered" href="/prototypes">
            {language === "en" ? "See the platform take form" : "לראות את הפלטפורמה הופכת למוצר"}
            <b aria-hidden="true">→</b>
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
