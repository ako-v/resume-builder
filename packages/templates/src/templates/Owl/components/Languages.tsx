import styled from "styled-components";
import Heading from "../../../components/Heading";
import Section from "../../../components/Section";
import { TemplatePropsInputs } from "../../../@types";

const LanguagesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(14, 1fr);
  margin-bottom: 0.25rem;
`;

const Language = styled.div`
  font-weight: 700;
  grid-column: span 3 / span 3;
`;

const Proficiency = styled.div`
  grid-column: span 11 / span 11;
`;

export type LanguagesProps = {
  languages: TemplatePropsInputs["languages"];
};

export const Languages: React.FC<LanguagesProps> = ({ languages }) => {
  return (
    <Section>
      <Heading className="section-title">Languages</Heading>
      {languages.map((language, index) => (
        <LanguagesContainer key={index}>
          <Language>{language.language}</Language>
          <Proficiency>{language.proficiency}</Proficiency>
        </LanguagesContainer>
      ))}
    </Section>
  );
};
