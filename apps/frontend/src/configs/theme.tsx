"use client";

import { experimental_extendTheme as extendTheme } from "@mui/material/styles";
import { Inter } from "next/font/google";

const fontFamily = Inter({
  subsets: ["latin"],
});

export const createTheme = (direction: "rtl" | "ltr") => {
  return extendTheme({
    colorSchemes: {
      light: {
        palette: {
          primary: {
            main: "#17657b",
          },
          grey: {
            300: "#BDBDBD",
            500: "#4b5563",
          },
          text: {
            primary: "#444444",
          },
        },
      },
      dark: {
        palette: {
          primary: {
            main: "#2188a5",
          },
          grey: {
            900: "#fafafa",
            800: "#f5f5f5",
            700: "#eeeeee",
            600: "#BDBDBD",
            500: "#bdbdbd",
            400: "#1f2937",
            300: "#757575",
            200: "#616161",
            100: "#424242",
            50: "#212121",
            A100: "#f5f5f5",
            A200: "#eeeeee",
            A400: "#bdbdbd",
            A700: "#616161",
          },
        },
      },
    },
    typography: {
      fontFamily: fontFamily.style.fontFamily,
    },
    direction,
    components: {
      MuiAutocomplete: {
        defaultProps: {
          size: "small",
        },
      },
      MuiButton: {
        defaultProps: {
          size: "small",
        },
        styleOverrides: {
          sizeSmall: {},
        },
      },
      MuiFilledInput: {
        defaultProps: {
          margin: "dense",
        },
      },
      MuiFormControl: {
        // defaultProps: {
        //   margin: "dense",
        // },
      },
      MuiFormHelperText: {
        defaultProps: {
          margin: "dense",
        },
      },
      MuiIconButton: {
        defaultProps: {
          size: "small",
        },
        styleOverrides: {
          root: {
            margin: "0px !important",
          },
        },
      },
      MuiInputBase: {
        defaultProps: {
          margin: "dense",
        },
        styleOverrides: {
          input: {
            "&:-webkit-autofill": {
              boxShadow: "0 0 0 100px var(--mui-palette-background-paper) inset !important",
            },
          },
        },
      },
      MuiInputLabel: {
        defaultProps: {
          margin: "dense",
        },
        styleOverrides: {
          root: {
            textTransform: "capitalize",
          },
        },
      },
      MuiListItem: {
        defaultProps: {
          dense: true,
        },
      },
      MuiOutlinedInput: {
        defaultProps: {
          margin: "dense",
        },
      },
      MuiFab: {
        defaultProps: {
          size: "small",
        },
      },
      MuiTable: {
        defaultProps: {
          size: "small",
        },
      },
      MuiTextField: {
        // defaultProps: {
        //   size: "small",
        // },
      },
      MuiToolbar: {
        defaultProps: {
          variant: "dense",
        },
        styleOverrides: {
          root: {
            minHeight: 30,
            paddingRight: "7px !important",
            paddingLeft: "7px !important",
          },
        },
      },
      MuiTab: {
        styleOverrides: {
          root: {
            fontSize: "small",
            padding: "4px 6px",
            minHeight: "48px",
          },
        },
      },
      MuiTabs: {
        styleOverrides: {
          root: {
            minHeight: "48px",
          },
        },
      },

      MuiFormControlLabel: {
        styleOverrides: {
          root: {
            textTransform: "capitalize",
          },
        },
      },
    },
  });
};
