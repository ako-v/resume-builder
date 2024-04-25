import { getI18n } from "react-i18next";

const getErrorMessage = (code: number) => {
  return getI18n().t([`httpErrors.${code}`, "httpErrors.unkown"]);
};

export default getErrorMessage;
