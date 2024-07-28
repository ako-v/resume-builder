import { forwardRef, useImperativeHandle, useMemo, useRef } from "react";

import { EditorStepHandle } from "../Editor";
import { useAppSelector } from "@/redux/hooks";
import LanugageItem from "./components/Languagetem";
import AddNewLanguage from "./components/AddLanguage";

export type SkillsProps = {
  /* types */
};

const useGetLanguagesLength = () => {
  const languages = useAppSelector((state) => state.resumeData.languages.data);
  return languages.length;
};

const Languages = forwardRef<EditorStepHandle, SkillsProps>((props, ref) => {
  const languagesLength = useGetLanguagesLength();
  const languagesRefs = useRef<(EditorStepHandle | null)[]>([]);

  const languageIds = useMemo(
    () => Array.from({ length: languagesLength }).map((_, index) => Math.random().toString(36).substring(7)),
    [languagesLength]
  );

  useImperativeHandle(
    ref,
    () => ({
      onSubmit: async () => {
        const allPromises = languagesRefs.current.map((ref) => ref?.onSubmit() as Promise<void>);
        await Promise.all(allPromises);
      },
    }),
    []
  );

  return (
    <div className="">
      <div className="grid grid-cols-1 w-full gap-3">
        {languageIds.map((id, index) => {
          return (
            <div key={id}>
              <LanugageItem index={index} ref={(el) => (languagesRefs.current[index] = el)} />
            </div>
          );
        })}
      </div>
      <div>
        <AddNewLanguage />
      </div>
    </div>
  );
});

Languages.displayName = "Experiences";

export default Languages;
