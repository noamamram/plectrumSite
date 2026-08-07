"use client";

import Link from "next/link";
import { ModelScene } from "./components/ModelScene";
import { SiteShell } from "./components/SiteShell";
import { useLanguage } from "./components/LanguageProvider";

const content = {
  en: {
    eyebrow: "FABTIVE ACTIVE FABRIC",
    title: "Making touch a digital world.",
    subtitle:
      "Four working vibration-based prototypes validate the system today. Plectrum's patented magnetic-fiber textile is the long-term product platform for continuous touch across the fabric.",
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
    productsEyebrow: "WORKING TODAY · FOUR VIBRATION PROTOTYPES",
    productsTitle: "Four working wearables built on controlled vibration.",
    productsBody:
      "These four working prototypes are today's validation hardware. They use controlled vibration points to prove the software, control architecture and clinical workflow while the patented magnetic-fiber textile is developed.",
    products: [
      ["Shirt", "Full-torso regulation through up to 24 controlled vibration points."],
      ["Sleeve", "Targeted limb regulation through up to 24 controlled vibration points."],
      ["Protective cap", "Targeted cranial vibration designed to support crisis prevention."],
      ["Glove", "Focused vibration patterns for fine-motor support."],
    ],
    viewModels: "Explore the four working prototypes",
    tractionEyebrow: "TRACTION",
    tractionTitle: "Validation hardware working now. Patented textile platform ahead.",
    traction: [
      ["4", "working vibration-based prototypes"],
      ["3", "SDK ecosystems: Android, Windows and XR"],
      ["IL · US · EU", "patent granted in Israel; US and Europe in process"],
    ],
    partnerLine:
      "Clinical validation with Hadassah · Adaptive protocols developed with IBM · Industrial relationships with NILIT and Delta Galil",
    futureEyebrow: "THE PATENTED DESTINATION",
    futureTitle: "From isolated vibration points to continuous touch in every fiber.",
    futureBody:
      "FABTIVE's patent is not about vibration. It is about magnetic fibers integrated into the textile itself, so each active fiber contributes to a continuous, controllable surface of touch with depth across the fabric.",
    futureNote: "Patent granted in Israel · US and Europe in process · distinct from today's vibration prototypes",
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
    title: "הופכים את המגע לעולם דיגיטלי.",
    subtitle:
      "ארבעה אבות טיפוס פעילים מבוססי רטט מאמתים את המערכת כיום. פלטפורמת המוצר ארוכת הטווח של Plectrum היא בד פטנטי המבוסס על סיבים מגנטיים למגע רציף על פני הבד.",
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
    productsEyebrow: "פועלים היום · ארבעה אבות טיפוס מבוססי רטט",
    productsTitle: "ארבעה לבישים פעילים המבוססים על רטט נשלט.",
    productsBody:
      "אלה אבות הטיפוס הפעילים של חומרת האימות כיום. הם משתמשים בנקודות רטט נשלטות כדי להוכיח את התוכנה, ארכיטקטורת השליטה והתהליך הקליני, בזמן שטכנולוגיית הסיבים המגנטיים הפטנטית ממשיכה להתפתח.",
    products: [
      ["חולצה", "ויסות לפלג הגוף העליון באמצעות עד 24 נקודות רטט נשלטות."],
      ["שרוול", "ויסות ממוקד לגפיים באמצעות עד 24 נקודות רטט נשלטות."],
      ["כובע מגן", "רטט ממוקד באזור הראש לתמיכה במניעת מצבי משבר."],
      ["כפפה", "דפוסי רטט ממוקדים לתמיכה במוטוריקה עדינה."],
    ],
    viewModels: "לצפייה בארבעת אבות הטיפוס הפעילים",
    tractionEyebrow: "התקדמות",
    tractionTitle: "חומרת אימות פעילה כיום. פלטפורמת טקסטיל פטנטית בהמשך.",
    traction: [
      ["4", "אבות טיפוס פעילים המבוססים על רטט"],
      ["3", "סביבות SDK: ‏Android, ‏Windows ו־XR"],
      ["ישראל · ארה״ב · אירופה", "פטנט מאושר בישראל; ארה״ב ואירופה בתהליך"],
    ],
    partnerLine:
      "אימות קליני עם הדסה · פרוטוקולים אדפטיביים בפיתוח משותף עם IBM · קשרים תעשייתיים עם NILIT ודלתא גליל",
    futureEyebrow: "היעד הפטנטי",
    futureTitle: "מנקודות רטט מבודדות למגע רציף בכל סיב.",
    futureBody:
      "הפטנט של FABTIVE אינו עוסק ברטט. הוא עוסק בסיבים מגנטיים המשתלבים בתוך הטקסטיל עצמו, כך שכל סיב אקטיבי משתתף ביצירת משטח מגע רציף, נשלט ובעל עומק על פני הבד.",
    futureNote: "פטנט מאושר בישראל · ארה״ב ואירופה בתהליך · נפרד מאבות הטיפוס הרוטטים של היום",
    pathwaysEyebrow: "בואו לבנות איתנו את השכבה הבאה",
    pathwaysTitle: "בחרו את הדרך שלכם אל Plectrum.",
    pathways: [
      ["משקיעים", "הכירו את ההזדמנות וקבעו שיחה ממוקדת.", "שיחת השקעה", "investor"],
      ["שותפים קליניים", "הצטרפו לתוכנית הפיילוט לשנת 2026 בריפוי בעיסוק ובשיקום.", "בדיקת פיילוט קליני", "clinical-pilot"],
      ["שותפים טכנולוגיים", "שלבו מגע אקטיבי במערכות טקסטיל, XR או תוכנה.", "שיחה על שותפות", "technology-partner"],
      ["פגישה עם הצוות", "התחילו משיחה ישירה בת 30 דקות.", "קביעת פגישה", "meeting"],
    ],
  },
  ar: {
    eyebrow: "FABTIVE النسيج النشط",
    title: "نجعل اللمس عالماً رقمياً.",
    subtitle:
      "تتحقق المنظومة اليوم عبر أربعة نماذج اهتزازية عاملة. أما منصة المنتج طويلة المدى لدى Plectrum فهي نسيج محمي ببراءة يعتمد على ألياف مغناطيسية للمس المستمر عبر القماش.",
    explore: "اكتشف التكنولوجيا",
    partner: "شارك Plectrum",
    scroll: "مرّر لتشعر بالقصة",
    thesisEyebrow: "الحاسة المفقودة",
    thesisTitle: "الرعاية الرقمية ترى وتسمع. والآن يمكنها أن تلمس.",
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
      "هذه هي أجهزة التحقق العاملة اليوم. وهي تستخدم نقاط اهتزاز متحكمًا بها لإثبات البرمجيات وبنية التحكم وسير العمل السريري، بينما يواصل النسيج المحمي بالألياف المغناطيسية تقدمه.",
    products: [
      ["قميص", "تنظيم كامل الجذع عبر ما يصل إلى 24 نقطة اهتزاز متحكم بها."],
      ["كُم", "تنظيم موجه للطرف عبر ما يصل إلى 24 نقطة اهتزاز متحكم بها."],
      ["قبعة واقية", "اهتزاز موجه للرأس لدعم الوقاية من الأزمات."],
      ["قفاز", "أنماط اهتزاز مركزة لدعم المهارات الحركية الدقيقة."],
    ],
    viewModels: "استكشف النماذج الأربعة العاملة",
    tractionEyebrow: "التقدم",
    tractionTitle: "أجهزة تحقق عاملة اليوم. منصة نسيج محمية ببراءة لاحقًا.",
    traction: [
      ["4", "نماذج عاملة تعتمد على الاهتزاز"],
      ["3", "بيئات SDK: Android وWindows وXR"],
      ["إسرائيل · الولايات المتحدة · أوروبا", "براءة ممنوحة في إسرائيل؛ الولايات المتحدة وأوروبا قيد الإجراء"],
    ],
    partnerLine:
      "تحقق سريري مع هداسا · بروتوكولات تكيفية مطورة مع IBM · علاقات صناعية مع NILIT وDelta Galil",
    futureEyebrow: "الوجهة المحمية ببراءة اختراع",
    futureTitle: "من نقاط اهتزاز منفصلة إلى لمس مستمر في كل ليفة.",
    futureBody:
      "براءة FABTIVE لا تتعلق بالاهتزاز. إنها تغطي أليافًا مغناطيسية مدمجة في النسيج نفسه بحيث تسهم كل ليفة نشطة في سطح لمس مستمر وقابل للتحكم مع عمق عبر القماش.",
    futureNote: "براءة ممنوحة في إسرائيل · الولايات المتحدة وأوروبا قيد الإجراء · وهي مختلفة عن نماذج الاهتزاز الحالية",
    pathwaysEyebrow: "ابنِ معنا الطبقة التالية",
    pathwaysTitle: "اختر طريقك إلى Plectrum.",
    pathways: [
      ["المستثمرون", "راجع الفرصة وحدد محادثة مركزة.", "محادثة استثمار", "investor"],
      ["الشركاء السريريون", "انضم إلى برنامج 2026 لطب الأطفال الوظيفي وإعادة التأهيل.", "استكشف تجربة سريرية", "clinical-pilot"],
      ["شركاء التكنولوجيا", "ادمج اللمس النشط في منظومات النسيج أو XR أو البرمجيات.", "ناقش شراكة", "technology-partner"],
      ["قابل الفريق", "ابدأ بمحادثة مباشرة مدتها 30 دقيقة.", "حدد موعدًا", "meeting"],
    ],
  },
  ru: {
    eyebrow: "FABTIVE · АКТИВНАЯ ТКАНЬ",
    title: "Превращаем осязание в цифровой мир.",
    subtitle:
      "Сегодня систему подтверждают четыре действующих вибрационных прототипа. Долгосрочная продуктовая платформа Plectrum — запатентованный текстиль с магнитными волокнами для непрерывного прикосновения по всей ткани.",
    explore: "Изучить технологию",
    partner: "Стать партнёром Plectrum",
    scroll: "Прокрутите, чтобы почувствовать историю",
    thesisEyebrow: "НЕДОСТАЮЩАЯ МОДАЛЬНОСТЬ",
    thesisTitle: "Цифровая медицина видит и слышит. Теперь она может прикасаться.",
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
      "Это действующее оборудование для проверки на текущем этапе. Оно использует управляемые точки вибрации, чтобы подтвердить ПО, архитектуру управления и клинический процесс, пока развивается запатентованный текстиль с магнитными волокнами.",
    products: [
      ["Футболка", "Регуляция корпуса через сеть до 24 управляемых точек вибрации."],
      ["Рукав", "Локальная регуляция конечности через сеть до 24 управляемых точек вибрации."],
      ["Защитная шапочка", "Направленная вибрация в области головы для предотвращения кризисов."],
      ["Перчатка", "Сфокусированные вибрационные рисунки для поддержки мелкой моторики."],
    ],
    viewModels: "Изучить четыре работающих прототипа",
    tractionEyebrow: "ПРОГРЕСС",
    tractionTitle: "Рабочее оборудование для валидации сегодня. Запатентованная текстильная платформа дальше.",
    traction: [
      ["4", "работающих вибрационных прототипа"],
      ["3", "SDK-среды: Android, Windows и XR"],
      ["Израиль · США · ЕС", "патент выдан в Израиле; США и Европа в процессе"],
    ],
    partnerLine:
      "Клиническая валидация с Hadassah · Адаптивные протоколы с IBM · Промышленные связи с NILIT и Delta Galil",
    futureEyebrow: "ЗАПАТЕНТОВАННАЯ ЦЕЛЬ",
    futureTitle: "От отдельных точек вибрации к непрерывному прикосновению в каждом волокне.",
    futureBody:
      "Патент FABTIVE относится не к вибрации. Он описывает магнитные волокна, встроенные в сам текстиль, чтобы каждое активное волокно участвовало в создании непрерывной управляемой поверхности прикосновения с глубиной по всей ткани.",
    futureNote: "Патент выдан в Израиле · США и Европа в процессе · это отдельное направление по сравнению с текущими вибрационными прототипами",
    pathwaysEyebrow: "СОЗДАДИМ СЛЕДУЮЩИЙ СЛОЙ ВМЕСТЕ",
    pathwaysTitle: "Выберите свой путь к Plectrum.",
    pathways: [
      ["Инвесторам", "Оцените возможность и назначьте предметный разговор.", "Обсудить инвестиции", "investor"],
      ["Клиническим партнёрам", "Присоединяйтесь к пилотной программе 2026 года.", "Обсудить клинический пилот", "clinical-pilot"],
      ["Технологическим партнёрам", "Интегрируйте активное осязание в текстиль, XR или ПО.", "Обсудить партнёрство", "technology-partner"],
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
              <strong><bdi dir="auto">{number}</bdi></strong>
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
