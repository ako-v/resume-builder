import styled from "styled-components";
import SectionTitle from "./SectionHeader";

const StyledP = styled.p`
  font-size: 0.875rem /* 14px */;
  line-height: 1.25rem /* 20px */;
`;

export const Summary = () => {
  return (
    <section>
      <SectionTitle>Summary</SectionTitle>
      <StyledP>
        Experienced Front-End Developer with 5 years of expertise in delivering dynamic and responsive web applications.
        Proficient in TypeScript, React (and it's ecosystem), Redux and Material-UI (MUI). Adept at tackling complex
        challenges with a strategic problem-solving approach, coupled with critical thinking skills. Skilled in working
        with RESTful APIs and Websocket for seamless integration between front-end and back-end systems.
      </StyledP>
    </section>
  );
};
