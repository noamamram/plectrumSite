"use client";

import Image from "next/image";
import { SiteShell } from "../components/SiteShell";
import { useLanguage } from "../components/LanguageProvider";

const copy = {
 en: {
    eyebrow: "COMPANY",
    title: "Building the physical layer of assistive wellness.",
    intro:
      "Plectrum combines software, assistive support practices, and wearable endpoints to make physical sensory regulation measurable, controllable, and remotely accessible. The company is actively developing FABTIVE, a patented active-fabric platform for continuous physical sensation.",
    tractionLabel: "CURRENT STATUS",
    tractionTitle: "Operational endpoints today. Patented active fabric platform ahead.",
    milestones: [
      ["4", "operational wearable endpoints"],
      ["2027", "institutional pilot program launch"],
      ["IL · US · EU", "Patent granted in Israel; US and Europe in process"],
    ],
    relationshipsLabel: "VALIDATION & PARTNERSHIPS",
    relationshipsTitle: "Institutional and technological momentum.",
    relationships: [
      ["Hadassah & Hadasit", "Signed Letter of Intent.", "/partners/hadassah-new.png", "relationship-logo--paired", "/partners/hadasit-normalized.png"],
      ["TEFRON", "Signed NDA, MOU established.", "/partners/tefron.png", "relationship-logo--square"],
      ["RayQ", "Signed NDA, MOU established.", "/partners/ray-q-normalized.png", "relationship-logo--wide"],
      ["Aleh", "Signed Letter of Intent.", "/partners/aleh-normalized.png", "relationship-logo--tall"],
      ["Buzzy", "", "/partners/buzzy.png", "relationship-logo--wide relationship-logo--buzzy"],
      ["ALUT", "", "/partners/alut.png", "relationship-logo--wide"],
      ["HackAutism", "", "/partners/hackautism.png", "relationship-logo--wide"],
    ],
    marketLabel: "COMMERCIAL PATHWAY",
    marketTitle: "A dual-engine entry into government-funded wellness.",
    marketBody:
      "Plectrum's model focuses on the Assistive Wellness sector in the United States, targeting government-funded pathways such as Medicaid HCBS and state-sponsored ESA programs. The opportunity is built on a dual-engine Hardware-Enabled SaaS approach:",
    marketMetrics: [
      ["HCBS & ESA", "Targeting state-sponsored institutional and educational budgets"],
      ["$5K/Year", "Average state funding cap per user (e.g., Enabling Technology)"],
      ["ARPU - $45.20", "Projected blended monthly (SaaS)"],
      ["$234M+", "Combined Serviceable Addressable Market (SAM) in initial launch states"],
    ],
    teamLabel: "THE TEAM",
    teamTitle: "A multidisciplinary team with deep tech and systems expertise.",
    team: [
      {
        name: "Gabriel Lev-Har",
        role: "Founder · CEO",
        credential: "Veteran of IDF Unit 81 & IAI. MBA.",
        bio: "System architect and business leader with deep systems-engineering expertise and proven operational leadership. Focused on translating complex engineering into scalable assistive technology.",
        image: "/team/gabriel-lev-har-neutral.png",
        icon: "/team/icons/gabriel-plectrum-mark.png",
        linkedin: "https://www.linkedin.com/in/gabriel-lev-har-9916573",
      },
      {
        name: "Dr. Nino Rivka Eliahu",
        role: "Head of Materials",
        credential: "Over 25 years of experience",
        bio: "Deep-tech expertise in advanced materials and coatings. Brings extensive R&D experience in human-centric wearable technology, spanning polymerization, innovative coating methods, and industrial manufacturing scale-up.",
        image: "/team/nino-rivka-eliahu-neutral.png",
        icon: "/team/icons/nino-materials.svg",
        linkedin: "https://www.linkedin.com/in/dr-nino-rebecca-eliahu-65037851/",
      },
      {
        name: "Noam Amram",
        role: "XR & LLM Integration Lead",
        credential: "Veteran of IDF Tech Unit.",
        bio: "Specialist in simulation systems and interactive software development. Leads system integration and architects immersive, responsive environments for sensory support.",
        image: "/team/noam-amram-neutral.png",
        icon: "/team/icons/noam-vr-headset.svg",
        linkedin: "https://www.linkedin.com/in/noam-amram",
      },
      {
        name: "Omri Arbel",
        role: "Senior Hardware & Firmware Engineer",
        credential: "Veteran of IDF Unit 81.",
        bio: "Specializes in digital board design and reverse engineering, with a background in precision electronics for high-stakes environments. Oversees embedded firmware development and controller programming.",
        image: "/team/omri-arbel-neutral.png",
        icon: "/team/icons/omri-cpu.svg",
        linkedin: "https://www.linkedin.com/in/omri-arbel-345796195/",
      },
    ],
    connectLabel: "CONNECT",
    connectTitle: "Select a dedicated communication channel.",
    paths: [
      ["Investors", "Funding round, market path, and investor materials.", "Start an investment conversation", "Plectrum investment conversation"],
      ["Institutional partners", "Pilot design for wellness facilities and support organizations.", "Explore an institutional pilot", "Plectrum institutional pilot"],
      ["Technology & supply chain", "Integration across smart fabrics and software ecosystems.", "Discuss a strategic partnership", "Plectrum strategic partnership"],
      ["Executive team", "A direct 30-minute introduction to Plectrum.", "Schedule a meeting", "Meeting with Plectrum"],
    ],
  },
  he: {
    eyebrow: "החברה",
    title: "בניית השכבה הפיזית של עולם הרווחה המסייעת.",
    intro:
      "פלקטרום משלבת בין תוכנה, פרקטיקות תמיכה ומוצרי קצה לבישים כדי להפוך את הוויסות החושי למדיד, נשלט ונגיש מרחוק. במקביל, פלקטרום מפתחת את FABTIVE, פלטפורמת בד אקטיבי מוגנת פטנט לתחושת מגע רציפה.",
    tractionLabel: "סטטוס נוכחי",
    tractionTitle: "מוצרי קצה פעילים כיום. פלטפורמת בד אקטיבי מוגנת פטנט בעתיד.",
    milestones: [
      ["4", "מוצרי קצה לבישים ופעילים"],
      ["2027", "השקת תוכניות פיילוט מוסדיות"],
      ["ישראל · ארה״ב · אירופה", "פטנט אושר בישראל; ארה״ב ואירופה בתהליכי רישום"],
    ],
    relationshipsLabel: "אימות ושותפויות",
    relationshipsTitle: "מומנטום מוסדי וטכנולוגי.",
    relationships: [
      ["הדסה והדסית", "מכתב כוונות חתום.", "/partners/hadassah-new.png", "relationship-logo--paired", "/partners/hadasit-normalized.png"],
      ["TEFRON", "נחתם NDA, גובש מסמך הבנות.", "/partners/tefron.png", "relationship-logo--square"],
      ["RayQ", "נחתם NDA, גובש מסמך הבנות.", "/partners/ray-q-normalized.png", "relationship-logo--wide"],
      ["עמותת עלה", "מכתב כוונות חתום.", "/partners/aleh-normalized.png", "relationship-logo--tall"],
      ["Buzzy", "", "/partners/buzzy.png", "relationship-logo--wide relationship-logo--buzzy"],
      ["אלו״ט", "", "/partners/alut.png", "relationship-logo--wide"],
      ["האקוטיזם", "", "/partners/hackautism.png", "relationship-logo--wide"],
    ],
    marketLabel: "האסטרטגיה המסחרית",
    marketTitle: "חדירה ממוקדת באמצעות ערוצי מימון ממשלתיים.",
    marketBody:
      "המודל של פלקטרום מתמקד במגזר הרווחה המסייעת (Assistive Wellness) בארצות הברית, תוך פנייה למסלולי מימון ממשלתיים כגון תקציבי דיור תומך (HCBS) ומלגות חינוך (ESA). ההזדמנות נשענת על מודל משולב של חומרה ותוכנה (SaaS):",
    marketMetrics: [
      ["HCBS & ESA", "מיקוד בתקציבי חינוך ורווחה מוסדיים בארה״ב"],
      ["$5K/Year", "תקרת מימון שנתית ממוצעת למשתמש (Enabling Technology)"],
      ["ARPU - $45.20", "הכנסה חודשית ממוצעת צפויה מתוכנה למשתמש (SaaS)"],
      ["$234M+", "פוטנציאל שוק משולב (SAM) במדינות ההשקה הראשוניות"],
    ],
    teamLabel: "הצוות",
    teamTitle: "צוות רב־תחומי המשלב מומחיות עמוקה בהנדסה ובמערכות.",
    team: [
      {
        name: "Gabriel Lev-Har",
        role: "מייסד · מנכ״ל",
        credential: "יוצא יחידה 81 והתעשייה האווירית. MBA.",
        bio: "ארכיטקט מערכות ומוביל עסקי המשלב מומחיות עמוקה בהנדסת מערכות וניסיון מוכח במנהיגות תפעולית. מתמקד בתרגום הנדסה מורכבת לטכנולוגיה מסייעת רחבת-היקף.",
        image: "/team/gabriel-lev-har-neutral.png",
        icon: "/team/icons/gabriel-plectrum-mark.png",
        linkedin: "https://www.linkedin.com/in/gabriel-lev-har-9916573",
      },
      {
        name: "Dr. Nino Rivka Eliahu",
        role: "מובילת תחום חומרים",
        credential: "ניסיון של מעל ל- 25 שנה",
        bio: "מומחיות דיפ-טק בפיתוח חומרים וציפויים מתקדמים. בעלת ניסיון נרחב במחקר ופיתוח של טכנולוגיה לבישה, פולימריזציה, שיטות ציפוי חדשניות, והרחבת תהליכי ייצור לשלבים תעשייתיים.",
        image: "/team/nino-rivka-eliahu-neutral.png",
        icon: "/team/icons/nino-materials.svg",
        linkedin: "https://www.linkedin.com/in/dr-nino-rebecca-eliahu-65037851/",
      },
      {
        name: "Noam Amram",
        role: "מוביל אינטגרציית XR ו־LLM",
        credential: "יוצא יחידה טכנולוגית בצה״ל.",
        bio: "מומחה במערכות סימולציה ובפיתוח תוכנה אינטראקטיבית. מוביל את אינטגרציית המערכות ומתכנן סביבות מגיבות ואימרסיביות לתמיכה חושית.",
        image: "/team/noam-amram-neutral.png",
        icon: "/team/icons/noam-vr-headset.svg",
        linkedin: "https://www.linkedin.com/in/noam-amram",
      },
      {
        name: "Omri Arbel",
        role: "מהנדס חומרה וקושחה בכיר",
        credential: "יוצא יחידה 81.",
        bio: "בעל ניסיון ייחודי בתכנון כרטיסים דיגיטליים ובהנדסה לאחור, עם רקע באלקטרוניקה מדויקת לסביבות עתירות סיכון. מפקח על פיתוח הקושחה המשובצת ותכנות הבקרים.",
        image: "/team/omri-arbel-neutral.png",
        icon: "/team/icons/omri-cpu.svg",
        linkedin: "https://www.linkedin.com/in/omri-arbel-345796195/",
      },
    ],
    connectLabel: "יצירת קשר",
    connectTitle: "בחירת ערוץ תקשורת ממוקד.",
    paths: [
      ["משקיעים", "סבב הגיוס, המסלול לשוק וחומרי המשקיעים.", "פתיחת שיחת השקעה", "שיחת השקעה עם Plectrum"],
      ["שותפים מוסדיים", "עיצוב פיילוט למסגרות רווחה וארגונים תומכים.", "תיאום פיילוט מוסדי", "פיילוט מוסדי עם Plectrum"],
      ["טכנולוגיה ושרשרת אספקה", "אינטגרציה של בדים חכמים ואקו-סיסטם של תוכנה.", "שיחה על שותפות אסטרטגית", "שותפות אסטרטגית עם Plectrum"],
      ["הנהלת החברה", "היכרות ישירה בת 30 דקות עם צוות פלקטרום.", "קביעת פגישה", "פגישה עם צוות Plectrum"],
    ],
  },
  ar: {
    eyebrow: "الشركة",
    title: "نبني طبقة اللمس للرعاية الرقمية.",
    intro:
      "تجمع Plectrum بين البرمجيات والممارسة السريرية والنماذج الأولية القابلة للارتداء لجعل التدخل الجسدي قابلًا للقياس والتحكم والوصول عن بُعد، مع تطوير FABTIVE، منصة نسيج نشط محمية ببراءة للإحساس الجسدي المستمر.",
    tractionLabel: "أين نحن اليوم",
    tractionTitle: "نماذج عاملة اليوم. منصة نسيج محمية ببراءة لاحقًا.",
    milestones: [
      ["4", "نماذج أولية عاملة وقابلة للارتداء تعتمد على الاهتزاز"],
      ["2026", "توسيع التجارب السريرية عالميًا"],
      ["$2M", "جولة التمويل الحالية"],
      ["إسرائيل · الولايات المتحدة · أوروبا", "مُنحت البراءة في إسرائيل؛ التسجيل جار في الولايات المتحدة وأوروبا"],
    ],
    relationshipsLabel: "التحقق والعلاقات",
    relationshipsTitle: "زخم سريري وتقني.",
    relationships: [
      ["هداسا", "خطاب نوايا موقع.", "/partners/hadassah-new.png", "relationship-logo--wide"],
      ["IBM", "تطوير بروتوكولات علاج تكيفية بالتعاون المشترك.", "", ""],
    ],
    marketLabel: "المسار التجاري",
    marketTitle: "دخول مركز إلى سوق قابل للقياس.",
    marketBody:
      "يركز نموذج Plectrum الحالي على عيادات العلاج الوظيفي للأطفال في الولايات المتحدة. وتستند الفرصة إلى أربعة افتراضات تجارية واضحة:",
    marketMetrics: [
      ["~5,000", "عيادة علاج وظيفي للأطفال في الولايات المتحدة"],
      ["$450", "إيراد شهري لكل مريض"],
      ["$135", "حصة تكنولوجية شهرية لكل مريض"],
      ["$405M ARR", "إيراد سنوي متكرر محتمل"],
    ],
    teamLabel: "الفريق",
    teamTitle: "فريق متعدد التخصصات وقريب من المشكلة.",
    team: [
      {
        name: "Gabriel Lev-Har",
        role: "المؤسس · الرئيس التنفيذي ومدير التكنولوجيا",
        credential: "خريج الوحدة 81 وIAI. حاصل على MBA.",
        bio: "مهندس أنظمة وقائد أعمال يجمع خبرة عميقة في هندسة الأنظمة مع قيادة تشغيلية مثبتة، منها منصب COO. ملتزم بتحويل الأفكار إلى واقع عبر تكنولوجيا تُحدث فرقًا حقيقيًا في حياة الناس.",
        image: "/team/gabriel-lev-har-neutral.png",
        icon: "/team/icons/gabriel-plectrum-mark.png",
        linkedin: "https://www.linkedin.com/in/gabriel-lev-har-9916573",
      },
      {
        name: "Dr. Nino Rivka Eliahu",
        role: "نائبة الرئيس للعلوم والمواد",
        credential: "PhD",
        bio: "خبيرة في تطوير المواد والطلاءات المتقدمة. تتمتع بخبرة واسعة في البحث والتطوير للأجهزة الطبية والبلمرة وطرق الطلاء المبتكرة، والتوسع الصناعي والتصنيع.",
        image: "/team/nino-rivka-eliahu-neutral.png",
        icon: "/team/icons/nino-materials.svg",
        linkedin: "https://www.linkedin.com/in/dr-nino-rebecca-eliahu-65037851/",
      },
      {
        name: "Noam Amram",
        role: "قائد تكامل XR وLLM",
        credential: "خريج وحدة تكنولوجية في الجيش الإسرائيلي.",
        bio: "متخصص في أنظمة محاكاة XR وتطوير البرمجيات التفاعلية. يقود تكامل الأنظمة وتصميم تجارب XR غامرة ومتقدمة.",
        image: "/team/noam-amram-neutral.png",
        icon: "/team/icons/noam-vr-headset.svg",
        linkedin: "https://www.linkedin.com/in/noam-amram",
      },
      {
        name: "Omri Arbel",
        role: "مهندس أول للأجهزة والبرامج الثابتة",
        credential: "خريج الوحدة 81.",
        bio: "متخصص في تصميم اللوحات الرقمية والهندسة العكسية، مع خلفية في الإلكترونيات العسكرية والطبية عالية الحساسية. قائد تقني يشرف أيضًا على تطوير البرامج الثابتة المدمجة وبرمجة المتحكمات.",
        image: "/team/omri-arbel-neutral.png",
        icon: "/team/icons/omri-cpu.svg",
        linkedin: "https://www.linkedin.com/in/omri-arbel-345796195/",
      },
    ],
    connectLabel: "تواصل معنا",
    connectTitle: "اختر المحادثة التي تناسبك.",
    paths: [
      ["المستثمرون", "جولة التمويل والمسار إلى السوق ومواد المستثمرين.", "ابدأ محادثة استثمار", "محادثة استثمار مع Plectrum"],
      ["الشركاء السريريون", "تصميم تجربة للعيادات والمستشفيات.", "استكشف تجربة سريرية", "تجربة سريرية مع Plectrum"],
      ["التكنولوجيا والنسيج", "تكامل عبر الأقمشة والبرمجيات والأنظمة الغامرة.", "ناقش شراكة استراتيجية", "شراكة استراتيجية مع Plectrum"],
      ["قابل الفريق", "تعريف مباشر بـPlectrum لمدة 30 دقيقة.", "حدد موعدًا", "لقاء مع فريق Plectrum"],
    ],
  },
  ru: {
    eyebrow: "КОМПАНИЯ",
    title: "Создаём тактильный слой цифровой медицины.",
    intro:
      "Plectrum объединяет ПО, клиническую практику и функциональные носимые прототипы, чтобы сделать физическое вмешательство измеримым, управляемым и доступным на расстоянии, одновременно развивая FABTIVE — запатентованную платформу активной ткани для непрерывного физического ощущения.",
    tractionLabel: "ГДЕ МЫ СЕЙЧАС",
    tractionTitle: "Рабочие прототипы сегодня. Запатентованная текстильная платформа дальше.",
    milestones: [
      ["4", "работающих носимых прототипа на основе вибрации"],
      ["2026", "международное расширение клинических пилотов"],
      ["$2M", "текущий инвестиционный раунд"],
      ["Израиль · США · Европа", "патент выдан в Израиле; регистрация в США и Европе продолжается"],
    ],
    relationshipsLabel: "ВАЛИДАЦИЯ И ПАРТНЁРСТВА",
    relationshipsTitle: "Клиническая и технологическая динамика.",
    relationships: [
      ["Hadassah", "Подписанное письмо о намерениях.", "/partners/hadassah-new.png", "relationship-logo--wide"],
      ["IBM", "Совместная разработка адаптивных протоколов лечения.", "", ""],
    ],
    marketLabel: "КОММЕРЧЕСКИЙ ПУТЬ",
    marketTitle: "Сфокусированный выход на измеримый рынок.",
    marketBody:
      "Текущая модель Plectrum сфокусирована на клиниках детской эрготерапии в США. Возможность опирается на четыре понятные коммерческие предпосылки:",
    marketMetrics: [
      ["~5,000", "клиник детской эрготерапии в США"],
      ["$450", "ежемесячный доход на пациента"],
      ["$135", "ежемесячная технологическая доля на пациента"],
      ["$405M ARR", "потенциальный годовой регулярный доход"],
    ],
    teamLabel: "КОМАНДА",
    teamTitle: "Междисциплинарная команда, близкая к проблеме.",
    team: [
      {
        name: "Gabriel Lev-Har",
        role: "Основатель · CEO и CTO",
        credential: "Ветеран подразделения 81 и IAI. MBA.",
        bio: "Системный архитектор и бизнес-лидер с глубокой экспертизой в системной инженерии и подтверждённым опытом операционного управления, включая роль COO. Превращает идеи в технологии, значимые для жизни людей.",
        image: "/team/gabriel-lev-har-neutral.png",
        icon: "/team/icons/gabriel-plectrum-mark.png",
        linkedin: "https://www.linkedin.com/in/gabriel-lev-har-9916573",
      },
      {
        name: "Dr. Nino Rivka Eliahu",
        role: "VP по науке и материалам",
        credential: "PhD",
        bio: "Эксперт по передовым материалам и покрытиям. Обширный опыт R&D медицинских устройств, полимеризации, инновационных методов нанесения покрытий, масштабирования и производства.",
        image: "/team/nino-rivka-eliahu-neutral.png",
        icon: "/team/icons/nino-materials.svg",
        linkedin: "https://www.linkedin.com/in/dr-nino-rebecca-eliahu-65037851/",
      },
      {
        name: "Noam Amram",
        role: "Руководитель интеграции XR и LLM",
        credential: "Ветеран технологического подразделения ЦАХАЛ.",
        bio: "Специалист по XR-симуляциям и интерактивному ПО. Руководит системной интеграцией и проектирует высокотехнологичные иммерсивные XR-среды.",
        image: "/team/noam-amram-neutral.png",
        icon: "/team/icons/noam-vr-headset.svg",
        linkedin: "https://www.linkedin.com/in/noam-amram",
      },
      {
        name: "Omri Arbel",
        role: "Старший инженер аппаратного и встроенного ПО",
        credential: "Ветеран подразделения 81.",
        bio: "Специалист по цифровым платам и обратной инженерии с опытом в военной и медицинской электронике. Ключевой технический лидер, отвечающий также за встроенное ПО и программирование контроллеров.",
        image: "/team/omri-arbel-neutral.png",
        icon: "/team/icons/omri-cpu.svg",
        linkedin: "https://www.linkedin.com/in/omri-arbel-345796195/",
      },
    ],
    connectLabel: "СВЯЗАТЬСЯ",
    connectTitle: "Выберите подходящий формат разговора.",
    paths: [
      ["Инвесторам", "Раунд, рыночная стратегия и материалы для инвесторов.", "Обсудить инвестиции", "Инвестиции в Plectrum"],
      ["Клиническим партнёрам", "Проектирование пилота для клиник и больниц.", "Обсудить клинический пилот", "Клинический пилот Plectrum"],
      ["Технологии и текстиль", "Интеграция тканей, ПО и иммерсивных систем.", "Обсудить стратегическое партнёрство", "Партнёрство с Plectrum"],
      ["Познакомиться с командой", "Прямая 30-минутная встреча с Plectrum.", "Назначить встречу", "Встреча с Plectrum"],
    ],
  },
} as const;

