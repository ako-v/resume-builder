import { combineReducers } from "@reduxjs/toolkit";
import apiSlice from "./apiSlice";
import resumeDataSlice from "./resumeDataSlice";

const rootReducer = combineReducers({
  resumeData: resumeDataSlice,
  [apiSlice.reducerPath]: apiSlice.reducer,
});

export default rootReducer;
