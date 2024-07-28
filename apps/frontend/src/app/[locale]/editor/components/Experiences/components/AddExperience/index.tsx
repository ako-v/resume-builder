import AddIcon from "@mui/icons-material/Add";
import { useTranslation } from "react-i18next";

import IconButton from "@/components/base/IconButton";
import { setResumeField } from "@/redux/resumeDataSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

export type AddNewExperienceProps = {
  setExperienceIds: React.Dispatch<React.SetStateAction<string[]>>;
};

const AddNewExperience: React.FC<AddNewExperienceProps> = ({ setExperienceIds }) => {
  const { t } = useTranslation();
  const experiences = useAppSelector((state) => state.resumeData.experiences.data);
  const dispatch = useAppDispatch();

  const handleAddNewExperience = () => {
    setExperienceIds((prev) => [...prev, Date.now().toString(16)]);
    dispatch(
      setResumeField({
        key: "experiences",
        value: [
          ...experiences,
          {
            title: "",
            company: "",
            location: "",
            startDate: null,
            endDate: null,
            currentPosition: true,
            description: "",
          },
        ],
      })
    );
  };

  return (
    <IconButton onClick={handleAddNewExperience} title={t("general.add")}>
      <AddIcon />
    </IconButton>
  );
};

export default AddNewExperience;
