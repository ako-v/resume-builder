import { TFunction } from "@/@types/dto/i18n";
import { RegisterOptions } from "react-hook-form";
import { FormFields } from ".";

export const getRules = (t: TFunction): Record<keyof FormFields, RegisterOptions> => {
  return {
    title: {
      required: t("validation.required", { field: t("form.title") }),
      maxLength: {
        value: 200,
        message: t("validation.maxLength", { length: 200 }),
      },
    },
    company: {
      required: t("validation.required", { field: t("form.company") }),
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
    startDate: {
      required: t("validation.required", { field: t("form.startDate") }),
      validate: (value) => {
        if (!value) return t("validation.invalid", { field: t("form.endDate") });
        const date = new Date(value);
        const now = new Date().setHours(0, 0, 0, 0);
        if (date.getTime() > now) {
          return t("validation.invalid", { field: t("form.startDate") });
        }
      },
    },
    endDate: {
      validate: (value, formValues) => {
        if (formValues?.currentPosition) return;
        const endDate = new Date(value);
        const now = new Date().setHours(0, 0, 0, 0);
        if (!value) return t("validation.invalid", { field: t("form.endDate") });
        if (endDate.getTime() > now) {
          return t("validation.invalid", { field: t("form.endDate") });
        }
        if (formValues.startDate && endDate.getTime() < new Date(formValues.startDate).getTime()) {
          return t("validation.invalid", { field: t("form.endDate") });
        }
      },
    },
    currentPosition: {},
    description: {
      required: t("validation.required", { field: t("form.description") }),
      maxLength: {
        value: 10000,
        message: t("validation.maxLength", { length: 10000 }),
      },
    },
  };
};
