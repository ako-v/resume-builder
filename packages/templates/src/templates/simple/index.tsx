"use-client";

import styled from "styled-components";
import Header from "./components/Header";
import { Summary } from "./components/Summary";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Educations } from "./components/Educations";
import { Languages } from "./components/Languages";

/* eslint-disable-next-line */
export interface TemplatesProps {
  description: string;
}

const StyledTemplates = styled.div`
  color: pink;
`;

function Simple(props: TemplatesProps) {
  return (
    <div id="resume-container" className="max-w-[745px] bg-white w-full min-h-screen px-12 py-7 flex flex-col gap-2">
      <Header />
      <Summary />
      <Skills />
      <Experience />
      <Educations />
      <Languages />
    </div>
  );
}

export default Simple;
