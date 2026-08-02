"use client";

import { useState } from "react";
import { ModelScene } from "../components/ModelScene";
import { SiteShell } from "../components/SiteShell";
import { useLanguage } from "../components/LanguageProvider";

const products = {
  en: [
    { name: "Shirt", path: "/models/shirt.glb", tag: "Full torso", body: "Full-torso deep pressure and sensory regulation through up to 24 localized tactile points.", use: "Broad, wearable regulation for structured sessions and daily routines." },
    { name: "Sleeve", path: "/models/sleeve.glb", tag: "Targeted limb", body: "Localized sensory input across the arm through up to 24 tactile points.", use: "Focused regulation where a compact, flexible form is preferred." },
    { name: "Protective cap", path: "/models/hat.glb", tag: "Cranial modulation", body: "A protective wearable designed to deliver cranial sensory modulation for crisis prevention.", use: "Head-focused input in a familiar protective form." },
    { name: "Glove", path: "/models/glove.glb", tag: "Fine motor", body: "High-definition tactile stimulation designed to support fine-motor intervention.", use: "Detailed hand-level interaction and tactile guidance." },
  ],
  he: [
    { name: "חולצה", path: "/models/shirt.glb", tag: "פלג גוף עליון", body: "לחץ עמוק וויסות חושי לכל פלג הגוף העליון באמצעות עד 24 נקודות מגע ממוקדות.", use: "ויסות לביש ורחב למפגשים מובנים ולשגרה היומית." },
    { name: "שרוול", path: "/models/sleeve.glb", tag: "גפה ממוקדת", body: "קלט חושי מקומי לאורך הזרוע באמצעות עד 24 נקודות מגע.", use: "ויסות ממוקד בתצורה קומפקטית וגמישה." },
    { name: "כובע מגן", path: "/models/hat.glb", tag: "מודולציה באזור הראש", body: "לביש מגן שנועד להעביר מודולציה חושית באזור הראש למניעת מצבי משבר.", use: "קלט ממוקד ראש בתוך תצורה מגינה ומוכרת." },
    { name: "כפפה", path: "/models/glove.glb", tag: "מוטוריקה עדינה", body: "גירוי מישושי ברזולוציה גבוהה שנועד לתמוך בהתערבות בתחום המוטוריקה העדינה.", use: "אינטראקציה והכוונה מישושית ברמת כף היד." },
  ],
  ar: [
    { name: "قميص", path: "/models/shirt.glb", tag: "كامل الجذع", body: "ضغط عميق وتنظيم حسي لكامل الجذع عبر ما يصل إلى 24 نقطة لمسية موضعية.", use: "تنظيم واسع وقابل للارتداء للجلسات المنظمة والروتين اليومي." },
    { name: "كُم", path: "/models/sleeve.glb", tag: "طرف موجه", body: "مدخلات حسية موضعية على امتداد الذراع عبر ما يصل إلى 24 نقطة لمسية.", use: "تنظيم مركز في شكل مدمج ومرن." },
    { name: "قبعة واقية", path: "/models/hat.glb", tag: "تعديل للرأس", body: "منتج واقٍ قابل للارتداء لتوصيل تعديل حسي للرأس بهدف الوقاية من الأزمات.", use: "مدخلات موجهة للرأس ضمن شكل واقٍ ومألوف." },
    { name: "قفاز", path: "/models/glove.glb", tag: "حركة دقيقة", body: "تحفيز لمسي عالي الدقة لدعم تدخلات المهارات الحركية الدقيقة.", use: "تفاعل وتوجيه لمسي مفصل على مستوى اليد." },
  ],
  ru: [
    { name: "Футболка", path: "/models/shirt.glb", tag: "Весь корпус", body: "Глубокое давление и сенсорная регуляция корпуса через сеть до 24 локальных тактильных точек.", use: "Широкая носимая регуляция для структурированных сессий и повседневной жизни." },
    { name: "Рукав", path: "/models/sleeve.glb", tag: "Локальное воздействие", body: "Локальная сенсорная стимуляция руки через сеть до 24 тактильных точек.", use: "Точная регуляция в компактном и гибком формате." },
    { name: "Защитная шапочка", path: "/models/hat.glb", tag: "Краниальная модуляция", body: "Защитное носимое устройство для краниальной сенсорной модуляции и предотвращения кризисов.", use: "Воздействие на область головы в привычной защитной форме." },
    { name: "Перчатка", path: "/models/glove.glb", tag: "Мелкая моторика", body: "Высокоточная тактильная стимуляция для поддержки мелкой моторики.", use: "Детальное взаимодействие и тактильное сопровождение на уровне кисти." },
  ],
} as const;

