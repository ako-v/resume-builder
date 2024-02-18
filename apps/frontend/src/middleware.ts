import { stackMiddleware } from "@/lib/middlewares/stackMiddleware";
import { localizer } from "./lib/middlewares/internationalizer";

const middlewares = [localizer];

export default stackMiddleware(middlewares);

export const config = {
  // Matcher ignoring `/_next/` and `/api/`
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
