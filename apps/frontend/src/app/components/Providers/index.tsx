"use client";
import { ReactNode } from "react";
import { SnackbarProvider } from "notistack";
import ThemeRegistry from "./ThemeRegistery/ThemeRegistery";
// import ReduxProvider from "./ReduxProvider/ReduxProvider";
import TranslationProvider from "./TranslationProvider/TranslationProvider";
import StyledComponentsProvider from "./StyledComponentsProvider";

export type ProvidersProps = {
  children: ReactNode;
  params: {
    lang: string;
  };
};

const Providers: React.FC<ProvidersProps> = ({ children, params }) => {
  return (
    <ThemeRegistry params={params}>
      {/* <ReduxProvider> */}
      <TranslationProvider lang={params.lang}>
        <SnackbarProvider maxSnack={3} className="blabla">
          <StyledComponentsProvider>{children}</StyledComponentsProvider>
        </SnackbarProvider>
      </TranslationProvider>
      {/* </ReduxProvider> */}
    </ThemeRegistry>
  );
};

export default Providers;
