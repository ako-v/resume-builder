"use client";

import { Button } from "@mui/material";
import { templates } from "@ui/templates";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <Button variant="contained">click me</Button>
      </div>
      {<templates.modern description="hi I am the template" />}
    </main>
  );
}
