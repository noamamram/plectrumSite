"use client";

import Link from "next/link";
import { IllustrativeNote } from "./components/IllustrativeNote";
import { ModelScene } from "./components/ModelScene";
import { SiteShell } from "./components/SiteShell";
import { useLanguage } from "./components/LanguageProvider";

const content = {
  en: {
    title: "Bringing the Sense of Touch into the Digital World",
    subtitle:
      "Plectrum brings physical support to the digital world. Plectrum's smart wearables deliver soothing, remote touch sensations to help manage daily stress, support a balanced routine, and provide tracking and data measurement throughout the hours of product usage.",
    explore: "Explore the technology",
    partner: "Partner with Plectrum",
    scroll: "Scroll to learn more",
    thesisEyebrow: "THE TANGIBILITY GAP",
    thesisTitle: "The digital world can see and hear. Now it can also touch",
    thesisBody:
      "Unmonitored daily routines can easily lead to sensory overload. Plectrum turns everyday sensory support into an active, measurable experience that keeps routines calm and balanced.",
    sense: "Smart Tracking",
    senseBody:
      "Monitoring daily metrics to identify sensory stress early, translating feelings into clear data.",
    analyze: "Analysis & Personalization",
    analyzeBody:
      "Plectrum's application automatically adapts the physical feedback to fit individual sensory preferences in real-time.",
    respond: "Soothing Touch",
    respondBody:
      "Delivering gentle, targeted touch sensations through everyday smart clothing to proactively calm tension.",
    learn: "Learning & Tracking",
    learnBody:
      "Automatically logging daily events to create simple, shareable wellness reports for families and support frameworks.",
    productsEyebrow: "PLECTRUM PRODUCTS",
    productsTitle: "Everyday Smart Wearables",
    productsBody:
      "Plectrum's comfortable smart garments deliver physical feedback activated via a dedicated application, blending seamlessly into daily life without the appearance of medical gear.",
    products: [
      ["Plectrum Smart Shirt", "A smart shirt providing soothing upper-body support for a calm and focused routine"],
      [
        "Plectrum Smart Sleeve",
        "A versatile, easy-to-wear sleeve that delivers targeted touch feedback for immediate stress relief."
      ],
      [
        "Plectrum Smart Beanie",
        "A casual hat equipped with smart sensors to gently manage sensory overload in any environment."
      ],
      [
        "Plectrum Smart Glove",
        "A wearable glove that provides calming sensations to the hands, helping to anchor focus and relaxation."
      ]
    ],
    viewModels: "Explore our functional prototypes",
    tractionEyebrow: "Ready for Impact",
    tractionTitle: "Smart Beanie & Smart Sleeve ready for programs / Dedicated tracking software / Patented active fabric IP / Backed by strategic partnerships.",
    traction: [
      ["4", "active functional prototypes"],
      ["3", "SDK ecosystems: Android, Windows, and XR"],
      ["IL · US · EU", "patent granted in Israel", "US and Europe in process"]
    ],
    partnerLine:
      "Signed LOIs with Hadassah Medical Center and Aleh",
    futureEyebrow: "PLECTRUM TECHNOLOGY",
    futureTitle: "Fabtive™: The Active Fabric",
    futureBody:
      "Moving past simple buzzing. Fabtive is a smart material that creates deep, programmable touch sensations. It enables a genuine, remote 'digital hug', perfectly synchronized with the Plectrum wellness platform.",
    futureNote: "Patent granted in Israel · US and Europe in process · distinct from today's vibration prototypes",
    pathwaysEyebrow: "BUILD THE NEXT LAYER WITH US",
    pathwaysTitle: "Choose your path into Plectrum.",
    pathways: [
      ["Investors", "Review the opportunity and schedule a focused conversation.", "Investment conversation", "investor"],
      ["Clinical partners", "Join the 2027 pilot program for pediatric occupational therapy.", "Explore a clinical pilot", "clinical-pilot"],
      ["Technology partners", "Integrate active fabric into textile, XR, or software ecosystems.", "Discuss a partnership", "technology-partner"],
      ["Meet the team", "Start with a direct 30-minute conversation.", "Schedule a meeting", "meeting"],
    ],
  },
  he: {
    title: "מכניסים את חוש המגע לעולם הדיגיטלי",
    subtitle:
      "פלקטרום מביאה תמיכה פיזית לעולם הדיגיטלי. הלבוש החכם מבית פלקטרום מספק תחושת מגע מרגיעה מרחוק, המסייעת לשמור על שגרה מאוזנת, להפחית מתחים ביומיום ולספק מעקב ומדידת נתונים לאורך שעות השימוש במוצר.",
    explore: "גלו את הטכנולוגיה",
    partner: "שותפים לדרך",
    scroll: "גללו מטה לפרטים",
    thesisEyebrow: "הפער הפיזי",
    thesisTitle: "העולם הדיגיטלי רואה ושומע. עכשיו הוא גם יכול לגעת.",
    thesisBody:
      "חוסר מעקב בשגרת היום-יום עלול להוביל לעומס חושי. פלקטרום הופכת את התמיכה התחושתית לחוויה אקטיבית ומדידה, המסייעת לשמירה על רוגע ואיזון.",
    sense: "זיהוי ומעקב",
  senseBody:
    "מעקב אחר מדדים יומיומיים לזיהוי מוקדם של עומס חושי, ותרגום תחושות לנתונים ברורים.",
    
  analyze: "התאמה אישית",
  analyzeBody:
    "המערכת של פלקטרום מתאימה אוטומטית את המשוב הפיזי לרגישות ולהעדפות הייחודיות של כל משתמש בזמן אמת.",
  respond: "מגע מרגיע",
  respondBody:
    "העברת תחושות מגע עדינות ומדויקות דרך ביגוד חכם ליומיום, לשם הרגעת מתחים באופן יזום.",
  learn: "למידה ומעקב",
  learnBody:
    "תיעוד אוטומטי של אירועים יומיומיים והפקת דוחות וולנס פשוטים למשפחות ולמסגרות תומכות.",
  productsEyebrow: "המוצרים של פלקטרום",
  productsTitle: "לבוש חכם ליומיום",
    productsBody:
      "פריטי הלבוש החכמים של פלקטרום מספקים משוב פיזי המופעל באמצעות אפליקציה ייעודית, ומשתלבים בטבעיות בחיי היומיום ללא נראות של מכשור רפואי.",
    products: [
      ["Plectrum Smart Shirt", "מספקת תמיכה מרגיעה לפלג הגוף העליון, לשמירה על שגרה רגועה וממוקדת."],
      ["Plectrum Smart Sleeve", "שרוול נוח ורב-שימושי המספק משוב מגע ממוקד לשחרור מהיר של מתחים."],
      ["Plectrum Smart Beanie", "כובע יומיומי ורגיל למראה, המצויד בחיישנים חכמים לוויסות עדין של עומס חושי בכל סביבה."],
      ["Plectrum Smart Glove", "מספקת תחושות הרגעה לידיים, ומסייעת למקד ולעגן את הרוגע התחושתי."],
    ],
    viewModels: "צפו באבות הטיפוס שלנו",
    tractionEyebrow: "מוכנים להתנסויות בשטח",
    tractionTitle: "Smart Beanie ו־Smart Sleeve מוכנים לתוכניות תמיכה / תוכנת מעקב ייעודית מבוססת ענן / פטנט מאושר על טכנולוגיית בד אקטיבי / מגובה בשותפויות אסטרטגיות.",
    traction: [
      ["4", "אבות טיפוס פעילים"],
      ["3", "סביבות פיתוח: Android, Windows ומציאות מדומה (XR)"],
      ["ישראל · ארה״ב · אירופה", "פטנט מאושר בישראל", "בתהליך רישום בארה״ב ואירופה"],
    ],
    partnerLine:
      "LOI's: בית חולים הדסה עין-כרם, עמותת עלה",
    futureEyebrow: "הטכנולוגיה של פלקטרום",
    futureTitle: "פאבטיב (Fabtive™): הבד האקטיבי",
    futureBody:
      "טכנולוגיה המתקדמת מעבר לרטט פשוט. פאבטיב הוא חומר חכם המייצר תחושות מגע עמוקות ומדויקות. החומר מאפשר העברת 'חיבוק דיגיטלי' ממשי מרחוק, המסונכרן באופן מושלם עם פלטפורמת הרווחה של פלקטרום.",
    futureNote: "פטנט מאושר בישראל · בתהליך רישום בארה״ב ואירופה",
    pathwaysEyebrow: "הצטרפו אלינו",
    pathwaysTitle: "דרכים לשיתוף פעולה עם פלקטרום.",
    pathways: [
      ["משקיעים", "למדו על ההזדמנות העסקית ותאמו פגישה.", "שיחת משקיעים", "investor"],
      ["שותפים", "הצטרפו לפיילוט שלנו לשנת 2027.", "פרטי פיילוט", "pilot"],
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
              <h3><bdi dir="ltr">{name}</bdi></h3>
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
