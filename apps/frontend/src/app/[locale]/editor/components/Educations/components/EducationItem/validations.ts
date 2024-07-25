import { TFunction } from "@/@types/dto/i18n";
import { RegisterOptions } from "react-hook-form";
import { FormFields } from ".";

export const getRules = (t: TFunction): Record<keyof FormFields, RegisterOptions> => {
  return {
    degree: {
      required: t("validation.required", { field: t("form.degree") }),
      maxLength: {
        value: 200,
        message: t("validation.maxLength", { length: 200 }),
      },
    },
    institution: {
      required: t("validation.required", { field: t("form.institution") }),
      maxLength: {
        value: 150,
        message: t("validation.maxLength", { length: 150 }),
      },
    },
    location: {
      required: t("validation.required", { field: t("form.location") }),
      maxLength: {
        value: 60,
        message: t("validation.maxLength", { length: 60 }),
      },
    },
    endDate: {
      required: t("validation.required", { field: t("form.endDate") }),
      validate: (value) => {
        if (!value) return t("validation.invalid", { field: t("form.endDate") });
        const date = new Date(value);
        const now = new Date().setHours(0, 0, 0, 0);
        if (date.getTime() > now) {
          return t("validation.invalid", { field: t("form.endDate") });
        }
      },
    },
  };
};
