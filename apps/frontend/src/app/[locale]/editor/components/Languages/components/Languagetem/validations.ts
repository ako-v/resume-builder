import { TFunction } from "@/@types/dto/i18n";
import { RegisterOptions } from "react-hook-form";
import { FormFields } from ".";

export const getRules = (t: TFunction): Record<keyof FormFields, RegisterOptions> => {
  return {
    language: {
      required: t("validation.required", { field: t("form.language") }),
      maxLength: {
        value: 20,
        message: t("validation.maxLength", { length: 20 }),
      },
    },
    proficiency: {
      required: t("validation.required", { field: t("form.proficiency") }),
    },
    proficiencyText: {},
  };
};
