"use client";

import { useCallback, useEffect, useState, type KeyboardEvent } from "react";
import { ModelScene } from "../components/ModelScene";
import { IllustrativeNote } from "../components/IllustrativeNote";
import { SiteShell } from "../components/SiteShell";
import { TextWithNoBreak } from "../components/TextWithNoBreak";
import { useLanguage } from "../components/LanguageProvider";

const PRODUCT_ORDER = ["shirt", "sleeve", "cap", "glove"] as const;
type ProductId = (typeof PRODUCT_ORDER)[number];

const PRODUCT_POSTERS: Record<ProductId, string> = {
  shirt: "/media/hero-products-v3.png",
  sleeve: "/media/hero-products-v3.png",
  cap: "/media/hero-products-v3.png",
  glove: "/media/hero-products-v3.png",
};

/** Shared group poster focus when WebGL fallback is required. */
const PRODUCT_POSTER_FOCUS: Record<ProductId, string> = {
  shirt: "22% 45%",
  sleeve: "62% 40%",
  cap: "48% 18%",
  glove: "82% 72%",
};

const GROUP_POSTER_LABEL = {
  en: "Illustrative overview of Plectrum wearable prototypes",
  he: "תמונה להמחשה של אבות הטיפוס הלבישים של Plectrum",
  ar: "صورة توضيحية لنماذج Plectrum القابلة للارتداء",
  ru: "Иллюстративный обзор носимых прототипов Plectrum",
} as const;

type ProductStory = {
  opening: string;
  body: string;
  closing: string;
};

type ProductEntry = {
  id: ProductId;
  name: string;
  path: string;
  tag: string;
  body: string;
  use: string;
  story: ProductStory;
};

