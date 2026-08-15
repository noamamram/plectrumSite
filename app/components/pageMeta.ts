import type { Language } from "./language";

/** Nav-aligned page labels used in document titles: `[label] | Plectrum` */
export const pageLabels: Record<string, Record<Language, string>> = {
  "/": {
    en: "Remote Sensory Integration",
    he: "אינטגרציה חושית מרחוק",
    ar: "تكامل حسي عن بُعد",
    ru: "Дистанционная сенсорная интеграция",
  },
  "/technology": {
    en: "Technology",
    he: "טכנולוגיה",
    ar: "التكنولوجيا",
    ru: "Технология",
  },
  "/clinical": {
    en: "Clinical",
    he: "היישום הקליני",
    ar: "التطبيق السريري",
    ru: "Клиника",
  },
  "/prototypes": {
    en: "Prototypes",
    he: "אבות טיפוס",
    ar: "النماذج الأولية",
    ru: "Прототипы",
  },
  "/company": {
    en: "Company",
    he: "החברה",
    ar: "الشركة",
    ru: "Компания",
  },
};

const descriptions: Record<string, Record<Language, string>> = {
  "/": {
    en: "Plectrum enables measurable, software-controlled physical intervention through precision vibration prototypes and the patented FABTIVE active-fabric platform.",
    he: "Plectrum מאפשרת התערבות פיזית מדידה הנשלטת בתוכנה באמצעות אבות טיפוס של רטט מדויק ופלטפורמת FABTIVE לבד אקטיבי.",
    ar: "تتيح Plectrum تدخلاً جسديًا قابلاً للقياس والتحكم عبر نماذج اهتزاز دقيقة ومنصة FABTIVE للنسيج النشط.",
    ru: "Plectrum обеспечивает измеримое программное физическое вмешательство через вибрационные прототипы и запатентованную платформу активной ткани FABTIVE.",
  },
  "/technology": {
    en: "Working vibration prototypes for current validation work and FABTIVE, the patented active-fabric platform for continuous sensory integration.",
    he: "אבות טיפוס רטט לעבודת אימות נוכחית ו־FABTIVE, פלטפורמת הבד האקטיבי הפטנטית לאינטגרציה חושית רציפה.",
    ar: "نماذج اهتزاز لأعمال التحقق الحالية وFABTIVE، منصة النسيج النشط المحمية ببراءة للتكامل الحسي المستمر.",
    ru: "Вибрационные прототипы для текущей валидации и FABTIVE — запатентованная платформа активной ткани для непрерывной сенсорной интеграции.",
  },
  "/clinical": {
    en: "Professional sensory integration with working vibration prototypes and FABTIVE active fabric for continuous physical sensation.",
    he: "אינטגרציה חושית מקצועית עם אבות טיפוס רטט ו־FABTIVE, בד אקטיבי לתחושה פיזית רציפה.",
    ar: "تكامل حسي مهني مع نماذج اهتزاز عاملة ونسيج FABTIVE النشط للإحساس الجسدي المستمر.",
    ru: "Профессиональная сенсорная интеграция с вибрационными прототипами и активной тканью FABTIVE.",
  },
  "/prototypes": {
    en: "Explore Plectrum's four functional vibration prototypes in 3D, distinct from the patented FABTIVE active-fabric platform.",
    he: "גלו בתלת־ממד את ארבעת אבות הטיפוס הפונקציונליים של Plectrum, הנפרדים מפלטפורמת FABTIVE.",
    ar: "استكشف نماذج Plectrum الأربعة الوظيفية ثلاثية الأبعاد، وهي مختلفة عن منصة FABTIVE.",
    ru: "Изучите четыре функциональных вибрационных прототипа Plectrum в 3D, отдельно от платформы FABTIVE.",
  },
  "/company": {
    en: "Plectrum combines software, clinical practice and wearable prototypes while developing FABTIVE active fabric.",
    he: "Plectrum מחברת תוכנה, פרקטיקה קלינית ואבות טיפוס לבישים, ומפתחת את FABTIVE.",
    ar: "تجمع Plectrum بين البرمجيات والممارسة السريرية والنماذج القابلة للارتداء مع تطوير FABTIVE.",
    ru: "Plectrum объединяет ПО, клиническую практику и носимые прототипы, развивая FABTIVE.",
  },
};

export function localizedTitle(route: string, language: Language): string {
  if (route === "/") {
    return `Plectrum | ${pageLabels["/"][language]}`;
  }
  const label = pageLabels[route]?.[language] ?? pageLabels["/"][language];
  return `${label} | Plectrum`;
}

export function localizedDescription(route: string, language: Language): string {
  return descriptions[route]?.[language] ?? descriptions["/"][language];
}

export function getRouteMeta(route: string, language: Language) {
  return {
    title: localizedTitle(route, language),
    description: localizedDescription(route, language),
  };
}
