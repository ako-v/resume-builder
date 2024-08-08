import { alpha } from "@mui/material/styles";

// ----------------------------------------------------------------------

type customShadowsColors = {
  grey500: string;
  primary: string;
  secondary: string;
  info: string;
  success: string;
  warning: string;
  error: string;
  black: string;
};

export function customShadows({ grey500, primary, secondary, info, success, warning, error, black }: customShadowsColors) {
  const transparent = alpha(grey500, 0.16);

  return {
    z1: `0 1px 2px 0 ${transparent}`,
    z4: `0 4px 8px 0 ${transparent}`,
    z8: `0 8px 16px 0 ${transparent}`,
    z12: `0 12px 24px -4px ${transparent}`,
    z16: `0 16px 32px -4px ${transparent}`,
    z20: `0 20px 40px -4px ${transparent}`,
    z24: `0 24px 48px 0 ${transparent}`,
    //
    card: `0 0 2px 0 ${alpha(grey500, 0.08)}, 0 12px 24px -4px ${alpha(grey500, 0.08)}`,
    dropdown: `0 0 2px 0 ${alpha(grey500, 0.24)}, -20px 20px 40px -4px ${alpha(grey500, 0.24)}`,
    dialog: `-40px 40px 80px -8px ${alpha(black, 0.24)}`,
    //
    primary: `0 8px 16px 0 ${alpha(primary, 0.24)}`,
    info: `0 8px 16px 0 ${alpha(info, 0.24)}`,
    secondary: `0 8px 16px 0 ${alpha(secondary, 0.24)}`,
    success: `0 8px 16px 0 ${alpha(success, 0.24)}`,
    warning: `0 8px 16px 0 ${alpha(warning, 0.24)}`,
    error: `0 8px 16px 0 ${alpha(error, 0.24)}`,
  };
}