export default function CompanyPage() {
  const { language } = useLanguage();
  const t = copy[language];

  return (
    <SiteShell>
      <section className="page-hero company-hero">
        <div className="page-hero-copy">
          <p className="eyebrow">{t.eyebrow}</p><h1>{t.title}</h1><p>{t.intro}</p>
        </div>
        <div className="company-mark" aria-hidden="true"><Image src="/brand/logo-white.png" alt="" width={460} height={460} priority /></div>
      </section>

      <section className="light-section company-traction">
        <div className="section-heading compact"><p className="eyebrow dark">{t.tractionLabel}</p><h2>{t.tractionTitle}</h2></div>
        <div className="company-milestones">
          {t.milestones.map(([value, label]) => <article key={label}><strong><bdi dir="auto">{value}</bdi></strong><span>{label}</span></article>)}
        </div>
      </section>

      <section className="blue-section relationship-section">
        <div className="section-heading"><p className="eyebrow">{t.relationshipsLabel}</p><h2>{t.relationshipsTitle}</h2></div>
        <div className="relationship-grid relationship-grid--partners">
          {t.relationships.map(([name, body, logo, logoClass, secondaryLogo]) => (
            <article
              className={`relationship-card${logo ? "" : " relationship-card--text-only"}${secondaryLogo ? " relationship-card--paired" : ""}${logo.includes("hackautism") ? " relationship-card--community" : ""}`}
              key={name}
            >
              {logo ? (
                <div className={`relationship-logo ${logoClass}`}>
                  <Image src={logo} alt="" width={280} height={120} loading="lazy" />
                  {secondaryLogo ? <Image src={secondaryLogo} alt="" width={280} height={120} loading="lazy" /> : null}
                </div>
              ) : null}
              <h3>{name}</h3>
              {body ? <p>{body}</p> : null}
            </article>
          ))}
        </div>
      </section>

      <section className="light-section market-section">
        <div className="market-copy">
          <p className="eyebrow dark">{t.marketLabel}</p>
          <h2>{t.marketTitle}</h2>
          <p>{t.marketBody}</p>
        </div>
        <div className="market-metrics">
          {t.marketMetrics.map(([value, label], index) => (
            <article className={index === t.marketMetrics.length - 1 ? "market-metric arr" : "market-metric"} key={label}>
              <strong><bdi dir="ltr">{value}</bdi></strong>
              <span>{label}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="team-section">
        <div className="section-heading"><p className="eyebrow">{t.teamLabel}</p><h2>{t.teamTitle}</h2></div>
        <div className="team-grid">
          {t.team.map((member) => {
            const memberKey = member.image.includes("gabriel")
              ? "gabriel"
              : member.image.includes("nino")
                ? "nino"
                : member.image.includes("noam")
                  ? "noam"
                  : "omri";
            const portraitSlug = {
              gabriel: "gabriel-lev-har-neutral",
              nino: "nino-rivka-eliahu-neutral",
              noam: "noam-amram-neutral",
              omri: "omri-arbel-neutral",
            }[memberKey];
            return (
              <article className="team-card" data-member={memberKey} key={member.name}>
                <div className="team-portrait">
                  <picture>
                    <source
                      type="image/avif"
                      srcSet={`/team/optimized/${portraitSlug}-192.avif 192w, /team/optimized/${portraitSlug}-384.avif 384w`}
                      sizes="(max-width: 900px) 104px, 168px"
                    />
                    <source
                      type="image/webp"
                      srcSet={`/team/optimized/${portraitSlug}-192.webp 192w, /team/optimized/${portraitSlug}-384.webp 384w`}
                      sizes="(max-width: 900px) 104px, 168px"
                    />
                    <img
                      src={`/team/optimized/${portraitSlug}-384.webp`}
                      alt={member.name}
                      width={384}
                      height={384}
                      decoding="async"
                      loading="lazy"
                    />
                  </picture>
                </div>
                <div className="team-card-identity">
                  <h3><bdi dir="auto">{member.name}</bdi></h3>
                  <p className="team-role">
                    {/* eslint-disable-next-line @next/next/no-img-element -- small decorative role icons */}
                    <img
                      className="team-role-icon"
                      src={member.icon}
                      alt=""
                      aria-hidden="true"
                      width={18}
                      height={18}
                    />
                    <span><bdi dir="auto">{member.role}</bdi></span>
                  </p>
                  <p className="team-credential"><bdi dir="auto">{member.credential}</bdi></p>
                </div>
                <div className="team-card-body">
                  <div className="team-divider" aria-hidden="true" />
                  <p className="team-bio">{member.bio}</p>
                  {member.linkedin ? (
                    <a
                      className="team-linkedin"
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name} on LinkedIn`}
                    >
                      <span className="team-linkedin-mark" aria-hidden="true">in</span>
                      <span>LinkedIn</span>
                    </a>
                  ) : null}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section className="light-section company-connect" id="connect">
        <div className="section-heading compact"><p className="eyebrow dark">{t.connectLabel}</p><h2>{t.connectTitle}</h2></div>
        <div className="company-contact-strip">
          <a href="mailto:gabriel@plectrum.biz">
            <span>{{ en: "EMAIL", he: "אימייל", ar: "البريد الإلكتروني", ru: "EMAIL" }[language]}</span>
            <strong><bdi dir="ltr">gabriel@plectrum.biz</bdi></strong>
          </a>
          <a href="tel:+972526808756">
            <span>{{ en: "PHONE", he: "טלפון", ar: "الهاتف", ru: "ТЕЛЕФОН" }[language]}</span>
            <strong><bdi dir="ltr">+972 52 680 8756</bdi></strong>
          </a>
          <a href="https://www.linkedin.com/company/plectrum-af/" target="_blank" rel="noreferrer">
            <span>LINKEDIN</span>
            <strong>Plectrum ↗</strong>
          </a>
        </div>
        <div className="pathway-grid">
          {t.paths.map(([title, body, action, subject], index) => (
            <a className="pathway-card" href={`mailto:gabriel@plectrum.biz?subject=${encodeURIComponent(subject)}`} key={title}>
              <span>0{index + 1}</span><h3>{title}</h3><p>{body}</p><strong>{action}<i aria-hidden="true">→</i></strong>
            </a>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
