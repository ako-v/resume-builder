import styled from "styled-components";

import { TemplateProps } from "../../../@types";
import Section from "../../../components/Section";
import Heading from "../../../components/Heading";

export type SummaryProps = {
  summary: TemplateProps["summary"];
};

const Content = styled.div`
  font-size: 0.875rem /* 14px */;
  line-height: 1.25rem /* 20px */;

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

const Summary: React.FC<SummaryProps> = ({ summary: { data, title } }) => {
  return (
    <Section id="summary">
      <Heading>{title}</Heading>
      <Content dangerouslySetInnerHTML={{ __html: data }}></Content>
    </Section>
  );
};
export default Summary;
