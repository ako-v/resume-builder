import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type ResumeDataType = {
  personalDetail: {
    firstName: string;
    lastName: string;
    jobTitle: string;
    phone?: string;
    email?: string;
    address?: string;
    city?: string;
    zipcode?: string;
    state?: string;
    country?: string;
    [key: string]: string | undefined;
  };
};

const initialState: ResumeDataType = {
  personalDetail: {
    firstName: "",
    lastName: "",
    jobTitle: "",
  },
};

const resumeDataSlice = createSlice({
  name: "resumeData",
  initialState,
  reducers: {
    setPersonalDetail: (state, { payload }: PayloadAction<ResumeDataType["personalDetail"]>) => {
      console.log(payload);
      state.personalDetail = payload;
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
