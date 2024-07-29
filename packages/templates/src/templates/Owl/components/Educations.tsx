import styled from "styled-components";

import Section from "../../../components/Section";
import Heading from "../../../components/Heading";
import { TemplateProps } from "../../../@types";

const ExperienceContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(14, 1fr);
  margin-bottom: 0.5rem;
`;

const FinishedDate = styled.div`
  font-weight: 700;
  grid-column: span 3 / span 3;
`;

const Description = styled.div`
  grid-column: span 11 / span 11;
`;

const FieldofStudy = styled.div`
  font-weight: 700;
`;

const University = styled.div``;

export type EducationsProps = {
  educations: TemplateProps["educations"];
};

const Educations: React.FC<EducationsProps> = ({ educations }) => {
  return (
    <Section id="educations">
      <Heading>{educations?.title ?? ""}</Heading>
      {educations?.data?.map((education, index) => (
        <ExperienceContainer key={index}>
          <FinishedDate>{education.endDate ? education.endDate : "Present"}</FinishedDate>
          <Description>
            <FieldofStudy>{education.degree}</FieldofStudy>
            <University>
              <strong>{education.institution}</strong> - {education.location}
            </University>
          </Description>
        </ExperienceContainer>
      ))}
    </Section>
  );
};

export default Educations;
