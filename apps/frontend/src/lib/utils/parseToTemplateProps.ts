import { TemplateProps, TemplatePropsInputs } from "@ui/templates";
import formatDate from "./formatDate";

const parseToTemplateProps = (obj: Record<string, any>, dateFormat: string, locale: string): any => {
  if (obj === null || obj === undefined) {
    return obj;
  }

  if (obj instanceof Date) {
    const parsed = formatDate(obj, dateFormat, { locale });
    return parsed;
  }

  if (typeof obj === "string" && isISODateString(obj)) {
    const parsed = formatDate(new Date(obj), dateFormat, { locale });
    return parsed;
  }

  if (Array.isArray(obj)) {
    return obj.map((item) => parseToTemplateProps(item, dateFormat, locale));
  }

  if (typeof obj === "object") {
    const newObj: any = {};
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        newObj[key] = parseToTemplateProps(obj[key], dateFormat, locale);
      }
    }
    return newObj;
  }

  // If it's not an object, array, or Date, return it as is
  return obj;
};

export default parseToTemplateProps;

function isISODateString(str: string): boolean {
  return /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/.test(str);
}
