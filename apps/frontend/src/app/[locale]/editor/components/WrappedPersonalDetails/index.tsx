import React from "react";
import PersonalInfo, { PersonalDetailsProps } from "../PersonalDetails";
import { EditorStepHandle } from "../Editor";

export type WrappedPersonalDetailsProps = PersonalDetailsProps & {
  personalInfoRef: React.Ref<EditorStepHandle>;
};

const WrappedPersonalDetails: React.FC<WrappedPersonalDetailsProps> = ({ personalInfoRef, ...props }) => {
  return <PersonalInfo {...props} ref={personalInfoRef} />;
};

export default WrappedPersonalDetails;
