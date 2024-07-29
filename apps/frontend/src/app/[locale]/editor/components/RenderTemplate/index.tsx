"use client";
import parseToTemplateProps from "@/lib/utils/parseToTemplateProps";
import { useAppSelector } from "@/redux/hooks";
import { templates } from "@ui/templates";
import { useSearchParams } from "next/navigation";

export type RenderTemplateProps = {
  locale: string;
};

const RenderTemplate: React.FC<RenderTemplateProps> = ({ locale }) => {
  const searchParams = useSearchParams();
  const templateName = searchParams.get("template") || "";
  const resumeData = useAppSelector((state) => state.resumeData);

  const parsedData = parseToTemplateProps(resumeData, "MM-yyyy", locale);

  const Template = templates?.[templateName as keyof typeof templates];

  return <div className="flex justify-center">{Template ? <Template {...parsedData} /> : null}</div>;
};
export default RenderTemplate;
