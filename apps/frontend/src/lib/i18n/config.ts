import { InitOptions } from "i18next";

export const fallbackLng = "en";
export const languages = [fallbackLng, "de", "fa"] as const;
export type Locales = (typeof languages)[number];
export const cookieName = "i18next";

export const getOptions = (lng = fallbackLng): InitOptions => {
  return {
    // debug: true,
    supportedLngs: languages,
    fallbackLng,
    lng,
    keySeparator: ".",
    interpolation: {
      escapeValue: false,
      skipOnVariables: false,
    },
  };
};
