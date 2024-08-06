"use client";
import { forwardRef, useCallback, useImperativeHandle, useMemo, useRef } from "react";
import { useFieldArray, useForm, WatchObserver } from "react-hook-form";
import { useTranslation } from "react-i18next";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import { getRules } from "./validations";
import debounce from "@/lib/utils/debounce";
import { EditorStepHandle } from "../Editor";
import useFormWatch from "@/lib/hooks/useFormWatch";
import IconButton from "@/components/base/IconButton";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import InputController from "@/components/base/Form/InputController";
import { ResumeDataType, setResumeField } from "@/redux/resumeDataSlice";

export type PersonalDetailsProps = {
  /* types */
};

export type FormFields = Omit<ResumeDataType["personalInfo"]["data"], "links"> & { links: { value: string }[] };

const PersonalDetails = forwardRef<EditorStepHandle, PersonalDetailsProps>((props, ref) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const personalInfo = useAppSelector((state) => state.resumeData.personalInfo.data);

  const { control, handleSubmit, watch } = useForm<FormFields>({
    defaultValues: {
      ...{ ...personalInfo, links: (personalInfo?.links ?? []).map((link) => ({ value: link })) },
    },
  });

  const { fields, append, remove } = useFieldArray({ control, name: "links" as never });

  const rules = useMemo(() => getRules(t), [t]);

  const handleFormChange: WatchObserver<FormFields> = useCallback(
    (data) => {
      timeoutRef.current = debounce(
        () => {
          dispatch(
            setResumeField({
              key: "personalInfo",
              value: {
                ...data,
                links: (data?.links ?? []).map((link) => link?.value),
              } as ResumeDataType["personalInfo"]["data"],
            })
          );
        },
        timeoutRef.current,
        1000
      );
    },
    [dispatch]
  );

  const handleAddNewLink = () => {
    append({ value: "" });
    dispatch(
      setResumeField({
        key: "personalInfo",
        value: { ...personalInfo, links: [...(personalInfo?.links ?? []), ""] },
      })
    );
  };

  const removeLink = (index: number) => () => {
    remove(index);
    dispatch(
      setResumeField({
        key: "personalInfo",
        value: { ...personalInfo, links: (personalInfo.links ?? []).filter((_, i) => i !== index) },
      })
    );
  };

  useFormWatch(watch, handleFormChange);

  useImperativeHandle(
    ref,
    () => ({
      onSubmit: () =>
        new Promise<void>((resolve, reject) => {
          handleSubmit((values) => {
            dispatch(
              setResumeField({
                key: "personalInfo",
                value: { ...values, links: (values?.links ?? []).map((link) => link.value) },
              })
            );
            resolve();
          }, reject)();
        }),
    }),
    [handleSubmit, dispatch]
  );

  return (
    <div className="">
      <form className="grid grid-cols-1 lg:grid-cols-2 w-full gap-y-1 gap-x-3">
        <InputController
          control={control}
          required
          name="firstName"
          label={t("form.firstName")}
          rules={rules.firstName}
        />
        <InputController control={control} required name="lastName" label={t("form.lastName")} rules={rules.lastName} />
        <InputController control={control} required name="jobTitle" label={t("form.jobTitle")} rules={rules.jobTitle} />
        <InputController
          required
          control={control}
          name="phone"
          label={t("form.phone")}
          inputMode="numeric"
          type="tel"
          rules={rules.phone}
        />
        <InputController
          required
          control={control}
          name="email"
          label={t("form.email")}
          type="email"
          inputMode="email"
          rules={rules.email}
        />
        <InputController control={control} required name="address" label={t("form.address")} rules={rules.address} />
        {fields?.map((field, index) => (
          <InputController
            key={field.id}
            control={control}
            name={`links.${index}.value`}
            label={t("form.link")}
            rules={rules.links}
            InputProps={{
              endAdornment: (
                <IconButton title={t("general.remove")} onClick={removeLink(index)}>
                  <RemoveIcon />
                </IconButton>
              ),
            }}
          />
        ))}
        <div>
          <IconButton onClick={handleAddNewLink} title={t("general.add")}>
            <AddIcon />
          </IconButton>
        </div>
      </form>
    </div>
  );
});

PersonalDetails.displayName = "PersonalDetails";

export default PersonalDetails;
