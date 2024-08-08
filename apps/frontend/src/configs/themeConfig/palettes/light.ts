import { alpha } from "@mui/material/styles";

// ----------------------------------------------------------------------

// SETUP COLORS

export const grey = {
  0: "#FFFFFF",
  50: "#FAFAFA",
  100: "#F9FAFB",
  200: "#F4F6F8",
  300: "#DFE3E8",
  400: "#C4CDD5",
  500: "#919EAB",
  600: "#637381",
  700: "#454F5B",
  800: "#242C37",
  900: "#161C24",
};

export const primary = {
  light: "#208AA8",
  main: "#17657b",
  dark: "#114959",
  contrastText: "#F9FAFB",
};

export const secondary = {
  light: "#5093FF",
  main: "#3381ff",
  dark: "#0054DB",
  contrastText: "#F9FAFB",
};

export const info = {
  light: "#61F3F3",
  main: "#00B8D9",
  dark: "#006C9C",
  contrastText: "#F9FAFB",
};

export const success = {
  light: "#5BE49B",
  main: "#00A76F",
  dark: "#007867",
  contrastText: "#F9FAFB",
};

export const warning = {
  light: "#FFD666",
  main: "#FFAB00",
  dark: "#B76E00",
  contrastText: grey[100],
};

export const error = {
  light: "#FFAC82",
  main: "#FF5630",
  dark: "#B71D18",
  contrastText: "#F9FAFB",
};

export const common = {
  black: "#000000",
  white: "#FFFFFF",
};

export const text = {
  primary: grey[700],
  secondary: grey[600],
  disabled: grey[500],
};

export const background = {
  paper: "#FFFFFF",
  default: grey[100],
  neutral: grey[200],
};

export const action = {
  hover: alpha(grey[500], 0.08),
  selected: alpha(grey[500], 0.16),
  disabled: alpha(grey[500], 0.8),
  disabledBackground: alpha(grey[500], 0.24),
  focus: alpha(grey[500], 0.24),
  active: grey[600],
  hoverOpacity: 0.08,
  disabledOpacity: 0.48,
};

const palette = {
  primary,
  secondary,
  info,
  success,
  warning,
  error,
  grey,
  common,
  divider: alpha(grey[500], 0.2),
  action,
  text,
  background,
};

export default palette;
