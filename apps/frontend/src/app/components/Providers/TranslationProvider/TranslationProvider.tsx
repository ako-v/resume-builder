"client-only";
import { createContext, useContext } from "react";
import { UseTranslationResponse, getI18n } from "react-i18next";
import { useGetTranslation } from "@/lib/i18n/client";
import { fallbackLng } from "@/lib/i18n/config";

const translationCondext = createContext<UseTranslationResponse<"translation", undefined>>({
  t: getI18n().t,
  i18n: getI18n(),
  ready: false,
} as unknown as UseTranslationResponse<"translation", undefined>);

export const useTranslation = () => useContext(translationCondext);

const languageContext = createContext(fallbackLng);

export const useCurrentLanguage = () => useContext(languageContext);

const TranslationProvider = ({ children, lang }: { children: React.ReactNode; lang: string }) => {
  const i18n = useGetTranslation(lang);
  return (
    <translationCondext.Provider value={i18n}>
      <languageContext.Provider value={lang}>{children}</languageContext.Provider>
    </translationCondext.Provider>
  );
};

export default TranslationProvider;
