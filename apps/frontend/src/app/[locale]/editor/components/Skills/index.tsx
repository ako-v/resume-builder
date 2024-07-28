import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";
import { useFieldArray, useForm, WatchObserver } from "react-hook-form";
import { useTranslation } from "react-i18next";
// import debounce from "debounce";

import { EditorStepHandle } from "../Editor";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import InputController from "@/components/base/Form/InputController";

import { setResumeField } from "@/redux/resumeDataSlice";
import IconButton from "@/components/base/IconButton";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import debounce from "@/lib/utils/debounce";
import useFormWatch from "@/lib/hooks/useFormWatch";

export type SkillsProps = {
  /* types */
};

type FormFields = {
  skills: {
    value: string;
  }[];
};

const Skills = forwardRef<EditorStepHandle, SkillsProps>((props, ref) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const skills = useAppSelector((state) => state.resumeData.skills.data);

  const { control, handleSubmit, watch } = useForm<{ skills: { value: string }[] }>({
    defaultValues: {
      skills: skills.map((skill) => ({ value: skill })),
    },
  });

  const { fields, append, remove } = useFieldArray({ control, name: "skills" as never });

  const handleFormChange: WatchObserver<FormFields> = useCallback(
    (data) => {
      timeoutRef.current = debounce(
        () => {
          dispatch(setResumeField({ key: "skills", value: (data?.skills ?? [])?.map((skill) => skill?.value ?? "") }));
        },
        timeoutRef.current,
        1000
      );
    },
    [dispatch]
  );

  useFormWatch(watch, handleFormChange);

  useImperativeHandle(
    ref,
    () => ({
      onSubmit: () =>
        new Promise<void>((resolve, reject) => {
          handleSubmit((data) => {
            dispatch(
              setResumeField({ key: "skills", value: (data?.skills ?? [])?.map((skill) => skill?.value ?? "") })
            );
            resolve();
          }, reject)();
        }),
    }),
    [handleSubmit, dispatch]
  );

  const handleAddNewSkill = () => {
    append({ value: "" });
    dispatch(setResumeField({ key: "skills", value: [...skills, ""] }));
  };

  const removeSkill = (index: number) => {
    remove(index);
    dispatch(setResumeField({ key: "skills", value: skills.filter((_, i) => i !== index) }));
  };

  return (
    <div className="">
      <form className="grid grid-cols-1 lg:grid-cols-2 w-full gap-y-1 gap-x-3">
        {fields?.map((field, index) => (
          <InputController
            key={field.id}
            control={control}
            name={`skills.${index}.value`}
            label={t("form.skill")}
            InputProps={{
              endAdornment: (
                <IconButton title={t("general.remove")} onClick={() => removeSkill(index)}>
                  <RemoveIcon />
                </IconButton>
              ),
            }}
          />
        ))}
        <div>
          <IconButton onClick={handleAddNewSkill} title={t("general.add")}>
            <AddIcon />
          </IconButton>
        </div>
      </form>
    </div>
  );
});

Skills.displayName = "Skills";

export default Skills;
