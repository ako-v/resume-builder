import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";

import { setResumeField } from "@/redux/resumeDataSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

const RemoveEducation = ({ index }: { index: number }) => {
  const { t } = useTranslation();
  const educations = useAppSelector((state) => state.resumeData.educations);
  const dispatch = useAppDispatch();

  const handleRemoveEducation = () => {
    dispatch(
      setResumeField({
        key: "educations",
        value: [...educations.slice(0, index), ...educations.slice(index + 1)],
      })
    );
  };

  return (
    <div className="flex justify-end">
      <Button onClick={handleRemoveEducation}>{t("general.remove")}</Button>
    </div>
  );
};

export default RemoveEducation;
