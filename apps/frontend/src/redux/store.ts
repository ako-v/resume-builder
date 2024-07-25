import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import apiSlice from "./apiSlice";
import rootReducer from "./rootReducer";
import { AppStorageKeys } from "@/constants";
import { saveToLocalStorage } from "@/lib/utils/storageUtils";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }).concat(apiSlice.middleware),
});

store.subscribe(() => {
  const resumeData = store.getState().resumeData;
  saveToLocalStorage(AppStorageKeys.RESUME_DATA, resumeData);
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
