import { TemplateProps } from "../../../@types";
import JobTitle from "../../../components/JobTitle";
import Link from "../../../components/Link";
import Name from "../../../components/Name";
import PersonalInfoContainer from "../../../components/PersonalInfoContainer";
import Section from "../../../components/Section";
import styled from "styled-components";

export type PersonalInfoProps = {
  personalInfo: TemplateProps["personalInfo"];
};

const Divider = styled.div`
  height: 12px;
  border-left: 1px solid #333;
  opacity: 0.65;
`;

const InfoSpan = styled.span`
  font-size: 0.75rem;
  line-height: 1rem;
`;

const PersonalInfo: React.FC<PersonalInfoProps> = ({ personalInfo: { data, title } }) => {
  return (
    <Section id="header">
      <Name>
        {data.firstName} {data.lastName}
      </Name>
      <JobTitle>{data.jobTitle}</JobTitle>
      <PersonalInfoContainer>
        <InfoSpan>
          {[data.address, data.city, data.state, data.country, data.zipcode].filter((item) => item).join(", ")}
        </InfoSpan>
        <Divider />
        <Link target="_blank" rel="noreferrer" href={`tel:${data.phone}`}>
          {data.phone}
        </Link>
        <Divider />
        <Link target="_blank" rel="noreferrer" href={`mailto:${data.email}`}>
          {data.email}
        </Link>
        <Divider />
        {data.website && (
          <>
            <Link target="_blank" rel="noreferrer" href={`https://${data.website}`}>
              {data.website}
            </Link>
            <Divider />
          </>
        )}
        {data.linkedin && (
          <>
            <Link target="_blank" rel="noreferrer" href={`https://www.linkedin.com/in/${data.linkedin}`}>
              linkedin.com/in/{data.linkedin}
            </Link>
            <Divider />
          </>
        )}
        {data.github && (
          <>
            <Link target="_blank" rel="noreferrer" href={`https://github.com/${data.github}`}>
              github.com/{data.github}
            </Link>
            <Divider />
          </>
        )}
        {data.twitter && (
          <>
            <Link target="_blank" rel="noreferrer" href={`https://twitter.com/${data.twitter}`}>
              twitter.com/{data.twitter}
            </Link>
          </>
        )}
      </PersonalInfoContainer>
    </Section>
  );
};
export default PersonalInfo;
