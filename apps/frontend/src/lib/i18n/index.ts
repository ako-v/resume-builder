import { createInstance, i18n } from "i18next";
import { initReactI18next } from "react-i18next/initReactI18next";
import resourcesToBackend from "i18next-resources-to-backend";
import i18nConfig from "@/../i18nConfig";

export default async function initTranslations(locale: string, i18nInstance: i18n | null = null) {
  i18nInstance = i18nInstance || createInstance();

  i18nInstance
    .use(initReactI18next)
    .use(resourcesToBackend((language: string) => import(`@/lib/i18n/dictionaries/${language}.ts`)));

  await i18nInstance.init({
    lng: locale,
    fallbackLng: i18nConfig.defaultLocale,
    supportedLngs: i18nConfig.locales,
    preload: i18nConfig.locales,
    keySeparator: ".",
    interpolation: {
      escapeValue: false,
      skipOnVariables: false,
    },
  });

  return {
    i18n: i18nInstance,
    resources: i18nInstance.services.resourceStore.data,
    t: i18nInstance.t,
  };
}
