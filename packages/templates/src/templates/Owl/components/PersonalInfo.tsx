import React, { Fragment } from "react";
import { TemplateProps } from "../../../@types";
import JobTitle from "../../../components/JobTitle";
import Link from "../../../components/Link";
import PersonalInfoContainer from "../../../components/PersonalInfoContainer";
import Section from "../../../components/Section";
import styled from "styled-components";

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

const Name = styled.h1`
  font-size: 2.5rem;
  font-weight: 600;
  line-height: 2.5rem;
  text-transform: capitalize;
  margin-bottom: 0.25rem;
`;

const PersonalInfo: React.FC<PersonalInfoProps> = ({ personalInfo: { data } }) => {
  return (
    <Section id="header">
      <div>
        <Name>
          {data.firstName} {data.lastName}
        </Name>
        <JobTitle>{data.jobTitle}</JobTitle>
      </div>
      <PersonalInfoContainer>
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
      </PersonalInfoContainer>
    </Section>
  );
};
export default PersonalInfo;
