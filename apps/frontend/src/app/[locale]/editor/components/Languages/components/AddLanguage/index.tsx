import AddIcon from "@mui/icons-material/Add";
import { useTranslation } from "react-i18next";

import IconButton from "@/components/base/IconButton";
import { setResumeField } from "@/redux/resumeDataSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

const AddNewEducation = () => {
  const { t } = useTranslation();
  const languages = useAppSelector((state) => state.resumeData.languages);
  const dispatch = useAppDispatch();

  const handleAddNewEducation = () => {
    dispatch(
      setResumeField({
        key: "languages",
        value: [
          ...languages,
          {
            language: "",
            proficiency: "native",
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