const products: Record<"en" | "he" | "ar" | "ru", Record<ProductId, Omit<ProductEntry, "id">>> = {
  en: {
    shirt: {
      name: "Plectrum CoreShirt",
      path: "/models/shirt.glb",
      tag: "Full upper torso",
      body: "A snug, skin-friendly sensory shirt featuring up to 24 independently controlled vibration points across the upper body.",
      use: "Provides broad sensory support, regulation, and relaxation for structured sessions and daily routines, self-operated or companion-led.",
      story: {
        opening: "The essential need for calm and sensory balance led to an enclosing technological solution.",
        body: "Plectrum CoreShirt was designed to deliver a continuous, controlled touch sensation that supports overall well-being. A smart, autonomous, and precise solution offering full personalization of vibration intensity and patterns across the chest, back, shoulders, and arms, operated independently or by a companion.",
        closing: "Plectrum CoreShirt: technology that wraps you in quiet.",
      },
    },
    sleeve: {
      name: "Plectrum MultiWrap",
      path: "/models/sleeve.glb",
      tag: "Targeted multi-zone",
      body: "A versatile multi-use sleeve designed for shoulders, limbs, or torso, containing up to 24 controlled vibration points.",
      use: "Delivers sensory focus, stress relief, and interactive remote touch experiences in a flexible, compact form factor.",
      story: {
        opening: "Professional field insights inspired a versatile and adaptable sensory wrap.",
        body: "Plectrum MultiWrap was engineered to offer maximum flexibility in delivering personalized tactile feedback. A compact, precise solution supporting continuity between professional environments and daily home life, allowing complete remote or local control over vibration placement and timing.",
        closing: "Plectrum MultiWrap: flexible support anywhere, anytime.",
      },
    },
    cap: {
      name: "Plectrum RelaxCap",
      path: "/models/hat.glb",
      tag: "Cranial modulation",
      body: "A smart wearable for continuous use, delivering controlled cranial vibration to support personal well-being and alleviate stress.",
      use: "Operates autonomously or via remote control, helping soothe the user upon detecting strong movements or restlessness.",
      story: {
        opening: "A focused effort to alleviate sensory overload led to a unique wearable design.",
        body: "Plectrum RelaxCap was created specifically to support personal wellness and restore quiet in the home environment. A smart, autonomous solution that activates during times of restlessness or via remote command, providing fully customizable vibration patterns suited to individual needs.",
        closing: "Plectrum RelaxCap: smart touch that supports your calm.",
      },
    },
    glove: {
      name: "Plectrum Glove",
      path: "/models/glove.glb",
      tag: "Hand & fine interaction",
      body: "A smart glove combining up to 13 vibration points across the palm and back of the hand to promote serenity and sensory focus.",
      use: "Detailed tactile guidance, fine motor interaction, and an immersive connection to VR and XR environments.",
      story: {
        opening: "The search for targeted tactile feedback at the fingertips inspired an interactive glove.",
        body: "Plectrum Glove delivers vibro-tactile stimulation that fosters calm and focus. It serves as an experiential tool both in daily environments and within virtual reality setups, allowing full customization of vibration sequences by the user or companion.",
        closing: "Plectrum Glove: precise touch that helps restore balance.",
      },
    },
  },
  he: {
    shirt: {
      name: "Plectrum CoreShirt",
      path: "/models/shirt.glb",
      tag: "פלג גוף עליון",
      body: "חולצה תחושתית צמודה מבד נעים לעור, המשלבת עד 24 מוקדי רטט נשלטים בפלג הגוף העליון.",
      use: "מעניקה תמיכה בתחושת רוגע, איזון חושי ווויסות במפגשים מובנים ובשגרה היומית, בהפעלה עצמית או על ידי מלווה.",
      story: {
        opening: "הצורך ברוגע ובאיזון חושי הוביל ליצירת פתרון טכנולוגי עוטף.",
        body: "החולצה תוכננה לספק תחושת מגע מבוקרת ומתמשכת התומכת ברווחת המשתמש. פתרון חכם, אוטונומי ומדויק המאפשר התאמה אישית מלאה ורציפה של עוצמת ותבניות הרטט בבטן, בגב, בכתפיים ובזרועות, בהפעלה עצמית או בשליטה מרחוק.",
        closing: "Plectrum CoreShirt: טכנולוגיה שעוטפת בשקט.",
      },
    },
    sleeve: {
      name: "Plectrum MultiWrap",
      path: "/models/sleeve.glb",
      tag: "רב-אזורי ממוקד",
      body: "מעטפת רב-שימושית להתאמה על הכתפיים, הגפיים או הגו, המכילה עד 24 מוקדי רטט מבוקרים.",
      use: "מיקוד חושי, שחרור מתחים וחוויות מגע אינטראקטיביות בתצורה גמישה, בהפעלה עצמית או על ידי מלווה.",
      story: {
        opening: "דרישות מקצועיות שעלו מהשטח הובילו לפיתוח מעטפת תחושתית ורסטילית.",
        body: "המעטפת תוכננה להעניק גמישות מרבית במתן גירוי חושי מותאם אישית. פתרון קומפקטי ומדויק התומך ברציפות השימוש בין הסביבה המקצועית לבית, ומאפשר שליטה מלאה בתבניות הרטט ובמיקומן לאורך הזרוע והגפיים.",
        closing: "Plectrum MultiWrap: תמיכה גמישה בכל מקום ובכל זמן.",
      },
    },
    cap: {
      name: "Plectrum RelaxCap",
      path: "/models/hat.glb",
      tag: "תחושה באזור הראש",
      body: "כובע חכם לשימוש רציף, המעביר רטט מבוקר באזור הראש להקלה על תחושות עומס ומתח.",
      use: "תמיכה באוטונומיה או בשליטה מרחוק, המסייעת בהרגעת המשתמש בעת זיהוי תנודות חזקות.",
      story: {
        opening: "החיפוש אחר מענה ממוקד להקלת עומסים תחושתיים הוביל לפיתוח לביש ייחודי.",
        body: "הכובע תוכנן במיוחד לספק תמיכה ברווחה האישית ולהחזיר את השקט לסביבה הביתית והאישית. פתרון אוטונומי ומדויק המופעל בעת צורך או בשליטה מרחוק, ומאפשר התאמה מלאה של עוצמת הרטט ודפוסיו לצרכי המשתמש.",
        closing: "Plectrum RelaxCap: מגע חכם שתומך בשלווה שלכם.",
      },
    },
    glove: {
      name: "Plectrum Glove",
      path: "/models/glove.glb",
      tag: "כף יד ואינטראקציה",
      body: "כפפה חכמה המשלבת עד 13 נקודות רטט על גב ופנים כף היד ליצירת רוגע ושקט תחושתי.",
      use: "אינטראקציה מישושית ממוקדת, תמיכה בתנועתיות וחיבור למשחקי VR ומערכות מציאות מדומה.",
      story: {
        opening: "החיפוש אחר משוב חושי ממוקד בקצות האצבעות הוביל לפיתוח כפפה אינטראקטיבית.",
        body: "הכפפה מספקת משוב ויברו-טקטילי המשרה תחושת רוגע ותומך במיקוד ובריכוז. היא משמשת כלי חווייתי הן בסביבה היומיומית והן בשילוב מערכות מציאות מדומה, תוך אפשרות להתאמה אישית מלאה של תבניות הרטט על ידי המשתמש או המלווה.",
        closing: "Plectrum Glove: מגע מדויק שמסייע בהחזרת האיזון.",
      },
    },
  },
  ar: {
    shirt: {
      name: "قميص",
      path: "/models/shirt.glb",
      tag: "كامل الجذع",
      body: "تنظيم لكامل الجذع عبر اهتزاز بدقة عالية يُتحكم به بشكل مستقل.",
      use: "تنظيم واسع وقابل للارتداء للجلسات المنظمة والروتين اليومي.",
      story: {
        opening: "أدت الحاجة الأساسية إلى الهدوء والإشراف إلى ابتكار حل تكنولوجي محيط.",
        body: "صُمم قميص Plectrum لتوفير إحساس لمسي مستمر يساعد على الدعم الحسي للمستخدم. حل ذكي ومستقل ودقيق يهدف إلى الإسهام في شعور الهدوء لدى المستخدم ومحيطه، وتحسين جودة الحياة بوجه عام. تتيح المنظومة تخصيصًا شخصيًا كاملًا ومستمرًا لشدة الاهتزاز وأنماطه وفق احتياجات كل مستخدم، دون الاقتصار على أنماط ثابتة مسبقًا.",
        closing: "قميص Plectrum: تقنية تحيط بالهدوء.",
      },
    },
    sleeve: {
      name: "كُم",
      path: "/models/sleeve.glb",
      tag: "طرف موجه",
      body: "مدخلات حسية موضعية على امتداد الذراع عبر اهتزاز بدقة عالية يُتحكم به بشكل مستقل.",
      use: "تنظيم مركز في شكل مدمج ومرن.",
      story: {
        opening: "متطلبات مهنية طرحها مباشرةً معالجو العلاج الوظيفي في الميدان أدت إلى ابتكار أداة دعم علاجية مطلوبة.",
        body: "صُمم كُم Plectrum لإتاحة المرونة في تقديم تحفيز حسي مخصص. حل ذكي ومتعدد الاستخدامات ودقيق مخصص للاستخدام اليومي السهل، بهدف دعم استمرارية الرعاية بين العيادة والبيئة الطبيعية والمساعدة على تحسين جودة الحياة. تتيح المنظومة تخصيصًا شخصيًا كاملًا ومستمرًا لشدة الاهتزاز وأنماطه وفق احتياجات كل مستخدم، دون الاقتصار على أنماط ثابتة مسبقًا.",
        closing: "كُم Plectrum: دعم مرن في أي مكان وأي وقت.",
      },
    },
    cap: {
      name: "قبعة واقية",
      path: "/models/hat.glb",
      tag: "تعديل للرأس",
      body: "منتج واقٍ قابل للارتداء يوصل اهتزازًا متحكمًا به للرأس لدعم الوقاية من الأزمات.",
      use: "مدخلات موجهة للرأس ضمن شكل واقٍ ومألوف.",
      story: {
        opening: "ليالٍ كاملة من الصراع حوّلت حاجة شخصية إلى حل رائد.",
        body: "صُممت قبعة Plectrum خصيصًا لتلبية الحاجة الحسية، بهدف المساعدة على تحسين جودة الحياة واستعادة الهدوء في المنزل. حل ذكي ومستقل ودقيق يهدف إلى دعم المستخدم في حالات عدم الهدوء أو القلق أو نوبات الانفعال، والمساعدة على خلق بيئة أكثر هدوءًا. تتيح المنظومة تخصيصًا شخصيًا كاملًا ومستمرًا لشدة الاهتزاز وأنماطه وفق احتياجات كل مستخدم، دون الاقتصار على أنماط ثابتة مسبقًا.",
        closing: "قبعة Plectrum: لمسة ذكية تدعم هدوءكم.",
      },
    },
    glove: {
      name: "قفاز",
      path: "/models/glove.glb",
      tag: "حركة دقيقة",
      body: "أنماط اهتزاز مركزة لدعم تدخلات المهارات الحركية الدقيقة.",
      use: "تفاعل وتوجيه لمسي مفصل على مستوى اليد.",
      story: {
        opening: "البحث المستمر عن تحفيز حسي في أطراف الأصابع أدى إلى تطوير حل مركّز.",
        body: "صُمم قفاز Plectrum لتوفير تغذية راجعة اهتزازية لمسية تساعد على خلق شعور بالهدوء وتدعم القدرة على التركيز. حل ذكي وسهل الوصول ودقيق يهدف إلى المساعدة في التنظيم الحسي في حالات القلق، والإسهام في تحسين جودة الحياة اليومية. تتيح المنظومة تخصيصًا شخصيًا كاملًا ومستمرًا لشدة الاهتزاز وأنماطه وفق احتياجات كل مستخدم، دون الاقتصار على أنماط ثابتة مسبقًا.",
        closing: "قفاز Plectrum: لمسة دقيقة تساعد على استعادة التوازن.",
      },
    },
  },
  ru: {
    shirt: {
      name: "Футболка",
      path: "/models/shirt.glb",
      tag: "Весь корпус",
      body: "Регуляция корпуса через высокоточную, независимо управляемую вибрацию.",
      use: "Широкая носимая регуляция для структурированных сессий и повседневной жизни.",
      story: {
        opening: "Базовая потребность в спокойствии и контроле привела к созданию обволакивающего технологического решения.",
        body: "Футболка Plectrum создана, чтобы обеспечить непрерывное ощущение прикосновения, поддерживающее сенсорный опыт пользователя. Умное, автономное и точное решение, призванное способствовать ощущению спокойствия у человека и его окружения и улучшать общее качество жизни. Система позволяет полностью и непрерывно персонализировать интенсивность и рисунки вибрации под уникальные потребности каждого пользователя и не ограничена заранее заданными шаблонами.",
        closing: "Футболка Plectrum: технология, которая обволакивает тишиной.",
      },
    },
    sleeve: {
      name: "Рукав",
      path: "/models/sleeve.glb",
      tag: "Локальное воздействие",
      body: "Локальная сенсорная стимуляция руки через высокоточную, независимо управляемую вибрацию.",
      use: "Точная регуляция в компактном и гибком формате.",
      story: {
        opening: "Профессиональные запросы, поступившие напрямую от эрготерапевтов на местах, привели к созданию востребованного вспомогательного терапевтического инструмента.",
        body: "Рукав Plectrum создан, чтобы обеспечить гибкость в подаче персонализированной сенсорной стимуляции. Умное, универсальное и точное решение для удобного повседневного применения — поддерживать непрерывность терапии между клиникой и естественной средой и помогать улучшать качество жизни. Система позволяет полностью и непрерывно персонализировать интенсивность и рисунки вибрации под уникальные потребности каждого пользователя и не ограничена заранее заданными шаблонами.",
        closing: "Рукав Plectrum: гибкая поддержка в любом месте и в любое время.",
      },
    },
    cap: {
      name: "Защитная шапочка",
      path: "/models/hat.glb",
      tag: "Краниальная модуляция",
      body: "Защитное носимое устройство с управляемой вибрацией в области головы для предотвращения кризисов.",
      use: "Воздействие на область головы в привычной защитной форме.",
      story: {
        opening: "Целые ночи борьбы превратили личную потребность в прорывное решение.",
        body: "Шапочка Plectrum создана специально, чтобы отвечать на сенсорную потребность, помогать улучшать качество жизни и возвращать спокойствие в дом. Умное, автономное и точное решение, предназначенное поддерживать пользователя в состояниях беспокойства, тревоги или вспышек и помогать создавать более спокойную среду. Система позволяет полностью и непрерывно персонализировать интенсивность и рисунки вибрации под уникальные потребности каждого пользователя и не ограничена заранее заданными шаблонами.",
        closing: "Шапочка Plectrum: умное прикосновение, поддерживающее ваше спокойствие.",
      },
    },
    glove: {
      name: "Перчатка",
      path: "/models/glove.glb",
      tag: "Мелкая моторика",
      body: "Сфокусированные рисунки вибрации для поддержки мелкой моторики.",
      use: "Детальное взаимодействие и тактильное сопровождение на уровне кисти.",
      story: {
        opening: "Постоянный поиск сенсорной стимуляции на кончиках пальцев привёл к разработке сфокусированного решения.",
        body: "Перчатка Plectrum создана, чтобы обеспечивать вибротактильную обратную связь, способствующую ощущению спокойствия и поддерживающую способность к концентрации. Умное, доступное и точное решение, призванное помогать сенсорной регуляции в состояниях беспокойства и улучшать повседневное качество жизни. Система позволяет полностью и непрерывно персонализировать интенсивность и рисунки вибрации под уникальные потребности каждого пользователя и не ограничена заранее заданными шаблонами.",
        closing: "Перчатка Plectrum: точное прикосновение, помогающее восстановить баланс.",
      },
    },
  },
};

