const convertDateFnsLocale = (locale: string): string => {
  switch (locale) {
    case "en":
      return "en-US";
    case "es":
      return "es";
    case "fr":
      return "fr";
    case "fa":
      return "fa-IR";
    case "de":
      return "de";
    default:
      return "en-US";
  }
};

export default convertDateFnsLocale;
