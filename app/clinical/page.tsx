"use client";

import Link from "next/link";
import { SiteShell } from "../components/SiteShell";
import { useLanguage } from "../components/LanguageProvider";
import { IllustrativeNote } from "../components/IllustrativeNote";

const copy = {
  en: {
    eyebrow: "CLINICAL APPLICATION",
    title: "Remote care can finally include physical intervention.",
    intro:
      "Plectrum's primary focus is professional sensory integration for individuals with autism and sensory processing needs, spanning clinical and home environments. Four working vibration prototypes support our current validation work, while FABTIVE, our patented active fabric, serves as the definitive platform for continuous physical sensation.",
    cta: "Explore a clinical pilot",
    problemLabel: "THE TELEHEALTH BLIND SPOT",
    problemTitle: "The therapist can guide. The fabric can deliver.",
    problemBody:
      "Video and audio preserve conversation, but not tactile intervention. Plectrum is designed to let occupational therapists control where, when and how tactile input is delivered through a wearable.",
    controls: [
      ["Localization", "Select targeted areas using high-resolution, independently controlled vibration in the current prototypes."],
      ["Pattern", "Configure therapeutic vibration sequences today, using the same clinical logic intended for the future FABTIVE active-fabric platform."],
      ["Intensity", "Adapt delivery to the individual and the moment."],
      ["Follow-up", "Monitor sessions and build structured reports over time."],
    ],
    pathwayLabel: "A CLINICAL WORKFLOW",
    pathwayTitle: "Designed around the therapist, not around the device.",
    pathway: [
      ["Assess", "Define regulation needs and a personalized treatment objective."],
      ["Configure", "Choose placement, intensity and tactile pattern remotely."],
      ["Deliver", "Provide targeted input through the selected wearable."],
      ["Review", "Use documented sessions to support the next intervention."],
    ],
    complianceLabel: "REGULATORY PATH",
    complianceTitle: "A clear starting classification.",
    complianceBody:
      "Plectrum's current vibration-based prototypes are registered and listed as an FDA Class I therapeutic vibrator under 21 CFR 890.5975. The reimbursement strategy references CPT 97533 and remote therapeutic monitoring code CPT 98977 with Modifier 95. The FABTIVE active-fabric platform follows a separate product-development and regulatory path.",
    pilotLabel: "CLINICAL COLLABORATION",
    pilotTitle: "Preparing for broader pilot expansion.",
    pilotBody:
      "Plectrum has a signed LOI with Hadassah and is preparing for broader pilot activity. We are seeking occupational therapy clinics and medical partners.",
    pilotCta: "Start a pilot conversation",
  },
  he: {
    eyebrow: "היישום הקליני",
    title: "טיפול מרחוק יכול סוף־סוף לכלול התערבות פיזית.",
    intro:
      "המיקוד העיקרי של Plectrum הוא אינטגרציה חושית מקצועית לאנשים עם אוטיזם וצורכי עיבוד חושי, בקליניקה ובבית. ארבעה אבות טיפוס רטט פעילים תומכים בעבודת האימות הנוכחית, בעוד FABTIVE, הבד האקטיבי הפטנטי שלנו, משמש כפלטפורמה המוגדרת לתחושה פיזית רציפה.",
    cta: "בדיקת פיילוט קליני",
    problemLabel: "הנקודה העיוורת של הטיפול מרחוק",
    problemTitle: "המטפל מנחה. הבד מעביר.",
    problemBody:
      "וידאו ואודיו משמרים את השיחה, אך לא את ההתערבות המישושית. Plectrum נועדה לאפשר למרפאים בעיסוק לשלוט היכן, מתי ובאיזו צורה יועבר הקלט המישושי דרך לביש.",
    controls: [
      ["מיקום", "בחירה באזורים ממוקדים באמצעות רטט ברזולוציה גבוהה, הנשלט בנפרד, באבות הטיפוס הנוכחיים."],
      ["דפוס", "הגדרת רצפי רטט טיפוליים כיום, עם אותה לוגיקה קלינית שנועדה לפלטפורמת הבד האקטיבי של FABTIVE בעתיד."],
      ["עוצמה", "התאמת ההפעלה לאדם ולרגע."],
      ["מעקב", "ניטור מפגשים ובניית דיווח מובנה לאורך זמן."],
    ],
    pathwayLabel: "זרימת עבודה קלינית",
    pathwayTitle: "מתוכנן סביב המטפל, לא סביב המכשיר.",
    pathway: [
      ["הערכה", "הגדרת צורכי הוויסות ומטרה טיפולית אישית."],
      ["הגדרה", "בחירת מיקום, עוצמה ודפוס מישושי מרחוק."],
      ["הפעלה", "העברת קלט ממוקד דרך הלביש שנבחר."],
      ["בחינה", "שימוש בתיעוד המפגשים לתכנון ההתערבות הבאה."],
    ],
    complianceLabel: "המסלול הרגולטורי",
    complianceTitle: "נקודת פתיחה מוגדרת.",
    complianceBody:
      "אבות הטיפוס מבוססי הרטט של Plectrum רשומים ומופיעים ברישומי ה־FDA כמכשיר רטט טיפולי Class I לפי 21 CFR 890.5975. אסטרטגיית ההחזר מתייחסת ל־CPT 97533 ולקוד הניטור הטיפולי מרחוק CPT 98977 עם Modifier 95. פלטפורמת הבד האקטיבי של FABTIVE עוקבת אחר מסלול פיתוח ורגולציה נפרד.",
    pilotLabel: "שיתוף פעולה קליני",
    pilotTitle: "נערכים להרחבת פיילוטים.",
    pilotBody:
      "ל־Plectrum מכתב כוונות חתום עם הדסה, והיא נערכת להרחבת פעילות הפיילוט. אנחנו מחפשים קליניקות לריפוי בעיסוק ושותפים רפואיים.",
    pilotCta: "פתיחת שיחה על פיילוט",
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
