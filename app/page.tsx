"use client";

import Link from "next/link";
import { IllustrativeNote } from "./components/IllustrativeNote";
import { ModelScene } from "./components/ModelScene";
import { SiteShell } from "./components/SiteShell";
import { useLanguage } from "./components/LanguageProvider";

const content = {
  en: {
    title: "Remote Sensory Integration.",
    subtitle:
      "A comprehensive platform for software-controlled tactile feedback. Plectrum provides measurable, adaptive physical interventions using precision vibration hardware to bridge the tangibility gap in digital health.",
    explore: "Explore the technology",
    partner: "Partner with Plectrum",
    scroll: "Scroll to feel the story",
    thesisEyebrow: "THE MISSING MODALITY",
    thesisTitle: "Digital care can see and hear. Now it can deliver tactile input.",
    thesisBody:
      "In sensory integration therapy, tactile input is not an optional supplement. Plectrum transforms physical intervention into a measurable, software-controlled digital modality.",
    sense: "Sense",
    senseBody: "Capture response and biometric data from the wearable.",
    analyze: "Analyze",
    analyzeBody: "Formulate an adaptive sensory regulation protocol.",
    respond: "Respond",
    respondBody: "Deliver targeted tactile input directly through the fabric.",
    learn: "Record & learn",
    learnBody: "Turn every interaction into objective clinical insight.",
    productsEyebrow: "WORKING TODAY · FOUR VIBRATION PROTOTYPES",
    productsTitle: "Four working wearables built on controlled vibration.",
    productsBody:
      "Our current functional prototypes utilize precision vibration to evaluate the software architecture and clinical workflows, operating in parallel with the development of our patented active-fabric technology.",
    products: [
      ["Shirt", "Full-torso regulation through high-resolution, independently controlled vibration."],
      ["Sleeve", "Targeted limb regulation through high-resolution, independently controlled vibration."],
      ["Protective cap", "Targeted cranial vibration designed to support crisis prevention."],
      ["Glove", "Focused vibration patterns for fine-motor support."],
    ],
    viewModels: "Explore the four working prototypes",
    tractionEyebrow: "TRACTION",
    tractionTitle: "Functional prototypes working now. Patented textile platform ahead.",
    traction: [
      ["4", "working vibration-based prototypes"],
      ["3", "SDK ecosystems: Android, Windows and XR"],
      ["IL · US · EU", "patent granted in Israel", "US and Europe in process"],
    ],
    partnerLine:
      "Signed LOI with Hadassah · Adaptive protocols developed with IBM",
    futureEyebrow: "THE PATENTED DESTINATION",
    futureTitle: "From localized vibration to continuous sensation across the fabric.",
    futureBody:
      "FABTIVE's patent is not about vibration. It is based on proprietary fibers that Plectrum integrates into familiar textile structures, creating a continuous, controllable surface of physical sensation with depth across the fabric.",
    futureNote: "Patent granted in Israel · US and Europe in process · distinct from today's vibration prototypes",
    pathwaysEyebrow: "BUILD THE NEXT LAYER WITH US",
    pathwaysTitle: "Choose your path into Plectrum.",
    pathways: [
      ["Investors", "Review the opportunity and schedule a focused conversation.", "Investment conversation", "investor"],
      ["Clinical partners", "Join the 2026 pilot program for pediatric occupational therapy.", "Explore a clinical pilot", "clinical-pilot"],
      ["Technology partners", "Integrate active fabric into textile, XR, or software ecosystems.", "Discuss a partnership", "technology-partner"],
      ["Meet the team", "Start with a direct 30-minute conversation.", "Schedule a meeting", "meeting"],
    ],
  },
  he: {
    title: "גריה פיזית חכמה.",
    subtitle:
      "Plectrum מחברת בין העולם הדיגיטלי לפיזי באמצעות לבוש טכנולוגי מתקדם. המערכת מעבירה תחושות מגע לגוף, ומעשירה את הטיפול החושי ואת החוויה הדיגיטלית.",
    explore: "גלו את הטכנולוגיה",
    partner: "שותפות עם Plectrum",
    scroll: "גללו מטה לפרטים",
    thesisEyebrow: "המימד החסר",
    thesisTitle: "העולם הדיגיטלי יודע לראות ולשמוע. עכשיו הוא גם יודע לשדר תחושות פיזיות.",
    thesisBody:
      "גירוי חושי פיזי הוא חלק חיוני בטיפול ובתקשורת. Plectrum הופכת את האינטגרציה החושית למידע דיגיטלי שניתן למדוד ולשלוט בו מרחוק בעזרת תוכנה.",
    sense: "איסוף נתונים",
    senseBody: "איסוף נתוני גוף ומדדים דרך לבוש טכנולוגי חכם החכם.",
    analyze: "ניתוח",
    analyzeBody: "התאמה אישית של הגריה החושית לפי צרכי המשתמש.",
    respond: "פעולה",
    respondBody: "העברת תחושת מגע מדויקת ישירות דרך הבד.",
    learn: "למידה ושיפור",
    learnBody: "הפיכת כל פעולה למידע אובייקטיבי ומדיד לשיפור הטיפול.",
    productsEyebrow: "המוצרים שלנו · ארבעה אבות טיפוס",
    productsTitle: "ארבעה פריטי לבוש חכמים מבוססי רטט נשלט.",
    productsBody:
      "אבות הטיפוס שלנו משתמשים ברטט מדויק כדי לבחון את מערכת התוכנה ואת תהליכי הטיפול, כצעד מקדים לטכנולוגיית הבד האקטיבי שאנו מפתחים.",
    products: [
      ["חולצה", "תחושה פיזית מרגיעה לפלג הגוף העליון בעזרת מנועי רטט זעירים ונשלטים."],
      ["שרוול", "תחושה ממוקדת לידיים בעזרת רטט מדויק ונשלט."],
      ["כובע", "תחושה פיזית עדינה באזור הראש המסייע בהפחתת לחץ."],
      ["כפפה", "הכוונת תנועה בעזרת רטט לשיפור מוטוריקה עדינה."],
    ],
    viewModels: "צפו באבות הטיפוס שלנו",
    tractionEyebrow: "התקדמות",
    tractionTitle: "אבות טיפוס פועלים כיום. טכנולוגיית בד אקטיבי בעתיד .",
    traction: [
      ["4", "אבות טיפוס פעילים"],
      ["3", "סביבות פיתוח: Android, Windows ומציאות מדומה (XR)"],
      ["ישראל · ארה״ב · אירופה", "פטנט מאושר בישראל", "בתהליך רישום בארה״ב ואירופה"],
    ],
    partnerLine:
      "LOI's: בית חולים הדסה עין-כרם, עמותת עלה, עמותת אקים",
    futureEyebrow: "הטכנולוגיה שלנו",
    futureTitle: "הדור הבא של הלבוש הטכנולוגי: בד אקטיבי (Fabtive).",
    futureBody:
      "הטכנולוגיה מבוססת על סיבים חכמים המשולבים בתוך בד רגיל. השילוב יוצר משטח רציף שיאפשר העברת תחושת מגע רציפה על פני כל הבגד. לא עוד רטט נקודתי.",
    futureNote: "פטנט מאושר בישראל · בתהליך רישום בארה״ב ואירופה",
    pathwaysEyebrow: "הצטרפו אלינו",
    pathwaysTitle: "דרכים לשיתוף פעולה עם Plectrum.",
    pathways: [
      ["משקיעים", "למדו על ההזדמנות העסקית ותאמו פגישה.", "שיחת משקיעים", "investor"],
      ["שותפים קליניים", "הצטרפו לפיילוט הקליני שלנו לילדים לשנת 2026.", "פרטי פיילוט קליני", "clinical-pilot"],
      ["שותפים טכנולוגיים", "שלבו את הבד החכם שלנו במערכות שלכם.", "שיחת שותפות", "technology-partner"],
      ["פגישה עם הצוות", "תאמו איתנו שיחת היכרות קצרה.", "תיאום פגישה", "meeting"],
    ],
  },
} as const;

