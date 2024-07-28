import { forwardRef, useImperativeHandle, useMemo, useRef } from "react";

import { EditorStepHandle } from "../Editor";
import { useAppSelector } from "@/redux/hooks";
import EducationItem from "./components/EducationItem";
import AddNewEducation from "./components/AddEducation";

export type SkillsProps = {
  /* types */
};

const useGetEducationsLength = () => {
  const educations = useAppSelector((state) => state.resumeData.educations.data);
  return educations.length;
};

const Educations = forwardRef<EditorStepHandle, SkillsProps>((props, ref) => {
  const educationsLength = useGetEducationsLength();
  const educationsRefs = useRef<(EditorStepHandle | null)[]>([]);

  const educationIds = useMemo(
    () => Array.from({ length: educationsLength }).map((_, index) => Math.random().toString(36).substring(7)),
    [educationsLength]
  );

  useImperativeHandle(
    ref,
    () => ({
      onSubmit: async () => {
        const allPromises = educationsRefs.current.map((ref) => ref?.onSubmit() as Promise<void>);
        await Promise.all(allPromises);
      },
    }),
    []
  );

  return (
    <div className="">
      <div className="grid grid-cols-1 w-full gap-3">
        {educationIds.map((id, index) => {
          return (
            <div key={id}>
              <EducationItem index={index} ref={(el) => (educationsRefs.current[index] = el)} />
            </div>
          );
        })}
      </div>
      <div>
        <AddNewEducation />
      </div>
    </div>
  );
});

Educations.displayName = "Experiences";

export default Educations;