const copy = {
  en: {
    eyebrow: "FOUR WORKING PROTOTYPES",
    title: "One fabric. Four forms of touch.",
    intro: "Explore the current prototypes in 3D. Each form applies the same active-textile foundation to a different therapeutic need.",
    rotate: "Drag or move to explore",
    focus: "Clinical focus",
    specs: "Shared platform",
    specItems: ["Up to 24 localized tactile points", "Bluetooth connectivity", "USB-C power", "Android, Windows and XR SDK"],
    cta: "Discuss a prototype or pilot",
  },
  he: {
    eyebrow: "ארבעה אבות טיפוס עובדים",
    title: "בד אחד. ארבע צורות של מגע.",
    intro: "גלו את אבות הטיפוס הנוכחיים בתלת־ממד. כל תצורה מיישמת את אותה תשתית טקסטיל אקטיבי לצורך טיפולי אחר.",
    rotate: "הזיזו כדי לחקור",
    focus: "מיקוד קליני",
    specs: "פלטפורמה משותפת",
    specItems: ["עד 24 נקודות מגע ממוקדות", "קישוריות Bluetooth", "מתח וטעינה ב־USB-C", "SDK ל־Android, ‏Windows ו־XR"],
    cta: "שיחה על אב טיפוס או פיילוט",
  },
  ar: {
    eyebrow: "أربعة نماذج أولية عاملة",
    title: "نسيج واحد. أربعة أشكال من اللمس.",
    intro: "استكشف النماذج الحالية ثلاثية الأبعاد. يطبق كل شكل أساس النسيج النشط نفسه على حاجة علاجية مختلفة.",
    rotate: "اسحب أو حرّك للاستكشاف",
    focus: "التركيز السريري",
    specs: "منصة مشتركة",
    specItems: ["حتى 24 نقطة لمسية موضعية", "اتصال Bluetooth", "طاقة USB-C", "SDK لـAndroid وWindows وXR"],
    cta: "ناقش نموذجًا أوليًا أو تجربة",
  },
  ru: {
    eyebrow: "ЧЕТЫРЕ РАБОТАЮЩИХ ПРОТОТИПА",
    title: "Одна ткань. Четыре формы прикосновения.",
    intro: "Изучите текущие 3D-прототипы. Каждая форма применяет единую основу активного текстиля к отдельной терапевтической задаче.",
    rotate: "Перетаскивайте модель",
    focus: "Клиническая задача",
    specs: "Единая платформа",
    specItems: ["До 24 локальных тактильных точек", "Подключение по Bluetooth", "Питание через USB-C", "SDK для Android, Windows и XR"],
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
            <button className={active === index ? "active" : ""} type="button" role="tab" aria-selected={active === index} onClick={() => setActive(index)} key={item.name}>
              <span>0{index + 1}</span>{item.name}
            </button>
          ))}
        </div>
        <div className="prototype-stage">
          <ModelScene mode="single" modelPath={product.path} />
          <span className="prototype-hint">{t.rotate}</span>
        </div>
        <aside className="prototype-copy" aria-live="polite">
          <span>{product.tag}</span><h2>{product.name}</h2><p>{product.body}</p>
          <strong>{t.focus}</strong><p>{product.use}</p>
        </aside>
      </section>
      <section className="light-section prototype-specs">
        <div><p className="eyebrow dark">{t.specs}</p><h2>{{
          en: "The product changes. The system remains.",
          he: "המוצר משתנה. המערכת נשארת.",
          ar: "يتغير المنتج. ويبقى النظام.",
          ru: "Продукт меняется. Система остаётся.",
        }[language]}</h2></div>
        <ul>{t.specItems.map((item) => <li key={item}>{item}</li>)}</ul>
        <a className="button button-primary" href="mailto:gabriel@plectrum.biz?subject=Plectrum%20prototype">
          {t.cta}<span aria-hidden="true">→</span>
        </a>
      </section>
    </SiteShell>
  );
}
