"use client";

import Button from "@/components/base/Button";
import { Box, Step, StepLabel, Stepper, Typography } from "@mui/material";
import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import PersonalDetails from "../PersonalDetails";

export type EditorProps = {
  /* types */
};

const Editor: React.FC<EditorProps> = (props) => {
  const { t } = useTranslation();
  const [activeStep, setActiveStep] = useState(0);

  const steps = useMemo(() => {
    return [
      { title: t("editorPage.personalDetails"), description: t("editorPage.personalDetailsDescription") },
      { title: t("editorPage.experiences"), description: t("editorPage.experiencesDescription") },
      { title: t("editorPage.education"), description: t("editorPage.educationDescription") },
      { title: t("editorPage.skills"), description: t("editorPage.skillsDescription") },
      { title: t("editorPage.languages"), description: t("editorPage.languagesDescription") },
    ];
  }, [t]);

  const handleNext = () => {
    if (activeStep < steps.length) {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    } else {
      // handle finish
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
          {activeStep === steps.length ? t("general.finish") : t("general.next")}
        </Button>
      </Box>
      <Box>
        <Typography className="mb-3">{steps[activeStep].description}</Typography>
        {activeStep === 0 && <PersonalDetails />}
      </Box>
    </Box>
  );
};
export default Editor;
