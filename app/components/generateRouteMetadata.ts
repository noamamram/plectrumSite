import type { Metadata } from "next";
import { cookies } from "next/headers";
import { LANGUAGE_COOKIE, readLanguageCookie } from "./language";
import { getRouteMeta } from "./pageMeta";

export async function generateRouteMetadata(route: string): Promise<Metadata> {
  const cookieStore = await cookies();
  const language = readLanguageCookie(cookieStore.get(LANGUAGE_COOKIE)?.value);
  const meta = getRouteMeta(route, language);
  return {
    title: meta.title,
    description: meta.description,
  };
}
