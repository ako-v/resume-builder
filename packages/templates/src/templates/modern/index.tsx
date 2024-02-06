"use-client";

import styled from "styled-components";

/* eslint-disable-next-line */
export interface ModernProps {
  description: string;
}

const StyledTemplates = styled.div`
  color: pink;
`;

function Modern(props: ModernProps) {
  return (
    <StyledTemplates>
      <h1>This is Modern template!</h1>
      <h2>{props.description}</h2>
    </StyledTemplates>
  );
}

export default Modern;
