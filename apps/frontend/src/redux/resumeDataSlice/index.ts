import { AppStorageKeys } from "@/constants";
import { getFromLocalStorage } from "@/lib/utils/storageUtils";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TemplatePropsInputs } from "@ui/templates";

export type ResumeDataType = TemplatePropsInputs;
const persistedResumeData = getFromLocalStorage(AppStorageKeys.RESUME_DATA);

const initialState: ResumeDataType = persistedResumeData ?? {
  personalInfo: {
    title: "",
    data: {
      firstName: "",
      lastName: "",
      jobTitle: "",
      phone: "",
      email: "",
      address: "",
      city: "",
      zipcode: "",
      state: "",
      country: "",
      github: "",
      website: "",
      linkedin: "",
      twitter: "",
    },
  },
  summary: {
    title: "",
    data: "",
  },
  educations: {
    title: "",
    data: [],
  },
  experiences: {
    title: "",
    data: [],
  },
  languages: {
    title: "",
    data: [],
  },
  skills: {
    title: "",
    data: [],
  },
};

type ResumePayload<K extends keyof TemplatePropsInputs> =
  | { key: K; value: any; index: number }
  | { key: K; value: TemplatePropsInputs[K]["data"] };

type ExtractTitles<T extends Record<string, { title: string }>> = {
  [K in keyof T]: {
    title: T[K]["title"];
  };
};

const resumeDataSlice = createSlice({
  name: "resumeData",
  initialState,
  reducers: {
    setPersonalDetail: (state, { payload }: PayloadAction<ResumeDataType["personalInfo"]>) => {
      state.personalInfo = payload;
    },
    setResumeTitles: (state, { payload }: PayloadAction<ExtractTitles<TemplatePropsInputs>>) => {
      state.personalInfo.title = payload.personalInfo.title;
      state.summary.title = payload.summary.title;
      state.educations.title = payload.educations.title;
      state.experiences.title = payload.experiences.title;
      state.languages.title = payload.languages.title;
      state.skills.title = payload.skills.title;
    },
    setResumeField: (state, { payload }: PayloadAction<ResumePayload<keyof TemplatePropsInputs>>) => {
      const { key, value } = payload;

      if ("index" in payload) {
        const { index } = payload;
        if (Array.isArray(state[key].data)) {
          (state[key] as any).data[index] = value;
        } else {
          throw new Error(`Key ${key} is not an array`);
        }
      } else {
        state[key].data = value as any;
      }
    },
  },
});

export const { setPersonalDetail, setResumeField, setResumeTitles } = resumeDataSlice.actions;

export default resumeDataSlice.reducer;
