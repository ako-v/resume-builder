import { alpha } from "@mui/material/styles";

// ----------------------------------------------------------------------

// SETUP COLORS

export const grey = {
  900: "#FBFBFC",
  800: "#F9FAFB",
  700: "#F4F6F8",
  600: "#DFE3E8",
  500: "#C4CDD5",
  400: "#919EAB",
  300: "#637381",
  200: "#454F5B",
  100: "#242C37",
  50: "#161C24",
  0: "#000000",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161",
};

export const primary = {
  light: "#176277",
  main: "#2188a5",
  dark: "#33B3D7",
  contrastText: "#FFFFFF",
};

export const secondary = {
  light: "#2A7CFF",
  main: "#5d9bff",
  dark: "#73A9FF",
  contrastText: "#FFFFFF",
};

export const info = {
  light: "#61F3F3",
  main: "#00B8D9",
  dark: "#006C9C",
  contrastText: "#FFFFFF",
};

export const success = {
  light: "#5BE49B",
  main: "#00A76F",
  dark: "#007867",
  contrastText: "#FFFFFF",
};

export const warning = {
  light: "#FFD666",
  main: "#FFAB00",
  dark: "#B76E00",
  contrastText: grey[800],
};

export const error = {
  light: "#FFAC82",
  main: "#FF5630",
  dark: "#B71D18",
  contrastText: "#FFFFFF",
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
  paper: grey[100], // "#000000",
  default: "#161C24", // grey[100],
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