const copy = {
  en: {
    eyebrow: "FOUR WORKING VIBRATION PROTOTYPES",
    title: "Four products. One controlled-vibration platform.",
    intro:
      "Explore Plectrum's current functional prototypes in 3D. These four working prototypes deliver localized, high-resolution vibration today and are distinct from FABTIVE, the patented active-fabric platform under development for continuous physical sensation across the fabric.",
    rotate: "Drag or move to explore",
    rotateTouch: "Swipe to explore",
    overview: "Select a prototype",
    focus: "Focus",
    storyLabel: "THE STORY BEHIND THE PRODUCT",
    storyExpand: "Read the full story",
    storyCollapse: "Show less",
    specs: "CURRENT VIBRATION PLATFORM",
    specTitle: "These are today's working prototypes, not the patented end-state textile.",
    specItems: [
      ["High-resolution vibration", "independently controlled delivery"],
      ["3.5-5.2V DC", "operating range · up to 1.2A"],
      ["Bluetooth + USB-C", "wireless control and charging"],
      ["Android · Windows · XR", "cross-platform SDK environments"],
    ],
    cta: "Discuss a prototype or pilot",
    disclaimerTitle: "Product disclaimer",
    disclaimerBody:
      "Images and visualizations on this site are for illustrative purposes only. Product design, appearance, and specifications may change. Plectrum products are intended as assistive tools to improve quality of life and support sensory regulation. The products are not medical devices, are not a substitute for medical, psychological, or professional care, and do not promise or undertake prevention, cure, or protection from injury, risk situations, or any medical conditions. Use of the products is the sole responsibility of the user or guardian, and should be carried out subject to receiving initial guidance and in accordance with the instructions for use.",
  },
  he: {
    eyebrow: "ארבעה אבות טיפוס פעילים מבוססי רטט",
    title: "ארבעה מוצרים. פלטפורמת רטט נשלטת אחת.",
    intro:
      "גלו בתלת־ממד את אבות הטיפוס הפונקציונליים הנוכחיים של Plectrum. ארבעת אבות הטיפוס הפעילים מספקים כיום רטט מקומי ברזולוציה גבוהה, והם נפרדים מ־FABTIVE, פלטפורמת הבד האקטיבי הפטנטית שבפיתוח לתחושה פיזית רציפה על פני הבד.",
    rotate: "הזיזו כדי לחקור",
    rotateTouch: "החליקו כדי לחקור",
    overview: "בחרו אב טיפוס",
    focus: "מיקוד",
    storyLabel: "הסיפור מאחורי המוצר",
    storyExpand: "קריאת הסיפור המלא",
    storyCollapse: "הצג פחות",
    specs: "פלטפורמת הרטט הנוכחית",
    specTitle: "אלה אבות הטיפוס הפעילים של היום, ולא בד היעד הפטנטי.",
    specItems: [
      ["רטט ברזולוציה גבוהה", "העברה הנשלטת בנפרד"],
      ["3.5-5.2V DC", "טווח הפעלה · עד 1.2A"],
      ["Bluetooth + USB-C", "שליטה אלחוטית וטעינה"],
      ["Android · Windows · XR", "סביבות SDK חוצות־פלטפורמות"],
    ],
    cta: "שיחה על אב טיפוס או פיילוט",
    disclaimerTitle: "הבהרה חשובה",
    disclaimerBody:
      "התמונות וההדמיות באתר הן להמחשה בלבד. ייתכנו שינויים בעיצוב המוצר, במראהו ובמפרטיו. מוצרי פלקטרום נועדו לשמש ככלי עזר לשיפור איכות החיים ולתמיכה בוויסות חושי. המוצרים אינם מהווים מכשור רפואי, אינם מהווים תחליף לטיפול רפואי, פסיכולוגי או מקצועי, ואינם מבטיחים או מתחייבים למניעה, ריפוי או הגנה מפני פגיעות, מצבי סיכון או מצבים רפואיים כלשהם. השימוש במוצרים הינו באחריות המשתמש או האפוטרופוס בלבד, ויש לבצעו בכפוף לקבלת הדרכה ראשונית ובהתאם להוראות השימוש.",
  },
  ar: {
    eyebrow: "أربعة نماذج اهتزازية عاملة",
    title: "أربعة منتجات. منصة اهتزاز متحكم بها واحدة.",
    intro:
      "استكشف نماذج Plectrum الأولية الوظيفية الحالية في 3D. توفر هذه النماذج الأربعة اهتزازًا موضعيًا عالي الدقة اليوم، وهي مختلفة عن FABTIVE، منصة النسيج النشط المحمية ببراءة قيد التطوير للإحساس الجسدي المستمر عبر القماش.",
    rotate: "اسحب أو حرّك للاستكشاف",
    rotateTouch: "اسحب للاستكشاف",
    overview: "اختر نموذجًا أوليًا",
    focus: "التركيز السريري",
    storyLabel: "القصة وراء المنتج",
    storyExpand: "اقرأ القصة كاملة",
    storyCollapse: "عرض أقل",
    specs: "منصة الاهتزاز الحالية",
    specTitle: "هذه هي النماذج العاملة اليوم، وليست النسيج النهائي المحمي ببراءة.",
    specItems: [
      ["اهتزاز عالي الدقة", "توصيل يُتحكم به بشكل مستقل"],
      ["3.5-5.2V DC", "نطاق التشغيل · حتى 1.2A"],
      ["Bluetooth + USB-C", "تحكم لاسلكي وشحن"],
      ["Android · Windows · XR", "بيئات SDK متعددة المنصات"],
    ],
    cta: "ناقش نموذجًا أوليًا أو تجربة",
    disclaimerTitle: "تنويه مهم حول المنتج",
    disclaimerBody:
      "الصور والتصورات على هذا الموقع للتوضيح فقط. قد يتغير تصميم المنتج ومظهره ومواصفاته. تهدف منتجات Plectrum إلى أن تكون أدوات مساعدة لتحسين جودة الحياة ودعم التنظيم الحسي. المنتجات ليست أجهزة طبية، وليست بديلاً عن رعاية طبية أو نفسية أو مهنية، ولا تعد ولا تلتزم بالوقاية أو الشفاء أو الحماية من الإصابات أو حالات الخطر أو أي حالات طبية. استخدام المنتجات يقع على مسؤولية المستخدم أو الوصي وحده، ويجب أن يتم بعد تلقي إرشاد أولي ووفقًا لتعليمات الاستخدام.",
  },
  ru: {
    eyebrow: "ЧЕТЫРЕ ДЕЙСТВУЮЩИХ ВИБРАЦИОННЫХ ПРОТОТИПА",
    title: "Четыре продукта. Одна платформа управляемой вибрации.",
    intro:
      "Изучите в 3D текущие функциональные прототипы Plectrum. Эти четыре работающих прототипа обеспечивают локальную высокоточную вибрацию сегодня и отличаются от FABTIVE — запатентованной платформы активной ткани для непрерывного физического ощущения по всей ткани.",
    rotate: "Перетаскивайте модель",
    rotateTouch: "Проведите, чтобы изучить",
    overview: "Выберите прототип",
    focus: "Клиническая задача",
    storyLabel: "ИСТОРИЯ ПРОДУКТА",
    storyExpand: "Читать полную историю",
    storyCollapse: "Свернуть",
    specs: "ТЕКУЩАЯ ВИБРАЦИОННАЯ ПЛАТФОРМА",
    specTitle: "Это сегодняшние рабочие прототипы, а не запатентованный конечный текстиль.",
    specItems: [
      ["Высокоточная вибрация", "независимо управляемая подача"],
      ["3.5-5.2V DC", "рабочий диапазон · до 1.2A"],
      ["Bluetooth + USB-C", "беспроводное управление и зарядка"],
      ["Android · Windows · XR", "кроссплатформенные SDK-среды"],
    ],
    cta: "Обсудить прототип или пилот",
    disclaimerTitle: "Важное уточнение о продукте",
    disclaimerBody:
      "Изображения и визуализации на этом сайте приведены только для иллюстрации. Дизайн, внешний вид и характеристики продукта могут измениться. Продукты Plectrum предназначены как вспомогательные средства для улучшения качества жизни и поддержки сенсорной регуляции. Продукты не являются медицинскими изделиями, не заменяют медицинскую, психологическую или профессиональную помощь и не обещают и не обязуются обеспечивать профилактику, лечение или защиту от травм, ситуаций риска или каких-либо медицинских состояний. Использование продуктов осуществляется исключительно на ответственности пользователя или опекуна и должно выполняться после получения первичного инструктажа и в соответствии с инструкцией по применению.",
  },
} as const;

