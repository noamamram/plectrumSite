"use client";

import Link from "next/link";
import { SiteShell } from "../components/SiteShell";
import { useLanguage } from "../components/LanguageProvider";
import { MediaDisclaimer } from "../components/MediaDisclaimer";
import { TextWithNoBreak } from "../components/TextWithNoBreak";

const copy = {
  en: {
    eyebrow: "THE PATENTED DESTINATION",
    title: "Continuous tactile intervention, engineered into every fiber.",
    intro:
      "Our hardware roadmap consists of two phases: deploying working vibration prototypes for current validation work, and advancing FABTIVE—the patented active fabric designed for continuous, full-surface sensory integration.",
    cta: "Discuss a technology partnership",
    systemLabel: "ONE CONTROL ARCHITECTURE · TWO HARDWARE STAGES",
    systemTitle: "One control system. Two different hardware layers.",
    systemBody:
      "The software, protocol logic and clinical workflow are already being evaluated through today's localized vibration prototypes. FABTIVE's proprietary fiber architecture is the next hardware layer, carrying that same intelligence into the textile itself.",
    steps: [
      ["Define", "Translate a clinical goal into a precise tactile protocol."],
      ["Configure", "Choose location, intensity, timing and progression."],
      ["Deliver", "Use high-resolution vibration today, then FABTIVE for continuous textile actuation."],
      ["Learn", "Turn every session into structured information for follow-up."],
    ],
    fabricLabel: "THE FABTIVE ACTIVE-FABRIC PATENT",
    fabricTitle: "Beyond localized vibration: depth and continuity.",
    fabricBody:
      "FABTIVE is Plectrum's term for active fabric. It is based on proprietary fibers that Plectrum integrates into familiar textile structures. The platform is designed to create a soft, continuous surface of controllable physical sensation while preserving the flexibility and familiarity of textile.",
    prototypeLabel: "WORKING TODAY",
    prototypeTitle: "Four vibration prototypes for current validation work.",
    prototypeBody:
      "These specifications describe the four functional prototypes that exist today. They support current validation work and are distinct from the patented active-fabric platform under development.",
    facts: [
      ["High-resolution vibration", "independently controlled delivery"],
      ["3.5-5.2V DC", "operating range · 1.2A maximum"],
      ["Bluetooth + USB-C", "wireless control and charging"],
      ["Android · Windows · XR", "cross-platform SDK environments"],
    ],
    ipLabel: "DEFENSIBLE FOUNDATION",
    ipTitle: "Patent granted in Israel. US and Europe in process.",
    ipBody:
      "FABTIVE's active-fabric patent has been granted in Israel, with registration processes underway in the United States and Europe. This is the defensible product direction beyond today's vibration prototypes. Adaptive protocols were developed with IBM.",
    futureTitle: "One Patented Technology. Limitless Market Applications.",
    futureBody:
      "Clinical sensory integration is our initial validation focus. Once established, our patented active-fabric platform is designed to expand into XR, gaming, professional training, and defense applications.",
    futureNote: "Current validation work comes first.",
  },
  he: {
    eyebrow: "היעד הטכנולוגי המוגן בפטנט",
    title: "התערבות מישושית רציפה, מתוכננת אל תוך כל סיב.",
    intro:
      "מפת הדרכים שלנו בחומרה כוללת שני שלבים: פריסת אבות טיפוס רטט פעילים לעבודת האימות הנוכחית, והתקדמות FABTIVE — הבד האקטיבי הפטנטי, שתוכנן לאינטגרציה חושית רציפה על פני כל משטח הבד.",
    cta: "שיחה על שותפות טכנולוגית",
    systemLabel: "ארכיטקטורת שליטה אחת · שני שלבי חומרה",
    systemTitle: "מערכת שליטה אחת. שתי שכבות חומרה שונות.",
    systemBody:
      "התוכנה, לוגיקת הפרוטוקול ותהליך העבודה הקליני כבר נבחנים באמצעות אבות הטיפוס הרוטטים המקומיים של היום. ארכיטקטורת הסיבים הייחודית של FABTIVE היא שכבת החומרה הבאה, שמעבירה את אותה חוכמה אל הטקסטיל עצמו.",
    steps: [
      ["הגדרה", "תרגום יעד קליני לפרוטוקול מישושי מדויק."],
      ["תצורה", "בחירת מיקום, עוצמה, תזמון והתקדמות."],
      ["העברה", "רטט ברזולוציה גבוהה כיום, ובהמשך FABTIVE להפעלה רציפה של הבד."],
      ["למידה", "הפיכת כל מפגש למידע מובנה לצורך המשך הטיפול."],
    ],
    fabricLabel: "פטנט FABTIVE לבד אקטיבי",
    fabricTitle: "מעבר לרטט מקומי: עומק ורציפות.",
    fabricBody:
      "FABTIVE הוא המונח של Plectrum לבד אקטיבי. הוא מבוסס על סיבים ייחודיים ש־Plectrum משלבת במבני טקסטיל מוכרים. הפלטפורמה תוכננה ליצור משטח רך ורציף של תחושה פיזית נשלטת, תוך שמירה על הגמישות והטבעיות של הבד.",
    prototypeLabel: "פועל כיום",
    prototypeTitle: "ארבעה אבות טיפוס רטט לעבודת האימות הנוכחית.",
    prototypeBody:
      "המפרט שלהלן מתאר את ארבעת אבות הטיפוס הפונקציונליים הקיימים כיום. הם תומכים בעבודת האימות הנוכחית ונפרדים מפלטפורמת הבד האקטיבי הפטנטית שבפיתוח.",
    facts: [
      ["רטט ברזולוציה גבוהה", "העברה הנשלטת בנפרד"],
      ["3.5-5.2V DC", "טווח הפעלה · עד 1.2A"],
      ["Bluetooth + USB-C", "שליטה אלחוטית וטעינה"],
      ["Android · Windows · XR", "סביבות SDK חוצות־פלטפורמות"],
    ],
    ipLabel: "בסיס בר־הגנה",
    ipTitle: "הפטנט אושר בישראל. בארה״ב ובאירופה בתהליך רישום.",
    ipBody:
      "פטנט הבד האקטיבי של FABTIVE אושר בישראל, ותהליכי הרישום בארצות הברית ובאירופה נמצאים בעיצומם. זהו כיוון המוצר בר־ההגנה שמעבר לאבות הטיפוס הרוטטים של היום. פרוטוקולים אדפטיביים פותחו עם IBM.",
    futureTitle: "טכנולוגיה פטנטית אחת. יישומי שוק ללא גבול.",
    futureBody:
      "אינטגרציה חושית קלינית היא מוקד האימות הראשוני שלנו. לאחר הקמה, פלטפורמת הבד האקטיבי הפטנטית שלנו תוכננה להתרחב ל־XR, גיימינג, הדרכה מקצועית ויישומי ביטחון.",
    futureNote: "עבודת האימות הנוכחית קודמת.",
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

export default function TechnologyPage() {
  const { language } = useLanguage();
  const t = copy[language];

  return (
    <SiteShell>
      <section className="page-hero technology-hero">
        <div className="page-hero-copy">
          <p className="eyebrow">{t.eyebrow}</p>
          <h1>{t.title}</h1>
          <p>{t.intro}</p>
          <a className="button button-primary" href="mailto:gabriel@plectrum.biz?subject=Plectrum%20technology%20partnership">
            {t.cta}<span aria-hidden="true">→</span>
          </a>
        </div>
        <div className="fabric-core" aria-hidden="true"><i /><i /><i /><i /><i /></div>
        <MediaDisclaimer variant="overlay" className="technology-hero-disclaimer" />
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
