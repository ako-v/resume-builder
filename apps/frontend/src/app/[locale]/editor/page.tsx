import React from "react";
import dynamic from "next/dynamic";
import { Box, Card, Paper } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import { CardContent } from "@mui/material";

const Editor = dynamic(() => import("./components/Editor"));
const RenderTemplate = dynamic(() => import("./components/RenderTemplate"), { ssr: false });

type EditorPageProps = {
  params: {
    locale: string;
  };
};

const EditorPage: React.FC<EditorPageProps> = ({ params: { locale } }) => {
  return (
    <Box padding={2} className="grid grid-cols-1 lg:grid-cols-2 gap-3">
      <Card sx={{ height: "100%", borderRadius: 1 }}>
        <CardContent>
          <Editor />
        </CardContent>
      </Card>

      <Card sx={{ borderRadius: 1 }}>
        <CardContent sx={{ height: "calc(100vh - 32px)", overflowY: "auto", p: 1 }}>
          <RenderTemplate locale={locale} />
        </CardContent>
      </Card>
    </Box>
  );
};

EditorPage.propTypes = {};

export default EditorPage;
