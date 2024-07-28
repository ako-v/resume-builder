import { forwardRef, useCallback, useEffect, useImperativeHandle, useMemo, useRef } from "react";
import { useForm, WatchObserver } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { getRules } from "./validations";
import debounce from "@/lib/utils/debounce";
import useFormWatch from "@/lib/hooks/useFormWatch";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import InputController from "@/components/base/Form/InputController";
import { ResumeDataType, setResumeField } from "@/redux/resumeDataSlice";
import { EditorStepHandle } from "@/app/[locale]/editor/components/Editor";
import CheckboxController from "@/components/base/Form/CheckboxController";
import TextEditorController from "@/components/base/Form/TextEditorController";
import { DatePickerController } from "@/components/base/Form/DatePickerController";

export type ExperienceItemProps = {
  index: number;
};

export type FormFields = ResumeDataType["experiences"]["data"][0];

const ExperienceItem = forwardRef<EditorStepHandle, ExperienceItemProps>(({ index }, ref) => {
  const { t } = useTranslation();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const dispatch = useAppDispatch();

  const experience = useRef(useAppSelector((state) => state.resumeData.experiences.data[index]));

  const { control, handleSubmit, watch, setValue, clearErrors } = useForm<FormFields>({
    defaultValues: {
      ...experience.current,
    },
  });

  const rules = useMemo(() => getRules(t), [t]);

  const handleChangeData: WatchObserver<FormFields> = useCallback(
    (data) => {
      timeoutRef.current = debounce(
        () => {
          dispatch(setResumeField({ key: "experiences", index, value: data }));
        },
        timeoutRef.current,
        1000
      );
    },
    [index, dispatch]
  );

  useEffect(() => {
    watch((data) => {
      if (data.currentPosition && data.endDate) {
        setValue("endDate", null);
      }
      if (data.currentPosition) {
        clearErrors("endDate");
      }
    });
  }, [watch, clearErrors, setValue]);

  useFormWatch(watch, handleChangeData);

  useImperativeHandle(
    ref,
    () => ({
      onSubmit: () =>
        new Promise<void>((resolve, reject) => {
          handleSubmit((data) => {
            dispatch(setResumeField({ key: "experiences", index, value: data }));
            resolve();
          }, reject)();
        }),
    }),
    [handleSubmit, index, dispatch]
  );

  return (
    <form className="grid grid-cols-1 lg:grid-cols-2 w-full gap-y-1 gap-x-3">
      <InputController required control={control} name="title" label={t("form.title")} rules={rules.title} autoFocus />
      <InputController required control={control} name="company" label={t("form.company")} rules={rules.company} />
      <InputController required control={control} name="location" label={t("form.location")} rules={rules.location} />
      <DatePickerController
        control={control}
        required
        name="startDate"
        label={t("form.startDate")}
        rules={rules.startDate}
        minDate={new Date("1900-01-01")}
        disableFuture
        views={["month", "year"]}
        format="MM/yyyy"
      />
      <DatePickerController
        control={control}
        name="endDate"
        label={t("form.endDate")}
        rules={rules.endDate}
        disableFuture
        disabled={!!watch("currentPosition")}
        minDate={watch("startDate") ?? undefined}
        views={["month", "year"]}
        format="MM/yyyy"
      />
      <CheckboxController control={control} name="currentPosition" label={t("form.currentPosition")} />
      <TextEditorController className="col-span-2" control={control} name="description" rules={rules.description} />
    </form>
  );
});

ExperienceItem.displayName = "ExperienceItem";

export default ExperienceItem;
