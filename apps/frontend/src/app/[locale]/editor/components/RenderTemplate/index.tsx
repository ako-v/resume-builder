"use client";
import { useAppSelector } from "@/redux/hooks";
import { templates } from "@ui/templates";

export type RenderTemplateProps = {
  locale: string;
};

const RenderTemplate: React.FC<RenderTemplateProps> = ({ locale }) => {
  const { personalInfo, summary, skills, experiences, educations, languages } = useAppSelector(
    (state) => state.resumeData
  );
  return (
    <div>
      {
        <templates.owl
          locale={locale}
          personalInfo={personalInfo}
          summary={summary}
          skills={skills}
          experiences={experiences}
          educations={educations}
          languages={languages}
        />
      }
    </div>
  );
};
export default RenderTemplate;
