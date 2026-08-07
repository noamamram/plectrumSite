"use client";

import Image from "next/image";
import { SiteShell } from "../components/SiteShell";
import { useLanguage } from "../components/LanguageProvider";

const copy = {
  en: {
    eyebrow: "COMPANY",
    title: "Building the tactile layer of digital care.",
    intro:
      "Plectrum combines software, clinical practice and wearable validation hardware to make touch measurable, controllable and remotely accessible, while building a patented magnetic-fiber textile platform for continuous touch.",
    tractionLabel: "WHERE WE ARE",
    tractionTitle: "Working prototypes today. Patented textile platform ahead.",
    milestones: [
      ["4", "working vibration-based wearable prototypes"],
      ["2026", "global clinical pilot expansion"],
      ["$2M", "current funding round"],
      ["IL · US · EU", "patent granted in Israel; US and Europe in process"],
    ],
    relationshipsLabel: "VALIDATION & RELATIONSHIPS",
    relationshipsTitle: "Clinical, technical and industrial momentum.",
    relationships: [
      ["Hadassah", "Letter of intent supporting clinical validation."],
      ["IBM", "Adaptive treatment protocols developed in collaboration."],
      ["NILIT + Delta Galil", "Industrial relationships under NDAs."],
    ],
    marketLabel: "COMMERCIAL PATH",
    marketTitle: "A focused entry into a measurable market.",
    marketBody:
      "Plectrum's current model focuses on pediatric occupational therapy clinics in the United States. The opportunity is built from four clear commercial assumptions:",
    marketMetrics: [
      ["~5,000", "pediatric OT clinics in the United States"],
      ["$450", "monthly revenue per patient"],
      ["$135", "monthly technology share per patient"],
      ["$405M ARR", "potential annual recurring revenue"],
    ],
    teamLabel: "THE TEAM",
    teamTitle: "A multidisciplinary team, close to the problem.",
    team: [
      {
        name: "Gabriel Lev-Har",
        role: "Founder; CEO & CTO",
        credential: "Veteran of IDF Unit 81 & IAI. MBA.",
        bio: "System Architect & Business Leader. Combining deep Systems Engineering expertise. Proven operational leadership (Ex. COO). Committed to transforming dreams into reality through technology that makes a meaningful difference in people's lives.",
        image: "/team/team-4.jpeg",
        linkedin: "https://www.linkedin.com/in/gabriel-lev-har-9916573",
      },
      {
        name: "Dr. Nino Rivka Eliahu",
        role: "VP of Science & Materials",
        credential: "Ph.D",
        bio: "Deep tech expertise for developing advanced materials and coatings. Extensive Medical Device R&D, proven experience in polymerization and innovative coating methods, Scale-Up & Manufacturing.",
        image: "/team/team-3.jpeg",
        linkedin: null,
      },
      {
        name: "Noam Amram",
        role: "XR & L.L.M Integration Lead",
        credential: "Veteran of IDF Tech Unit.",
        bio: "Specialist in XR simulation systems & interactive software development. Leading system integration and designing immersive, high-end XR experiences.",
        image: "/team/team-2.jpeg",
        linkedin: "https://www.linkedin.com/in/noam-amram",
      },
      {
        name: "Omri Arbel",
        role: "Senior Hardware & Firmware Eng.",
        credential: "Veteran of IDF Unit 81.",
        bio: "Specialized experience in digital board design and reverse engineering, and a background in high-stakes military and medical-grade electronics. A key technical leader, also overseeing embedded firmware development and controller programming.",
        image: "/team/team-1.jpeg",
        linkedin: null,
      },
    ],
    connectLabel: "CONNECT",
    connectTitle: "Choose the conversation that fits.",
    paths: [
      ["Investors", "Funding round, market path and investor materials.", "Start an investment conversation", "Plectrum investment conversation"],
      ["Clinical partners", "Pilot design for OT clinics, hospitals and rehabilitation centers.", "Explore a clinical pilot", "Plectrum clinical pilot"],
      ["Technology & textile", "Integration across fabrics, software and immersive systems.", "Discuss a strategic partnership", "Plectrum strategic partnership"],
      ["Meet the team", "A direct 30-minute introduction to Plectrum.", "Schedule a meeting", "Meeting with Plectrum"],
    ],
  },
  he: {
    eyebrow: "החברה",
    title: "בונים את שכבת המגע של הטיפול הדיגיטלי.",
    intro:
      "Plectrum מחברת בין תוכנה, פרקטיקה קלינית וחומרת אימות לבישה כדי להפוך מגע למדיד, נשלט ונגיש מרחוק, ובמקביל בונה פלטפורמת בד פטנטית המבוססת על סיבים מגנטיים למגע רציף.",
    tractionLabel: "איפה אנחנו היום",
    tractionTitle: "אבות טיפוס פעילים כיום. פלטפורמת טקסטיל פטנטית בהמשך.",
    milestones: [
      ["4", "אבות טיפוס לבישים ופעילים המבוססים על רטט"],
      ["2026", "הרחבת פיילוטים קליניים בעולם"],
      ["$2M", "סבב הגיוס הנוכחי"],
      ["ישראל · ארה״ב · אירופה", "פטנט אושר בישראל; ארה״ב ואירופה בתהליך"],
    ],
    relationshipsLabel: "אימות וקשרים",
    relationshipsTitle: "תנופה קלינית, טכנולוגית ותעשייתית.",
    relationships: [
      ["הדסה", "מכתב כוונות התומך באימות הקליני."],
      ["IBM", "פיתוח משותף של פרוטוקולי טיפול אדפטיביים."],
      ["NILIT + דלתא גליל", "קשרים תעשייתיים תחת הסכמי סודיות."],
    ],
    marketLabel: "המסלול המסחרי",
    marketTitle: "כניסה ממוקדת לשוק מדיד.",
    marketBody:
      "המודל הנוכחי של Plectrum מתמקד בקליניקות ריפוי בעיסוק לילדים בארצות הברית. ההזדמנות נשענת על ארבע הנחות מסחריות ברורות:",
    marketMetrics: [
      ["~5,000", "קליניקות ריפוי בעיסוק לילדים בארצות הברית"],
      ["$450", "הכנסה חודשית למטופל"],
      ["$135", "חלק טכנולוגי חודשי למטופל"],
      ["$405M ARR", "פוטנציאל הכנסה שנתית חוזרת"],
    ],
    teamLabel: "הצוות",
    teamTitle: "צוות רב־תחומי, קרוב לבעיה.",
    team: [
      {
        name: "Gabriel Lev-Har",
        role: "מייסד; מנכ״ל וסמנכ״ל טכנולוגיות",
        credential: "יוצא יחידה 81 והתעשייה האווירית. MBA.",
        bio: "ארכיטקט מערכות ומוביל עסקי המשלב מומחיות עמוקה בהנדסת מערכות. בעל ניסיון מוכח במנהיגות תפעולית, לרבות בתפקיד COO. מחויב להפוך חלומות למציאות באמצעות טכנולוגיה שיוצרת שינוי משמעותי בחייהם של אנשים.",
        image: "/team/team-4.jpeg",
        linkedin: "https://www.linkedin.com/in/gabriel-lev-har-9916573",
      },
      {
        name: "Dr. Nino Rivka Eliahu",
        role: "סמנכ״לית מדע וחומרים",
        credential: "Ph.D",
        bio: "מומחיות דיפ־טק בפיתוח חומרים וציפויים מתקדמים. ניסיון נרחב במחקר ופיתוח של מכשור רפואי, בפולימריזציה ובשיטות ציפוי חדשניות, וכן בהגדלת קנה מידה ובייצור.",
        image: "/team/team-3.jpeg",
        linkedin: null,
      },
      {
        name: "Noam Amram",
        role: "מוביל אינטגרציית XR ו־L.L.M",
        credential: "יוצא יחידה טכנולוגית בצה״ל.",
        bio: "מומחה במערכות סימולציית XR ובפיתוח תוכנה אינטראקטיבית. מוביל אינטגרציית מערכות ומתכנן חוויות XR אימרסיביות ומתקדמות.",
        image: "/team/team-2.jpeg",
        linkedin: "https://www.linkedin.com/in/noam-amram",
      },
      {
        name: "Omri Arbel",
        role: "מהנדס חומרה וקושחה בכיר",
        credential: "יוצא יחידה 81.",
        bio: "בעל ניסיון ייחודי בתכנון כרטיסים דיגיטליים ובהנדסה לאחור, עם רקע באלקטרוניקה צבאית ואלקטרוניקה רפואית בסביבות עתירות סיכון. מוביל טכנולוגי מרכזי האחראי גם על פיתוח קושחה משובצת ותכנות בקרים.",
        image: "/team/team-1.jpeg",
        linkedin: null,
      },
    ],
    connectLabel: "יצירת קשר",
    connectTitle: "בחרו את השיחה שמתאימה לכם.",
    paths: [
      ["משקיעים", "סבב הגיוס, המסלול לשוק וחומרי המשקיעים.", "פתיחת שיחת השקעה", "שיחת השקעה עם Plectrum"],
      ["שותפים קליניים", "בניית פיילוט לקליניקות, בתי חולים ומרכזי שיקום.", "בדיקת פיילוט קליני", "פיילוט קליני עם Plectrum"],
      ["טכנולוגיה וטקסטיל", "אינטגרציה בבדים, בתוכנה ובמערכות אימרסיביות.", "שיחה על שותפות אסטרטגית", "שותפות אסטרטגית עם Plectrum"],
      ["פגישה עם הצוות", "היכרות ישירה בת 30 דקות עם Plectrum.", "קביעת פגישה", "פגישה עם צוות Plectrum"],
    ],
  },
  ar: {
    eyebrow: "الشركة",
    title: "نبني طبقة اللمس للرعاية الرقمية.",
    intro:
      "تجمع Plectrum بين البرمجيات والممارسة السريرية وأجهزة التحقق القابلة للارتداء لجعل اللمس قابلًا للقياس والتحكم والوصول عن بُعد، مع بناء منصة نسيجية محمية ببراءة تعتمد على الألياف المغناطيسية للمس المستمر.",
    tractionLabel: "أين نحن اليوم",
    tractionTitle: "نماذج عاملة اليوم. منصة نسيج محمية ببراءة لاحقًا.",
    milestones: [
      ["4", "نماذج أولية عاملة وقابلة للارتداء تعتمد على الاهتزاز"],
      ["2026", "توسيع التجارب السريرية عالميًا"],
      ["$2M", "جولة التمويل الحالية"],
      ["إسرائيل · الولايات المتحدة · أوروبا", "مُنحت البراءة في إسرائيل؛ التسجيل جار في الولايات المتحدة وأوروبا"],
    ],
    relationshipsLabel: "التحقق والعلاقات",
    relationshipsTitle: "زخم سريري وتقني وصناعي.",
    relationships: [
      ["هداسا", "خطاب نوايا يدعم التحقق السريري."],
      ["IBM", "تطوير بروتوكولات علاج تكيفية بالتعاون المشترك."],
      ["NILIT + Delta Galil", "علاقات صناعية بموجب اتفاقيات سرية."],
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
        role: "المؤسس؛ الرئيس التنفيذي ومدير التكنولوجيا",
        credential: "خريج الوحدة 81 وIAI. حاصل على MBA.",
        bio: "مهندس أنظمة وقائد أعمال يجمع خبرة عميقة في هندسة الأنظمة مع قيادة تشغيلية مثبتة، منها منصب COO. ملتزم بتحويل الأفكار إلى واقع عبر تكنولوجيا تُحدث فرقًا حقيقيًا في حياة الناس.",
        image: "/team/team-4.jpeg",
        linkedin: "https://www.linkedin.com/in/gabriel-lev-har-9916573",
      },
      {
        name: "Dr. Nino Rivka Eliahu",
        role: "نائبة الرئيس للعلوم والمواد",
        credential: "Ph.D",
        bio: "خبيرة في تطوير المواد والطلاءات المتقدمة. تتمتع بخبرة واسعة في البحث والتطوير للأجهزة الطبية والبلمرة وطرق الطلاء المبتكرة، والتوسع الصناعي والتصنيع.",
        image: "/team/team-3.jpeg",
        linkedin: null,
      },
      {
        name: "Noam Amram",
        role: "قائد تكامل XR وL.L.M",
        credential: "خريج وحدة تكنولوجية في الجيش الإسرائيلي.",
        bio: "متخصص في أنظمة محاكاة XR وتطوير البرمجيات التفاعلية. يقود تكامل الأنظمة وتصميم تجارب XR غامرة ومتقدمة.",
        image: "/team/team-2.jpeg",
        linkedin: "https://www.linkedin.com/in/noam-amram",
      },
      {
        name: "Omri Arbel",
        role: "مهندس أول للأجهزة والبرامج الثابتة",
        credential: "خريج الوحدة 81.",
        bio: "متخصص في تصميم اللوحات الرقمية والهندسة العكسية، مع خلفية في الإلكترونيات العسكرية والطبية عالية الحساسية. قائد تقني يشرف أيضًا على تطوير البرامج الثابتة المدمجة وبرمجة المتحكمات.",
        image: "/team/team-1.jpeg",
        linkedin: null,
      },
    ],
    connectLabel: "تواصل معنا",
    connectTitle: "اختر المحادثة التي تناسبك.",
    paths: [
      ["المستثمرون", "جولة التمويل والمسار إلى السوق ومواد المستثمرين.", "ابدأ محادثة استثمار", "محادثة استثمار مع Plectrum"],
      ["الشركاء السريريون", "تصميم تجربة للعيادات والمستشفيات ومراكز التأهيل.", "استكشف تجربة سريرية", "تجربة سريرية مع Plectrum"],
      ["التكنولوجيا والنسيج", "تكامل عبر الأقمشة والبرمجيات والأنظمة الغامرة.", "ناقش شراكة استراتيجية", "شراكة استراتيجية مع Plectrum"],
      ["قابل الفريق", "تعريف مباشر بـPlectrum لمدة 30 دقيقة.", "حدد موعدًا", "لقاء مع فريق Plectrum"],
    ],
  },
  ru: {
    eyebrow: "КОМПАНИЯ",
    title: "Создаём тактильный слой цифровой медицины.",
    intro:
      "Plectrum объединяет ПО, клиническую практику и носимое оборудование для валидации, чтобы сделать прикосновение измеримым, управляемым и доступным на расстоянии, одновременно создавая запатентованную текстильную платформу с магнитными волокнами для непрерывного прикосновения.",
    tractionLabel: "ГДЕ МЫ СЕЙЧАС",
    tractionTitle: "Рабочие прототипы сегодня. Запатентованная текстильная платформа дальше.",
    milestones: [
      ["4", "работающих носимых прототипа на основе вибрации"],
      ["2026", "международное расширение клинических пилотов"],
      ["$2M", "текущий инвестиционный раунд"],
      ["Израиль · США · Европа", "патент выдан в Израиле; регистрация в США и Европе продолжается"],
    ],
    relationshipsLabel: "ВАЛИДАЦИЯ И ПАРТНЁРСТВА",
    relationshipsTitle: "Клиническая, технологическая и промышленная динамика.",
    relationships: [
      ["Hadassah", "Письмо о намерениях в поддержку клинической валидации."],
      ["IBM", "Совместная разработка адаптивных протоколов лечения."],
      ["NILIT + Delta Galil", "Промышленные отношения в рамках NDA."],
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
        role: "Основатель; CEO и CTO",
        credential: "Ветеран подразделения 81 и IAI. MBA.",
        bio: "Системный архитектор и бизнес-лидер с глубокой экспертизой в системной инженерии и подтверждённым опытом операционного управления, включая роль COO. Превращает идеи в технологии, значимые для жизни людей.",
        image: "/team/team-4.jpeg",
        linkedin: "https://www.linkedin.com/in/gabriel-lev-har-9916573",
      },
      {
        name: "Dr. Nino Rivka Eliahu",
        role: "VP по науке и материалам",
        credential: "Ph.D",
        bio: "Эксперт по передовым материалам и покрытиям. Обширный опыт R&D медицинских устройств, полимеризации, инновационных методов нанесения покрытий, масштабирования и производства.",
        image: "/team/team-3.jpeg",
        linkedin: null,
      },
      {
        name: "Noam Amram",
        role: "Руководитель интеграции XR и L.L.M",
        credential: "Ветеран технологического подразделения ЦАХАЛ.",
        bio: "Специалист по XR-симуляциям и интерактивному ПО. Руководит системной интеграцией и проектирует высокотехнологичные иммерсивные XR-среды.",
        image: "/team/team-2.jpeg",
        linkedin: "https://www.linkedin.com/in/noam-amram",
      },
      {
        name: "Omri Arbel",
        role: "Старший инженер аппаратного и встроенного ПО",
        credential: "Ветеран подразделения 81.",
        bio: "Специалист по цифровым платам и обратной инженерии с опытом в военной и медицинской электронике. Ключевой технический лидер, отвечающий также за встроенное ПО и программирование контроллеров.",
        image: "/team/team-1.jpeg",
        linkedin: null,
      },
    ],
    connectLabel: "СВЯЗАТЬСЯ",
    connectTitle: "Выберите подходящий формат разговора.",
    paths: [
      ["Инвесторам", "Раунд, рыночная стратегия и материалы для инвесторов.", "Обсудить инвестиции", "Инвестиции в Plectrum"],
      ["Клиническим партнёрам", "Проектирование пилота для клиник, больниц и центров реабилитации.", "Обсудить клинический пилот", "Клинический пилот Plectrum"],
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
        <div className="relationship-grid">
          {t.relationships.map(([name, body]) => <article key={name}><h3>{name}</h3><p>{body}</p></article>)}
        </div>
      </section>

      <section className="light-section market-section">
        <div><p className="eyebrow dark">{t.marketLabel}</p><h2>{t.marketTitle}</h2></div>
        <div className="market-case">
          <p>{t.marketBody}</p>
          <div className="market-metrics">
            {t.marketMetrics.map(([value, label], index) => (
              <article className={index === t.marketMetrics.length - 1 ? "market-metric arr" : "market-metric"} key={label}>
                <strong><bdi dir="ltr">{value}</bdi></strong>
                <span>{label}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="team-section">
        <div className="section-heading"><p className="eyebrow">{t.teamLabel}</p><h2>{t.teamTitle}</h2></div>
        <div className="team-grid">
          {t.team.map((member) => (
            <article className="team-card" key={member.name}>
              <div className="team-portrait">
                <Image src={member.image} alt={member.name} fill sizes="(max-width: 820px) 100vw, 50vw" />
              </div>
              <div className="team-card-copy">
                <h3>{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-credential">{member.credential}</p>
                <p className="team-bio">{member.bio}</p>
                {member.linkedin ? (
                  <a
                    className="team-linkedin"
                    href={member.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${member.name} on LinkedIn`}
                  >
                    in <span>LinkedIn</span>
                  </a>
                ) : null}
              </div>
            </article>
          ))}
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
