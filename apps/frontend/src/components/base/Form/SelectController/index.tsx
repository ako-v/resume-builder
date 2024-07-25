import React from "react";
import { Controller, RegisterOptions } from "react-hook-form";
import Select, { SelectProps } from "../Select";

export type SelectControllerProps = SelectProps & {
  label?: string;
  name: string;
  control: any;
  rules?: RegisterOptions;
};

export const SelectController: React.FunctionComponent<SelectControllerProps> = ({
  name,
  control,
  rules,
  ...props
}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      defaultValue={props.defaultValue}
      render={({ field: { onChange, onBlur, value }, fieldState: { invalid, error } }) => (
        <Select
          {...props}
          id={name}
          onBlur={onBlur}
          onChange={onChange}
          errorMessage={invalid ? (error as any).message : ""}
          invalid={invalid}
          value={value}
        />
      )}
    />
  );
};
