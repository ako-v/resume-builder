import { forwardRef, useCallback, useImperativeHandle, useMemo, useRef } from "react";
import { useForm, WatchObserver } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { getRules } from "./validations";
import debounce from "@/lib/utils/debounce";
import RemoveEducation from "../RemoveEducation";
import useFormWatch from "@/lib/hooks/useFormWatch";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import InputController from "@/components/base/Form/InputController";
import { ResumeDataType, setResumeField } from "@/redux/resumeDataSlice";
import { EditorStepHandle } from "@/app/[locale]/editor/components/Editor";
import { DatePickerController } from "@/components/base/Form/DatePickerController";

export type EducationItemProps = {
  index: number;
};

export type FormFields = ResumeDataType["educations"][0];

const EducationItem = forwardRef<EditorStepHandle, EducationItemProps>(({ index }, ref) => {
  const { t } = useTranslation();
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const dispatch = useAppDispatch();

  const education = useRef(useAppSelector((state) => state.resumeData.educations[index]));

  const { control, handleSubmit, watch, setValue, clearErrors } = useForm<FormFields>({
    defaultValues: {
      ...education.current,
    },
  });

  const rules = useMemo(() => getRules(t), [t]);

  const handleChangeData: WatchObserver<FormFields> = useCallback(
    (data) => {
      timeoutRef.current = debounce(
        () => {
          dispatch(setResumeField({ key: "educations", index, value: data }));
        },
        timeoutRef.current,
        1000
      );
    },
    [index, dispatch]
  );

  useFormWatch(watch, handleChangeData);

  useImperativeHandle(
    ref,
    () => ({
      onSubmit: () =>
        new Promise<void>((resolve, reject) => {
          handleSubmit((data) => {
            dispatch(setResumeField({ key: "educations", index, value: data }));
            resolve();
          }, reject)();
        }),
    }),
    [handleSubmit, index, dispatch]
  );

  return (
    <Accordion defaultExpanded>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      ></AccordionSummary>
      <AccordionDetails>
        <form className="grid grid-cols-1 lg:grid-cols-2 w-full gap-y-1 gap-x-3">
          <DatePickerController
            control={control}
            required
            name="endDate"
            label={t("form.endDate")}
            rules={rules.endDate}
            minDate={new Date("1900-01-01")}
            disableFuture
            views={["month", "year"]}
            format="MM/yyyy"
          />
          <InputController
            required
            control={control}
            name="degree"
            label={t("form.degree")}
            rules={rules.degree}
            autoFocus
          />
          <InputController
            required
            control={control}
            name="institution"
            label={t("form.institution")}
            rules={rules.institution}
          />
          <InputController
            required
            control={control}
            name="location"
            label={t("form.location")}
            rules={rules.location}
          />
        </form>
        <RemoveEducation index={index} />
      </AccordionDetails>
    </Accordion>
  );
});

EducationItem.displayName = "EducationItem";

export default EducationItem;
