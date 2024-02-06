import { BaseResponse } from "./base";

export type ReqSignUp = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};

export type ResRegister = BaseResponse;

export type ReqSignIn = {
  email: string;
  password: string;
};

export type ResSignIn = BaseResponse & {
  token: string;
};

export type ResSignOut = BaseResponse;
