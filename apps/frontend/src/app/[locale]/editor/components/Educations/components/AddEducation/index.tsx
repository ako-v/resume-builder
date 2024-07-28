import AddIcon from "@mui/icons-material/Add";
import { useTranslation } from "react-i18next";

import IconButton from "@/components/base/IconButton";
import { setResumeField } from "@/redux/resumeDataSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

const AddNewEducation = () => {
  const { t } = useTranslation();
  const educations = useAppSelector((state) => state.resumeData.educations.data);
  const dispatch = useAppDispatch();

  const handleAddNewEducation = () => {
    dispatch(
      setResumeField({
        key: "educations",
        value: [
          ...educations,
          {
            degree: "",
            institution: "",
            location: "",
            endDate: null,
          },
        ],
      })
    );
  };

  return (
    <IconButton onClick={handleAddNewEducation} title={t("general.add")}>
      <AddIcon />
    </IconButton>
  );
};

export default AddNewEducation;
