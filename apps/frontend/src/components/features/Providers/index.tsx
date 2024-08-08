"use client";

import { ReactNode } from "react";
import { SnackbarProvider } from "notistack";
import ThemeRegistry from "./ThemeRegistery";
import ReduxProvider from "./ReduxProvider";
import TranslationProvider from "./TranslationProvider";
import StyledComponentsProvider from "./StyledComponentsProvider";

export type ProvidersProps = {
  children: ReactNode;
  params: {
    locale: string;
  };
};

const Providers: React.FC<ProvidersProps> = ({ children, params }) => {
  return (
    <ReduxProvider>
      <ThemeRegistry params={params}>
        <TranslationProvider locale={params.locale}>
          <SnackbarProvider maxSnack={3}>
            <StyledComponentsProvider>{children}</StyledComponentsProvider>
          </SnackbarProvider>
        </TranslationProvider>
      </ThemeRegistry>
    </ReduxProvider>
  );
};

export default Providers;
