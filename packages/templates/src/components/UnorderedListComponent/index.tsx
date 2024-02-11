import React from "react";
import styled from "styled-components";

export const UnorderedList = styled.ul`
  list-style-type: disc;
  padding: 0;
`;

export const ListItem = styled.li`
  font-size: 0.8125rem;
  line-height: 1.375;
`;

interface UnorderedListProps {
  items: string[];
}

const UnorderedListComponent: React.FC<UnorderedListProps> = ({ items }) => {
  return (
    <UnorderedList>
      {items.map((item, index) => (
        <ListItem key={index}>{item}</ListItem>
      ))}
    </UnorderedList>
  );
};

export default UnorderedListComponent;
