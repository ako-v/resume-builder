"use client";
import Button from "@/components/base/Button";
import parseToTemplateProps from "@/lib/utils/parseToTemplateProps";
import { useCreatePDFMutation } from "@/redux/apiSlice/pdf";
import { useAppSelector } from "@/redux/hooks";
import { useTranslation } from "react-i18next";

export type PDFGeneratorProps = {};

const PDFGenerator: React.FC<PDFGeneratorProps> = (props) => {
  const {
    i18n: { language },
  } = useTranslation();
  const resumeData = useAppSelector((state) => state.resumeData);
  const [createPDF] = useCreatePDFMutation();

  const parsedData = parseToTemplateProps(resumeData, "MM-yyyy", language);

  const handleGeneratePDF = async () => {
    try {
      const response = await createPDF({ data: parsedData, name: "owl" }).unwrap();
      const blob = new Blob([response], { type: "application/pdf" });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "resume.pdf";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Failed to generate PDF:", error);
    }
  };

  return (
    <div>
      <Button onClick={handleGeneratePDF}>Generate PDF</Button>
    </div>
  );
};
export default PDFGenerator;
