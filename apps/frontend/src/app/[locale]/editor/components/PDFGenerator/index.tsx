"use client";
import Button from "@/components/base/Button";
import { useCreatePDFMutation } from "@/redux/apiSlice/pdf";
import { useAppSelector } from "@/redux/hooks";

export type PDFGeneratorProps = {
  /* types */
};

const PDFGenerator: React.FC<PDFGeneratorProps> = (props) => {
  const resumeData = useAppSelector((state) => state.resumeData);
  const [createPDF] = useCreatePDFMutation();

  const handleGeneratePDF = async () => {
    try {
      const response = await createPDF({ data: resumeData, name: "owl" }).unwrap();
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
