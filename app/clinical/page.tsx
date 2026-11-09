"use client";

import Link from "next/link";
import Image from "next/image";
import { SiteShell } from "../components/SiteShell";
import { useLanguage } from "../components/LanguageProvider";
import { IllustrativeNote } from "../components/IllustrativeNote";

const copy = {
 en: {
    eyebrow: "APPLICATIONS",
    title: "Bridging the physical gap in remote sensory support.",
    intro:
      "Plectrum's primary focus is professional assistive wellness, spanning institutional spaces and home environments. The current technological validation utilizes functional smart wearable endpoints, operating in parallel with the development of FABTIVE—the patented active fabric designed for continuous physical sensation.",
    cta: "Explore institutional pilots",
    problemLabel: "THE TANGIBILITY GAP",
    problemTitle: "Digital platforms see and hear. From now on, Plectrum also provides the missing sense-the sense of touch.",
    problemBody:
      "Telehealth and remote support became digital years ago, but the physical sense of touch was left behind. Plectrum bridges this gap, enabling the remote transmission of authentic, calming tactile regulation through premium wearable technology.",
    controls: [
      ["Localization", "Selecting targeted areas using high-resolution, independently controlled tactile points in the current endpoints."],
      ["Pattern", "Configuring sensory sequences using the core logic intended for the future FABTIVE active-fabric platform."],
      ["Intensity", "Adapting tactile delivery to individual sensory profiles and real-time needs."],
      ["Telemetry", "Monitoring sessions and generating structured, objective wellness reports over time."],
    ],
    pathwayLabel: "ASSISTIVE WORKFLOW",
    pathwayTitle: "Designed around individual baselines, not rigid devices.",
    pathway: [
      ["Assessment", "Defining specific sensory needs and personal wellness objectives."],
      ["Configuration", "Calibrating placement, intensity, and tactile patterns remotely."],
      ["Delivery", "Providing targeted physical input through the selected smart wearable."],
      ["Logging", "Utilizing documented session data to optimize the next interaction and maintain compliance."],
    ],
    complianceLabel: "REGULATORY ALIGNMENT",
    complianceTitle: "Positioned for Assistive Technology and General Wellness.",
    complianceBody:
      "Plectrum is transitioning from prototype to manufacturing, aligning the hardware and software ecosystems with FDA General Wellness guidelines and state-level Assistive Technology (AT) requirements. The FABTIVE active-fabric platform follows a parallel development and validation track.",
    pilotLabel: "INSTITUTIONAL COLLABORATION",
    pilotTitle: "Expanding operational pilot programs.",
    pilotBody:
      "Supported by strategic agreements with leading institutions such as Hadassah Medical Center, Plectrum is preparing for broader pilot deployments. The company is actively onboarding professional centers and operational partners.",
    pilotCta: "Initiate a pilot discussion",
  },
  he: {
    eyebrow: "תחומי יישום",
    title: "גישור על הפער הפיזי בתמיכה חושית מרחוק.",
    intro:
      "המיקוד המרכזי של פלקטרום הוא פתרונות רווחה מסייעת (Assistive Wellness) למסגרות מוסדיות ולסביבה הביתית. האימות הטכנולוגי הנוכחי נשען על מוצרי קצה חכמים ופעילים, במקביל לפיתוח פלטפורמת FABTIVE – בד אקטיבי מוגן פטנט המיועד ליצירת תחושת מגע רציפה.",
    cta: "בחינת פיילוט מוסדי",
    problemLabel: "הפער הפיזי (THE TANGIBILITY GAP)",
    problemTitle: "הפלטפורמות הדיגיטליות רואות ושומעות. מעכשיו פלקטרום מספקת גם את החוש החסר - חוש המגע.",
    problemBody:
      "עולמות התמיכה והליווי מרחוק עברו טרנספורמציה דיגיטלית, אך חוש המגע נותר מאחור. פלקטרום משלימה פער זה, ומאפשרת שידור מרחוק של מגע אותנטי ומרגיע באמצעות טכנולוגיה לבישה מתקדמת.",
    controls: [
      ["מיקום", "בחירת אזורים ממוקדים באמצעות נקודות מגע ברזולוציה גבוהה, הנשלטות בנפרד במוצרי הקצה הנוכחיים."],
      ["דפוס", "הגדרת רצפי מגע המבוססים על הלוגיקה שנועדה לפלטפורמת הבד האקטיבי (FABTIVE) העתידית."],
      ["עוצמה", "התאמת המשוב הפיזי לפרופיל התחושתי של המשתמש ולצרכים בזמן אמת."],
      ["טלמטריה", "ניטור פעילות והפקת דוחות רווחה מובנים ואובייקטיביים לאורך זמן."],
    ],
    pathwayLabel: "תהליך עבודה מסייע",
    pathwayTitle: "מתוכנן סביב המשתמש, לא סביב המכשיר.",
    pathway: [
      ["הערכה", "הגדרת צורכי הוויסות החושי ויעדי הרווחה האישית."],
      ["תצורה", "כיול מיקום, עוצמה ודפוסי מגע מרחוק."],
      ["הפעלה", "מתן קלט פיזי ממוקד באמצעות הפריט הלביש הנבחר."],
      ["תיעוד", "שימוש בנתוני הפעילות למיטוב האינטראקציה הבאה ולעמידה בדרישות דיווח חזותיות."],
    ],
    complianceLabel: "התאמה רגולטורית",
    complianceTitle: "היערכות לתקני רווחה וטכנולוגיה מסייעת.",
    complianceBody:
      "פלקטרום נמצאת בשלבי מעבר מפיתוח לייצור, תוך התאמת החומרה והתוכנה להנחיות ה-General Wellness של ה-FDA ולדרישות טכנולוגיה מסייעת (Assistive Technology) של מסגרות מוסדיות. פלטפורמת הבד האקטיבי עוקבת אחר מסלול פיתוח ורגולציה מקביל.",
    pilotLabel: "שיתוף פעולה מוסדי",
    pilotTitle: "הרחבת תוכניות הפיילוט התפעוליות.",
    pilotBody:
      "מגובה בהסכמים אסטרטגיים עם מוסדות מובילים כגון מרכז רפואי הדסה, פלקטרום נערכת להרחבת מערך הפיילוטים. החברה מקדמת שיתופי פעולה עם מסגרות מקצועיות ושותפים תפעוליים נוספים.",
    pilotCta: "פתיחת שיחה על פיילוט מוסדי",
  },
  ar: {
    eyebrow: "التطبيق السريري",
    title: "الرعاية عن بُعد يمكنها أخيرًا أن تشمل تدخلاً جسديًا.",
    intro:
      "تركّز Plectrum أساسًا على التكامل الحسي المهني للأفراد ذوي التوحد واحتياجات المعالجة الحسية، في البيئات السريرية والمنزلية. تدعم أربعة نماذج اهتزازية عاملة أعمال التحقق الحالية، بينما يخدم FABTIVE، نسيجنا النشط المحمي ببراءة، بوصفه المنصة النهائية للإحساس الجسدي المستمر.",
    cta: "استكشف تجربة سريرية",
    problemLabel: "النقطة العمياء في الرعاية عن بُعد",
    problemTitle: "المعالج يوجّه. والنسيج يوصل.",
    problemBody:
      "يحافظ الفيديو والصوت على المحادثة، لكنهما لا ينقلان التدخل اللمسي. صُممت Plectrum لتمكين اختصاصيي العلاج الوظيفي من التحكم بمكان اللمس ووقته وطريقته عبر منتج قابل للارتداء.",
    controls: [
      ["الموضع", "اختيار مناطق موجهة باستخدام اهتزاز عالي الدقة يُتحكم به بشكل مستقل في النماذج الحالية."],
      ["النمط", "ضبط تسلسلات علاجية من الاهتزاز اليوم، مع منطق سريري يُقصد أن ينتقل لاحقًا إلى منصة FABTIVE للنسيج النشط."],
      ["الشدة", "تكييف التأثير مع الفرد واللحظة."],
      ["المتابعة", "مراقبة الجلسات وبناء تقارير منظمة مع مرور الوقت."],
    ],
    pathwayLabel: "مسار عمل سريري",
    pathwayTitle: "مصمم حول المعالج، لا حول الجهاز.",
    pathway: [
      ["تقييم", "تحديد احتياجات التنظيم وهدف علاجي شخصي."],
      ["إعداد", "اختيار الموضع والشدة والنمط اللمسي عن بُعد."],
      ["توصيل", "تقديم مدخلات موجهة عبر المنتج المختار."],
      ["مراجعة", "استخدام الجلسات الموثقة لدعم التدخل التالي."],
    ],
    complianceLabel: "المسار التنظيمي",
    complianceTitle: "تصنيف أولي واضح.",
    complianceBody:
      "نماذج Plectrum الحالية القائمة على الاهتزاز مسجلة ومدرجة لدى FDA كجهاز اهتزاز علاجي من الفئة الأولى وفق 21 CFR 890.5975. وتشير استراتيجية السداد إلى CPT 97533 ورمز المراقبة العلاجية عن بُعد CPT 98977 مع Modifier 95. تتبع منصة FABTIVE للنسيج النشط مسار تطوير وتنظيم منفصلًا.",
    pilotLabel: "تعاون سريري",
    pilotTitle: "نستعد لتوسيع التجارب.",
    pilotBody:
      "لدى Plectrum خطاب نوايا موقع مع هداسا، ونستعد لتوسيع نشاط التجارب. نبحث عن عيادات علاج وظيفي وشركاء طبيين.",
    pilotCta: "ابدأ محادثة حول تجربة",
  },
  ru: {
    eyebrow: "КЛИНИЧЕСКОЕ ПРИМЕНЕНИЕ",
    title: "Дистанционная терапия наконец может включать физическое вмешательство.",
    intro:
      "Основной фокус Plectrum — профессиональная сенсорная интеграция для людей с аутизмом и особенностями сенсорной обработки, в клинике и дома. Четыре работающих вибрационных прототипа поддерживают текущую валидацию, а FABTIVE, наша запатентованная активная ткань, — платформа для непрерывного физического ощущения.",
    cta: "Обсудить клинический пилот",
    problemLabel: "СЛЕПАЯ ЗОНА ТЕЛЕМЕДИЦИНЫ",
    problemTitle: "Терапевт направляет. Ткань воздействует.",
    problemBody:
      "Видео и звук сохраняют общение, но не тактильное вмешательство. Plectrum позволяет эрготерапевту дистанционно управлять местом, временем и способом воздействия через носимое устройство.",
    controls: [
      ["Локализация", "Выбор целевых зон с помощью высокоточной, независимо управляемой вибрации в текущих прототипах."],
      ["Рисунок", "Настройка терапевтических последовательностей вибрации сегодня с той же клинической логикой, которая предназначена для будущей платформы FABTIVE."],
      ["Интенсивность", "Адаптация воздействия под человека и конкретный момент."],
      ["Наблюдение", "Мониторинг сессий и формирование отчётов в динамике."],
    ],
    pathwayLabel: "КЛИНИЧЕСКИЙ ПРОЦЕСС",
    pathwayTitle: "В центре терапевт, а не устройство.",
    pathway: [
      ["Оценка", "Определить потребности в регуляции и персональную цель."],
      ["Настройка", "Удалённо выбрать зону, интенсивность и тактильный рисунок."],
      ["Воздействие", "Передать точный стимул через выбранное устройство."],
      ["Анализ", "Использовать записи сессий для следующего вмешательства."],
    ],
    complianceLabel: "РЕГУЛЯТОРНЫЙ ПУТЬ",
    complianceTitle: "Чёткая стартовая классификация.",
    complianceBody:
      "Текущие вибрационные прототипы Plectrum зарегистрированы FDA как терапевтический вибратор класса I по 21 CFR 890.5975. Стратегия возмещения опирается на CPT 97533 и код дистанционного терапевтического мониторинга CPT 98977 с Modifier 95. Платформа FABTIVE активной ткани следует отдельному пути разработки и регулирования.",
    pilotLabel: "КЛИНИЧЕСКОЕ СОТРУДНИЧЕСТВО",
    pilotTitle: "Готовимся расширять пилотную программу.",
    pilotBody:
      "У Plectrum подписано LOI с Hadassah, и мы готовимся к расширению пилотной активности. Мы ищем клиники эрготерапии и медицинских партнёров.",
    pilotCta: "Начать разговор о пилоте",
  },
} as const;

