import { AppStorageKeys } from "@/constants";
import { getFromLocalStorage } from "@/lib/utils/storageUtils";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TemplatePropsInputs } from "@ui/templates";

export type ResumeDataType = TemplatePropsInputs;
const persistedResumeData = getFromLocalStorage(AppStorageKeys.RESUME_DATA);

const initialState: ResumeDataType = persistedResumeData ?? {
  personalInfo: {
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
  summary: "",
  educations: [],
  experiences: [],
  languages: [],
  skills: [],
};

type ResumePayload<K extends keyof TemplatePropsInputs> =
  | { key: K; value: any; index: number }
  | { key: K; value: TemplatePropsInputs[K] };

const resumeDataSlice = createSlice({
  name: "resumeData",
  initialState,
  reducers: {
    setPersonalDetail: (state, { payload }: PayloadAction<ResumeDataType["personalInfo"]>) => {
      state.personalInfo = payload;
    },
    setResumeField: (state, { payload }: PayloadAction<ResumePayload<keyof TemplatePropsInputs>>) => {
      const { key, value } = payload;

      if ("index" in payload) {
        const { index } = payload;
        if (Array.isArray(state[key])) {
          (state[key] as any)[index] = value;
        } else {
          throw new Error(`Key ${key} is not an array`);
        }
      } else {
        state[key] = value as any;
      }
    },
  },
});

export const { setPersonalDetail, setResumeField } = resumeDataSlice.actions;

export default resumeDataSlice.reducer;
