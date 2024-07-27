import { DatePickerProps } from "@mui/x-date-pickers/DatePicker";
import { min, parse } from "date-fns";
import DatePicker from "../DatePicker";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import formatDate from "@/lib/utils/formatDate";

export type DatePickerWrapperProps = Omit<DatePickerProps<Date>, "minDate" | "maxDate" | "value"> & {
  minDate?: string;
  maxDate?: string;
  value?: string | null;
  onChange?: (value: string | null) => void;
};

const DatePickerWrapper: React.FC<DatePickerWrapperProps> = ({
  minDate,
  maxDate,
  value,
  onChange,
  format = "MM-yyyy",
  ...restProps
}) => {
  const {
    i18n: { language },
  } = useTranslation();

  const minDateValue = minDate ? parse(minDate, format, new Date()) : undefined;
  const maxDateValue = maxDate ? parse(maxDate, format, new Date()) : undefined;

  // const [parsedValue, setParsedValue] = useState(value ? parse(value, format, new Date()) : null);
  const parsedValue = useRef(value ? parse(value, format, new Date()) : null);

  useEffect(() => {
    // setParsedValue(value ? parse(value, format, new Date()) : null);
    parsedValue.current = value ? parse(value, format, new Date()) : null;
  }, [value, format]);

  const handleChange = (date: Date | null) => {
    if (date && format) {
      const newDate = formatDate(date, format, { locale: language });
      // setParsedValue(date);
      parsedValue.current = date;
      onChange?.(newDate);
    }
  };

  return (
    <DatePicker
      value={parsedValue.current}
      onChange={handleChange}
      minDate={minDateValue}
      maxDate={maxDateValue}
      format={format}
      {...restProps}
    />
  );
};
export default DatePickerWrapper;
