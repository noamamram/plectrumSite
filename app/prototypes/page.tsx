"use client";

import { useState } from "react";
import { ModelScene } from "../components/ModelScene";
import { MediaDisclaimer } from "../components/MediaDisclaimer";
import { SiteShell } from "../components/SiteShell";
import { TextWithNoBreak } from "../components/TextWithNoBreak";
import { useLanguage } from "../components/LanguageProvider";

const products = {
  en: [
    { name: "Shirt", path: "/models/shirt.glb", tag: "Full torso", body: "Full-torso regulation through high-resolution, independently controlled vibration.", use: "Broad, wearable regulation for structured sessions and daily routines." },
    { name: "Sleeve", path: "/models/sleeve.glb", tag: "Targeted limb", body: "Localized sensory input across the arm through high-resolution, independently controlled vibration.", use: "Focused regulation where a compact, flexible form is preferred." },
    { name: "Protective cap", path: "/models/hat.glb", tag: "Cranial modulation", body: "A protective wearable that delivers controlled cranial vibration to support crisis prevention.", use: "Head-focused input in a familiar protective form." },
    { name: "Glove", path: "/models/glove.glb", tag: "Fine motor", body: "Focused vibration patterns designed to support fine-motor intervention.", use: "Detailed hand-level interaction and tactile guidance." },
  ],
  he: [
    { name: "חולצה", path: "/models/shirt.glb", tag: "פלג גוף עליון", body: "ויסות לפלג הגוף העליון באמצעות רטט ברזולוציה גבוהה, הנשלט בנפרד.", use: "ויסות לביש ורחב למפגשים מובנים ולשגרה היומית." },
    { name: "שרוול", path: "/models/sleeve.glb", tag: "גפה ממוקדת", body: "קלט חושי מקומי לאורך הזרוע באמצעות רטט ברזולוציה גבוהה, הנשלט בנפרד.", use: "ויסות ממוקד בתצורה קומפקטית וגמישה." },
    { name: "כובע מגן", path: "/models/hat.glb", tag: "מודולציה באזור הראש", body: "לביש מגן שמעביר רטט נשלט באזור הראש לתמיכה במניעת מצבי משבר.", use: "קלט ממוקד ראש בתוך תצורה מגינה ומוכרת." },
    { name: "כפפה", path: "/models/glove.glb", tag: "מוטוריקה עדינה", body: "דפוסי רטט ממוקדים שנועדו לתמוך בהתערבות בתחום המוטוריקה העדינה.", use: "אינטראקציה והכוונה מישושית ברמת כף היד." },
  ],
  ar: [
    { name: "قميص", path: "/models/shirt.glb", tag: "كامل الجذع", body: "تنظيم لكامل الجذع عبر اهتزاز بدقة عالية يُتحكم به بشكل مستقل.", use: "تنظيم واسع وقابل للارتداء للجلسات المنظمة والروتين اليومي." },
    { name: "كُم", path: "/models/sleeve.glb", tag: "طرف موجه", body: "مدخلات حسية موضعية على امتداد الذراع عبر اهتزاز بدقة عالية يُتحكم به بشكل مستقل.", use: "تنظيم مركز في شكل مدمج ومرن." },
    { name: "قبعة واقية", path: "/models/hat.glb", tag: "تعديل للرأس", body: "منتج واقٍ قابل للارتداء يوصل اهتزازًا متحكمًا به للرأس لدعم الوقاية من الأزمات.", use: "مدخلات موجهة للرأس ضمن شكل واقٍ ومألوف." },
    { name: "قفاز", path: "/models/glove.glb", tag: "حركة دقيقة", body: "أنماط اهتزاز مركزة لدعم تدخلات المهارات الحركية الدقيقة.", use: "تفاعل وتوجيه لمسي مفصل على مستوى اليد." },
  ],
  ru: [
    { name: "Футболка", path: "/models/shirt.glb", tag: "Весь корпус", body: "Регуляция корпуса через высокоточную, независимо управляемую вибрацию.", use: "Широкая носимая регуляция для структурированных сессий и повседневной жизни." },
    { name: "Рукав", path: "/models/sleeve.glb", tag: "Локальное воздействие", body: "Локальная сенсорная стимуляция руки через высокоточную, независимо управляемую вибрацию.", use: "Точная регуляция в компактном и гибком формате." },
    { name: "Защитная шапочка", path: "/models/hat.glb", tag: "Краниальная модуляция", body: "Защитное носимое устройство с управляемой вибрацией в области головы для предотвращения кризисов.", use: "Воздействие на область головы в привычной защитной форме." },
    { name: "Перчатка", path: "/models/glove.glb", tag: "Мелкая моторика", body: "Сфокусированные рисунки вибрации для поддержки мелкой моторики.", use: "Детальное взаимодействие и тактильное сопровождение на уровне кисти." },
  ],
} as const;

