import styled from "styled-components";

import { TemplateProps } from "../../../@types";
import Heading from "../../../components/Heading";
import Section from "../../../components/Section";

export type SkillsProps = {
  skills: TemplateProps["skills"];
};

const SkillsContainer = styled.div``;

const Skills: React.FC<SkillsProps> = ({ skills: { data, title } }) => {
  return (
    <Section id="skills">
      <Heading>{title}</Heading>
      <SkillsContainer>{data.join(", ")}</SkillsContainer>
    </Section>
  );
};
export default Skills;
