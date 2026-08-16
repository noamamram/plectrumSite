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
  languageDirection,
  readLanguageCookie,
} from "./components/language";
import { generateRouteMetadata } from "./components/generateRouteMetadata";

export async function generateMetadata(): Promise<Metadata> {
  const meta = await generateRouteMetadata("/");
  return {
    ...meta,
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
    // Cookie already present: server HTML used it. Do not mutate lang/dir before hydration.
    if (supported.indexOf(cookieLang) >= 0) return;
    var stored = "";
    try { stored = window.localStorage.getItem(key) || ""; } catch (e) {}
    if (supported.indexOf(stored) < 0) return;
    document.cookie = key + "=" + stored + "; path=/; max-age=31536000; SameSite=Lax";
    // Reload so the next response is server-rendered in the stored locale.
    location.replace(location.href);
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
    <html lang={language} dir={dir} id="top">
      <head>
        <script dangerouslySetInnerHTML={{ __html: languageBootstrap }} />
      </head>
      <body>
        <LanguageProvider initialLanguage={language}>{children}</LanguageProvider>
      </body>
    </html>
  );
}
