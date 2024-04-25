import i18n from "react-i18next";

const getErrorMessage = (code: number) => {
  return i18n.getI18n().t([`httpErrors.${code}`, "httpErrors.unkown"]);
};

export default getErrorMessage;