const copy = {
  en: {
    eyebrow: "FOUR WORKING VIBRATION PROTOTYPES",
    title: "Four products. One controlled-vibration platform.",
    intro: "Explore Plectrum's current functional prototypes in 3D. These four working prototypes deliver localized, high-resolution vibration today and are distinct from FABTIVE, the patented active-fabric platform under development for continuous physical sensation across the fabric.",
    rotate: "Drag or move to explore",
    focus: "Clinical focus",
    specs: "CURRENT VIBRATION PLATFORM",
    specTitle: "These are today's working prototypes, not the patented end-state textile.",
    specItems: [["High-resolution vibration", "independently controlled delivery"], ["3.5-5.2V DC", "operating range · up to 1.2A"], ["Bluetooth + USB-C", "wireless control and charging"], ["Android · Windows · XR", "cross-platform SDK environments"]],
    cta: "Discuss a prototype or pilot",
  },
  he: {
    eyebrow: "ארבעה אבות טיפוס פעילים מבוססי רטט",
    title: "ארבעה מוצרים. פלטפורמת רטט נשלטת אחת.",
    intro: "גלו בתלת־ממד את אבות הטיפוס הפונקציונליים הנוכחיים של Plectrum. ארבעת אבות הטיפוס הפעילים מספקים כיום רטט מקומי ברזולוציה גבוהה, והם נפרדים מ־FABTIVE, פלטפורמת הבד האקטיבי הפטנטית שבפיתוח לתחושה פיזית רציפה על פני הבד.",
    rotate: "הזיזו כדי לחקור",
    focus: "מיקוד קליני",
    specs: "פלטפורמת הרטט הנוכחית",
    specTitle: "אלה אבות הטיפוס הפעילים של היום, ולא בד היעד הפטנטי.",
    specItems: [["רטט ברזולוציה גבוהה", "העברה הנשלטת בנפרד"], ["3.5-5.2V DC", "טווח הפעלה · עד 1.2A"], ["Bluetooth + USB-C", "שליטה אלחוטית וטעינה"], ["Android · Windows · XR", "סביבות SDK חוצות־פלטפורמות"]],
    cta: "שיחה על אב טיפוס או פיילוט",
  },
  ar: {
    eyebrow: "أربعة نماذج اهتزازية عاملة",
    title: "أربعة منتجات. منصة اهتزاز متحكم بها واحدة.",
    intro: "استكشف نماذج Plectrum الأولية الوظيفية الحالية في 3D. توفر هذه النماذج الأربعة اهتزازًا موضعيًا عالي الدقة اليوم، وهي مختلفة عن FABTIVE، منصة النسيج النشط المحمية ببراءة قيد التطوير للإحساس الجسدي المستمر عبر القماش.",
    rotate: "اسحب أو حرّك للاستكشاف",
    focus: "التركيز السريري",
    specs: "منصة الاهتزاز الحالية",
    specTitle: "هذه هي النماذج العاملة اليوم، وليست النسيج النهائي المحمي ببراءة.",
    specItems: [["اهتزاز عالي الدقة", "توصيل يُتحكم به بشكل مستقل"], ["3.5-5.2V DC", "نطاق التشغيل · حتى 1.2A"], ["Bluetooth + USB-C", "تحكم لاسلكي وشحن"], ["Android · Windows · XR", "بيئات SDK متعددة المنصات"]],
    cta: "ناقش نموذجًا أوليًا أو تجربة",
  },
  ru: {
    eyebrow: "ЧЕТЫРЕ ДЕЙСТВУЮЩИХ ВИБРАЦИОННЫХ ПРОТОТИПА",
    title: "Четыре продукта. Одна платформа управляемой вибрации.",
    intro: "Изучите в 3D текущие функциональные прототипы Plectrum. Эти четыре работающих прототипа обеспечивают локальную высокоточную вибрацию сегодня и отличаются от FABTIVE — запатентованной платформы активной ткани для непрерывного физического ощущения по всей ткани.",
    rotate: "Перетаскивайте модель",
    focus: "Клиническая задача",
    specs: "ТЕКУЩАЯ ВИБРАЦИОННАЯ ПЛАТФОРМА",
    specTitle: "Это сегодняшние рабочие прототипы, а не запатентованный конечный текстиль.",
    specItems: [["Высокоточная вибрация", "независимо управляемая подача"], ["3.5-5.2V DC", "рабочий диапазон · до 1.2A"], ["Bluetooth + USB-C", "беспроводное управление и зарядка"], ["Android · Windows · XR", "кроссплатформенные SDK-среды"]],
    cta: "Обсудить прототип или пилот",
  },
} as const;

export default function PrototypesPage() {
  const { language } = useLanguage();
  const [active, setActive] = useState(0);
  const t = copy[language];
  const list = products[language];
  const product = list[active];

  return (
    <SiteShell>
      <section className="prototype-page">
        <div className="prototype-intro">
          <p className="eyebrow">{t.eyebrow}</p><h1>{t.title}</h1><p>{t.intro}</p>
        </div>
        <div className="prototype-selector" role="tablist" aria-label={t.eyebrow}>
          {list.map((item, index) => (
            <button className={active === index ? "active" : ""} type="button" role="tab" aria-selected={active === index} aria-controls="prototype-stage" onClick={() => setActive(index)} key={item.name}>
              <span>0{index + 1}</span>{item.name}
            </button>
          ))}
        </div>
        <div className="prototype-stage" id="prototype-stage" role="tabpanel">
          <ModelScene mode="single" modelPath={product.path} />
          <span className="prototype-hint">{t.rotate}</span>
          <MediaDisclaimer variant="below" className="prototype-stage-disclaimer" />
        </div>
        <aside className="prototype-copy" aria-live="polite">
          <span className="prototype-tag">{product.tag}</span>
          <h2>{product.name}</h2>
          <p className="prototype-body">{product.body}</p>
          <strong className="prototype-focus">{t.focus}</strong>
          <p className="prototype-use">{product.use}</p>
        </aside>
      </section>
      <section className="light-section prototype-specs">
        <div><p className="eyebrow dark">{t.specs}</p><h2>{t.specTitle}</h2></div>
        <ul>
          {t.specItems.map(([value, label]) => (
            <li key={label}>
              <strong><bdi dir="auto"><TextWithNoBreak text={value} /></bdi></strong>
              <span>{label}</span>
            </li>
          ))}
        </ul>
        <a className="button button-primary" href="mailto:gabriel@plectrum.biz?subject=Plectrum%20prototype">
          {t.cta}<span aria-hidden="true">→</span>
        </a>
      </section>
    </SiteShell>
  );
}
