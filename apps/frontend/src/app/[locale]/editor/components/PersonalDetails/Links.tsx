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

export type LinksProps = {
  /* types */
};

type FormFields = {
  links: {
    value: string;
  }[];
};

const Links = forwardRef<EditorStepHandle, LinksProps>((props, ref) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const links = useAppSelector((state) => state.resumeData.personalInfo.data.links) ?? [];

  const { control, handleSubmit, watch } = useForm<{ links: { value: string }[] }>({
    defaultValues: {
      links: links.map((skill) => ({ value: skill })),
    },
  });

  const { fields, append, remove } = useFieldArray({ control, name: "links" as never });

  const handleFormChange: WatchObserver<FormFields> = useCallback(
    (data) => {
      timeoutRef.current = debounce(
        () => {
          dispatch(
            setResumeField({ key: "personalInfo", value: (data?.links ?? [])?.map((skill) => skill?.value ?? "") })
          );
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
              setResumeField({ key: "personalInfo", value: (data?.links ?? [])?.map((skill) => skill?.value ?? "") })
            );
            resolve();
          }, reject)();
        }),
    }),
    [handleSubmit, dispatch]
  );

  const handleAddNewSkill = () => {
    append({ value: "" });
    dispatch(setResumeField({ key: "personalInfo", value: [...links, ""] }));
  };

  const removeSkill = (index: number) => {
    remove(index);
    dispatch(setResumeField({ key: "personalInfo", value: links.filter((_, i) => i !== index) }));
  };

  return (
    <div className="">
      <form className="grid grid-cols-1 lg:grid-cols-2 w-full gap-y-1 gap-x-3">
        {fields?.map((field, index) => (
          <InputController
            key={field.id}
            control={control}
            name={`links.${index}.value`}
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

Links.displayName = "links";

export default Links;
