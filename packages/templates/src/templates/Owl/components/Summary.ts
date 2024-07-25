import styled from "styled-components";

const Summary = styled.div`
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

export default Summary;
