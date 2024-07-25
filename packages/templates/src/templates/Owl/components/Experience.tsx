import { TemplatePropsInputs } from "../../../@types";
import Heading from "../../../components/Heading";
import Section from "../../../components/Section";
import ExperienceItem from "./ExperienceItem";

export type ExperienceProps = {
  experiences: TemplatePropsInputs["experiences"];
  locale: string;
};

const Experience: React.FC<ExperienceProps> = ({ experiences, locale }) => {
  return (
    <Section id="experiences">
      <Heading className="section-title">EXPERIENCE</Heading>
      {experiences.map((experience, index) => (
        <ExperienceItem
          locale={locale}
          key={index}
          startDate={experience.startDate}
          endDate={experience.endDate}
          title={experience.title}
          company={experience.company}
          location={experience.location}
          description={experience.description}
        />
      ))}
    </Section>
  );
};

export default Experience;
