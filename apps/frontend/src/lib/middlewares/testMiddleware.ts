import { MiddlewareFactory } from "@/@types/middleware";
import { NextFetchEvent, NextRequest } from "next/server";

export const testMiddleware: MiddlewareFactory = (next) => {
  return (request: NextRequest, event: NextFetchEvent) => {
    console.log("im here");
    return next(request, event);
  };
};
