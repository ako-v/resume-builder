const dictionary = {
  posts: "posts",
  general: {
    email: "email",
    password: "password",
    confirmPassword: "confirm password",
    firstName: "first name",
    lastName: "last name",
    submit: "submit",
    register: "register",
  },
  validations: {
    required: "is required",
    emailInvalid: "please provide a valid email address",
    passwordInvalid: "password must be at least 8 characters long, contain lowecase, uppercase and number",
    confirmPasswordInvalid: "passwords do not match",
    minLength: "must be at least {{minLength}} characters long",
    maxLength: "must be at most {{maxLength}} characters long",
    userExists: "User already exists",
    incorrectEmailOrPassword: "incorrect email or password",
  },
  httpError: {
    400: "bad request",
    401: "unauthorized",
    403: "forbidden",
    404: "not found",
    409: "conflict",
    429: "too many requests",
    500: "server error",
    unknown: "unknown error",
  },
};
export default dictionary;

export type DictionaryType = typeof dictionary;
