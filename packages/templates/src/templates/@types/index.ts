export type TemplateProps = {
  personalInfo: {
    name: string;
    jobTitle: string;
    email: string;
    phone: string;
    address?: string;
    website?: string;
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
  summary: string;
  skills: string[];
  experiences: {
    title: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
    projects?: { description?: string; responsibilities: string[] }[];
  }[];
  educations: {
    degree: string;
    institution: string;
    location: string;
    startDate: string;
    endDate: string;
  }[];
  languages: {
    language: string;
    proficiency: 1 | 2 | 3 | 4 | 5;
  }[];
};
