"use-client";

import styled, { createGlobalStyle } from "styled-components";
import { TemplatePropsInputs } from "../../@types";
import Section from "../../components/Section";
import Name from "../../components/Name";
import PersonalInfoContainer from "../../components/PersonalInfoContainer";
import Link from "../../components/Link";
import Heading from "../../components/Heading";
import Paragraph from "../../components/Paragraph";
import UnorderedListComponent from "../../components/UnorderedListComponent";
import { Experience } from "./components/Experience";
import { Educations } from "./components/Educations";
import { Languages } from "./components/Languages";
import JobTitle from "../../components/JobTitle";

/* eslint-disable-next-line */
export type OwlProps = TemplatePropsInputs & {};

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    font-size: inherit;
    font-weight: inherit;
  }

  blockquote, dl, dd, h1, h2, h3, h4, h5, h6, hr, figure, p, pre {
    margin: 0;
  }

  #resume-container {
    --color-primary: #099;
    --color-secondary: #333;
    --color-link: #005fb0;
  }
`;

const Container = styled.div`
  font-family: "Roboto", sans-serif;
  max-width: 745px;
  background-color: white;
  width: 100%;
  min-height: 100vh;
  padding: 1.75rem 3rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: #333;
  font-size: 0.8125rem;
  line-height: 1.375;

  #header {
    margin-bottom: 0.5rem;
  }

  ${Link} {
    font-size: 0.75rem;
  }

  ${Name} {
    color: var(--color-primary);
  }

  ${Heading} {
    color: var(--color-primary);
  }
`;

const Divider = styled.div`
  height: 12px;
  border-left: 1px solid #333;
  opacity: 0.65;
`;

const InfoSpan = styled.span`
  font-size: 0.75rem;
  line-height: 1rem;
`;

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding-left: 168px;
  margin-top: 0.25rem;
`;

function Owl(props: OwlProps) {
  const skills = props.skills;
  const halfSkillsLength = Math.ceil(skills.length / 2);
  const firstHalfSkills = skills.slice(0, halfSkillsLength);
  const secondHalfSkills = skills.slice(halfSkillsLength);

  return (
    <>
      {/* <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400;1,500;1,700;1,900&display=swap');
      </style> */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400;1,500;1,700;1,900&display=swap"
      />
      <GlobalStyles />
      <Container id="resume-container">
        <Section id="header">
          <Name>
            {props.personalInfo.firstName} {props.personalInfo.lastName}
          </Name>
          <JobTitle>{props.personalInfo.jobTitle}</JobTitle>
          <PersonalInfoContainer>
            {props.personalInfo.address && <InfoSpan>{props.personalInfo.address}</InfoSpan>}
            {props.personalInfo.city && <InfoSpan>{props.personalInfo.city}</InfoSpan>}
            {props.personalInfo.state && <InfoSpan>{props.personalInfo.state}</InfoSpan>}
            {props.personalInfo.country && <InfoSpan>{props.personalInfo.country}</InfoSpan>}
            {props.personalInfo.zipcode && <InfoSpan>{props.personalInfo.zipcode}</InfoSpan>}
            <Divider />

            <Link target="_blank" rel="noreferrer" href={`tel:${props.personalInfo.phone}`}>
              {props.personalInfo.phone}
            </Link>
            <Divider />

            <Link target="_blank" rel="noreferrer" href={`mailto:${props.personalInfo.email}`}>
              {props.personalInfo.email}
            </Link>
            <Divider />

            {props.personalInfo.website && (
              <>
                <Link target="_blank" rel="noreferrer" href={`https://${props.personalInfo.website}`}>
                  {props.personalInfo.website}
                </Link>
                <Divider />
              </>
            )}
            {props.personalInfo.linkedin && (
              <>
                <Link
                  target="_blank"
                  rel="noreferrer"
                  href={`https://www.linkedin.com/in/${props.personalInfo.linkedin}`}
                >
                  linkedin.com/in/{props.personalInfo.linkedin}
                </Link>
                <Divider />
              </>
            )}
            {props.personalInfo.github && (
              <>
                <Link target="_blank" rel="noreferrer" href={`https://github.com/${props.personalInfo.github}`}>
                  github.com/{props.personalInfo.github}
                </Link>
                <Divider />
              </>
            )}
            {props.personalInfo.twitter && (
              <>
                <Link target="_blank" rel="noreferrer" href={`https://twitter.com/${props.personalInfo.twitter}`}>
                  twitter.com/{props.personalInfo.twitter}
                </Link>
              </>
            )}
          </PersonalInfoContainer>
        </Section>

        <Section id="summary">
          <Heading>Summary</Heading>
          <Paragraph>{props.summary}</Paragraph>
        </Section>
        <Section id="skills">
          <Heading>Skills</Heading>
          <SkillsContainer>
            <UnorderedListComponent items={firstHalfSkills} />
            <UnorderedListComponent items={secondHalfSkills} />
          </SkillsContainer>
        </Section>
        <Experience experiences={props.experiences} />
        <Educations educations={props.educations} />
        <Languages languages={props.languages} />
      </Container>
    </>
  );
}

export default Owl;
