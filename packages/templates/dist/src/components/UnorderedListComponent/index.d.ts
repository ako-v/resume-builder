import React from "react";
export declare const UnorderedList: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement>, never>>;
export declare const ListItem: import("styled-components").IStyledComponent<"web", import("styled-components/dist/types").FastOmit<React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, never>>;
interface UnorderedListProps {
    items: string[];
}
declare const UnorderedListComponent: React.FC<UnorderedListProps>;
export default UnorderedListComponent;