export default function ClinicalPage() {
  const { language } = useLanguage();
  const t = copy[language];
  const tangibilityImageAlt = language === "he"
    ? "ילד חובש את ה־Smart Beanie של Plectrum בזמן שאשת מקצוע מפעילה ממשק בטאבלט"
    : "A child wearing the Plectrum Smart Beanie while a professional operates a tablet interface";
  const workflowImageAlt = {
    en: "A young person wearing the Plectrum Smart Sleeve during a guided support session",
    he: "נער לובש את ה־Smart Sleeve של Plectrum במהלך מפגש תמיכה מונחה",
    ar: "شاب يرتدي Plectrum Smart Sleeve خلال جلسة دعم موجهة",
    ru: "Подросток в Plectrum Smart Sleeve во время сопровождаемой сессии поддержки",
  }[language];

  return (
    <SiteShell>
      <section className="page-hero clinical-hero">
        <div className="clinical-hero-media">
          <picture className="clinical-hero-visual">
            <source srcSet="/media/plectrum-clinical-hero-v2.avif" type="image/avif" />
            <source srcSet="/media/plectrum-clinical-hero-v2.webp" type="image/webp" />
            <img
              src="/media/plectrum-clinical-hero-v2.webp"
              alt="Adult wearing a smart-textile garment delivering targeted tactile stimulation across the shoulder and upper arm"
              width={1024}
              height={576}
              decoding="async"
              fetchPriority="high"
            />
          </picture>
        </div>
        <div className="page-hero-copy">
          <p className="eyebrow">{t.eyebrow}</p><h1>{t.title}</h1><p>{t.intro}</p>
          <a className="button button-primary" href="mailto:gabriel@plectrum.biz?subject=Plectrum%20clinical%20pilot">
            {t.cta}<span aria-hidden="true">→</span>
          </a>
          <IllustrativeNote className="clinical-hero-note" />
        </div>
      </section>

      <section className="light-section clinical-gap-section">
        <div className="clinical-gap-feature">
          <div className="clinical-gap-copy">
            <p className="eyebrow dark">
              {language === "he" ? (
                <>הפער הפיזי <bdi className="no-break" dir="ltr">(THE TANGIBILITY GAP)</bdi></>
              ) : t.problemLabel}
            </p>
            <h2>{t.problemTitle}</h2>
            <p className="section-lead">{t.problemBody}</p>
          </div>
          <figure className="clinical-gap-visual">
            {/* eslint-disable-next-line @next/next/no-img-element -- local optimized WebP with layered CSS edge fades */}
            <img
              className="clinical-gap-image"
              src="/media/plectrum-smart-beanie-experience.webp"
              alt={tangibilityImageAlt}
              width={1448}
              height={1086}
              loading="lazy"
              decoding="async"
            />
          </figure>
        </div>
        <div className="clinical-control-grid">
          {t.controls.map(([title, body], index) => (
            <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{body}</p></article>
          ))}
        </div>
      </section>

      <section className="blue-section clinical-path">
        <div className="clinical-path-layout">
          <figure className="clinical-path-visual">
            <Image
              className="clinical-path-image"
              src="/media/plectrum-assistive-workflow.webp"
              alt={workflowImageAlt}
              width={1448}
              height={1086}
              sizes="(max-width: 820px) calc(100vw - 40px), 46vw"
              loading="lazy"
            />
          </figure>
          <div className="clinical-path-content">
            <div className="section-heading">
              <p className="eyebrow">{t.pathwayLabel}</p><h2>{t.pathwayTitle}</h2>
            </div>
            <div className="clinical-path-steps">
              {t.pathway.map(([title, body], index) => (
                <article key={title}><strong>0{index + 1}</strong><div><h3>{title}</h3><p>{body}</p></div></article>
              ))}
            </div>
          </div>
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
          {{
            en: "Explore the wearables",
            he: "לצפייה בלבישים",
            ar: "استكشف المنتجات القابلة للارتداء",
            ru: "Изучить носимые устройства",
          }[language]}<span aria-hidden="true">→</span>
        </Link>
        <div className="pilot-section-meta">
          <IllustrativeNote />
        </div>
      </section>
    </SiteShell>
  );
}
