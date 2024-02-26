import React from "react";
import { Controller, RegisterOptions } from "react-hook-form";
import InputField, { InputFieldProps } from "../InputField";

export type InputControllerProps = InputFieldProps & {
  name: string;
  control: any;
  rules?: RegisterOptions;
};

const InputController: React.FunctionComponent<InputControllerProps> = ({
  name,
  control,
  rules,
  defaultValue,
  ...props
}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      defaultValue={defaultValue}
      render={({ field: { onChange, onBlur, value }, fieldState: { invalid, error } }) => (
        <InputField
          {...props}
          id={name}
          onBlur={onBlur}
          onChange={onChange}
          errorMessage={invalid ? (error as any).message : ""}
          invalid={invalid}
          value={value}
          size="small"
        />
      )}
    />
  );
};

export default InputController;
