export type TemplatePropsInputs = {
  personalInfo: {
    firstName: string;
    lastName: string;
    jobTitle: string;
    email: string;
    phone: string;
    address?: string;
    website?: string;
    linkedin?: string;
    github?: string;
    twitter?: string;
    [key: string]: string | undefined;
  };
  summary: string;
  skills: string[];
  experiences: {
    title: string;
    company: string;
    location: string;
    startDate: Date | null;
    endDate: Date | null;
    currentPosition?: boolean;
    description?: string;
  }[];
  educations: {
    degree: string;
    institution: string;
    location: string;
    endDate: Date | null;
  }[];
  languages: {
    language: string;
    proficiency: "elementery" | "intermediate" | "advanced" | "fluent" | "native";
  }[];
};

type ReplaceDateWithString<T> = {
  [K in keyof T]: T[K] extends Date | null
    ? string | null
    : T[K] extends (infer U)[]
      ? ReplaceDateWithString<U>[]
      : T[K] extends object
        ? ReplaceDateWithString<T[K]>
        : T[K];
};

export type TemplateProps = ReplaceDateWithString<TemplatePropsInputs>;
