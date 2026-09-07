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
      "מערכת חכמה להעברת תחושת מגע פיזיות מרחוק. Plectrum מחברת בין העולם הדיגיטלי לפיזי בעזרת לבוש טכנולוגי חכם, המעביר תחושות מגע פיזיות לגוף, לשיפור הטיפול והחוויה הדיגיטלית מבוססי גריה חושית פיזית.",
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
  ar: {
    title: "تكامل حسي عن بُعد.",
    subtitle:
      "منصة شاملة للتغذية الراجعة اللمسية المتحكم بها برمجيًا. توفر Plectrum تدخلات جسدية قابلة للقياس والتكيف عبر أجهزة اهتزاز دقيقة، لتسد فجوة الملموسية في الصحة الرقمية.",
    explore: "اكتشف التكنولوجيا",
    partner: "شارك Plectrum",
    scroll: "مرّر لتشعر بالقصة",
    thesisEyebrow: "الحاسة المفقودة",
    thesisTitle: "الرعاية الرقمية ترى وتسمع. والآن يمكنها توصيل مدخلات لمسية.",
    thesisBody:
      "في علاج التكامل الحسي، اللمس ليس إضافة اختيارية. تحوّل Plectrum التدخل الجسدي إلى وسيلة رقمية قابلة للقياس والتحكم بالبرمجيات.",
    sense: "استشعار",
    senseBody: "التقاط الاستجابة والبيانات الحيوية من المنتج القابل للارتداء.",
    analyze: "تحليل",
    analyzeBody: "صياغة بروتوكول تكيفي لتنظيم الحواس.",
    respond: "استجابة",
    respondBody: "توصيل مدخلات لمسية موجهة مباشرة عبر النسيج.",
    learn: "تسجيل وتعلّم",
    learnBody: "تحويل كل تفاعل إلى معرفة سريرية موضوعية.",
    productsEyebrow: "تعمل اليوم · أربعة نماذج أولية قائمة على الاهتزاز",
    productsTitle: "أربعة منتجات قابلة للارتداء تعمل اليوم عبر اهتزاز متحكم به.",
    productsBody:
      "تستخدم نماذجنا الأولية الوظيفية الحالية الاهتزاز الدقيق لتقييم بنية البرمجيات وسير العمل السريري، بالتوازي مع تطوير تقنية النسيج النشط المحمية ببراءة.",
    products: [
      ["قميص", "تنظيم كامل الجذع عبر اهتزاز بدقة عالية يُتحكم به بشكل مستقل."],
      ["كُم", "تنظيم موجه للطرف عبر اهتزاز بدقة عالية يُتحكم به بشكل مستقل."],
      ["قبعة واقية", "اهتزاز موجه للرأس لدعم الوقاية من الأزمات."],
      ["قفاز", "أنماط اهتزاز مركزة لدعم المهارات الحركية الدقيقة."],
    ],
    viewModels: "استكشف النماذج الأربعة العاملة",
    tractionEyebrow: "التقدم",
    tractionTitle: "نماذج أولية وظيفية تعمل اليوم. منصة نسيج محمية ببراءة لاحقًا.",
    traction: [
      ["4", "نماذج عاملة تعتمد على الاهتزاز"],
      ["3", "بيئات SDK: Android وWindows وXR"],
      ["إسرائيل · الولايات المتحدة · أوروبا", "براءة ممنوحة في إسرائيل", "الولايات المتحدة وأوروبا قيد الإجراء"],
    ],
    partnerLine:
      "خطاب نوايا موقع مع هداسا · بروتوكولات تكيفية مطورة مع IBM",
    futureEyebrow: "الوجهة المحمية ببراءة اختراع",
    futureTitle: "من اهتزاز موضعي إلى إحساس مستمر عبر القماش.",
    futureBody:
      "براءة FABTIVE لا تتعلق بالاهتزاز. إنها مبنية على ألياف خاصة تدمجها Plectrum في هياكل نسيجية مألوفة، لتخلق سطحًا مستمرًا وقابلًا للتحكم من الإحساس الجسدي مع عمق عبر القماش.",
    futureNote: "براءة ممنوحة في إسرائيل · الولايات المتحدة وأوروبا قيد الإجراء · وهي مختلفة عن نماذج الاهتزاز الحالية",
    pathwaysEyebrow: "ابنِ معنا الطبقة التالية",
    pathwaysTitle: "اختر طريقك إلى Plectrum.",
    pathways: [
      ["المستثمرون", "راجع الفرصة وحدد محادثة مركزة.", "محادثة استثمار", "investor"],
      ["الشركاء السريريون", "انضم إلى برنامج 2026 لطب الأطفال الوظيفي.", "استكشف تجربة سريرية", "clinical-pilot"],
      ["شركاء التكنولوجيا", "ادمج النسيج النشط في منظومات النسيج أو XR أو البرمجيات.", "ناقش شراكة", "technology-partner"],
      ["قابل الفريق", "ابدأ بمحادثة مباشرة مدتها 30 دقيقة.", "حدد موعدًا", "meeting"],
    ],
  },
  ru: {
    title: "Дистанционная сенсорная интеграция.",
    subtitle:
      "Комплексная платформа программно управляемой тактильной обратной связи. Plectrum обеспечивает измеримые, адаптивные физические вмешательства с помощью прецизионного вибрационного оборудования, устраняя дефицит осязаемости в цифровой медицине.",
    explore: "Изучить технологию",
    partner: "Стать партнёром Plectrum",
    scroll: "Прокрутите, чтобы почувствовать историю",
    thesisEyebrow: "НЕДОСТАЮЩАЯ МОДАЛЬНОСТЬ",
    thesisTitle: "Цифровая медицина видит и слышит. Теперь она может передавать тактильный ввод.",
    thesisBody:
      "В терапии сенсорной интеграции тактильное воздействие не является опцией. Plectrum превращает физическое вмешательство в измеримую цифровую модальность с программным управлением.",
    sense: "Сбор данных",
    senseBody: "Носимое устройство фиксирует отклик и биометрические данные.",
    analyze: "Анализ",
    analyzeBody: "Формирование адаптивного протокола сенсорной регуляции.",
    respond: "Воздействие",
    respondBody: "Точное тактильное воздействие непосредственно через ткань.",
    learn: "Запись и обучение",
    learnBody: "Каждое взаимодействие становится объективным клиническим знанием.",
    productsEyebrow: "РАБОТАЮТ СЕГОДНЯ · ЧЕТЫРЕ ВИБРАЦИОННЫХ ПРОТОТИПА",
    productsTitle: "Четыре работающих носимых формы на базе управляемой вибрации.",
    productsBody:
      "Наши текущие функциональные прототипы используют прецизионную вибрацию для оценки программной архитектуры и клинических процессов, параллельно с разработкой запатентованной платформы активной ткани.",
    products: [
      ["Футболка", "Регуляция корпуса через высокоточную, независимо управляемую вибрацию."],
      ["Рукав", "Локальная регуляция конечности через высокоточную, независимо управляемую вибрацию."],
      ["Защитная шапочка", "Направленная вибрация в области головы для предотвращения кризисов."],
      ["Перчатка", "Сфокусированные вибрационные рисунки для поддержки мелкой моторики."],
    ],
    viewModels: "Изучить четыре работающих прототипа",
    tractionEyebrow: "ПРОГРЕСС",
    tractionTitle: "Функциональные прототипы работают сегодня. Запатентованная текстильная платформа дальше.",
    traction: [
      ["4", "работающих вибрационных прототипа"],
      ["3", "SDK-среды: Android, Windows и XR"],
      ["Израиль · США · ЕС", "патент выдан в Израиле", "США и Европа в процессе"],
    ],
    partnerLine:
      "Подписанное LOI с Hadassah · Адаптивные протоколы с IBM",
    futureEyebrow: "ЗАПАТЕНТОВАННАЯ ЦЕЛЬ",
    futureTitle: "От локальной вибрации к непрерывному ощущению по всей ткани.",
    futureBody:
      "Патент FABTIVE относится не к вибрации. Он основан на проприетарных волокнах, которые Plectrum интегрирует в привычные текстильные структуры, создавая непрерывную управляемую поверхность физического ощущения с глубиной по всей ткани.",
    futureNote: "Патент выдан в Израиле · США и Европа в процессе · это отдельное направление по сравнению с текущими вибрационными прототипами",
    pathwaysEyebrow: "СОЗДАДИМ СЛЕДУЮЩИЙ СЛОЙ ВМЕСТЕ",
    pathwaysTitle: "Выберите свой путь к Plectrum.",
    pathways: [
      ["Инвесторам", "Оцените возможность и назначьте предметный разговор.", "Обсудить инвестиции", "investor"],
      ["Клиническим партнёрам", "Присоединяйтесь к пилотной программе 2026 года.", "Обсудить клинический пилот", "clinical-pilot"],
      ["Технологическим партнёрам", "Интегрируйте активную ткань в текстиль, XR или ПО.", "Обсудить партнёрство", "technology-partner"],
      ["Познакомиться с командой", "Начните с прямой 30-минутной встречи.", "Назначить встречу", "meeting"],
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
