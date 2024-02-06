const dictionary = {
  posts: "Beiträge",
  general: {
    email: "E-Mail",
    password: "Passwort",
    firstName: "Vorname",
    lastName: "Nachname",
    submit: "absenden",
    confirmPassword: "Passwort bestätigen",
    register: "registrieren",
  },
  validations: {
    required: "ist erforderlich",
    emailInvalid: "Bitte geben Sie eine gültige E-Mail-Adresse an",
    passwordInvalid:
      "Das Passwort muss mindestens 8 Zeichen lang sein und sowohl Kleinbuchstaben, Großbuchstaben als auch Zahlen enthalten",
    confirmPasswordInvalid: "Passwörter stimmen nicht überein",
    minLength: "muss mindestens {minLength} Zeichen lang sein",
    maxLength: "darf höchstens {maxLength} Zeichen lang sein",
    userExists: "Benutzer existiert bereits",
  },
  httpError: {
    400: "Ungültige Anfrage",
    401: "Unberechtigt",
    403: "Verboten",
    404: "Nicht gefunden",
    409: "Konflikt",
    429: "Zu viele Anfragen",
    500: "Serverfehler",
    unknown: "Unbekannter Fehler",
  },
};
export default dictionary;
