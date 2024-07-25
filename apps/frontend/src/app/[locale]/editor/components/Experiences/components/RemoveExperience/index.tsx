import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";

import { setResumeField } from "@/redux/resumeDataSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

export type RemoveExperienceProps = {
  index: number;
  id: string;
  setExperienceIds: React.Dispatch<React.SetStateAction<string[]>>;
};

const RemoveExperience: React.FC<RemoveExperienceProps> = ({ index, id, setExperienceIds }) => {
  const { t } = useTranslation();
  const experiences = useAppSelector((state) => state.resumeData.experiences);
  const dispatch = useAppDispatch();

  const handleRemoveExperience = () => {
    setExperienceIds((prev) => prev.filter((item) => item !== id));
    dispatch(
      setResumeField({
        key: "experiences",
        value: [...experiences.slice(0, index), ...experiences.slice(index + 1)],
      })
    );
  };

  return (
    <div className="flex justify-end">
      <Button onClick={handleRemoveExperience}>{t("general.remove")}</Button>
    </div>
  );
};

export default RemoveExperience;
