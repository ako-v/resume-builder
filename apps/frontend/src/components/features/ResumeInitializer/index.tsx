"use client";

import { AppStorageKeys } from "@/constants";
import { initialResumeData, RESUME_VERSION } from "@/constants/initialResumeData";
import { getFromLocalStorage, saveToLocalStorage } from "@/lib/utils/storageUtils";
import { useAppDispatch } from "@/redux/hooks";
import { setResumeData } from "@/redux/resumeDataSlice";
import { useEffect } from "react";

export type indexProps = {
  /* types */
};

const ResumeInitializer: React.FC<indexProps> = (props) => {
  const oldVersion = getFromLocalStorage(AppStorageKeys.RESUME_VERSION);
  const dispatch = useAppDispatch();
  // Todo: Migrage resume to a new one on version change
  useEffect(() => {
    if (oldVersion !== RESUME_VERSION) {
      dispatch(setResumeData(initialResumeData));
      saveToLocalStorage(AppStorageKeys.RESUME_VERSION, RESUME_VERSION);
    }
  }, [dispatch, oldVersion]);
  return null;
};
export default ResumeInitializer;
