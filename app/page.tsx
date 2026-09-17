"use client";

import Link from "next/link";
import { IllustrativeNote } from "./components/IllustrativeNote";
import { ModelScene } from "./components/ModelScene";
import { SiteShell } from "./components/SiteShell";
import { useLanguage } from "./components/LanguageProvider";

const content = {
  en: {
    title: "Smart Tactile Feedback.",
    subtitle:
      "A smart system for delivering remote tactile sensations. Plectrum bridges the digital and physical worlds through advanced wearable technology that delivers physical touch sensations to the body, enhancing sensory experiences and digital interactions.",
    explore: "Explore the technology",
    partner: "Partner with Plectrum",
    scroll: "Scroll to learn more",
    thesisEyebrow: "THE MISSING DIMENSION",
    thesisTitle: "The digital world can see and hear. Now it can also transmit physical sensations.",
    thesisBody:
      "Tactile input is an essential element in communication and sensory well-being. Plectrum converts sensory integration into measurable, software-controlled digital data.",
    sense: "Metrics Reading",
    senseBody:
      "Reading physiological metrics (such as heart rate, blood pressure, motion, blood oxygen, and future galvanic skin response) via a smartwatch synced with the garment or directly through the garment itself.",
    analyze: "Analysis & Personalization",
    analyzeBody:
      "Personalizing vibration style, intensity, and movement patterns based on user metrics and preferences.",
    respond: "Sensory Response",
    respondBody:
      "Delivering precise, targeted tactile and vibration sensations directly through the wearable.",
    learn: "Learning & Tracking",
    learnBody:
      "Documenting data into measurable insights for personal tracking, setting fine-tuning, and continuous experience enhancement.",
    productsEyebrow: "OUR PRODUCTS",
    productsTitle: "Smart wearables built on controlled vibration points.",
    productsBody:
      "Our active prototypes utilize targeted vibration to evaluate software workflows and sensory processes, operating in parallel with the ongoing development of active fabric technology.",
    products: [
      ["Plectrum CoreShirt", "A snug, skin-friendly tactile shirt for the upper body featuring up to 24 vibration points. Provides remote support for relaxation and sensory balance, operated self-sufficiently or by a companion."],
      [
        "Plectrum MultiWrap",
        "A versatile sleeve for shoulders, limbs, or torso containing up to 24 controlled vibration points. Delivers sensory focus, stress relief, and interactive remote touch experiences, self-operated or companion-led."
      ],
      [
        "Plectrum RelaxCap",
        "A smart cap for continuous wear designed to support personal well-being and alleviate stress. Operates autonomously or via remote control, helping soothe the user upon detecting strong movements."
      ],
      [
        "Plectrum Glove",
        "A smart glove combining up to 13 vibration points across the palm and back of the hand to help promote calmness and sensory serenity. Serves as an immersive tool for VR games, controlled self-sufficiently or by a companion."
      ]
    ],
    viewModels: "Explore our functional prototypes",
    tractionEyebrow: "TRACTION",
    tractionTitle: "Functional prototypes active today. Patented active fabric platform ahead.",
    traction: [
      ["4", "active functional prototypes"],
      ["3", "SDK ecosystems: Android, Windows, and XR"],
      ["IL · US · EU", "patent granted in Israel", "US and Europe in process"]
    ],
    partnerLine:
      "Signed LOIs with Hadassah Medical Center, Aleh, and AKIM",
    futureEyebrow: "OUR TECHNOLOGY",
    futureTitle: "The next generation of smart wearables: Active Fabric (FABTIVE).",
    futureBody:
      "Future development: Active fabric integrating magnetic and conductive components directly into textile fibers. Upon completion, the system will enable an internal movement engine within the fabric to deliver continuous, high-resolution touch sensations—enabling the remote transmission of a digital hug.",
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
    title: "ויסות חושי מרחוק.",
    subtitle:
      "Plectrum מחברת בין העולם הדיגיטלי לפיזי באמצעות לבוש טכנולוגי מתקדם. המערכת מעבירה תחושות מגע לגוף, ומעשירה את הטיפול החושי ואת החוויה הדיגיטלית.",
    explore: "גלו את הטכנולוגיה",
    partner: "שותפות עם Plectrum",
    scroll: "גללו מטה לפרטים",
    thesisEyebrow: "המימד החסר",
    thesisTitle: "העולם הדיגיטלי יודע לראות ולשמוע. עכשיו הוא גם יודע לשדר תחושות פיזיות.",
    thesisBody:
      "גירוי חושי פיזי הוא חלק חיוני בטיפול ובתקשורת. Plectrum הופכת את האינטגרציה החושית למידע דיגיטלי שניתן למדוד ולשלוט בו מרחוק בעזרת תוכנה.",
    sense: "קריאת מדדים",
  senseBody:
    "קריאת מדדים פיזיולוגיים (כגון דופק, לחץ דם, תנועה, רמת חמצן בדם ובעתיד מוליכות עורית) באמצעות שעון חכם המסתנכרן עם הבגד או דרך הבגד עצמו.",
    
  analyze: "ניתוח והתאמה",
  analyzeBody:
    "התאמה אישית של אופי הרטט, העוצמה ודפוסי התנועה בהתאם למדדי המשתמש ורצונו.",
  respond: "מענה תחושתי",
  respondBody:
    "העברת תחושות מגע ורטט מדויקות וממוקדות ישירות דרך הלבוש.",
  learn: "למידה ומעקב",
  learnBody:
    "תיעוד הנתונים והפיכתם למידע מדיד המאפשר מעקב אישי, דיוק ההגדרות ושיפור החוויה לאורך זמן.",
  productsEyebrow: "המוצרים שלנו",
  productsTitle: "פריטי לבוש חכמים מבוססי נקודות רטט מבוקרות.",
    productsBody:
      "אבות הטיפוס הפעילים מבוססים רטט ממוקד לבחינת תהליכי הטיפול והתוכנה, במקביל להמשך פיתוח טכנולוגיית הבד האקטיבי.",
    products: [
      ["Plectrum CoreShirt", "חולצה תחושתית לפלג הגוף העליון, צמודה, מבד נעים לעור. משלבת עד 24 מוקדי רטט בפלג גוף עליון. המערכת מעניקה תמיכה בתחושת רוגע ואיזון חושי מרחוק, בהפעלה עצמית או על ידי מלווה."],
      ["Plectrum MultiWrap", "שרוול רב-שימושי להתאמה על הכתפיים, הגפיים או הגו, המכיל עד 24 מוקדי רטט מבוקרים. מספק מיקוד חושי, שחרור מתחים וחוויות מגע אינטראקטיביות מרחוק, בהפעלה עצמית או על ידי מלווה."],
      ["Plectrum RelaxCap", "כובע חכם לשימוש רציף, המיועד לתמוך ברווחה האישית ולהקל על תחושות מתח. המכשיר פועל אוטונומית או בשליטה מרחוק, ועשוי לסייע בהרגעת המשתמש בעת זיהוי תנודות חזקות."],
      ["Plectrum Glove", "כפפה חכמה המשלבת עד 13 נקודות רטט על גב ופנים כף היד, המיועדת לסייע ביצירת תחושת רוגע ושקט תחושתי. הכפפה מהווה כלי חווייתי לחיבור למשחקי VR ומערכות מציאות מדומה, וניתנת לשליטה מרחוק על ידי המשתמש עצמו או על ידי מלווה."],
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
    futureTitle: "הדור הבא של הלבוש הטכנולוגי: Active Fabric או כמו שאנחנו קוראים לו Fabtive.",
    futureBody:
      "פיתוח עתידי: בד אקטיבי המשלב רכיבים מגנטיים ומוליכים בסיבי הטקסטיל. עם השלמת הפיתוח, המערכת תאפשר מחולל תנועה פנימי בבד להעברת תחושות מגע רציפות ברזולוציה גבוהה, עד לכדי שידור חיבוק דיגיטלי מרחוק.",
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
  const t = language === "he" ? content.he : content.en;

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
