import { forwardRef, useEffect, useImperativeHandle, useMemo, useRef, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { EditorStepHandle } from "../Editor";
import { useAppSelector } from "@/redux/hooks";
import ExperienceItem from "./components/ExperienceItem";
import AddNewExperience from "./components/AddExperience";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import RemoveExperience from "./components/RemoveExperience";

export type SkillsProps = {
  /* types */
};

const useGetExperienceLength = () => {
  const experiences = useAppSelector((state) => state.resumeData.experiences);
  return experiences.length;
};

const Experiences = forwardRef<EditorStepHandle, SkillsProps>((props, ref) => {
  const experiencesLength = useGetExperienceLength();
  const experiencesRefs = useRef<(EditorStepHandle | null)[]>([]);
  const [experienceIds, setExperienceIds] = useState(
    Array.from({ length: experiencesLength }).map((_, index) => (Date.now() + index).toString(16))
  );

  const [expanded, setExpanded] = useState<string | false>(false);

  const handleExpansionChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? panel : false);
  };

  useEffect(() => {
    setExpanded(experienceIds[experienceIds.length - 1]);
  }, [experiencesLength, experienceIds]);

  useImperativeHandle(
    ref,
    () => ({
      onSubmit: async () => {
        const allPromises = experiencesRefs.current.map((ref) => ref?.onSubmit() as Promise<void>);
        await Promise.all(allPromises);
      },
    }),
    []
  );

  return (
    <div className="">
      <div className="grid grid-cols-1 w-full">
        {experienceIds.map((id, index) => {
          return (
            <Accordion defaultExpanded key={id} expanded={expanded === id} onChange={handleExpansionChange(id)}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} />
              <AccordionDetails>
                <ExperienceItem index={index} ref={(el) => (experiencesRefs.current[index] = el)} />
                <RemoveExperience index={index} id={id} setExperienceIds={setExperienceIds} />
              </AccordionDetails>
            </Accordion>
          );
        })}
      </div>
      <div>
        <AddNewExperience setExperienceIds={setExperienceIds} />
      </div>
    </div>
  );
});

Experiences.displayName = "Experiences";

export default Experiences;
