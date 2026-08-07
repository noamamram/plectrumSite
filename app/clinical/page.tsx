"use client";

import Link from "next/link";
import { SiteShell } from "../components/SiteShell";
import { useLanguage } from "../components/LanguageProvider";

const copy = {
  en: {
    eyebrow: "CLINICAL APPLICATION",
    title: "Remote care can finally include touch.",
    intro:
      "Plectrum's first focused application is professional sensory integration for autistic people and people with sensory processing needs, inside and beyond the clinic. Four working vibration-based prototypes support clinical validation today, while the patented magnetic-fiber textile is being developed as the long-term continuous-touch platform.",
    cta: "Explore a clinical pilot",
    problemLabel: "THE TELEHEALTH BLIND SPOT",
    problemTitle: "The therapist can guide. The fabric can deliver.",
    problemBody:
      "Video and audio preserve conversation, but not tactile intervention. Plectrum is designed to let occupational therapists control where, when and how tactile input is delivered through a wearable.",
    controls: [
      ["Localization", "Select targeted areas across up to 24 controlled vibration points in the current prototypes."],
      ["Pattern", "Configure therapeutic vibration sequences today, with the same clinical logic intended to carry into future magnetic-fiber touch."],
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
      "Plectrum's current vibration-based prototypes are registered and listed as an FDA Class I therapeutic vibrator under 21 CFR 890.5975. The reimbursement strategy references CPT 97533 and remote therapeutic monitoring code CPT 98977 with Modifier 95. The magnetic-fiber textile follows a separate product-development and regulatory path.",
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
      "היישום הראשון והממוקד של Plectrum הוא אינטגרציה חושית מקצועית עבור אנשים על הרצף האוטיסטי ואנשים עם צורכי עיבוד חושי, בתוך הקליניקה ומחוצה לה. ארבעה אבות טיפוס פעילים מבוססי רטט משמשים כיום לאימות קליני, בזמן שטכנולוגיית הסיבים המגנטיים הפטנטית מפותחת כפלטפורמת המגע הרציף ארוכת הטווח.",
    cta: "בדיקת פיילוט קליני",
    problemLabel: "הנקודה העיוורת של הטיפול מרחוק",
    problemTitle: "המטפל מנחה. הבד מעביר.",
    problemBody:
      "וידאו ואודיו משמרים את השיחה, אך לא את ההתערבות המישושית. Plectrum נועדה לאפשר למרפאים בעיסוק לשלוט היכן, מתי ובאיזו צורה יועבר הקלט המישושי דרך לביש.",
    controls: [
      ["מיקום", "בחירה באזורים ממוקדים מתוך עד 24 נקודות רטט נשלטות באבות הטיפוס הנוכחיים."],
      ["דפוס", "הגדרת רצפי רטט טיפוליים כיום, עם אותה לוגיקה קלינית שנועדה לעבור בעתיד למגע מבוסס סיבים מגנטיים."],
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
      "אבות הטיפוס מבוססי הרטט של Plectrum רשומים ומופיעים ברישומי ה־FDA כמכשיר רטט טיפולי Class I לפי 21 CFR 890.5975. אסטרטגיית ההחזר מתייחסת ל־CPT 97533 ולקוד הניטור הטיפולי מרחוק CPT 98977 עם Modifier 95. טכנולוגיית הסיבים המגנטיים נמצאת במסלול פיתוח ורגולציה נפרד.",
    pilotLabel: "שיתוף פעולה קליני",
    pilotTitle: "נערכים להרחבת פיילוטים.",
    pilotBody:
      "ל־Plectrum מכתב כוונות עם הדסה, והיא מתכננת הרחבה גלובלית של פיילוטים קליניים ב־2026. אנחנו מחפשים קליניקות לריפוי בעיסוק, מרכזי שיקום ושותפים רפואיים.",
    pilotCta: "פתיחת שיחה על פיילוט",
  },
  ar: {
    eyebrow: "التطبيق السريري",
    title: "الرعاية عن بُعد يمكنها أخيرًا أن تشمل اللمس.",
    intro:
      "التطبيق الأول لـPlectrum هو التكامل الحسي الاحترافي للأشخاص ذوي التوحد واحتياجات المعالجة الحسية، داخل العيادة وخارجها. تدعم أربعة نماذج اهتزازية عاملة التحقق السريري اليوم، فيما يُطور نسيج الألياف المغناطيسية المحمي ببراءة بوصفه منصة اللمس المستمر طويلة المدى.",
    cta: "استكشف تجربة سريرية",
    problemLabel: "النقطة العمياء في الرعاية عن بُعد",
    problemTitle: "المعالج يوجّه. والنسيج يوصل.",
    problemBody:
      "يحافظ الفيديو والصوت على المحادثة، لكنهما لا ينقلان التدخل اللمسي. صُممت Plectrum لتمكين اختصاصيي العلاج الوظيفي من التحكم بمكان اللمس ووقته وطريقته عبر منتج قابل للارتداء.",
    controls: [
      ["الموضع", "اختيار مناطق موجهة عبر ما يصل إلى 24 نقطة اهتزاز متحكم بها في النماذج الحالية."],
      ["النمط", "ضبط تسلسلات علاجية من الاهتزاز اليوم، مع منطق سريري يُقصد أن ينتقل لاحقًا إلى اللمس القائم على الألياف المغناطيسية."],
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
      "نماذج Plectrum الحالية القائمة على الاهتزاز مسجلة ومدرجة لدى FDA كجهاز اهتزاز علاجي من الفئة الأولى وفق 21 CFR 890.5975. وتشير استراتيجية السداد إلى CPT 97533 ورمز المراقبة العلاجية عن بُعد CPT 98977 مع Modifier 95. ويتبع نسيج الألياف المغناطيسية مسار تطوير وتنظيم منفصلًا.",
    pilotLabel: "تعاون سريري",
    pilotTitle: "نستعد لتوسيع التجارب.",
    pilotBody:
      "لدى Plectrum خطاب نوايا مع هداسا وتخطط لتوسيع التجارب السريرية عالميًا في 2026. نبحث عن عيادات علاج وظيفي ومراكز تأهيل وشركاء طبيين.",
    pilotCta: "ابدأ محادثة حول تجربة",
  },
  ru: {
    eyebrow: "КЛИНИЧЕСКОЕ ПРИМЕНЕНИЕ",
    title: "Дистанционная терапия наконец может включать прикосновение.",
    intro:
      "Первое целевое применение Plectrum: профессиональная сенсорная интеграция для аутичных людей и людей с особенностями сенсорной обработки, в клинике и за её пределами. Сегодня клиническую валидацию поддерживают четыре действующих вибрационных прототипа, а запатентованный текстиль с магнитными волокнами разрабатывается как долгосрочная платформа непрерывного прикосновения.",
    cta: "Обсудить клинический пилот",
    problemLabel: "СЛЕПАЯ ЗОНА ТЕЛЕМЕДИЦИНЫ",
    problemTitle: "Терапевт направляет. Ткань воздействует.",
    problemBody:
      "Видео и звук сохраняют общение, но не тактильное вмешательство. Plectrum позволяет эрготерапевту дистанционно управлять местом, временем и способом воздействия через носимое устройство.",
    controls: [
      ["Локализация", "Выбор зон воздействия из числа до 24 управляемых точек вибрации в текущих прототипах."],
      ["Рисунок", "Настройка терапевтических последовательностей вибрации сегодня с той же клинической логикой, которая затем перейдёт в прикосновение на магнитных волокнах."],
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
      "Текущие вибрационные прототипы Plectrum зарегистрированы FDA как терапевтический вибратор класса I по 21 CFR 890.5975. Стратегия возмещения опирается на CPT 97533 и код дистанционного терапевтического мониторинга CPT 98977 с Modifier 95. Текстиль с магнитными волокнами проходит отдельный путь разработки и регулирования.",
    pilotLabel: "КЛИНИЧЕСКОЕ СОТРУДНИЧЕСТВО",
    pilotTitle: "Готовимся расширять пилотную программу.",
    pilotBody:
      "У Plectrum есть письмо о намерениях с Hadassah; на 2026 год запланировано международное расширение клинических пилотов. Мы ищем клиники эрготерапии, реабилитационные центры и медицинских партнёров.",
    pilotCta: "Начать разговор о пилоте",
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
          {{
            en: "Explore the wearables",
            he: "לצפייה בלבישים",
            ar: "استكشف المنتجات القابلة للارتداء",
            ru: "Изучить носимые устройства",
          }[language]}<span aria-hidden="true">→</span>
        </Link>
      </section>
    </SiteShell>
  );
}
