import React, { useId, useMemo } from "react";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import MuiSelect, { SelectProps as MuiSelectSelectProps } from "@mui/material/Select";

type OptionItem = {
  value: string | number;
  label: string | number;
};

export type SelectProps = MuiSelectSelectProps & {
  label?: string;
  errorMessage?: string;
  invalid?: boolean;
  selectClassName?: string;
  options: OptionItem[];
  noValidation?: boolean;
};

const Select: React.FC<SelectProps> = (props) => {
  const {
    label,
    invalid,
    errorMessage,
    options,
    onChange,
    placeholder,
    className,
    selectClassName,
    noValidation,
    ...restProps
  } = props;

  const createdId = useId();

  const id = useMemo(() => props.id || createdId, [props.id, createdId]);

  return (
    <FormControl className={className}>
      <InputLabel id={id}>{label}</InputLabel>
      <MuiSelect className={selectClassName} label={label} id={id} onChange={onChange} {...restProps}>
        {placeholder && (
          <MenuItem disabled value="none" className="capitalize">
            <em className="text-gray-400">{placeholder}</em>
          </MenuItem>
        )}

        {options.map((option) => (
          <MenuItem key={option.value} value={option.value} className="capitalize">
            {option.label}
          </MenuItem>
        ))}
      </MuiSelect>
      {noValidation ? null : invalid ? (
        <FormHelperText id={id}>{errorMessage}</FormHelperText>
      ) : (
        <span className="h-[22px]" />
      )}
    </FormControl>
  );
};

export default Select;
