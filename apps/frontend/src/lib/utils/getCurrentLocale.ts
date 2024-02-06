import type { NextRequest } from "next/server";
import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

import { fallbackLng as defaultLocale, languages as availableLocales, Locales } from "@/lib/i18n/config";

export function getMatchedLocale(request: NextRequest): Locales {
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));

  let requestedLocales = new Negotiator({ headers: negotiatorHeaders }).languages(
    availableLocales as unknown as string[]
  );

  const locale = matchLocale(requestedLocales, availableLocales, defaultLocale) as Locales;

  return locale;
}

export const getRefererLocale = (request: NextRequest): Locales => {
  const refererUrl = new URL(request.headers.get("referer") ?? "");
  return (
    availableLocales.find(
      (locale) => refererUrl.pathname.startsWith(`/${locale}/`) || refererUrl.pathname === `/${locale}`
    ) ?? defaultLocale
  );
};
