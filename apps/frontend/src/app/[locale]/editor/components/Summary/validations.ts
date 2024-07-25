import { TFunction } from "@/@types/dto/i18n";
import { RegisterOptions } from "react-hook-form";
import { FormFields } from ".";

export const getRules = (t: TFunction): Record<keyof FormFields, RegisterOptions> => {
  return {
    summary: {
      maxLength: {
        value: 1000,
        message: t("validation.maxLength", { length: 1000 }),
      },
    },
  };
};
