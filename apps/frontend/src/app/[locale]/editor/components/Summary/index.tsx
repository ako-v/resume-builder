import { forwardRef, useCallback, useImperativeHandle, useMemo, useRef } from "react";
import { useForm, WatchObserver } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { getRules } from "./validations";
import debounce from "@/lib/utils/debounce";
import { EditorStepHandle } from "../Editor";
import useFormWatch from "@/lib/hooks/useFormWatch";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { ResumeDataType, setResumeField } from "@/redux/resumeDataSlice";
import TextEditorController from "@/components/base/Form/TextEditorController";

export type PersonalDetailsProps = {
  /* types */
};

export type FormFields = { summary: ResumeDataType["summary"] };

const Summary = forwardRef<EditorStepHandle, PersonalDetailsProps>((props, ref) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const summary = useAppSelector((state) => state.resumeData.summary);

  const { control, handleSubmit, watch } = useForm<FormFields>({
    defaultValues: {
      summary,
    },
  });

  const rules = useMemo(() => getRules(t), [t]);

  const handleFormChange: WatchObserver<FormFields> = useCallback(
    (data) => {
      timeoutRef.current = debounce(
        () => {
          dispatch(setResumeField({ key: "summary", value: Object.values(data as FormFields) }));
        },
        timeoutRef.current,
        1000
      );
    },
    [dispatch]
  );

  useFormWatch(watch, handleFormChange);

  useImperativeHandle(
    ref,
    () => ({
      onSubmit: () =>
        new Promise<void>((resolve, reject) => {
          handleSubmit((values) => {
            dispatch(setResumeField({ key: "summary", value: values.summary as FormFields["summary"] }));
            resolve();
          }, reject)();
        }),
    }),
    [handleSubmit, dispatch]
  );

  return (
    <div className="">
      <form className="grid grid-cols-1">
        <TextEditorController control={control} name="summary" rules={rules.summary} />
      </form>
    </div>
  );
});

Summary.displayName = "Summary";

export default Summary;
