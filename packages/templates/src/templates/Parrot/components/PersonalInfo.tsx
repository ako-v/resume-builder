import React, { Fragment } from "react";
import { TemplateProps } from "../../../@types";
import JobTitle from "../../../components/JobTitle";
import Link from "../../../components/Link";
import PersonalInfoContainer from "../../../components/PersonalInfoContainer";
import Section from "../../../components/Section";
import styled from "styled-components";
import Name from "../../../components/Name";

export type PersonalInfoProps = {
  personalInfo: TemplateProps["personalInfo"];
};

const Divider = styled.span`
  opacity: 0.65;
`;

const InfoSpan = styled.span`
  font-size: 0.75rem;
  line-height: 1rem;
`;

const CustomName = styled(Name)`
  font-size: 2.5rem;
  font-weight: 600;
  line-height: 2.4rem;
  text-transform: capitalize;
  text-align: center;
`;

const CustomSection = styled(Section)`
  text-align: center;
  border-bottom: 8px solid var(--color-primary) !important;
`;

const CustomPersonalInfoContainer = styled(PersonalInfoContainer)`
  justify-content: center;
  padding: 0.5rem 0;
`;

const PersonalInfo: React.FC<PersonalInfoProps> = ({ personalInfo: { data } }) => {
  return (
    <CustomSection id="header">
      <div>
        <CustomName>
          {data.firstName} {data.lastName}
        </CustomName>
        <JobTitle>{data.jobTitle}</JobTitle>
      </div>
      <CustomPersonalInfoContainer>
        <InfoSpan>{data.address}</InfoSpan>
        <Divider>/</Divider>
        <Link target="_blank" rel="noreferrer" href={`tel:${data.phone}`}>
          {data.phone}
        </Link>
        <Divider>/</Divider>
        <Link target="_blank" rel="noreferrer" href={`mailto:${data.email}`}>
          {data.email}
        </Link>
        {data?.links?.map((link) => (
          <div key={link}>
            <Divider>/</Divider>{" "}
            <Link target="_blank" rel="noreferrer" href={link}>
              {link.replace(/^https:\/\/(www\.)?/, "")}
            </Link>
          </div>
        ))}
      </CustomPersonalInfoContainer>
    </CustomSection>
  );
};
export default PersonalInfo;
