"use client";

import { useMemo } from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { Experimental_CssVarsProvider as CSSVarsProvider } from "@mui/material/styles";
import { dir } from "i18next";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";

import { createTheme } from "@/configs/theme";

export default function ThemeRegistry({ children, params }: { children: React.ReactNode; params: { locale: string } }) {
  const direction = dir(params.locale);
  const theme = useMemo(() => {
    return createTheme(direction);
  }, [direction]);

  return (
    <AppRouterCacheProvider
      options={{
        key: direction === "ltr" ? "mui" : "muirtl",
        stylisPlugins: direction === "ltr" ? [] : [prefixer, rtlPlugin],
      }}
    >
      <CSSVarsProvider theme={theme}>{children}</CSSVarsProvider>
    </AppRouterCacheProvider>
  );
}
