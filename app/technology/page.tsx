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
  ar: {
    eyebrow: "التكنولوجيا",
    title: "نسيج قادر على إيصال اللمس.",
    intro:
      "FABTIVE هي منصة النسيج النشط المحمية ببراءة اختراع من Plectrum: طبقة تُدار برمجيًا لإضافة خرج لمسي موضعي ومستمر إلى المنتجات القابلة للارتداء.",
    cta: "ناقش شراكة تكنولوجية",
    systemLabel: "من الإشارة إلى الإحساس",
    systemTitle: "حلقة مغلقة منسوجة داخل المنتج.",
    systemBody:
      "تربط المنصة الاستشعار والبرمجيات وتشغيل النسيج، فتحوّل هدف المعالج إلى مدخل لمسي موجه ثم تسجل الاستجابة.",
    steps: [
      ["استشعار", "يلتقط المنتج القابل للارتداء الاستجابة والبيانات الحيوية المتصلة."],
      ["تحليل", "تحوّل البرمجيات الأهداف السريرية إلى بروتوكول تكيفي."],
      ["استجابة", "يوصل النسيج الأنماط والشدة والتوقيت بصورة موضعية."],
      ["تعلّم", "تتحول كل جلسة إلى معلومات منظمة للمتابعة."],
    ],
    fabricLabel: "الطبقة النشطة",
    fabricTitle: "عمق واستمرارية، لا مجموعة من الأجهزة.",
    fabricBody:
      "تطوّر Plectrum التكنولوجيا لتندمج مباشرة في ألياف النسيج. الهدف سطح نشط يحافظ على ألفة القماش ومرونته وقابليته للارتداء، ويضيف عمقًا لمسيًا قابلًا للتحكم.",
    facts: [
      ["حتى 24", "نقطة لمسية موضعية مستقلة"],
      ["3.5–5.2V DC", "نطاق التشغيل · 1.2A كحد أقصى"],
      ["Bluetooth + USB-C", "تحكم لاسلكي وشحن"],
      ["Android · Windows · XR", "بيئات SDK متعددة المنصات"],
    ],
    ipLabel: "أساس قابل للحماية",
    ipTitle: "ملكية فكرية محمية. جاهزة للتكامل.",
    ipBody:
      "قُدمت طلبات براءة اختراع في الولايات المتحدة وأوروبا وإسرائيل. وطُورت بروتوكولات تكيفية مع IBM، إلى جانب علاقات صناعية مع NILIT وDelta Galil.",
    futureTitle: "اللمس ينتمي إلى أكثر من سوق.",
    futureBody:
      "التكامل الحسي السريري هو التطبيق الأول. ويمكن للمنصة نفسها أن تمتد لاحقًا إلى XR والألعاب والتدريب والدفاع.",
    futureNote: "التحقق السريري أولًا.",
  },
  ru: {
    eyebrow: "ТЕХНОЛОГИЯ",
    title: "Текстиль, способный передавать прикосновение.",
    intro:
      "FABTIVE — запатентованная платформа активной ткани Plectrum: программно управляемый слой для локального непрерывного тактильного воздействия в носимых продуктах.",
    cta: "Обсудить технологическое партнёрство",
    systemLabel: "ОТ СИГНАЛА К ОЩУЩЕНИЮ",
    systemTitle: "Замкнутый контур, вплетённый в продукт.",
    systemBody:
      "Платформа объединяет сенсоры, программное обеспечение и текстильные приводы: переводит задачу терапевта в точное воздействие и фиксирует отклик.",
    steps: [
      ["Сбор данных", "Носимое устройство фиксирует отклик и подключённые биометрические данные."],
      ["Анализ", "ПО преобразует клинические цели в адаптивный протокол."],
      ["Воздействие", "Ткань локально задаёт рисунок, интенсивность и время воздействия."],
      ["Обучение", "Каждая сессия становится структурированными данными для наблюдения."],
    ],
    fabricLabel: "АКТИВНЫЙ СЛОЙ",
    fabricTitle: "Глубина и непрерывность — не набор гаджетов.",
    fabricBody:
      "Plectrum разрабатывает технологию для интеграции непосредственно в волокна. Цель — активная поверхность, сохраняющая привычность, гибкость и удобство ткани и добавляющая управляемую тактильную глубину.",
    facts: [
      ["До 24", "независимых локальных тактильных точек"],
      ["3.5–5.2V DC", "рабочий диапазон · максимум 1.2A"],
      ["Bluetooth + USB-C", "беспроводное управление и зарядка"],
      ["Android · Windows · XR", "кроссплатформенные SDK-среды"],
    ],
    ipLabel: "ЗАЩИЩАЕМАЯ ОСНОВА",
    ipTitle: "Защищённая интеллектуальная собственность. Готовность к интеграции.",
    ipBody:
      "Патентные заявки поданы в США, Европе и Израиле. Адаптивные протоколы разработаны с IBM, выстроены промышленные связи с NILIT и Delta Galil.",
    futureTitle: "Осязание нужно не одному рынку.",
    futureBody:
      "Клиническая сенсорная интеграция — первый целевой сценарий. Затем платформа сможет выйти в XR, игры, обучение и оборону.",
    futureNote: "Сначала — клиническая валидация.",
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
            {{
              en: "See the platform take form",
              he: "לראות את הפלטפורמה הופכת למוצר",
              ar: "شاهد المنصة وهي تتحول إلى منتج",
              ru: "Посмотреть, как платформа становится продуктом",
            }[language]}
            <b aria-hidden="true">→</b>
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
