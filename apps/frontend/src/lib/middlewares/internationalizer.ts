import { MiddlewareFactory } from "@/@types/middleware";
import { i18nRouter } from "next-i18n-router";
import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
import i18nConfig from "@/../i18nConfig";
/**
 *
 * @param next
 * @returns MiddlewareFactory
 * @description this should be the last middleware in the stack
 */
export const internationalizer: MiddlewareFactory = (next) => {
  return async (request: NextRequest, event: NextFetchEvent) => {
    const i18nResponse = i18nRouter(request, { ...i18nConfig });
    return i18nResponse;
    // if (
    //   i18nResponse.headers.get("x-middleware-request-cookie")?.split("=")[1] !==
    //   i18nResponse.headers.get("x-next-i18n-router-locale")
    // ) {
    //   return i18nResponse;
    // } else if (i18nResponse.headers.get("x-next-i18n-router-locale") === i18nConfig.defaultLocale) {
    //   const pathname = request.nextUrl.pathname;
    //   const newPath = `${i18nConfig.defaultLocale}${pathname}`;
    //   const responseOptions = {
    //     request: {
    //       headers: new Headers(request.headers),
    //     },
    //   };
    //   const response = NextResponse.rewrite(new URL(newPath, request.url), responseOptions);
    //   return response;
    // } else {
    //   return next(request, event);
    // }
  };
};
