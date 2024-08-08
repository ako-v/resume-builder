"use client";

import { templates } from "@templates/index";
import Link from "next/link";
import Image from "next/image";
import { Box, Card, CardContent, Grid } from "@mui/material";

export type TemplatesProps = {
  /* types */
};

const Templates: React.FC<TemplatesProps> = (props) => {
  return (
    <Grid container spacing={2} padding={4} justifyContent="center" gap={1}>
      {Object.keys(templates).map((templateName) => (
        <Grid xs={3} key={templateName}>
          <Link href={{ pathname: "/editor", query: { template: templateName } }}>
            <Card sx={{ textAlign: "center", textTransform: "capitalize" }}>
              <CardContent
                sx={{
                  padding: 1,
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                  "&.MuiCardContent-root:last-child": {
                    paddingBottom: 1,
                  },
                }}
              >
                <Box borderRadius={1} overflow="hidden">
                  <Image
                    width={300}
                    height={430}
                    src={`/images/templates/${templateName}.png`}
                    alt={`template-${templateName}`}
                  />
                </Box>
                <span>{templateName}</span>
              </CardContent>
            </Card>
          </Link>
        </Grid>
      ))}
    </Grid>
  );
};
export default Templates;
