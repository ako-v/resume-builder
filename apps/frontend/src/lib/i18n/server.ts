"server-only";

import { createInstance } from "i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import { initReactI18next } from "react-i18next/initReactI18next";
import { getOptions } from "./config";

const getI18nAsync = async (lng: string) => {
  const i18nInstance = createInstance();
  await i18nInstance
    .use(initReactI18next)
    .use(resourcesToBackend((language: string) => import(`./dictionaries/${language}.ts`)))
    .init(getOptions(lng));
  return i18nInstance;
};

export async function useTranslation(lng: string, options = {}) {
  const i18nextInstance = await getI18nAsync(lng);
  return {
    t: i18nextInstance.getFixedT(lng),
    i18n: i18nextInstance,
  };
}
