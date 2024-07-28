import { TFunction } from "@/@types/dto/i18n";
import { RegisterOptions } from "react-hook-form";
import { FormFields } from ".";

export const getRules = (t: TFunction): Record<keyof FormFields, RegisterOptions> => {
  return {
    firstName: {
      required: t("validation.required", { field: t("form.firstName") }),
      maxLength: {
        value: 20,
        message: t("validation.maxLength", { length: 20 }),
      },
    },
    lastName: {
      required: t("validation.required", { field: t("form.lastName") }),
      maxLength: {
        value: 20,
        message: t("validation.maxLength", { length: 20 }),
      },
    },
    jobTitle: {
      required: t("validation.required", { field: t("form.jobTitle") }),
      maxLength: {
        value: 60,
        message: t("validation.maxLength", { length: 60 }),
      },
    },
    phone: {
      required: t("validation.required", { field: t("form.phone") }),
      pattern: {
        value: /^[+0-9]*$/,
        message: t("validation.invalid", { field: t("form.phone") }),
      },
    },
    email: {
      required: t("validation.required", { field: t("form.email") }),
      maxLength: {
        value: 100,
        message: t("validation.maxLength", { length: 100 }),
      },
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        message: t("validation.invalid", { field: t("form.email") }),
      },
    },
    address: {
      required: t("validation.required", { field: t("form.address") }),
      maxLength: {
        value: 150,
        message: t("validation.maxLength", { length: 150 }),
      },
    },
    links: {
      maxLength: {
        value: 150,
        message: t("validation.maxLength", { length: 150 }),
      },
      validate: (value) => {
        if (!value?.startsWith("https://")) {
          return t("validation.invalid", { field: t("form.link") });
        }
      },
    },
  };
};
