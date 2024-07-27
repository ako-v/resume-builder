"use client";
import parseToTemplateProps from "@/lib/utils/parseToTemplateProps";
import { useAppSelector } from "@/redux/hooks";
import { templates } from "@ui/templates";

export type RenderTemplateProps = {
  locale: string;
};

const RenderTemplate: React.FC<RenderTemplateProps> = ({ locale }) => {
  const resumeData = useAppSelector((state) => state.resumeData);

  const parsedData = parseToTemplateProps(resumeData, "MM-yyyy", locale);

  return <div>{<templates.owl {...parsedData} />}</div>;
};
export default RenderTemplate;