export default function Home() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <SiteShell>
      <section className="hero">
        <div className="hero-fabric" aria-hidden="true" />
        <div className="hero-products-visual" aria-hidden="true" />
        <div className="hero-copy">
          <h1>{t.title}</h1>
          <p className="hero-subtitle">{t.subtitle}</p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/technology">
              {t.explore}<span aria-hidden="true">→</span>
            </Link>
            <Link className="button button-secondary" href="/company#connect">
              {t.partner}<span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
        <div className="hero-footer-meta">
          <a className="scroll-cue" href="#touch-gap">
            <span>{t.scroll}</span>
            <i aria-hidden="true" />
          </a>
          <IllustrativeNote />
        </div>
      </section>

      <section className="light-section thesis-section" id="touch-gap">
        <div className="section-grid">
          <div>
            <p className="eyebrow dark">{t.thesisEyebrow}</p>
            <h2>{t.thesisTitle}</h2>
          </div>
          <p className="section-lead">{t.thesisBody}</p>
        </div>
        <div className="loop-steps">
          {[
            [t.sense, t.senseBody],
            [t.analyze, t.analyzeBody],
            [t.respond, t.respondBody],
            [t.learn, t.learnBody],
          ].map(([title, body], index) => (
            <article className="loop-step reveal" key={title}>
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="blue-section product-section">
        <div className="product-story">
          <div className="section-heading">
            <p className="eyebrow">{t.productsEyebrow}</p>
            <h2>{t.productsTitle}</h2>
            <p>{t.productsBody}</p>
          </div>
          <div className="product-media-block">
            <div className="product-hero-visual" aria-hidden="true" />
          </div>
        </div>
        <div className="product-grid">
          {t.products.map(([name, body], index) => (
            <article className="product-card reveal" key={name}>
              <span className="product-index">0{index + 1}</span>
              <ModelScene
                mode="card"
                modelPath={[
                  "/models/shirt.glb",
                  "/models/sleeve.glb",
                  "/models/hat.glb",
                  "/models/glove.glb",
                ][index]}
                poster="/media/hero-products-v3.png"
                label={name}
              />
              <h3>{name}</h3>
              <p>{body}</p>
            </article>
          ))}
        </div>
        <div className="product-visuals-meta">
          <IllustrativeNote />
        </div>
        <Link className="text-link" href="/prototypes">
          {t.viewModels}<span aria-hidden="true">→</span>
        </Link>
      </section>

      <section className="light-section traction-section">
        <div className="section-heading compact">
          <p className="eyebrow dark">{t.tractionEyebrow}</p>
          <h2>{t.tractionTitle}</h2>
        </div>
        <div className="traction-metrics">
          {t.traction.map(([number, label, suffix]) => (
            <article key={`${number}-${label}`}>
              <strong><bdi dir="auto">{number}</bdi></strong>
              <span>
                {suffix ? (
                  <>
                    <span className="patent-emphasis">{label}</span>
                    {"; "}
                    {suffix}
                  </>
                ) : (
                  label
                )}
              </span>
            </article>
          ))}
        </div>
        <p className="partner-line">{t.partnerLine}</p>
      </section>

      <section className="future-section">
        <div className="future-orbit" aria-hidden="true">
          <i /><i /><i />
        </div>
        <div className="future-copy">
          <p className="eyebrow">{t.futureEyebrow}</p>
          <h2>{t.futureTitle}</h2>
          <p>{t.futureBody}</p>
          <span>{t.futureNote}</span>
        </div>
      </section>

      <section className="light-section pathways-section" id="partner">
        <div className="section-heading compact">
          <p className="eyebrow dark">{t.pathwaysEyebrow}</p>
          <h2>{t.pathwaysTitle}</h2>
        </div>
        <div className="pathway-grid">
          {t.pathways.map(([title, body, action, track], index) => (
            <a
              className="pathway-card"
              href={`mailto:gabriel@plectrum.biz?subject=${encodeURIComponent(
                `Plectrum | ${track}`,
              )}`}
              key={title}
            >
              <span>0{index + 1}</span>
              <h3>{title}</h3>
              <p>{body}</p>
              <strong>{action}<i aria-hidden="true">→</i></strong>
            </a>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
