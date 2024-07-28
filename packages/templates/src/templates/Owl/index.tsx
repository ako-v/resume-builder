"use client";

import styled, { createGlobalStyle } from "styled-components";

import Link from "../../components/Link";
import Name from "../../components/Name";
import Heading from "../../components/Heading";

import Summary from "./components/Summary";
import Languages from "./components/Languages";
import Experience from "./components/Experience";
import Educations from "./components/Educations";
import { TemplateProps } from "../../@types";
import PersonalInfo from "./components/PersonalInfo";
import Skills from "./components/Skills";

/* eslint-disable-next-line */
export type OwlProps = TemplateProps;

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

function Owl(props: TemplateProps) {
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
        <PersonalInfo personalInfo={props.personalInfo} />
        <Summary summary={props.summary} />
        <Skills skills={props.skills} />
        <Experience experiences={props.experiences} />
        <Educations educations={props.educations} />
        <Languages languages={props.languages} />
      </Container>
    </>
  );
}

export default Owl;
