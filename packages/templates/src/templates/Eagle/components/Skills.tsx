import styled from "styled-components";

import { TemplateProps } from "../../../@types";
import Heading from "../../../components/Heading";
import Section from "../../../components/Section";
import UnorderedListComponent from "../../../components/UnorderedListComponent";

export type SkillsProps = {
  skills: TemplateProps["skills"];
};

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-left: 168px;
  margin-top: 0.25rem;
`;

const Skills: React.FC<SkillsProps> = ({ skills: { data, title } }) => {
  const halfSkillsLength = Math.ceil(data.length / 2);
  const firstHalfSkills = data.slice(0, halfSkillsLength);
  const secondHalfSkills = data.slice(halfSkillsLength);

  return (
    <Section id="skills">
      <Heading>{title}</Heading>
      <SkillsContainer>
        <UnorderedListComponent items={firstHalfSkills} />
        <UnorderedListComponent items={secondHalfSkills} />
      </SkillsContainer>
    </Section>
  );
};
export default Skills;
