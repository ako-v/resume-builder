import { Box } from "@mui/material";
import Templates from "./components/Templates";

export default async function Home({ params: { locale } }: { params: { locale: string } }) {
  return (
    <Box component="main" display="flex" justifyContent="center">
      <Box
        sx={{
          maxWidth: {
            sm: "100%",
            md: "100%",
            lg: "1100px",
            xl: "1100px",
          },
        }}
      >
        <Templates />
      </Box>
    </Box>
  );
}
