import { forwardRef, useCallback, useImperativeHandle, useMemo, useRef } from "react";
import { useForm, WatchObserver } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Card, CardContent, MenuItem } from "@mui/material";

import { getRules } from "./validations";
import debounce from "@/lib/utils/debounce";
import RemoveLanguage from "../RemoveLanguage";
import useFormWatch from "@/lib/hooks/useFormWatch";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import InputController from "@/components/base/Form/InputController";
import { ResumeDataType, setResumeField } from "@/redux/resumeDataSlice";
import { EditorStepHandle } from "@/app/[locale]/editor/components/Editor";

export type LanguageItemProps = {
  index: number;
};

const menuItems: ResumeDataType["languages"]["data"][0]["proficiency"][] = [
  "native",
  "fluent",
  "advanced",
  "intermediate",
  "elementery",
];

export type FormFields = ResumeDataType["languages"]["data"][0];

const LanguageItem = forwardRef<EditorStepHandle, LanguageItemProps>(({ index }, ref) => {
  const { t } = useTranslation();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const dispatch = useAppDispatch();

  const language = useRef(useAppSelector((state) => state.resumeData.languages.data[index]));

  const { control, handleSubmit, watch } = useForm<FormFields>({
    defaultValues: {
      ...language.current,
    },
  });

  const rules = useMemo(() => getRules(t), [t]);

  const handleChangeData: WatchObserver<FormFields> = useCallback(
    (data) => {
      timeoutRef.current = debounce(
        () => {
          const transformedData = { ...data, proficiencyText: t(`languageProficiencies.${data.proficiency}`) };
          dispatch(setResumeField({ key: "languages", index, value: transformedData }));
        },
        timeoutRef.current,
        1000
      );
    },
    [index, dispatch, t]
  );

  useFormWatch(watch, handleChangeData);

  useImperativeHandle(
    ref,
    () => ({
      onSubmit: () =>
        new Promise<void>((resolve, reject) => {
          handleSubmit((data) => {
            const transformedData = { ...data, proficiencyText: t(`languageProficiencies.${data.proficiency}`) };
            dispatch(setResumeField({ key: "languages", index, value: transformedData }));
            resolve();
          }, reject)();
        }),
    }),
    [handleSubmit, index, dispatch, t]
  );

  return (
    <Card>
      <CardContent>
        <form className="grid grid-cols-1 lg:grid-cols-2 w-full gap-y-1 gap-x-3">
          <InputController
            required
            control={control}
            name="language"
            label={t("form.language")}
            rules={rules.language}
            autoFocus
          />
          <InputController
            select
            required
            control={control}
            name="proficiency"
            label={t("form.proficiency")}
            rules={rules.proficiency}
            autoFocus
          >
            {menuItems.map((item) => (
              <MenuItem key={item} value={item}>
                {t(`languageProficiencies.${item}`)}
              </MenuItem>
            ))}
          </InputController>
        </form>
        <RemoveLanguage index={index} />
      </CardContent>
    </Card>
  );
});

LanguageItem.displayName = "LanguageItem";

export default LanguageItem;
