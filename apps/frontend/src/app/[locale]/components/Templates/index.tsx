"use client";

import { templates } from "@ui/templates";
import Link from "next/link";
import RenderTemplate from "../../editor/components/RenderTemplate";
import Image from "next/image";
import { Card, CardContent } from "@mui/material";

export type TemplatesProps = {
  /* types */
};

const Templates: React.FC<TemplatesProps> = (props) => {
  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {Object.keys(templates).map((templateName) => (
        <Link key={templateName} href={{ pathname: "/editor", query: { template: templateName } }}>
          <Card className="text-center capitalize">
            <CardContent>
              <Image
                width={300}
                height={430}
                src={`/images/templates/${templateName}.png`}
                alt={`template-${templateName}`}
              />
              {templateName}
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  );
};
export default Templates;