export default function PrototypesPage() {
  const { language } = useLanguage();
  const [activeId, setActiveId] = useState<ProductId>("shirt");
  const [storyOpen, setStoryOpen] = useState(false);
  const [isTouch, setIsTouch] = useState(false);
  const t = copy[language];
  const catalog = products[language];
  const list = PRODUCT_ORDER.map((id) => ({ id, ...catalog[id] }));
  const product = { id: activeId, ...catalog[activeId] };

  useEffect(() => {
    const media = window.matchMedia("(hover: none), (pointer: coarse)");
    const sync = () => setIsTouch(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  const selectProduct = useCallback((id: ProductId) => {
    setActiveId(id);
    setStoryOpen(false);
  }, []);

  const onTabKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    if (event.key !== "ArrowRight" && event.key !== "ArrowLeft" && event.key !== "Home" && event.key !== "End") {
      return;
    }
    event.preventDefault();
    const rtl = document.documentElement.dir === "rtl";
    let nextIndex = index;
    if (event.key === "Home") nextIndex = 0;
    else if (event.key === "End") nextIndex = list.length - 1;
    else if (event.key === "ArrowRight") nextIndex = rtl ? index - 1 : index + 1;
    else if (event.key === "ArrowLeft") nextIndex = rtl ? index + 1 : index - 1;
    nextIndex = (nextIndex + list.length) % list.length;
    selectProduct(list[nextIndex].id);
    const nextTab = document.getElementById(`prototype-tab-${list[nextIndex].id}`);
    nextTab?.focus();
  };

  return (
    <SiteShell>
      <section className="prototype-page">
        <div className="prototype-intro">
          <p className="eyebrow">{t.eyebrow}</p>
          <h1>{t.title}</h1>
          <p>{t.intro}</p>
        </div>
        <div className="prototype-selector" role="tablist" aria-label={t.eyebrow}>
          {list.map((item, index) => (
            <button
              className={activeId === item.id ? "active" : ""}
              type="button"
              role="tab"
              aria-selected={activeId === item.id}
              aria-controls="prototype-stage"
              id={`prototype-tab-${item.id}`}
              tabIndex={activeId === item.id ? 0 : -1}
              onClick={() => selectProduct(item.id)}
              onKeyDown={(event) => onTabKeyDown(event, index)}
              key={item.id}
            >
              <span>0{index + 1}</span>
              {item.name}
            </button>
          ))}
        </div>
        <div className="prototype-canvas">
          <div
            className="prototype-stage"
            id="prototype-stage"
            role="tabpanel"
            aria-labelledby={`prototype-tab-${product.id}`}
          >
            <div className="prototype-viewer">
              <ModelScene
                key={product.id}
                mode="single"
                modelPath={product.path}
                poster={PRODUCT_POSTERS[product.id]}
                posterPosition={PRODUCT_POSTER_FOCUS[product.id]}
                label={product.name}
                posterLabel={GROUP_POSTER_LABEL[language]}
                exploreHint={isTouch ? t.rotateTouch : t.rotate}
                overviewHint={t.overview}
              />
            </div>
          </div>
          <div className="prototype-stage-meta">
            <IllustrativeNote />
          </div>
        </div>
        <aside className="prototype-copy" aria-live="polite">
          <span className="prototype-tag">{product.tag}</span>
          <h2>{product.name}</h2>
          <p className="prototype-body">{product.body}</p>
          <strong className="prototype-focus">{t.focus}</strong>
          <p className="prototype-use">{product.use}</p>
        </aside>
      </section>

      <section
        className={storyOpen ? "prototype-story is-expanded" : "prototype-story"}
        aria-labelledby="prototype-story-heading"
        aria-live="polite"
      >
        <p className="eyebrow dark">{t.storyLabel}</p>
        <h2 id="prototype-story-heading">{product.name}</h2>
        <p className="prototype-story-opening">{product.story.opening}</p>
        <div className="prototype-story-details" id="prototype-story-details">
          <p className="prototype-story-body">{product.story.body}</p>
          <p className="prototype-story-closing">{product.story.closing}</p>
        </div>
        <button
          className="prototype-story-toggle"
          type="button"
          aria-expanded={storyOpen}
          aria-controls="prototype-story-details"
          onClick={() => setStoryOpen((current) => !current)}
        >
          {storyOpen ? t.storyCollapse : t.storyExpand}
        </button>
      </section>

      <section className="light-section prototype-specs">
        <div>
          <p className="eyebrow dark">{t.specs}</p>
          <h2>{t.specTitle}</h2>
        </div>
        <ul>
          {t.specItems.map(([value, label]) => (
            <li key={label}>
              <strong>
                <bdi dir="auto">
                  <TextWithNoBreak text={value} />
                </bdi>
              </strong>
              <span>{label}</span>
            </li>
          ))}
        </ul>
        <a className="button button-primary" href="mailto:gabriel@plectrum.biz?subject=Plectrum%20prototype">
          {t.cta}
          <span aria-hidden="true">→</span>
        </a>
      </section>

      <aside
        className="product-disclaimer"
        id="product-disclaimer"
        tabIndex={-1}
        aria-labelledby="product-disclaimer-heading"
      >
        <h2 id="product-disclaimer-heading">{t.disclaimerTitle}</h2>
        <p>{t.disclaimerBody}</p>
      </aside>
    </SiteShell>
  );
}
