"use client";

import Link from "next/link";
import { ModelScene } from "./components/ModelScene";
import { SiteShell } from "./components/SiteShell";
import { useLanguage } from "./components/LanguageProvider";

const content = {
  en: {
    eyebrow: "FABTIVE ACTIVE FABRIC",
    title: "Bringing touch into the digital loop.",
    subtitle:
      "The first platform enabling remote, professional-grade sensory integration through adaptive touch.",
    explore: "Explore the technology",
    partner: "Partner with Plectrum",
    scroll: "Scroll to feel the story",
    thesisEyebrow: "THE MISSING MODALITY",
    thesisTitle: "Digital care can see and hear. Now it can touch.",
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
    productsEyebrow: "ONE PLATFORM · FOUR PROTOTYPES",
    productsTitle: "The fabric becomes the interface.",
    productsBody:
      "One active textile system, expressed through four wearable forms—each designed for a distinct therapeutic need.",
    products: [
      ["Shirt", "Full-torso deep pressure and regulation · up to 24 tactile points."],
      ["Sleeve", "Targeted limb regulation for localized sensory input · up to 24 tactile points."],
      ["Protective cap", "Cranial sensory modulation designed for crisis prevention."],
      ["Glove", "High-definition tactile stimulation for fine-motor support."],
    ],
    viewModels: "Explore all 3D prototypes",
    tractionEyebrow: "TRACTION",
    tractionTitle: "Built beyond the concept stage.",
    traction: [
      ["4", "working prototypes"],
      ["3", "SDK ecosystems: Android, Windows and XR"],
      ["US · EU · IL", "patents filed and pending"],
    ],
    partnerLine:
      "Clinical validation with Hadassah · Adaptive protocols developed with IBM · Industrial relationships with NILIT and Delta Galil",
    futureEyebrow: "BEYOND CLINICAL CARE",
    futureTitle: "A fabric platform for every digital experience that needs touch.",
    futureBody:
      "Sensory integration is Plectrum’s first focused application. The same active-fabric foundation can later extend into XR, gaming, training and defense.",
    futureNote: "The clinical path comes first.",
    pathwaysEyebrow: "BUILD THE NEXT LAYER WITH US",
    pathwaysTitle: "Choose your path into Plectrum.",
    pathways: [
      ["Investors", "Review the opportunity and schedule a focused conversation.", "Investment conversation", "investor"],
      ["Clinical partners", "Join the 2026 pilot program for pediatric OT and rehabilitation.", "Explore a clinical pilot", "clinical-pilot"],
      ["Technology partners", "Integrate active touch into textile, XR or software ecosystems.", "Discuss a partnership", "technology-partner"],
      ["Meet the team", "Start with a direct 30-minute conversation.", "Schedule a meeting", "meeting"],
    ],
  },
  he: {
    eyebrow: "FABTIVE בד אקטיבי",
    title: "מכניסים את המגע אל הלולאה הדיגיטלית.",
    subtitle:
      "הפלטפורמה הראשונה המאפשרת אינטגרציה חושית מקצועית מרחוק באמצעות מגע אדפטיבי.",
    explore: "לגלות את הטכנולוגיה",
    partner: "לשותפות עם Plectrum",
    scroll: "גללו כדי להרגיש את הסיפור",
    thesisEyebrow: "הממד שהיה חסר",
    thesisTitle: "טיפול דיגיטלי יכול לראות ולשמוע. עכשיו הוא גם יכול לגעת.",
    thesisBody:
      "בטיפול באינטגרציה חושית, קלט מישושי אינו תוספת אופציונלית. Plectrum הופכת התערבות פיזית לממד דיגיטלי מדיד הנשלט באמצעות תוכנה.",
    sense: "חישה",
    senseBody: "איסוף נתוני תגובה ומדדים ביומטריים מהלביש.",
    analyze: "ניתוח",
    analyzeBody: "בניית פרוטוקול אדפטיבי לוויסות חושי.",
    respond: "תגובה",
    respondBody: "העברת קלט מישושי ממוקד ישירות דרך הבד.",
    learn: "תיעוד ולמידה",
    learnBody: "הפיכת כל אינטראקציה לתובנה קלינית אובייקטיבית.",
    productsEyebrow: "פלטפורמה אחת · ארבעה אבות טיפוס",
    productsTitle: "הבד הופך לממשק.",
    productsBody:
      "מערכת בד אקטיבי אחת, בארבע תצורות לבישות—כל אחת מותאמת לצורך טיפולי שונה.",
    products: [
      ["חולצה", "לחץ עמוק וויסות לכל פלג הגוף העליון · עד 24 נקודות מגע."],
      ["שרוול", "ויסות ממוקד לגפיים באמצעות קלט חושי מקומי · עד 24 נקודות מגע."],
      ["כובע מגן", "מודולציה חושית באזור הראש המיועדת למניעת מצבי משבר."],
      ["כפפה", "גירוי מישושי ברזולוציה גבוהה לתמיכה במוטוריקה עדינה."],
    ],
    viewModels: "לצפייה בכל אבות הטיפוס בתלת־ממד",
    tractionEyebrow: "התקדמות",
    tractionTitle: "הרבה מעבר לשלב הרעיון.",
    traction: [
      ["4", "אבות טיפוס עובדים"],
      ["3", "סביבות SDK: ‏Android, ‏Windows ו־XR"],
      ["ארה״ב · אירופה · ישראל", "פטנטים שהוגשו ונמצאים בתהליך"],
    ],
    partnerLine:
      "אימות קליני עם הדסה · פרוטוקולים אדפטיביים בפיתוח משותף עם IBM · קשרים תעשייתיים עם NILIT ודלתא גליל",
    futureEyebrow: "מעבר לטיפול הקליני",
    futureTitle: "פלטפורמת בד לכל חוויה דיגיטלית שזקוקה למגע.",
    futureBody:
      "אינטגרציה חושית היא היישום הראשון והממוקד של Plectrum. בהמשך, אותה תשתית של בד אקטיבי תוכל להשתלב ב־XR, גיימינג, הדרכה וביטחון.",
    futureNote: "המסלול הקליני קודם.",
    pathwaysEyebrow: "בואו לבנות איתנו את השכבה הבאה",
    pathwaysTitle: "בחרו את הדרך שלכם אל Plectrum.",
    pathways: [
      ["משקיעים", "הכירו את ההזדמנות וקבעו שיחה ממוקדת.", "שיחת השקעה", "investor"],
      ["שותפים קליניים", "הצטרפו לתוכנית הפיילוט לשנת 2026 בריפוי בעיסוק ובשיקום.", "בדיקת פיילוט קליני", "clinical-pilot"],
      ["שותפים טכנולוגיים", "שלבו מגע אקטיבי במערכות טקסטיל, XR או תוכנה.", "שיחה על שותפות", "technology-partner"],
      ["פגישה עם הצוות", "התחילו משיחה ישירה בת 30 דקות.", "קביעת פגישה", "meeting"],
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
          <p className="eyebrow">{t.eyebrow}</p>
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
        <a className="scroll-cue" href="#touch-gap">
          <span>{t.scroll}</span>
          <i aria-hidden="true" />
        </a>
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
          <div className="product-hero-visual" aria-hidden="true" />
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
              />
              <h3>{name}</h3>
              <p>{body}</p>
            </article>
          ))}
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
          {t.traction.map(([number, label]) => (
            <article key={label}>
              <strong>{number}</strong>
              <span>{label}</span>
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
                `Plectrum — ${track}`,
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
