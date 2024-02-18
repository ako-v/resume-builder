"use client";

import initTranslations from "@/lib/i18n";
import { createInstance } from "i18next";
import { ReactNode } from "react";
import { I18nextProvider } from "react-i18next";

type TranslaionProviderProps = {
  children: ReactNode;
  locale: string;
};

const TranslaionProvider: React.FC<TranslaionProviderProps> = ({ children, locale }) => {
  const i18n = createInstance({ lng: locale });

  initTranslations(locale, i18n);
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};

export default TranslaionProvider;
