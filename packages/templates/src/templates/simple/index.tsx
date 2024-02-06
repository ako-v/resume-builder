"use-client";

import styled from "styled-components";

/* eslint-disable-next-line */
export interface TemplatesProps {
  description: string;
}

const StyledTemplates = styled.div`
  color: pink;
`;

function Simple(props: TemplatesProps) {
  return (
    <StyledTemplates>
      <h1>This is Simple template!</h1>
      <h2>{props.description}</h2>
    </StyledTemplates>
  );
}

export default Simple;
