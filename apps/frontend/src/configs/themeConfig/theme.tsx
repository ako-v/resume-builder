"use client";

import { experimental_extendTheme as extendTheme } from "@mui/material/styles";
import { dark, light } from "./palettes";
import { typography } from "./typography";

declare module "@mui/material/styles" {
  interface ThemeOptions {
    customShadows?: Record<string, string>;
  }
  interface TypeBackground {
    neutral: string;
  }
  interface Theme {
    customShadows?: Record<string, string>;
  }
}

declare module "@mui/material/Paper" {
  interface PaperPropsVariantOverrides {
    colored?: boolean;
  }
}

export const createTheme = (direction: "rtl" | "ltr") => {
  return extendTheme({
    colorSchemes: {
      light: { palette: light },
      dark: { palette: dark },
    },
    typography: typography,
    shape: {
      borderRadius: 8,
    },
    direction,
    // components: {
    //   MuiAutocomplete: {
    //     defaultProps: {
    //       size: "small",
    //     },
    //   },
    //   MuiButton: {
    //     defaultProps: {
    //       size: "small",
    //     },
    //     styleOverrides: {
    //       sizeSmall: {},
    //     },
    //   },
    //   MuiFilledInput: {
    //     defaultProps: {
    //       margin: "dense",
    //     },
    //   },
    //   MuiFormControl: {
    //     // defaultProps: {
    //     //   margin: "dense",
    //     // },
    //   },
    //   MuiFormHelperText: {
    //     defaultProps: {
    //       margin: "dense",
    //     },
    //   },
    //   MuiIconButton: {
    //     defaultProps: {
    //       size: "small",
    //     },
    //     styleOverrides: {
    //       root: {
    //         margin: "0px !important",
    //       },
    //     },
    //   },
    //   MuiInputBase: {
    //     defaultProps: {
    //       margin: "dense",
    //     },
    //     styleOverrides: {
    //       input: {
    //         "&:-webkit-autofill": {
    //           boxShadow: "0 0 0 100px var(--mui-palette-background-paper) inset !important",
    //         },
    //       },
    //     },
    //   },
    //   MuiInputLabel: {
    //     defaultProps: {
    //       margin: "dense",
    //     },
    //     styleOverrides: {
    //       root: {
    //         textTransform: "capitalize",
    //       },
    //     },
    //   },
    //   MuiListItem: {
    //     defaultProps: {
    //       dense: true,
    //     },
    //   },
    //   MuiOutlinedInput: {
    //     defaultProps: {
    //       margin: "dense",
    //     },
    //   },
    //   MuiFab: {
    //     defaultProps: {
    //       size: "small",
    //     },
    //   },
    //   MuiTable: {
    //     defaultProps: {
    //       size: "small",
    //     },
    //   },
    //   MuiTextField: {
    //     // defaultProps: {
    //     //   size: "small",
    //     // },
    //   },
    //   MuiToolbar: {
    //     defaultProps: {
    //       variant: "dense",
    //     },
    //     styleOverrides: {
    //       root: {
    //         minHeight: 30,
    //         paddingRight: "7px !important",
    //         paddingLeft: "7px !important",
    //       },
    //     },
    //   },
    //   MuiTab: {
    //     styleOverrides: {
    //       root: {
    //         fontSize: "small",
    //         padding: "4px 6px",
    //         minHeight: "48px",
    //       },
    //     },
    //   },
    //   MuiTabs: {
    //     styleOverrides: {
    //       root: {
    //         minHeight: "48px",
    //       },
    //     },
    //   },

    //   MuiFormControlLabel: {
    //     styleOverrides: {
    //       root: {
    //         textTransform: "capitalize",
    //       },
    //     },
    //   },
    // },
  });
};
