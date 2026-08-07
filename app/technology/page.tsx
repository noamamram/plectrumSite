"use client";

import Link from "next/link";
import { SiteShell } from "../components/SiteShell";
import { useLanguage } from "../components/LanguageProvider";

const copy = {
  en: {
    eyebrow: "THE PATENTED DESTINATION",
    title: "Continuous touch, engineered into every fiber.",
    intro:
      "Plectrum works in two clear hardware stages: four working vibration-based prototypes for validation today, and FABTIVE, the patented magnetic-fiber textile platform being built for continuous touch across the fabric.",
    cta: "Discuss a technology partnership",
    systemLabel: "ONE CONTROL ARCHITECTURE · TWO HARDWARE STAGES",
    systemTitle: "One control system. Two different hardware layers.",
    systemBody:
      "The software, protocol logic and clinical workflow are already being validated through today's localized vibration prototypes. The patented magnetic-fiber architecture is the next hardware layer, carrying that same intelligence into the textile itself.",
    steps: [
      ["Define", "Translate a clinical goal into a precise tactile protocol."],
      ["Configure", "Choose location, intensity, timing and progression."],
      ["Deliver", "Use vibration points today, then magnetic fibers for continuous textile actuation."],
      ["Learn", "Turn every session into structured information for follow-up."],
    ],
    fabricLabel: "THE MAGNETIC-FIBER PATENT",
    fabricTitle: "Depth and continuity, not isolated vibration points.",
    fabricBody:
      "Plectrum's patent covers magnetic fibers integrated directly into textile fibers. The target fabric does not create touch through vibration. Each active fiber contributes to a soft, continuous surface with controllable depth, while preserving the flexibility and familiarity of textile.",
    prototypeLabel: "WORKING TODAY",
    prototypeTitle: "Four vibration-based prototypes for clinical validation.",
    prototypeBody:
      "These specifications describe the four working prototypes that exist today. They are validation hardware, not the patented magnetic-fiber textile under development.",
    facts: [
      ["Up to 24", "independently controlled vibration points"],
      ["3.5-5.2V DC", "operating range · 1.2A maximum"],
      ["Bluetooth + USB-C", "wireless control and charging"],
      ["Android · Windows · XR", "cross-platform SDK environments"],
    ],
    ipLabel: "DEFENSIBLE FOUNDATION",
    ipTitle: "Patent granted in Israel. US and Europe in process.",
    ipBody:
      "The magnetic-fiber patent has been granted in Israel, with registration processes underway in the United States and Europe. This is the defensible product direction beyond today's vibration prototypes. Adaptive protocols were developed with IBM, alongside industrial relationships with NILIT and Delta Galil.",
    futureTitle: "Continuous touch can reach far beyond one market.",
    futureBody:
      "Clinical sensory integration is the first focused application. After validation, the magnetic-fiber platform can expand into XR, gaming, training and defense.",
    futureNote: "Clinical validation comes first.",
  },
  he: {
    eyebrow: "היעד הטכנולוגי המוגן בפטנט",
    title: "מגע רציף, מתוכנן אל תוך כל סיב.",
    intro:
      "ל־Plectrum יש שני שלבי חומרה ברורים: ארבעה אבות טיפוס פעילים מבוססי רטט לצורכי אימות כיום, ו־FABTIVE, פלטפורמת הבד המוגנת בפטנט המבוססת על סיבים מגנטיים ונבנית למגע רציף על פני הבד.",
    cta: "שיחה על שותפות טכנולוגית",
    systemLabel: "ארכיטקטורת שליטה אחת · שני שלבי חומרה",
    systemTitle: "מערכת שליטה אחת. שתי שכבות חומרה שונות.",
    systemBody:
      "התוכנה, לוגיקת הפרוטוקול ותהליך העבודה הקליני כבר עוברים אימות באמצעות אבות הטיפוס הרוטטים של היום. ארכיטקטורת הסיבים המגנטיים המוגנת בפטנט היא שכבת החומרה הבאה, שמעבירה את אותה חוכמה אל הטקסטיל עצמו.",
    steps: [
      ["הגדרה", "תרגום יעד קליני לפרוטוקול מישושי מדויק."],
      ["תצורה", "בחירת מיקום, עוצמה, תזמון והתקדמות."],
      ["העברה", "נקודות רטט כיום, ובהמשך סיבים מגנטיים להפעלה רציפה של הבד."],
      ["למידה", "הפיכת כל מפגש למידע מובנה לצורך המשך הטיפול."],
    ],
    fabricLabel: "פטנט הסיבים המגנטיים",
    fabricTitle: "עומק ורציפות, לא נקודות רטט מבודדות.",
    fabricBody:
      "הפטנט של Plectrum עוסק בסיבים מגנטיים המשתלבים ישירות בסיבי הטקסטיל. בד היעד אינו יוצר מגע באמצעות רטט. כל סיב אקטיבי משתתף ביצירת משטח רך ורציף בעל עומק נשלט, תוך שמירה על הגמישות והטבעיות של הבד.",
    prototypeLabel: "פועל כיום",
    prototypeTitle: "ארבעה אבות טיפוס מבוססי רטט לאימות קליני.",
    prototypeBody:
      "המפרט שלהלן מתאר את ארבעת אבות הטיפוס הפעילים הקיימים כיום. זוהי חומרת האימות, ולא טכנולוגיית הסיבים המגנטיים המוגנת בפטנט שנמצאת בפיתוח.",
    facts: [
      ["עד 24", "נקודות רטט הנשלטות בנפרד"],
      ["3.5-5.2V DC", "טווח הפעלה · עד 1.2A"],
      ["Bluetooth + USB-C", "שליטה אלחוטית וטעינה"],
      ["Android · Windows · XR", "סביבות SDK חוצות־פלטפורמות"],
    ],
    ipLabel: "בסיס בר־הגנה",
    ipTitle: "הפטנט אושר בישראל. בארה״ב ובאירופה בתהליך רישום.",
    ipBody:
      "הפטנט על טכנולוגיית הסיבים המגנטיים אושר בישראל, ותהליכי הרישום בארצות הברית ובאירופה נמצאים בעיצומם. זהו כיוון המוצר בר־ההגנה שמעבר לאבות הטיפוס הרוטטים של היום. פרוטוקולים אדפטיביים פותחו עם IBM, לצד קשרים תעשייתיים עם NILIT ודלתא גליל.",
    futureTitle: "מגע רציף יכול להגיע הרבה מעבר לשוק אחד.",
    futureBody:
      "אינטגרציה חושית קלינית היא היישום הראשון והממוקד. לאחר האימות, פלטפורמת הסיבים המגנטיים תוכל להתרחב ל־XR, גיימינג, הדרכה וביטחון.",
    futureNote: "האימות הקליני קודם.",
  },
  ar: {
    eyebrow: "الوجهة التكنولوجية المحمية ببراءة",
    title: "لمس مستمر، مصمم داخل كل ليفة.",
    intro:
      "تعمل Plectrum عبر مرحلتين واضحتين من الأجهزة: أربعة نماذج اهتزازية عاملة للتحقق اليوم، وFABTIVE، منصة النسيج ذات الألياف المغناطيسية المحمية ببراءة والمصممة للمس المستمر عبر القماش.",
    cta: "ناقش شراكة تكنولوجية",
    systemLabel: "بنية تحكم واحدة · مرحلتان للأجهزة",
    systemTitle: "منظومة تحكم واحدة. طبقتان مختلفتان من الأجهزة.",
    systemBody:
      "تجري بالفعل عملية التحقق من البرمجيات ومنطق البروتوكول وسير العمل السريري عبر النماذج الاهتزازية الحالية. وتمثل بنية الألياف المغناطيسية المحمية ببراءة طبقة الأجهزة التالية التي تنقل هذا الذكاء إلى النسيج نفسه.",
    steps: [
      ["تحديد", "تحويل الهدف السريري إلى بروتوكول لمسي دقيق."],
      ["تهيئة", "اختيار الموضع والشدة والتوقيت والتدرج."],
      ["توصيل", "نقاط اهتزاز اليوم، ثم ألياف مغناطيسية لتشغيل نسيجي مستمر."],
      ["تعلّم", "تحويل كل جلسة إلى معلومات منظمة للمتابعة."],
    ],
    fabricLabel: "براءة الألياف المغناطيسية",
    fabricTitle: "عمق واستمرارية، لا نقاط اهتزاز معزولة.",
    fabricBody:
      "تغطي براءة Plectrum أليافًا مغناطيسية تندمج مباشرة في ألياف النسيج. لا يولد النسيج المستهدف اللمس من خلال الاهتزاز. تسهم كل ليفة نشطة في سطح ناعم ومستمر بعمق قابل للتحكم، مع الحفاظ على مرونة القماش وألفته.",
    prototypeLabel: "يعمل اليوم",
    prototypeTitle: "أربعة نماذج أولية قائمة على الاهتزاز للتحقق السريري.",
    prototypeBody:
      "تصف المواصفات أدناه النماذج الأربعة العاملة الموجودة اليوم. وهي أجهزة التحقق الحالية، وليست نسيج الألياف المغناطيسية المحمي ببراءة الذي ما زال قيد التطوير.",
    facts: [
      ["حتى 24", "نقطة اهتزاز يتم التحكم بها بشكل مستقل"],
      ["3.5-5.2V DC", "نطاق التشغيل · 1.2A كحد أقصى"],
      ["Bluetooth + USB-C", "تحكم لاسلكي وشحن"],
      ["Android · Windows · XR", "بيئات SDK متعددة المنصات"],
    ],
    ipLabel: "أساس قابل للحماية",
    ipTitle: "مُنحت البراءة في إسرائيل. التسجيل جار في الولايات المتحدة وأوروبا.",
    ipBody:
      "مُنحت براءة تقنية الألياف المغناطيسية في إسرائيل، فيما تجري إجراءات التسجيل في الولايات المتحدة وأوروبا. وهذا هو اتجاه المنتج القابل للحماية بعد نماذج الاهتزاز الحالية. وطُورت بروتوكولات تكيفية مع IBM، إلى جانب علاقات صناعية مع NILIT وDelta Galil.",
    futureTitle: "يمكن للمس المستمر أن يصل إلى ما هو أبعد من سوق واحد.",
    futureBody:
      "التكامل الحسي السريري هو التطبيق الأول. وبعد التحقق يمكن لمنصة الألياف المغناطيسية أن تمتد إلى XR والألعاب والتدريب والدفاع.",
    futureNote: "التحقق السريري أولًا.",
  },
  ru: {
    eyebrow: "ЗАПАТЕНТОВАННАЯ ЦЕЛЕВАЯ ТЕХНОЛОГИЯ",
    title: "Непрерывное прикосновение в каждом волокне.",
    intro:
      "У Plectrum есть два чётких аппаратных этапа: четыре действующих вибрационных прототипа для валидации сегодня и FABTIVE — запатентованная текстильная платформа с магнитными волокнами для непрерывного прикосновения по всей ткани.",
    cta: "Обсудить технологическое партнёрство",
    systemLabel: "ОДНА АРХИТЕКТУРА УПРАВЛЕНИЯ · ДВА ЭТАПА ОБОРУДОВАНИЯ",
    systemTitle: "Одна система управления. Два разных аппаратных слоя.",
    systemBody:
      "ПО, логика протоколов и клинический процесс уже проверяются через сегодняшние вибрационные прототипы. Запатентованная архитектура магнитных волокон — это следующий аппаратный слой, который переносит тот же интеллект в сам текстиль.",
    steps: [
      ["Определить", "Преобразовать клиническую цель в точный тактильный протокол."],
      ["Настроить", "Выбрать зону, интенсивность, время и динамику."],
      ["Передать", "Использовать точки вибрации сегодня, а затем магнитные волокна для непрерывного воздействия."],
      ["Изучить", "Превратить каждую сессию в структурированные данные для наблюдения."],
    ],
    fabricLabel: "ПАТЕНТ НА МАГНИТНЫЕ ВОЛОКНА",
    fabricTitle: "Глубина и непрерывность, а не отдельные точки вибрации.",
    fabricBody:
      "Патент Plectrum охватывает магнитные элементы, интегрированные непосредственно в волокна текстиля. Целевая ткань создаёт прикосновение не за счёт вибрации. Каждое активное волокно участвует в создании мягкой непрерывной поверхности с управляемой глубиной, сохраняя гибкость и естественность ткани.",
    prototypeLabel: "РАБОТАЕТ СЕГОДНЯ",
    prototypeTitle: "Четыре вибрационных прототипа для клинической проверки.",
    prototypeBody:
      "Ниже описаны четыре действующих прототипа, существующие сегодня. Это текущее оборудование для валидации, а не запатентованный текстиль с магнитными волокнами, который находится в разработке.",
    facts: [
      ["До 24", "независимо управляемых точек вибрации"],
      ["3.5-5.2V DC", "рабочий диапазон · максимум 1.2A"],
      ["Bluetooth + USB-C", "беспроводное управление и зарядка"],
      ["Android · Windows · XR", "кроссплатформенные SDK-среды"],
    ],
    ipLabel: "ЗАЩИЩАЕМАЯ ОСНОВА",
    ipTitle: "Патент выдан в Израиле. Регистрация в США и Европе продолжается.",
    ipBody:
      "Патент на технологию магнитных волокон выдан в Израиле, а регистрационные процедуры в США и Европе продолжаются. Это защищаемое продуктовое направление после сегодняшних вибрационных прототипов. Адаптивные протоколы разработаны с IBM, выстроены промышленные связи с NILIT и Delta Galil.",
    futureTitle: "Непрерывное прикосновение применимо далеко за пределами одного рынка.",
    futureBody:
      "Клиническая сенсорная интеграция является первым целевым сценарием. После проверки платформа магнитных волокон сможет выйти в XR, игры, обучение и оборону.",
    futureNote: "Сначала клиническая проверка.",
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

      <section className="light-section facts-section">
        <div className="prototype-facts-heading">
          <p className="eyebrow dark">{t.prototypeLabel}</p>
          <h2>{t.prototypeTitle}</h2>
          <p>{t.prototypeBody}</p>
        </div>
        <div className="fact-grid">
          {t.facts.map(([value, label]) => (
            <article key={label}><strong><bdi dir="auto">{value}</bdi></strong><span>{label}</span></article>
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

      <section className="light-section">
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
              en: "Explore the four working prototypes",
              he: "לצפייה בארבעת אבות הטיפוס הפעילים",
              ar: "استكشف النماذج الأولية الأربعة العاملة",
              ru: "Посмотреть четыре действующих прототипа",
            }[language]}
            <b aria-hidden="true">→</b>
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
