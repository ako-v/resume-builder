import { NextMiddleware, NextResponse } from "next/server";

import { MiddlewareFactory } from "@/@types/middleware";

export const stackMiddleware = (middlewares: MiddlewareFactory[], index = 0): NextMiddleware => {
  const current = middlewares[index];
  if (current) {
    const next = stackMiddleware(middlewares, index + 1);
    return current(next);
  }
  return () => NextResponse.next();
};
