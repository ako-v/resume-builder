"use client";

import { Step, StepContent, StepLabel, Stepper, Typography } from "@mui/material";
import { useState } from "react";

export type EditorProps = {
  /* types */
};

const steps = [
  { title: "Personal details", description: "Enter your personal details" },
  { title: "Experiences", description: "Enter your experiences" },
  { title: "Education", description: "Enter your education" },
  { title: "Skills", description: "Enter your skills" },
  { title: "Languages", description: "Enter your languages" },
];

const Editor: React.FC<EditorProps> = (props) => {
  const [activeStep, setActiveStep] = useState(0);
  return (
    <div>
      <Stepper alternativeLabel>
        {steps.map((step, index) => {
          return (
            <Step key={step.title} active={activeStep === index} completed={false}>
              <StepLabel>{step.title}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
    </div>
  );
};
export default Editor;
