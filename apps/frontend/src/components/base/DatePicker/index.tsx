"use client";
import { useMemo } from "react";
import * as locales from "date-fns/locale";
import { faIR } from "date-fns-jalali/locale";
import { useTranslation } from "react-i18next";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFnsV3";
import { AdapterDateFnsJalali } from "@mui/x-date-pickers/AdapterDateFnsJalaliV3";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker as MuiDatePicker, DatePickerProps } from "@mui/x-date-pickers/DatePicker";
import getDateFnsLocale from "@/lib/utils/getDateFnsLocale";
import convertDateFnsLocale from "@/lib/utils/convertDateFnsLocale";

const DatePicker = <TDate extends Date>(props: DatePickerProps<TDate>) => {
  const {
    i18n: { language },
  } = useTranslation();
  const { slotProps, ...rest } = props;
  const { textField, ...restSlotProps } = slotProps || {};

  const locale = useMemo(() => {
    return getDateFnsLocale(language);
  }, [language]);

  return (
    <LocalizationProvider
      dateAdapter={locale?.code === "fa-IR" ? AdapterDateFnsJalali : AdapterDateFns}
      adapterLocale={locale}
    >
      <MuiDatePicker {...rest} slotProps={{ textField: { size: "small", ...textField }, ...restSlotProps }} />
    </LocalizationProvider>
  );
};

export default DatePicker;
