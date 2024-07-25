import getDateFnsLocale from "./getDateFnsLocale";
import { format, FormatOptions } from "date-fns";
import { format as formatJalali } from "date-fns-jalali";

const formatDate = (
  date: Date,
  formatString: string,
  { locale, ...options }: { locale: string } & Omit<FormatOptions, "locale">
): string => {
  if (isNaN(date?.getTime?.())) {
    return "";
  }
  if (date instanceof Date) {
    const dateFnsLocale = getDateFnsLocale(locale);
    if (dateFnsLocale?.code === "fa-IR") {
      return formatJalali(date, formatString, { locale: dateFnsLocale, ...options });
    }
    return format(date, formatString, { locale: dateFnsLocale, ...options });
  }
  return "";
};

export default formatDate;
