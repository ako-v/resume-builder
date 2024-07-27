import getDateFnsLocale from "./getDateFnsLocale";
import { format, FormatOptions } from "date-fns";
import { format as formatJalali } from "date-fns-jalali";

const formatDate = (
  date: Date | string,
  formatString: string,
  { locale, ...options }: { locale: string } & Omit<FormatOptions, "locale">
): string => {
  let newDate = date;
  if (typeof date === "string") {
    newDate = new Date(date);
  }
  if (newDate instanceof Date && isNaN(newDate?.getTime?.())) {
    return "";
  }
  if (newDate instanceof Date) {
    const dateFnsLocale = getDateFnsLocale(locale);
    if (dateFnsLocale?.code === "fa-IR") {
      return formatJalali(date, formatString, { locale: dateFnsLocale, ...options });
    }
    return format(date, formatString, { locale: dateFnsLocale, ...options });
  }
  return "";
};

export default formatDate;
