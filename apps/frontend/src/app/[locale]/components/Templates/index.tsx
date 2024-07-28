"use client";

import { templates } from "@ui/templates";
import Link from "next/link";

export type TemplatesProps = {
  /* types */
};

const Templates: React.FC<TemplatesProps> = (props) => {
  return (
    <div className="flex gap-3">
      {Object.keys(templates).map((templateName) => (
        <Link key={templateName} href={{ pathname: "/editor", query: { template: templateName } }}>
          {templateName}
        </Link>
      ))}
    </div>
  );
};
export default Templates;
