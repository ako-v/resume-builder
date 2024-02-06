import { NextResponse } from "next/server";
import type { NextRequest, NextFetchEvent } from "next/server";

import { MiddlewareFactory } from "@/@types/middleware";
import { getMatchedLocale } from "@/lib/utils/getCurrentLocale";
import { languages } from "@/lib/i18n/config";

export const internationalizer: MiddlewareFactory = (next) => {
  return async (request: NextRequest, event: NextFetchEvent) => {
    const pathname = request.nextUrl.pathname;

    // `/_next/` and `/api/` are ignored by the watcher, but we need to ignore files in `public` manually.
    // If you have one
    // if (
    //   [
    //     '/manifest.json',
    //     '/favicon.ico',
    //     // Your other files in `public`
    //   ].includes(pathname)
    // )
    //   return

    // Check if there is any supported locale in the pathname
    const pathnameIsMissingLocale = languages.every(
      (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
    );

    // Redirect if there is no locale
    if (pathnameIsMissingLocale) {
      const locale = getMatchedLocale(request);

      // e.g. incoming request is /products
      // The new URL is now /en-US/products
      return NextResponse.redirect(new URL(`/${locale}${pathname.startsWith("/") ? "" : "/"}${pathname}`, request.url));
    }
    return await next(request, event);
  };
};
