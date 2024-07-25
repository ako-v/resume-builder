import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";

import { setResumeField } from "@/redux/resumeDataSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

const RemoveLanguage = ({ index }: { index: number }) => {
  const { t } = useTranslation();
  const languages = useAppSelector((state) => state.resumeData.languages);
  const dispatch = useAppDispatch();

  const handleRemoveLanguage = () => {
    dispatch(
      setResumeField({
        key: "languages",
        value: [...languages.slice(0, index), ...languages.slice(index + 1)],
      })
    );
  };

  return (
    <div className="flex justify-end">
      <Button onClick={handleRemoveLanguage}>{t("general.remove")}</Button>
    </div>
  );
};

export default RemoveLanguage;
