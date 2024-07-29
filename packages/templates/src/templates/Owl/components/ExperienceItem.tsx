import styled from "styled-components";
import { TemplateProps } from "../../../@types";

export type ExperienceItemProps = TemplateProps["experiences"]["data"][0];

const ExperienceContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(14, 1fr);
  margin-bottom: 0.75rem;
`;

const Duration = styled.div`
  font-weight: 700;
  grid-column: span 3 / span 3;
`;

const Info = styled.div`
  grid-column: span 11 / span 11;
`;

const Title = styled.h4`
  text-transform: uppercase;
  font-weight: 700;
`;

const Company = styled.h5`
  font-weight: 400;
`;

const Description = styled.div`
  ol,
  ul {
    padding-inline-start: 2rem;
  }
  li[data-list="bullet"] {
    list-style: disc;
  }
  li[data-list="ordered"] {
    list-style: decimal;
  }
`;

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  company,
  endDate,
  location,
  startDate,
  title,
  description,
}) => {
  return (
    <ExperienceContainer>
      <Info>
        <Title className="font-bold">{title}</Title>
        <Duration>
          {startDate} - {endDate || "Present"}
        </Duration>
        <Company>
          <strong>{company}</strong> － {location}
        </Company>
        <Description dangerouslySetInnerHTML={{ __html: description || "" }} />
      </Info>
    </ExperienceContainer>
  );
};
export default ExperienceItem;
