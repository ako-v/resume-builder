import React from "react";
import { Controller, RegisterOptions } from "react-hook-form";

import { FormHelperText } from "@mui/material";
import dynamic from "next/dynamic";
import { TextEditorProps } from "@/components/base/TextEditor";
import clsx from "clsx";

const TextEditor = dynamic(() => import("@/components/base/TextEditor"), { ssr: false });

export type TextEditorControllerProps = Partial<TextEditorProps> & {
  name: string;
  control: any;
  defaultValue?: string;
  rules?: RegisterOptions;
};

const TextEditorController: React.FunctionComponent<TextEditorControllerProps> = ({
  name,
  control,
  rules,
  defaultValue,
  className,
  ...props
}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      defaultValue={defaultValue}
      render={({ field: { onChange, onBlur, value }, fieldState: { invalid, error } }) => (
        <>
          <TextEditor
            {...props}
            className={clsx({ "validation-error": invalid }, className)}
            id={name}
            onBlur={onBlur}
            onChange={onChange}
            // errorMessage={invalid ? (error as any).message : ""}
            // invalid={invalid}
            defaultValue={value}
          />
          <FormHelperText className="mx-3" error={invalid}>
            {invalid ? (error as any).message : " "}
          </FormHelperText>
        </>
      )}
    />
  );
};

export default TextEditorController;
