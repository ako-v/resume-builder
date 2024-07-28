import { forwardRef, useMemo } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

import { getRules } from "./validations";
import { EditorStepHandle } from "../Editor";
import { useAppSelector } from "@/redux/hooks";
import InputController from "@/components/base/Form/InputController";
import { ResumeDataType } from "@/redux/resumeDataSlice";
import IconButton from "@/components/base/IconButton";

export type PersonalDetailsProps = {
  /* types */
};

export type FormFields = ResumeDataType["personalInfo"]["data"];

const PersonalDetails = forwardRef<EditorStepHandle, PersonalDetailsProps>((props, ref) => {
  const { t } = useTranslation();
  const personalDetail = useAppSelector((state) => state.resumeData.personalInfo.data);

  const { control, watch } = useForm<FormFields>({
    defaultValues: {
      ...{ ...personalDetail, links: personalDetail?.links ?? [] },
    },
  });
  const { fields, append, remove } = useFieldArray({ control, name: "links" as never });

  console.log(watch());

  const rules = useMemo(() => getRules(t), [t]);

  const handleAddNewLink = () => {
    append({ value: "" });
  };

  const removeLink = (index: number) => () => {
    remove(index);
  };

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
