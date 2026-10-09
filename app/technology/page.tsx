"use client";

import { Fragment } from "react";
import Link from "next/link";
import { SiteShell } from "../components/SiteShell";
import { useLanguage } from "../components/LanguageProvider";
import { FabtiveEtymology } from "../components/FabtiveEtymology";
import { IllustrativeNote } from "../components/IllustrativeNote";
import { TextWithNoBreak } from "../components/TextWithNoBreak";

const copy = {
  en: {
    eyebrow: "PATENTED TECHNOLOGY",
    title: "A continuous sensory system driven by fiber technology.",
    intro:
      "We are developing FABTIVE, an active fabric providing a continuous sensory experience and enabling remote transmission of touch. Establishing the ecosystem and clinical validation stages serve as the first phase of our roadmap, currently implemented via vibration-based prototypes.",
    cta: "Discuss a technology partnership",
    systemLabel: "ONE CONTROL ARCHITECTURE · TWO HARDWARE STAGES",
    systemTitle: "One control system. Two distinct hardware layers.",
    systemBody:
      "The software, protocols, and clinical workflows are currently tested utilizing point-vibration prototypes. The unique fiber development of FABTIVE will constitute the next hardware layer and integrate these control capabilities directly into the wearable technology.",
    steps: [
      ["Define", "Translate user goals into a precise sensory protocol."],
      ["Configure", "Choose location, intensity, timing, and progression."],
      ["Deliver", "Utilize high-resolution vibration today, transitioning to FABTIVE for continuous physical sensation."],
      ["Learn", "Turn every session into structured data to adapt the ongoing process."],
    ],
    fabricLabel: "THE FABTIVE ACTIVE-FABRIC PATENT",
    fabricTitle: "Beyond localized vibration: continuous physical sensation.",
    fabricBody:
      "FABTIVE is Plectrum's active wearable technology, currently in development. It is designed to utilize proprietary fibers integrated into flexible structural layers. The platform aims to create a soft, continuous surface of controllable physical sensation while preserving the natural flexibility of the material.",
    prototypeLabel: "OPERATIONAL TODAY",
    prototypeTitle: "Vibration-based prototypes for clinical validation",
    prototypeBody: "The specification below presents the active systems currently used for testing processes, operating in parallel with the development of the active fabric platform.",
    facts: [
      ["High-resolution vibration", "Independent control at each point, enabling precise programming of frequency and intensity for each actuator independently"],
      ["3.5-5.2V DC", "Maximum operating current of up to 1.2A, within the approved safety range and permitted regulatory limits"],
      ["Bluetooth + USB-C", "Communication interface for wireless control and charging"],
      ["Android · Windows · XR", "Control application available for download and a ready SDK for full integration with virtual reality (VR/XR) environments"]
    ],
    ipLabel: "INTELLECTUAL PROPERTY",
    ipTitle: "Patent granted in Israel. US and Europe in process.",
    ipBody:
      "The FABTIVE active fabric patent has been granted in Israel, with registration processes underway in the US and Europe. This forms the intellectual property foundation beyond the current vibration prototypes.",
    futureTitle: "One patented technology. Multiple commercial applications.",
    futureBody:
      "Clinical sensory integration is our initial validation focus. Once established, the active fabric platform is designed to scale into XR, gaming, professional training, and defense applications.",
    futureNote: "The current stage focuses on operational and technological validation.",
  },
  he: {
    eyebrow: "טכנולוגיה מוגנת פטנט",
    title: "מערכת חושית רציפה, מבוססת טכנולוגיית סיבים",
    intro:
      "אנו מפתחים את FABTIVE, בד אקטיבי המעניק חוויה חושית רציפה ומאפשר העברת תחושות מגע מרחוק. בניית האקוסיסטם ושלבי האימות הקליני מהווים את השלב הראשון במפת הדרכים, ומתבצעים כיום באמצעות אבות טיפוס מבוססי רטט.",
    cta: "שיחה על שותפות טכנולוגית",
    systemLabel: "מערכת שליטה אחת · שני שלבי חומרה",
    systemTitle: "מערכת שליטה אחת. שתי שכבות חומרה שונות.",
    systemBody:
      "התוכנה, הפרוטוקולים ותהליכי העבודה הקליניים נבחנים כיום באמצעות אבות טיפוס מבוססי רטט נקודתי. פיתוח הסיבים הייחודי של FABTIVE יהווה את שכבת החומרה הבאה, ויטמיע את אותן יכולות שליטה ישירות בטכנולוגיה הלבישה.",
    steps: [
     ["הגדרה", "תרגום יעדי המשתמש לפרוטוקול גריה חושית מדויק."],
     ["תצורה", "בחירת מיקום, עוצמה, תזמון והתקדמות."],
     ["הפעלה", "שימוש ברטט ברזולוציה גבוהה כיום, ובעתיד מעבר ל-FABTIVE ליצירת תחושה פיזית רציפה."],
     ["למידה", "הפיכת כל הפעלה לנתונים מובנים לצורך התאמת המשך התהליך."]
    ],
    fabricLabel: "FABTIVE - בד אקטיבי מוגן פטנט",
    fabricTitle: "מעבר לרטט נקודתי: תחושה פיזית רציפה ועמוקה.",
    fabricBody:
      "FABTIVE היא הטכנולוגיה הלבישה האקטיבית של פלקטרום, הנמצאת בימים אלו בפיתוח. הטכנולוגיה מתוכננת להתבסס על סיבים קנייניים שיוטמעו בשכבות מבניות גמישות. הפלטפורמה מיועדת ליצור משטח רך ורציף של תחושה פיזית נשלטת, תוך שמירה על הגמישות הטבעית של החומר.",
    prototypeLabel: "זמין כיום",
    prototypeTitle: "אבות טיפוס מבוססי רטט לאימות קליני",
    prototypeBody: "המפרט להלן מציג את המערכות הפעילות המשמשות כיום לתהליכי בדיקה, ופועלות במקביל לפיתוח פלטפורמת הבד האקטיבי.",
    facts: [
      ["רטט ברזולוציה גבוהה", "שליטה נפרדת בכל נקודה, המאפשרת תכנות מדויק של תדר ועוצמת הרטט לכל מפעיל באופן עצמאי"],
      ["3.5-5.2V DC", "זרם הפעלה מקסימלי של עד 1.2A, בטווח הבטיחות ומגבלות הרגולציה המותרות"],
      ["Bluetooth + USB-C", "ממשק תקשורת לשליטה אלחוטית וחיבור לטעינה"],
      ["Android · Windows · XR", "אפליקציית שליטה זמינה להורדה ו-SDK מוכן לאינטגרציה מלאה מול סביבות מציאות מדומה (VR/AR)"]
    ],
    ipLabel: "קניין רוחני (IP)",
    ipTitle: "פטנט מאושר בישראל. תהליכי רישום בארה״ב ובאירופה.",
    ipBody:
      "טכנולוגיית הבד האקטיבי FABTIVE מאושרת כפטנט בישראל, ונמצאת בתהליכי רישום בארה״ב ובאירופה. זהו בסיס הקניין הרוחני של המוצר העתידי, המהווה המשך ישיר לאבות הטיפוס הנוכחיים.",
    futureTitle: "טכנולוגיה אחת מוגנת פטנט. מגוון יישומים מסחריים.",
    futureBody:
      "המיקוד הראשוני שלנו הוא אימות קליני בתחום האינטגרציה החושית. בהמשך, פלטפורמת הבד האקטיבי מיועדת להתרחב לתחומי מציאות מדומה (XR), גיימינג, הדרכות מקצועיות ויישומים ביטחוניים.",
    futureNote: "השלב הנוכחי מוקדש לאימות תפעולי וטכנולוגי.",
  },
  ar: {
    eyebrow: "الوجهة التكنولوجية المحمية ببراءة",
    title: "تدخل لمسي مستمر، مصمم داخل كل ليفة.",
    intro:
      "تتكون خارطة طريقنا للأجهزة من مرحلتين: نشر نماذج اهتزازية عاملة لأعمال التحقق الحالية، وتطوير FABTIVE — النسيج النشط المحمي ببراءة المصمم للتكامل الحسي المستمر على كامل السطح.",
    cta: "ناقش شراكة تكنولوجية",
    systemLabel: "بنية تحكم واحدة · مرحلتان للأجهزة",
    systemTitle: "منظومة تحكم واحدة. طبقتان مختلفتان من الأجهزة.",
    systemBody:
      "تجري بالفعل تقييم البرمجيات ومنطق البروتوكول وسير العمل السريري عبر النماذج الاهتزازية الموضعية الحالية. وتمثل بنية الألياف الخاصة لـFABTIVE طبقة الأجهزة التالية التي تنقل هذا الذكاء إلى النسيج نفسه.",
    steps: [
      ["تحديد", "تحويل الهدف السريري إلى بروتوكول لمسي دقيق."],
      ["تهيئة", "اختيار الموضع والشدة والتوقيت والتدرج."],
      ["توصيل", "استخدم اهتزازًا عالي الدقة اليوم، ثم FABTIVE للتشغيل النسيجي المستمر."],
      ["تعلّم", "تحويل كل جلسة إلى معلومات منظمة للمتابعة."],
    ],
    fabricLabel: "براءة FABTIVE للنسيج النشط",
    fabricTitle: "ما بعد الاهتزاز الموضعي: عمق واستمرارية.",
    fabricBody:
      "FABTIVE هو مصطلح Plectrum للنسيج النشط. وهو مبني على ألياف خاصة تدمجها Plectrum في هياكل نسيجية مألوفة. صُممت المنصة لإنشاء سطح ناعم ومستمر من الإحساس الجسدي القابل للتحكم، مع الحفاظ على مرونة القماش وألفته.",
    prototypeLabel: "يعمل اليوم",
    prototypeTitle: "أربعة نماذج اهتزاز لأعمال التحقق الحالية.",
    prototypeBody:
      "تصف المواصفات أدناه النماذج الوظيفية الأربعة الموجودة اليوم. وهي تدعم أعمال التحقق الحالية، وتختلف عن منصة النسيج النشط المحمية ببراءة قيد التطوير.",
    facts: [
      ["اهتزاز عالي الدقة", "توصيل يُتحكم به بشكل مستقل"],
      ["3.5-5.2V DC", "نطاق التشغيل · 1.2A كحد أقصى"],
      ["Bluetooth + USB-C", "تحكم لاسلكي وشحن"],
      ["Android · Windows · XR", "بيئات SDK متعددة المنصات"],
    ],
    ipLabel: "أساس قابل للحماية",
    ipTitle: "مُنحت البراءة في إسرائيل. التسجيل جار في الولايات المتحدة وأوروبا.",
    ipBody:
      "مُنحت براءة النسيج النشط لـFABTIVE في إسرائيل، فيما تجري إجراءات التسجيل في الولايات المتحدة وأوروبا. وهذا هو اتجاه المنتج القابل للحماية بعد نماذج الاهتزاز الحالية. وطُورت بروتوكولات تكيفية مع IBM.",
    futureTitle: "تقنية واحدة محمية ببراءة. تطبيقات سوق بلا حدود.",
    futureBody:
      "التكامل الحسي السريري هو محور التحقق الأولي لدينا. بعد تأسيسه، صُممت منصة النسيج النشط المحمية ببراءة للتوسع إلى XR والألعاب والتدريب المهني وتطبيقات الدفاع.",
    futureNote: "أعمال التحقق الحالية أولًا.",
  },
  ru: {
    eyebrow: "ЗАПАТЕНТОВАННАЯ ЦЕЛЕВАЯ ТЕХНОЛОГИЯ",
    title: "Непрерывное тактильное вмешательство в каждом волокне.",
    intro:
      "Наша аппаратная дорожная карта состоит из двух этапов: развёртывание работающих вибрационных прототипов для текущей валидации и развитие FABTIVE — запатентованной активной ткани для непрерывной сенсорной интеграции по всей поверхности.",
    cta: "Обсудить технологическое партнёрство",
    systemLabel: "ОДНА АРХИТЕКТУРА УПРАВЛЕНИЯ · ДВА ЭТАПА ОБОРУДОВАНИЯ",
    systemTitle: "Одна система управления. Два разных аппаратных слоя.",
    systemBody:
      "ПО, логика протоколов и клинический процесс уже оцениваются через сегодняшние локальные вибрационные прототипы. Проприетарная архитектура волокон FABTIVE — следующий аппаратный слой, переносящий тот же интеллект в сам текстиль.",
    steps: [
      ["Определить", "Преобразовать клиническую цель в точный тактильный протокол."],
      ["Настроить", "Выбрать зону, интенсивность, время и динамику."],
      ["Передать", "Использовать высокоточную вибрацию сегодня, затем FABTIVE для непрерывного текстильного воздействия."],
      ["Изучить", "Превратить каждую сессию в структурированные данные для наблюдения."],
    ],
    fabricLabel: "ПАТЕНТ FABTIVE НА АКТИВНУЮ ТКАНЬ",
    fabricTitle: "За пределами локальной вибрации: глубина и непрерывность.",
    fabricBody:
      "FABTIVE — термин Plectrum для активной ткани. Он основан на проприетарных волокнах, которые Plectrum интегрирует в привычные текстильные структуры. Платформа создаёт мягкую непрерывную поверхность управляемого физического ощущения, сохраняя гибкость и естественность ткани.",
    prototypeLabel: "РАБОТАЕТ СЕГОДНЯ",
    prototypeTitle: "Четыре вибрационных прототипа для текущей валидации.",
    prototypeBody:
      "Ниже описаны четыре функциональных прототипа, существующие сегодня. Они поддерживают текущую валидацию и отличаются от запатентованной платформы активной ткани, находящейся в разработке.",
    facts: [
      ["Высокоточная вибрация", "независимо управляемая подача"],
      ["3.5-5.2V DC", "рабочий диапазон · максимум 1.2A"],
      ["Bluetooth + USB-C", "беспроводное управление и зарядка"],
      ["Android · Windows · XR", "кроссплатформенные SDK-среды"],
    ],
    ipLabel: "ЗАЩИЩАЕМАЯ ОСНОВА",
    ipTitle: "Патент выдан в Израиле. Регистрация в США и Европе продолжается.",
    ipBody:
      "Патент FABTIVE на активную ткань выдан в Израиле, регистрационные процедуры в США и Европе продолжаются. Это защищаемое продуктовое направление после сегодняшних вибрационных прототипов. Адаптивные протоколы разработаны с IBM.",
    futureTitle: "Одна запатентованная технология. Безграничные рыночные применения.",
    futureBody:
      "Клиническая сенсорная интеграция — наш первоначальный фокус валидации. После закрепления запатентованная платформа активной ткани рассчитана на расширение в XR, игры, профессиональное обучение и оборону.",
    futureNote: "Сначала текущая валидация.",
  },
} as const;

