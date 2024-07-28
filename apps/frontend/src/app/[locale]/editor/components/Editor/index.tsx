"use client";

import Button from "@/components/base/Button";
import { Box, Step, StepLabel, Stepper, Typography } from "@mui/material";
import { useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import PersonalDetails from "../PersonalDetails";
import Summary from "../Summary";
import Skills from "../Skills";
import Experiences from "../Experiences";
import Educations from "../Educations";
import Languages from "../Languages";
import PDFGenerator from "../PDFGenerator";
import { useAppDispatch } from "@/redux/hooks";
import { setResumeTitles } from "@/redux/resumeDataSlice";

export type EditorProps = {
  /* types */
};

export type EditorStepHandle = {
  onSubmit: () => Promise<void>;
};

const Editor: React.FC<EditorProps> = (props) => {
  const { t } = useTranslation();
  const [activeStep, setActiveStep] = useState(0);
  const dispatch = useAppDispatch();

  const personalDetailsRef = useRef<EditorStepHandle>(null);
  const summaryDetailsRef = useRef<EditorStepHandle>(null);
  const skillsDetailsRef = useRef<EditorStepHandle>(null);
  const experiencesDetailsRef = useRef<EditorStepHandle>(null);
  const educationDetailsRef = useRef<EditorStepHandle>(null);
  const languagesDetailsRef = useRef<EditorStepHandle>(null);

  useEffect(() => {
    dispatch(
      setResumeTitles({
        personalInfo: { title: t("resumeFields.personalDetails") },
        summary: { title: t("resumeFields.summary") },
        skills: { title: t("resumeFields.skills") },
        experiences: { title: t("resumeFields.experiences") },
        educations: { title: t("resumeFields.educations") },
        languages: { title: t("resumeFields.languages") },
      })
    );
  }, [t, dispatch]);

  const steps = useMemo(
    () => [
      {
        title: t("editorPage.personalDetails"),
        description: t("editorPage.personalDetailsDescription"),
        ref: personalDetailsRef,
      },
      {
        title: t("editorPage.summary"),
        description: t("editorPage.summaryDescription"),
        ref: summaryDetailsRef,
      },
      {
        title: t("editorPage.skills"),
        description: t("editorPage.skillsDescription"),
        ref: skillsDetailsRef,
      },
      {
        title: t("editorPage.experiences"),
        description: t("editorPage.experiencesDescription"),
        ref: experiencesDetailsRef,
      },
      {
        title: t("editorPage.education"),
        description: t("editorPage.educationDescription"),
        ref: educationDetailsRef,
      },
      {
        title: t("editorPage.languages"),
        description: t("editorPage.languagesDescription"),
        ref: languagesDetailsRef,
      },
    ],
    [t]
  );

  const handleNext = () => {
    if (activeStep + 1 < steps?.length) {
      steps[activeStep].ref.current
        ?.onSubmit()
        .then((res) => {
          setActiveStep((prevActiveStep) => prevActiveStep + 1);
        })
        .catch(() => {});
    }
    if (activeStep + 1 === steps.length) {
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box className="px-3">
      <Stepper alternativeLabel>
        {steps.map((step, index) => {
          return (
            <Step key={step.title} active={activeStep === index} completed={activeStep > index}>
              <StepLabel>{step.title}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <Box className="flex justify-between px-2">
        <Button variant="text" onClick={handleBack} disabled={activeStep === 0}>
          {t("general.back")}
        </Button>
        <Button variant="text" onClick={handleNext}>
          {activeStep + 1 === steps.length ? t("general.finish") : t("general.next")}
        </Button>
      </Box>
      <Box>
        <Typography className="mb-3">{steps[activeStep].description}</Typography>
        {activeStep === 0 && <PersonalDetails ref={personalDetailsRef} />}
        {activeStep === 1 && <Summary ref={summaryDetailsRef} />}
        {activeStep === 2 && <Skills ref={skillsDetailsRef} />}
        {activeStep === 3 && <Experiences ref={experiencesDetailsRef} />}
        {activeStep === 4 && <Educations ref={educationDetailsRef} />}
        {activeStep === 5 && <Languages ref={languagesDetailsRef} />}
      </Box>
      {activeStep + 1 === steps.length && <PDFGenerator />}
    </Box>
  );
};
export default Editor;
