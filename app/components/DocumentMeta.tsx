"use client";

import { usePathname } from "next/navigation";
import { useLayoutEffect } from "react";
import { useLanguage } from "./LanguageProvider";
import type { Language } from "./language";

const metaByRoute: Record<
  string,
  Record<Language, { title: string; description: string }>
> = {
  "/": {
    en: {
      title: "Plectrum | Remote Sensory Integration",
      description:
        "Plectrum enables measurable, software-controlled physical intervention through precision vibration prototypes and the patented FABTIVE active-fabric platform.",
    },
    he: {
      title: "Plectrum | אינטגרציה חושית מרחוק",
      description:
        "Plectrum מאפשרת התערבות פיזית מדידה הנשלטת בתוכנה באמצעות אבות טיפוס של רטט מדויק ופלטפורמת FABTIVE לבד אקטיבי.",
    },
    ar: {
      title: "Plectrum | تكامل حسي عن بُعد",
      description:
        "تتيح Plectrum تدخلاً جسديًا قابلاً للقياس والتحكم عبر نماذج اهتزاز دقيقة ومنصة FABTIVE للنسيج النشط.",
    },
    ru: {
      title: "Plectrum | Дистанционная сенсорная интеграция",
      description:
        "Plectrum обеспечивает измеримое программное физическое вмешательство через вибрационные прототипы и запатентованную платформу активной ткани FABTIVE.",
    },
  },
  "/technology": {
    en: {
      title: "Technology | Plectrum",
      description:
        "Working vibration prototypes for current validation work and FABTIVE, the patented active-fabric platform for continuous sensory integration.",
    },
    he: {
      title: "טכנולוגיה | Plectrum",
      description:
        "אבות טיפוס רטט לעבודת אימות נוכחית ו־FABTIVE, פלטפורמת הבד האקטיבי הפטנטית לאינטגרציה חושית רציפה.",
    },
    ar: {
      title: "التكنولوجيا | Plectrum",
      description:
        "نماذج اهتزاز لأعمال التحقق الحالية وFABTIVE، منصة النسيج النشط المحمية ببراءة للتكامل الحسي المستمر.",
    },
    ru: {
      title: "Технология | Plectrum",
      description:
        "Вибрационные прототипы для текущей валидации и FABTIVE — запатентованная платформа активной ткани для непрерывной сенсорной интеграции.",
    },
  },
  "/clinical": {
    en: {
      title: "Clinical | Plectrum",
      description:
        "Professional sensory integration with working vibration prototypes and FABTIVE active fabric for continuous physical sensation.",
    },
    he: {
      title: "היישום הקליני | Plectrum",
      description:
        "אינטגרציה חושית מקצועית עם אבות טיפוס רטט ו־FABTIVE, בד אקטיבי לתחושה פיזית רציפה.",
    },
    ar: {
      title: "التطبيق السريري | Plectrum",
      description:
        "تكامل حسي مهني مع نماذج اهتزاز عاملة ونسيج FABTIVE النشط للإحساس الجسدي المستمر.",
    },
    ru: {
      title: "Клиническое применение | Plectrum",
      description:
        "Профессиональная сенсорная интеграция с вибрационными прототипами и активной тканью FABTIVE.",
    },
  },
  "/prototypes": {
    en: {
      title: "Prototypes | Plectrum",
      description:
        "Explore Plectrum's four functional vibration prototypes in 3D, distinct from the patented FABTIVE active-fabric platform.",
    },
    he: {
      title: "אבות טיפוס | Plectrum",
      description:
        "גלו בתלת־ממד את ארבעת אבות הטיפוס הפונקציונליים של Plectrum, הנפרדים מפלטפורמת FABTIVE.",
    },
    ar: {
      title: "النماذج الأولية | Plectrum",
      description:
        "استكشف نماذج Plectrum الأربعة الوظيفية ثلاثية الأبعاد، وهي مختلفة عن منصة FABTIVE.",
    },
    ru: {
      title: "Прототипы | Plectrum",
      description:
        "Изучите четыре функциональных вибрационных прототипа Plectrum в 3D, отдельно от платформы FABTIVE.",
    },
  },
  "/company": {
    en: {
      title: "Company | Plectrum",
      description:
        "Plectrum combines software, clinical practice and wearable prototypes while developing FABTIVE active fabric.",
    },
    he: {
      title: "החברה | Plectrum",
      description:
        "Plectrum מחברת תוכנה, פרקטיקה קלינית ואבות טיפוס לבישים, ומפתחת את FABTIVE.",
    },
    ar: {
      title: "الشركة | Plectrum",
      description:
        "تجمع Plectrum بين البرمجيات والممارسة السريرية والنماذج القابلة للارتداء مع تطوير FABTIVE.",
    },
    ru: {
      title: "Компания | Plectrum",
      description:
        "Plectrum объединяет ПО, клиническую практику и носимые прототипы, развивая FABTIVE.",
    },
  },
};

export function DocumentMeta() {
  const { language } = useLanguage();
  const pathname = usePathname();
  const route = pathname?.split("#")[0] || "/";
  const meta = metaByRoute[route]?.[language] ?? metaByRoute["/"][language];

  useLayoutEffect(() => {
    document.title = meta.title;
    const description = document.querySelector('meta[name="description"]');
    if (description) {
      description.setAttribute("content", meta.description);
    } else {
      const tag = document.createElement("meta");
      tag.name = "description";
      tag.content = meta.description;
      document.head.appendChild(tag);
    }
  }, [meta.description, meta.title]);

  return null;
}
