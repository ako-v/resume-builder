import React, { useId, useMemo } from "react";
import { Controller, RegisterOptions } from "react-hook-form";
import { Checkbox, CheckboxProps, FormControl, FormControlLabel, FormHelperText } from "@mui/material";
import clsx from "clsx";

/**
 * Props for the CheckboxController component.
 */
export interface InputControllerProps extends CheckboxProps {
  label?: string;
  name: string;
  control: any;
  rules?: RegisterOptions;
  checkboxClassName?: string;
  noValidation?: boolean;
}

/**
 * CheckboxController component.
 * Renders a controlled checkbox input using react-hook-form's Controller component.
 *
 * @param name - The name of the checkbox input.
 * @param control - The control object from react-hook-form.
 * @param rules - The validation rules for the checkbox input.
 * @param defaultValue - The default value for the checkbox input.
 * @param props - Additional props for the FormCheckbox component.
 * @returns The rendered CheckboxController component.
 */
const CheckboxController: React.FunctionComponent<InputControllerProps> = ({
  name,
  control,
  rules,
  defaultValue,
  className,
  label,
  checkboxClassName,
  noValidation,
  ...props
}) => {
  const createdId = useId();
  const id = useMemo(() => props.id || createdId, [createdId, props.id]);

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      defaultValue={defaultValue}
      render={({ field: { onChange, onBlur, value }, fieldState: { invalid, error } }) => (
        <>
          {/* <FormCheckbox
            {...props}
            id={name}
            onBlur={onBlur}
            onChange={onChange}
            errorMessage={invalid ? (error as any).message : ""}
            invalid={invalid}
            checked={value}
          /> */}
          <FormControl error={invalid} className={clsx("w-full", className)} variant="standard">
            <FormControlLabel
              label={label}
              control={
                <Checkbox onChange={onChange} checked={value} className={checkboxClassName} id={id} {...props} />
              }
            />
            {noValidation ? null : error ? (
              <FormHelperText id={id}>{invalid ? error.message : ""}</FormHelperText>
            ) : (
              <span className="h-5" />
            )}
          </FormControl>
        </>
      )}
    />
  );
};

export default CheckboxController;
