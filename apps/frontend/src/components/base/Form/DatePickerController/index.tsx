import React from "react";
import { Controller, RegisterOptions } from "react-hook-form";
import { DatePickerProps } from "@mui/x-date-pickers/DatePicker";

import DatePicker from "@/components/base/DatePicker";

/**
 * Props for the DatePickerController component.
 */
export interface DatePickerControllerProps extends DatePickerProps<Date> {
  label?: string;
  name: string;
  control: any;
  defaultValue?: any;
  rules?: RegisterOptions;
  id?: string;
  invalid?: boolean;
  noValidation?: boolean;
  required?: boolean;
}

/**
 * A custom form controller component that wraps the DatePicker component.
 * It integrates with react-hook-form library and provides additional functionality.
 * @param name - The name of the date picker input.
 * @param control - The control object from react-hook-form.
 * @param rules - The validation rules for the date picker input.
 * @param invalid - Whether the date picker input is invalid.
 * @param noValidation - Whether to disable validation for the date picker input.
 * @param required - Whether the date picker input is required.
 * @param props - Additional props for the DatePicker component.
 */
export const DatePickerController: React.FunctionComponent<DatePickerControllerProps> = ({
  name,
  control,
  rules,
  invalid,
  noValidation,
  required,
  ...props
}) => {
  const { slotProps, ...restProps } = props;
  const { textField, ...restSlotProps } = slotProps ?? {};

  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      defaultValue={props.defaultValue}
      render={({ field: { onChange, onBlur, value }, fieldState: { invalid, error } }) => (
        <DatePicker
          {...restProps}
          slotProps={{
            textField: {
              ...textField,
              helperText: noValidation ? "" : invalid ? error?.message : " ",
              error: invalid,
              required,
            },
            ...restSlotProps,
          }}
          onChange={onChange}
          value={value}
        />
      )}
    />
  );
};
