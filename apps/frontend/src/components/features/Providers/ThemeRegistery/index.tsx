"use client";

import { useEffect, useMemo, useState } from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { Experimental_CssVarsProvider as CSSVarsProvider } from "@mui/material/styles";
import { dir } from "i18next";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";

import { createTheme } from "@/configs/themeConfig/theme";
import { shadows } from "@/configs/themeConfig/shadows";
import { overrides } from "@/configs/themeConfig/overrides";

export default function ThemeRegistry({ children, params }: { children: React.ReactNode; params: { locale: string } }) {
  const direction = dir(params.locale);

  // const theme = useMemo(() => {
  //   return createTheme(direction);
  // }, [direction]);

  const [theme, setTheme] = useState(createTheme(direction));

  useEffect(() => {
    const overrideTheme = () => {
      setTheme((theme) => {
        const pallete =
          document.documentElement.dataset.muiColorScheme === "dark"
            ? theme.colorSchemes.dark.palette
            : theme.colorSchemes.light.palette;
        const newTheme = { ...theme };
        newTheme.shadows = shadows(pallete.grey["500"]);
        newTheme.components = overrides({ theme, pallete });
        return newTheme;
      });
    };
    overrideTheme();
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "attributes" && mutation.attributeName === "data-mui-color-scheme") {
          overrideTheme();
        }
      });
    });
    observer.observe(document.documentElement, { attributes: true });
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <AppRouterCacheProvider
      options={{
        key: direction === "ltr" ? "mui" : "muirtl",
        stylisPlugins: direction === "ltr" ? [] : [prefixer, rtlPlugin],
      }}
    >
      <CSSVarsProvider theme={theme} defaultMode="system">
        {children}
      </CSSVarsProvider>
    </AppRouterCacheProvider>
  );
}
