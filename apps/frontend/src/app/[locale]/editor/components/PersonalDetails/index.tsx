import InputController from "@/components/base/Form/InputController";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { getRules } from "./validations";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { ResumeDataType, setPersonalDetail } from "@/redux/resumeDataSlice";

export type PersonalDetailsProps = {
  /* types */
};

type FormFields = ResumeDataType["personalDetail"];

const PersonalDetails: React.FC<PersonalDetailsProps> = (props) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const personalDetail = useAppSelector((state) => state.resumeData.personalDetail);
  const { control, handleSubmit } = useForm<FormFields>({
    defaultValues: {
      ...personalDetail,
    },
  });
  const rules = getRules(t);

  const onSubmit = handleSubmit((values) => {
    dispatch(setPersonalDetail(values));
  });

  return (
    <div className="">
      <form className="grid grid-cols-1 lg:grid-cols-2 w-full gap-3" onSubmit={onSubmit}>
        <InputController control={control} name="firstName" label={t("form.firstName")} rules={rules.firstName} />
        <InputController control={control} name="lastName" label={t("form.lastName")} />
        <InputController control={control} name="jobTitle" label={t("form.jobTitle")} />
        <InputController control={control} name="phone" label={t("form.phone")} inputMode="numeric" type="tel" />
        <InputController control={control} name="email" label={t("form.email")} type="email" inputMode="email" />
        <InputController control={control} name="address" label={t("form.address")} />
        <InputController control={control} name="city" label={t("form.city")} />
        <InputController control={control} name="zipcode" label={t("form.zipcode")} />
        <InputController control={control} name="state" label={t("form.state")} />
        <InputController control={control} name="country" label={t("form.country")} />
      </form>
    </div>
  );
};
export default PersonalDetails;