function colorFabtive(text: string) {
  return text.split(/(FABTIVE)/g).map((part, index) =>
    part === "FABTIVE" ? (
      <bdi className="brand-cyan" dir="ltr" key={index}>
        {part}
      </bdi>
    ) : (
      <Fragment key={index}>{part}</Fragment>
    ),
  );
}

export default function TechnologyPage() {
  const { language } = useLanguage();
  const t = copy[language];

  return (
    <SiteShell>
      <section className="page-hero technology-hero">
        <div className="page-hero-copy">
          <p className="eyebrow">{t.eyebrow}</p>
          <h1>{t.title}</h1>
          <p>{language === "he" || language === "en" ? colorFabtive(t.intro) : t.intro}</p>
          <a className="button button-primary" href="mailto:gabriel@plectrum.biz?subject=Plectrum%20technology%20partnership">
            {t.cta}<span aria-hidden="true">→</span>
          </a>
        </div>
        <div className="technology-hero-media">
          <div className="fabric-core" aria-hidden="true"><i /><i /><i /><i /><i /></div>
        </div>
        <div className="hero-footer-meta page-hero-footer-meta">
          <IllustrativeNote />
        </div>
      </section>

      <section className="light-section">
        <div className="section-grid">
          <div>
            <p className="eyebrow dark">{t.systemLabel}</p>
            <h2>{t.systemTitle}</h2>
          </div>
          <p className="section-lead">{t.systemBody}</p>
        </div>
        <div className="loop-steps">
          {t.steps.map(([title, body], index) => (
            <article className="loop-step reveal" key={title}>
              <span>0{index + 1}</span><h3>{title}</h3><p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="light-section facts-section">
        <div className="prototype-facts-heading">
          <p className="eyebrow dark">{t.prototypeLabel}</p>
          <h2>{t.prototypeTitle}</h2>
          <p>{t.prototypeBody}</p>
        </div>
        <div className="fact-grid">
          {t.facts.map(([value, label]) => (
            <article key={label}>
              <strong><bdi dir="auto"><TextWithNoBreak text={value} /></bdi></strong>
              <span>{label}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="blue-section fabric-detail">
        <div className="fabric-detail-visual" aria-hidden="true"><div /></div>
        <div className="fabric-detail-copy">
          <p className="eyebrow">{t.fabricLabel}</p>
          <FabtiveEtymology />
          <h2>{t.fabricTitle}</h2>
          <p>{t.fabricBody}</p>
        </div>
      </section>

      <section className="light-section">
        <div className="split-story">
          <div><p className="eyebrow dark">{t.ipLabel}</p><h2>{t.ipTitle}</h2></div>
          <p>{t.ipBody}</p>
        </div>
      </section>

      <section className="future-section compact-future">
        <div className="future-copy">
          <h2>{t.futureTitle}</h2>
          <p>{t.futureBody}</p>
          <span>{t.futureNote}</span>
          <Link className="text-link centered" href="/prototypes">
            {{
              en: "Explore the four working prototypes",
              he: "לצפייה בארבעת אבות הטיפוס הפעילים",
              ar: "استكشف النماذج الأولية الأربعة العاملة",
              ru: "Посмотреть четыре действующих прототипа",
            }[language]}
            <b aria-hidden="true">→</b>
          </Link>
        </div>
      </section>
    </SiteShell>
  );
}
