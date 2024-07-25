import { Locale } from "date-fns";

const getDateFnsLocale = (locale: string): Locale => {
  switch (locale) {
    case "en":
      return require("date-fns/locale/en-US").enUS;
    case "es":
      return require("date-fns/locale/es")?.es;
    case "fr":
      return require("date-fns/locale/fr")?.es;
    case "fa":
      return require("date-fns-jalali/locale/fa-IR")?.faIR;
    case "de":
      return require("date-fns/locale/de")?.de;
    default:
      return require("date-fns/locale/en-US")?.enUS;
  }
};

export default getDateFnsLocale;
