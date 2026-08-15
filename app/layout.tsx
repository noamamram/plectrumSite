import type { Metadata } from "next";
import { cookies } from "next/headers";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "@fontsource/manrope/600.css";
import "@fontsource/manrope/700.css";
import "@fontsource/manrope/cyrillic-400.css";
import "@fontsource/manrope/cyrillic-500.css";
import "@fontsource/manrope/cyrillic-600.css";
import "@fontsource/manrope/cyrillic-700.css";
import "@fontsource/heebo/400.css";
import "@fontsource/heebo/500.css";
import "@fontsource/heebo/600.css";
import "@fontsource/heebo/700.css";
import "./globals.css";
import { LanguageProvider } from "./components/LanguageProvider";
import {
  LANGUAGE_COOKIE,
  type Language,
  languageDirection,
  readLanguageCookie,
} from "./components/language";

const homeMeta: Record<Language, { title: string; description: string }> = {
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
};

export async function generateMetadata(): Promise<Metadata> {
  const cookieStore = await cookies();
  const language = readLanguageCookie(cookieStore.get(LANGUAGE_COOKIE)?.value);
  const meta = homeMeta[language];
  return {
    title: meta.title,
    description: meta.description,
    other: {
      "codex-preview": "development",
    },
    icons: {
      icon: "/brand/logo-blue.png",
      shortcut: "/brand/logo-blue.png",
    },
  };
}

const languageBootstrap = `(() => {
  try {
    var key = ${JSON.stringify(LANGUAGE_COOKIE)};
    var supported = ["en", "he", "ar", "ru"];
    var match = document.cookie.match(new RegExp("(?:^|; )" + key + "=([^;]+)"));
    var cookieLang = match ? decodeURIComponent(match[1]) : "";
    var stored = "";
    try { stored = window.localStorage.getItem(key) || ""; } catch (e) {}
    var lang = supported.indexOf(cookieLang) >= 0
      ? cookieLang
      : supported.indexOf(stored) >= 0
        ? stored
        : "";
    if (!lang) return;
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "he" || lang === "ar" ? "rtl" : "ltr";
    if (supported.indexOf(cookieLang) < 0) {
      document.cookie = key + "=" + lang + "; path=/; max-age=31536000; SameSite=Lax";
      if (supported.indexOf(stored) >= 0) {
        location.reload();
      }
    }
  } catch (e) {}
})();`;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const language = readLanguageCookie(cookieStore.get(LANGUAGE_COOKIE)?.value);
  const dir = languageDirection(language);

  return (
    <html lang={language} dir={dir} id="top" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: languageBootstrap }} />
      </head>
      <body>
        <LanguageProvider initialLanguage={language}>{children}</LanguageProvider>
      </body>
    </html>
  );
}
