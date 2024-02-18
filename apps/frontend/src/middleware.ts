import { stackMiddleware } from "@/lib/middlewares/stackMiddleware";
// import { internationalizer } from "@/lib/middlewares/internationalizer";
import { localizer } from "./lib/middlewares/localizer";
// import { internationalizerNotPrefixed } from "./lib/middlewares/internationalizerNotPrefixed";

const middlewares = [localizer];

export default stackMiddleware(middlewares);

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
