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
      name: "Plectrum Smart Shirt",
      path: "/models/shirt.glb",
      tag: "Full upper torso",
      body: "A premium smart shirt featuring independently controlled tactile points across the upper body to support personal well-being.",
      use: "Provides comprehensive sensory support and tension relief for structured daily routines, operated independently or remotely.",
      story: {
        opening: "The requirement for comprehensive sensory balance led to a full-torso technological solution.",
        body: "The Smart Shirt is designed to deliver a continuous, controlled touch sensation that supports overall well-being. It offers full personalization of tactile intensity across the chest, back, shoulders, and arms. Active fabric (Fabtive) technology is currently in development and will represent a significant leap forward for the platform. Expanding on the capabilities introduced by the Smart Cap and Smart Sleeve, the Smart Shirt will enter manufacturing and pilot phases in the next stage.",
        closing: "Plectrum Smart Shirt: Technology that wraps the body in quiet.",
      },
    },
    sleeve: {
      name: "Plectrum Smart Sleeve",
      path: "/models/sleeve.glb",
      tag: "Targeted sensory regulation",
      body: "A highly adaptive, easy-to-wear smart sleeve designed to deliver targeted tactile regulation for immediate stress relief.",
      use: "De-escalates tension and provides sensory focus in a flexible, compact form factor, managed locally or via remote control.",
      story: {
        opening: "Institutional and home environments require versatile, immediate sensory support.",
        body: "The Smart Sleeve serves as a primary commercial MVP, engineered to offer maximum flexibility in delivering personalized tactile feedback. It supports continuity between professional facilities and daily home life. This product leads the initial institutional pilot programs alongside the Smart Cap, paving the way for the future integration of advanced active fabric capabilities.",
        closing: "Plectrum Smart Sleeve: Flexible, on-demand sensory support.",
      },
    },
    cap: {
      name: "Plectrum Smart Cap",
      path: "/models/hat.glb",
      tag: "Discreet cranial regulation",
      body: "An unobtrusive daily smart cap delivering controlled cranial tactile feedback to support personal well-being and alleviate sensory overload.",
      use: "Operates autonomously or via remote command, actively preventing sensory distress in any environment without clinical stigma.",
      story: {
        opening: "The need for discreet, continuous sensory management inspired a casual wearable design.",
        body: "The Smart Cap is created specifically to support personal wellness without the appearance of medical gear. It activates during times of restlessness or via remote command, providing fully customizable tactile patterns. This product leads the initial institutional pilot programs alongside the Smart Sleeve, setting a strong foundation for the platform's next-generation developments.",
        closing: "Plectrum Smart Cap: Smart touch for sustained calm.",
      },
    },
    glove: {
      name: "Plectrum Smart Glove",
      path: "/models/glove.glb",
      tag: "Extremity tactile focus",
      body: "A smart glove combining programmable tactile points across the hand to promote serenity and sensory anchoring.",
      use: "Provides essential sensory grounding and detailed tactile guidance for daily activities and digital environments.",
      story: {
        opening: "The requirement for targeted tactile feedback at the extremities inspired an interactive smart glove.",
        body: "The Smart Glove delivers programmed stimulation that fosters calm and focus. It serves as an experiential tool for both daily routines and immersive environments, allowing full customization of tactile sequences. Following the successful deployment of the Smart Cap and Smart Sleeve, this product will enter manufacturing and pilot phases to further expand the platform's tactile reach.",
        closing: "Plectrum Smart Glove: Precise touch for restored balance.",
      },
    },
  },
  he: {
    shirt: {
      name: "חולצה חכמה",
      path: "/models/shirt.glb",
      tag: "תמיכה היקפית לפלג הגוף העליון",
      body: "חולצה חכמה המשלבת נקודות מגע נשלטות בפלג הגוף העליון, לתמיכה בתחושת רווחה ורוגע.",
      use: "מעניקה ויסות חושי נרחב והפגת מתחים לשמירה על שגרה מאוזנת, בהפעלה עצמית או מרחוק.",
      story: {
        opening: "הצורך באיזון חושי היקפי הוביל ליצירת פתרון טכנולוגי עוטף.",
        body: "החולצה החכמה תוכננה לספק תחושת מגע מבוקרת ומתמשכת התומכת ברווחת המשתמש, ומאפשרת התאמה אישית מלאה של תבניות המגע בבטן, בגב, בכתפיים ובזרועות. טכנולוגיית הבד האקטיבי (Fabtive) נמצאת כעת בפיתוח ותהווה קפיצת מדרגה טכנולוגית לפלטפורמה. בהמשך להשקת הכובע והשרוול, החולצה תיכנס לשלבי ייצור ופיילוט כדי להרחיב את יכולות המערכת.",
        closing: "חולצה חכמה: טכנולוגיה שעוטפת בשקט.",
      },
    },
    sleeve: {
      name: "שרוול חכם",
      path: "/models/sleeve.glb",
      tag: "ויסות ממוקד ונייד",
      body: "שרוול חכם ורב-שימושי, שנועד לספק משוב טקטילי ממוקד לשחרור מהיר של מתחים.",
      use: "מספק מיקוד חושי והרגעת עומסים בתצורה גמישה, בהפעלה עצמית או בשליטה מרחוק.",
      story: {
        opening: "הדרישה לתמיכה תחושתית מיידית ויומיומית הובילה לפיתוח מעטפת מודולרית.",
        body: "השרוול החכם מהווה מוצר מסחרי מרכזי, המעניק גמישות מרבית במתן גירוי חושי מותאם אישית. הפתרון תומך ברציפות השימוש בין מסגרות מקצועיות לסביבה הביתית. השרוול מוביל את תוכניות הפיילוט המוסדיות הראשונות של פלקטרום, יחד עם הכובע החכם, וסולל את הדרך לשילוב עתידי של יכולות הבד האקטיבי.",
        closing: "שרוול חכם: תמיכה גמישה וזמינה בכל עת.",
      },
    },
    cap: {
      name: "כובע חכם",
      path: "/models/hat.glb",
      tag: "ויסות תחושתי דיסקרטי",
      body: "כובע חכם לשימוש יומיומי, המספק משוב מגע מבוקר באזור הראש לתמיכה ברווחה האישית ולהקלת עומס חושי.",
      use: "פועל באופן אוטונומי או נשלט מרחוק, ומסייע במניעה אקטיבית של עומסים בכל סביבה ללא סטיגמה רפואית.",
      story: {
        opening: "הצורך בוויסות חושי רציף ללא נראות חריגה הוביל לפיתוח פריט לבוש יומיומי.",
        body: "הכובע החכם נוצר כדי לספק תמיכה ברווחה האישית תוך שמירה על מראה רגיל לחלוטין. הפתרון מופעל בעת צורך או בפקודה מרחוק, ומאפשר התאמה מלאה של דפוסי המגע. הכובע מוביל את תוכניות הפיילוט המוסדיות הראשונות, יחד עם השרוול החכם, ומהווה בסיס יציב לשלבי הפיתוח הבאים של הפלטפורמה.",
        closing: "כובע חכם: מגע חכם התומך בשלווה מתמשכת.",
      },
    },
    glove: {
      name: "כפפה חכמה",
      path: "/models/glove.glb",
      tag: "מיקוד חושי בקצות האצבעות",
      body: "כפפה חכמה המשלבת נקודות מגע מתוכנתות בכף היד, ליצירת עוגן תחושתי וקידום רוגע.",
      use: "תמיכה באינטראקציה מישושית ממוקדת לפעולות יומיומיות ולשילוב בסביבות דיגיטליות.",
      story: {
        opening: "הדרישה למשוב ממוקד בקצוות הגוף הובילה לפיתוח כפפה אינטראקטיבית.",
        body: "הכפפה החכמה מספקת גירוי מתוכנת המשרה רוגע ותומך במיקוד. הפתרון משמש ככלי חווייתי לסביבה היומיומית ולמערכות דיגיטליות, עם התאמה אישית מלאה של תבניות המגע. בהמשך להשקה המוצלחת של הכובע והשרוול החכמים, הכפפה תיכנס לשלבי ייצור ופיילוט כדי להרחיב את המעטפת התחושתית של הפלטפורמה.",
        closing: "כפפה חכמה: מגע מדויק להחזרת האיזון.",
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
    specTitle: "The initial pilots are launching with the sleeve and the cap; subsequently, production will shift to the glove and the shirt for dedicated pilot programs. In about two years, Plectrum aims to upgrade the products to feature its unique active fabric.",
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
    specTitle: "הפיילוטים הראשונים יוצאים לדרך עם השרוול והכובע , בהמשך יעברו לייצור הכפפה והחלוצה לעריכת פיילוטים ייעודים עבורם.",
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
