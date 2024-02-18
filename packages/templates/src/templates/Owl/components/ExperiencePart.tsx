import styled from "styled-components";
import { Fragment } from "react";
import { TemplatePropsInputs } from "../../../@types";

export type ExperiencePartProps = TemplatePropsInputs["experiences"][0] & {};

const ExperienceContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(14, 1fr);
  margin-bottom: 0.75rem;
`;

const Duration = styled.div`
  font-weight: 700;
  grid-column: span 3 / span 3;
`;

const Description = styled.div`
  grid-column: span 11 / span 11;
`;

const Title = styled.h4`
  font-weight: 700;
`;

const Company = styled.h5`
  font-weight: 400;
`;

const ProjectDescription = styled.p``;

const ProjectList = styled.ul`
  list-style: disc;
  margin-left: 1.75rem;
`;

const ProjectListItem = styled.li``;

const ExperiencePart: React.FC<ExperiencePartProps> = ({ company, endDate, location, startDate, title, projects }) => {
  return (
    <ExperienceContainer>
      <Duration>
        {startDate} - {endDate}
      </Duration>
      <Description>
        <Title className="font-bold">{title}</Title>
        <Company>
          <strong>{company}</strong> － {location}
        </Company>
        {projects?.map((project, index) => {
          return (
            <Fragment key={"P_" + index}>
              <ProjectDescription>{project.description}</ProjectDescription>
              <ProjectList className="list-disc ml-7">
                {project?.responsibilities?.map((item, index) => (
                  <ProjectListItem key={"li_" + index}>{item}</ProjectListItem>
                ))}
              </ProjectList>
            </Fragment>
          );
        })}
      </Description>
    </ExperienceContainer>
  );
};
export default ExperiencePart;
