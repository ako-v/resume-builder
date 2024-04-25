import { CircularProgress } from "@mui/material";
import MuiButton, { ButtonProps as MuiButtonProps } from "@mui/material/Button";

import React from "react";

export type ButtonProps = MuiButtonProps & {
  loading?: boolean;
  component?: string;
};

const Button: React.FC<ButtonProps> = (props) => {
  const { disabled, loading, ...rest } = props;

  return (
    <MuiButton
      variant="contained"
      size="small"
      startIcon={loading && <CircularProgress size="1.1rem" />}
      disabled={disabled || loading}
      {...rest}
    />
  );
};

export default Button;
