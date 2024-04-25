import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TemplatePropsInputs } from "@ui/templates";

export type ResumeDataType = {
  personalInfo: TemplatePropsInputs["personalInfo"];
};

const initialState: ResumeDataType = {
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
};

const resumeDataSlice = createSlice({
  name: "resumeData",
  initialState,
  reducers: {
    setPersonalDetail: (state, { payload }: PayloadAction<ResumeDataType["personalInfo"]>) => {
      console.log(payload);
      state.personalInfo = payload;
    },
    setResumeField: (
      state,
      { payload }: PayloadAction<{ category: keyof ResumeDataType; name: string; value: string }>
    ) => {
      state[payload.category][payload.name] = payload.value;
    },
  },
});

export const { setPersonalDetail, setResumeField } = resumeDataSlice.actions;

export default resumeDataSlice.reducer;
