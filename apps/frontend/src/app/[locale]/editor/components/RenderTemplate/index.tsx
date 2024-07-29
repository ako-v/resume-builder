"use client";
import parseToTemplateProps from "@/lib/utils/parseToTemplateProps";
import { useAppSelector } from "@/redux/hooks";
import { templates } from "@ui/templates";
import { useSearchParams } from "next/navigation";

export type RenderTemplateProps = {
  locale: string;
  templateName?: string;
};

const RenderTemplate: React.FC<RenderTemplateProps> = ({ locale, templateName }) => {
  const searchParams = useSearchParams();
  const newTemplateName = templateName || searchParams.get("template") || {};
  const resumeData = useAppSelector((state) => state.resumeData);

  const parsedData = parseToTemplateProps(resumeData, "MM-yyyy", locale);

  const Template = templates?.[newTemplateName as keyof typeof templates];

  return <div className="flex justify-center">{Template ? <Template {...parsedData} /> : null}</div>;
};
export default RenderTemplate;
