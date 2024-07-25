import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";

import { getRules } from "./validations";
import { EditorStepHandle } from "../Editor";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import InputController from "@/components/base/Form/InputController";
import { ResumeDataType, setPersonalDetail } from "@/redux/resumeDataSlice";
// import TextEditor from "@/components/base/TextEditor";
import { Range } from "quill";
import { Delta } from "quill/core";
import dynamic from "next/dynamic";

export type PersonalDetailsProps = {
  /* types */
};

export type FormFields = ResumeDataType["personalInfo"];

const TextEditor = dynamic(() => import("@/components/base/TextEditor"), { ssr: false });

const PersonalDetails = forwardRef<EditorStepHandle, PersonalDetailsProps>((props, ref) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const personalDetail = useAppSelector((state) => state.resumeData.personalInfo);

  const { control, handleSubmit, watch } = useForm<FormFields>({
    defaultValues: {
      ...personalDetail,
    },
  });

  const rules = getRules(t);

  watch((data) => {
    timeoutRef?.current && clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      dispatch(setPersonalDetail(data as FormFields));
    }, 1000);
  });

  useImperativeHandle(
    ref,
    () => ({
      onSubmit: () =>
        new Promise<void>((resolve, reject) => {
          handleSubmit((values) => {
            dispatch(setPersonalDetail(values));
            resolve();
          }, reject)();
        }),
    }),
    [handleSubmit, dispatch]
  );

  const [lastChange, setLastChange] = useState("");

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
        <InputController control={control} name="city" label={t("form.city")} rules={rules.city} />
        <InputController control={control} name="zipcode" label={t("form.zipcode")} rules={rules.zipcode} />
        <InputController control={control} name="state" label={t("form.state")} rules={rules.state} />
        <InputController control={control} name="country" label={t("form.country")} rules={rules.country} />
        <InputController control={control} name="website" label={t("form.website")} rules={rules.website} />
        <InputController control={control} name="twitter" label={t("form.twitter")} rules={rules.website} />
        <InputController control={control} name="linkedin" label={t("form.linkedin")} rules={rules.website} />
        <InputController control={control} name="github" label={t("form.github")} rules={rules.github} />
      </form>
    </div>
  );
});

PersonalDetails.displayName = "PersonalDetails";

export default PersonalDetails;
