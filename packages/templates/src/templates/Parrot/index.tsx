"use client";

import styled, { createGlobalStyle } from "styled-components";

import Link from "../../components/Link";
import Name from "../../components/Name";
import Heading from "../../components/Heading";
import Section from "../../components/Section";
import { TemplateProps } from "../../@types";

import Summary from "./components/Summary";
import Languages from "./components/Languages";
import Experience from "./components/Experience";
import Educations from "./components/Educations";
import PersonalInfo from "./components/PersonalInfo";
import Skills from "./components/Skills";

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
    --color-primary: #111;
    --color-secondary: #AAA;
    --color-link: #005fb0;
  }
`;

const Container = styled.div`
  font-family: "Ubuntu", sans-serif;
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

  ${Section} {
    h3 {
      text-align: center;
    }
    border-bottom: 1px solid var(--color-secondary);
    padding-bottom: 1rem;
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

  a {
    color: var(--color-link);
    text-decoration: none;
  }
`;

function Parrot(props: TemplateProps) {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
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

export default Parrot;
