export type TemplatePropsInputs = {
  personalInfo: {
    title: string;
    data: {
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
      links?: string[];
    };
  };
  summary: {
    title: string;
    data: string;
  };
  skills: {
    title: string;
    data: string[];
  };
  experiences: {
    title: string;
    data: {
      title: string;
      company: string;
      location: string;
      startDate: Date | null;
      endDate: Date | null;
      currentPosition?: boolean;
      description?: string;
    }[];
  };
  educations: {
    title: string;
    data: {
      degree: string;
      institution: string;
      location: string;
      endDate: Date | null;
    }[];
  };
  languages: {
    title: string;
    data: {
      language: string;
      proficiency: "elementery" | "intermediate" | "advanced" | "fluent" | "native";
      proficiencyText: string;
    }[];
  };
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
