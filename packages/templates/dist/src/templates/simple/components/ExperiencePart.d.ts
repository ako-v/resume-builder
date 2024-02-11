/// <reference types="react" />
export type ExperiencePartProps = {
    time: string;
    position: string;
    company: string;
    location: string;
    projects: {
        description: string;
        listItems: string[];
    }[];
};
declare const ExperiencePart: React.FC<ExperiencePartProps>;
export default ExperiencePart;
