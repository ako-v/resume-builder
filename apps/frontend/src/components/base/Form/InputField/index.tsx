import React from "react";
import { InputAdornment, TextField, TextFieldProps } from "@mui/material";
import LockIcon from "@mui/icons-material/Lock";
import IconButton from "@/components/base/IconButton";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";

export type InputFieldProps = TextFieldProps & {
  errorMessage?: string;
  invalid?: boolean;
};

const InputField: React.FC<InputFieldProps> = (props) => {
  const { errorMessage, invalid, type, InputProps, ...restProps } = props;

  const { startAdornment, endAdornment, ...restInputProps } = InputProps ?? {};

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => {
    setShowPassword((show) => !show);
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <TextField
      error={invalid}
      helperText={errorMessage}
      InputProps={{
        startAdornment:
          type === "password" ? (
            <InputAdornment position="start">
              <LockIcon />
            </InputAdornment>
          ) : (
            InputProps?.startAdornment
          ),
        endAdornment:
          type === "password" ? (
            <InputAdornment position="end">
              <IconButton
                tabIndex={-1}
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
              </IconButton>
            </InputAdornment>
          ) : (
            endAdornment
          ),
        ...restInputProps,
      }}
      {...restProps}
    />
  );
};

export default InputField;
