import Heading from "../../../components/Heading";
import Section from "../../../components/Section";
import { TemplateProps } from "../../@types";
import ExperiencePart from "./ExperiencePart";

export type ExperienceProps = {
  experiences: TemplateProps["experiences"];
};

export const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
  return (
    <Section id="experiences">
      <Heading className="section-title">EXPERIENCE</Heading>
      {experiences.map((experience, index) => (
        <ExperiencePart
          key={index}
          startDate={experience.startDate}
          endDate={experience.endDate}
          title={experience.title}
          company={experience.company}
          location={experience.location}
          projects={experience.projects}
        />
      ))}
    </Section>
  );
};
