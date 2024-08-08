import { Components, CssVarsPalette, Palette, Theme, alpha } from "@mui/material/styles";
import { outlinedInputClasses } from "@mui/material/OutlinedInput";
import { stepClasses } from "@mui/material/Step";
import { background } from "./palettes/light";

// ----------------------------------------------------------------------

declare module "@mui/material/styles" {
  interface TypeBackground {
    neutral: string;
  }
  interface Theme {
    customShadows?: Record<string, string>;
  }
}

declare module "@mui/material" {
  interface Color {
    0: string;
  }
}

declare module "@mui/material/Paper" {
  interface PaperPropsVariantOverrides {
    colored?: boolean;
  }
}

export function overrides({ theme, pallete }: { theme: Theme; pallete: Palette & CssVarsPalette }): Components {
  return {
    MuiCssBaseline: {
      styleOverrides: {
        "*": {
          boxSizing: "border-box",
        },
        html: {
          margin: 0,
          padding: 0,
          width: "100%",
          height: "100%",
          WebkitOverflowScrolling: "touch",
        },
        body: {
          margin: 0,
          padding: 0,
          width: "100%",
          height: "100%",
          color: pallete.grey[800],
          backgroundColor: pallete.background.default,
        },
        "#root": {
          width: "100%",
          height: "100%",
        },
        input: {
          "&[type=number]": {
            MozAppearance: "textfield",
            "&::-webkit-outer-spin-button": {
              margin: 0,
              WebkitAppearance: "none",
            },
            "&::-webkit-inner-spin-button": {
              margin: 0,
              WebkitAppearance: "none",
            },
          },
        },
        img: {
          maxWidth: "100%",
          display: "inline-block",
          verticalAlign: "bottom",
        },
      },
    },
    MuiAutocomplete: {
      defaultProps: {
        slotProps: {
          paper: {
            variant: "colored",
          },
        },
      },
      styleOverrides: {
        paper: {
          padding: 4,
        },
        popper: {
          boxShadow: theme.customShadows?.dropdown,
          borderRadius: 8,
        },
      },
    },
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: alpha(pallete.grey[900], 0.8),
        },
        invisible: {
          background: "transparent",
        },
      },
    },
    MuiButton: {
      defaultProps: {
        size: "small",
        color: "inherit",
      },
      styleOverrides: {
        containedInherit: {
          color: pallete.grey[0],
          backgroundColor: pallete.grey[800],
          "&:hover": {
            color: pallete.grey[0],
            backgroundColor: pallete.grey[700],
          },
        },
        outlinedInherit: {
          color: "inherit",
          borderColor: alpha(pallete.grey[500], 0.32),
          "&:hover": {
            borderColor: "currentcolor",
            boxShadow: "currentcolor 0px 0px 0px 0.5px",
          },
        },
        sizeLarge: {
          minHeight: 48,
        },
      },
    },
    MuiStep: {
      styleOverrides: {
        root: {
          "& .MuiSvgIcon-root": {
            fill: pallete.grey[400],
          },
          "& .MuiSvgIcon-root .MuiStepIcon-text": {
            fill: pallete.grey[0],
            fontWeight: 700,
          },
          "& .MuiSvgIcon-root.Mui-active": {
            fill: pallete.grey[900],
          },
        },
        completed: {
          "& .MuiSvgIcon-root": {
            fill: pallete.grey[900],
          },
        },
      },
    },
    MuiButtonGroup: {
      defaultProps: {
        color: "inherit",
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: theme.customShadows?.card,
          borderRadius: Number(theme.shape.borderRadius) * 2,
          position: "relative",
          zIndex: 0, // Fix Safari overflow: hidden with border radius
        },
      },
      defaultProps: {
        elevation: 1,
      },
    },
    MuiCardHeader: {
      defaultProps: {
        titleTypographyProps: { variant: "h6", textTransform: "capitalize" },
        subheaderTypographyProps: { variant: "body2" },
      },
      styleOverrides: {
        root: {
          padding: theme.spacing(2, 2, 0),
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: pallete.grey[800],
          "&.Mui-checked": {
            color: pallete.grey[800],
          },
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: 16,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          [`& .${outlinedInputClasses.notchedOutline}`]: {
            borderColor: alpha(pallete.grey[500], 0.24),
          },
        },
      },
    },
    MuiPaper: {
      variants: [
        {
          props: { variant: "colored" },
          style: {
            backgroundImage: "url(/images/cyan-blur.png), url(/images/red-blur.png)",
            backgroundRepeat: "no-repeat, no-repeat",
            backgroundPosition: "top right, left bottom",
            backgroundSize: "50%, 50%",
            ...(theme.direction === "rtl" && {
              backgroundPosition: "top left, right bottom",
            }),
            padding: theme.spacing(1),
          },
        },
      ],
      defaultProps: {
        elevation: 0,
      },
    },
    MuiPopover: {
      defaultProps: {
        slotProps: {
          paper: {
            variant: "colored",
            sx: {
              boxShadow: theme?.customShadows?.dropdown,
            },
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          color: pallete.text.secondary,
          backgroundColor: pallete.background.neutral,
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: pallete.mode === "light" ? pallete.grey[800] : pallete.grey[300],
        },
        arrow: {
          color: pallete.mode === "light" ? pallete.grey[800] : pallete.grey[300],
        },
      },
    },
    MuiTypography: {
      defaultProps: {
        // color: pallete.grey[800],
      },
      styleOverrides: {
        paragraph: {
          marginBottom: theme.spacing(2),
        },
        gutterBottom: {
          marginBottom: theme.spacing(1),
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          ...theme.typography.body2,
          textTransform: "capitalize",
          color: pallete.grey[800],
          borderRadius: 8,
          padding: "6px 8px",
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        container: {
          ".Mui-selected": {
            color: pallete.primary.main,
          },
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          "&.Mui-selected": {
            color: pallete.primary.main,
          },
          "&.Mui-selected .MuiListItemIcon-root": {
            color: pallete.primary.main,
          },
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          "& .MuiFormLabel-root": {
            textTransform: "capitalize",
            fontSize: "0.875rem",
          },
          "& .MuiInputBase-root": {
            fontSize: "0.875rem",
          },
          "& .MuiInputBase-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: pallete.grey[900],
          },
          "& .MuiFormLabel-root.Mui-focused": {
            color: pallete.grey[900],
          },
          "& .MuiFormLabel-root.MuiInputLabel-shrink": {
            fontSize: "1rem",
            fontWeight: 600,
          },
          "& .MuiInputBase-root .MuiOutlinedInput-notchedOutline": {
            fontSize: "1rem",
          },
        },
      },
    },
    MuiSelect: {
      defaultProps: {
        MenuProps: {
          slotProps: {
            paper: {
              variant: "colored",
              sx: {
                padding: 0.5,
                boxShadow: theme?.customShadows?.dropdown,
              },
            },
          },
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        size: "medium",
        variant: "outlined",
      },
      styleOverrides: {
        root: {
          "& .MuiInputBase-root": {
            fontSize: "0.875rem",
          },
          "& .MuiInputBase-root .MuiOutlinedInput-notchedOutline": {
            fontSize: "1rem",
          },
          "& .MuiInputBase-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: pallete.grey[900],
          },
          "& .MuiFormLabel-root": {
            textTransform: "capitalize",
            fontSize: "0.875rem",
          },
          "& .MuiFormLabel-root.MuiInputLabel-shrink": {
            fontSize: "1rem",
            fontWeight: 600,
          },
          "& .MuiFormLabel-root.Mui-focused": {
            color: pallete.grey[900],
          },
        },
      },
    },
  };
}
