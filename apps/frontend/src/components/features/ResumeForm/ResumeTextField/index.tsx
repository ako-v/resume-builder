import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { ResumeDataType, setResumeField } from "@/redux/resumeDataSlice";
import { TextField, TextFieldProps } from "@mui/material";
import { ChangeEvent } from "react";

export type ResumeTextFieldProps = TextFieldProps & {
  category: keyof ResumeDataType;
  name: string;
};

const ResumeTextField: React.FC<ResumeTextFieldProps> = ({ name, category, onChange, ...restProps }) => {
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.resumeData);
  const value = state?.[category]?.[name] as string;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setResumeField({ category, name, value: e.target.value }));
  };

  return <TextField value={value} name={name} onChange={handleChange} {...restProps} />;
};
export default ResumeTextField;
