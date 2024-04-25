import { FetchBaseQueryError } from "@reduxjs/toolkit/query";

import getErrorMessage from "./getErrorMessage";
import { enqueueSnackbar } from "notistack";

const handleErrorResponse = ({
  code,
  data,
  silent,
}: {
  code: number;
  data?: { message?: string };
  silent?: boolean;
}): { error: FetchBaseQueryError } => {
  const errorMessage = data?.message ?? getErrorMessage(code);
  !silent && enqueueSnackbar(errorMessage, { variant: "error" });
  return { error: { status: "CUSTOM_ERROR", error: errorMessage, data: { statusCode: code } } };
};

export default handleErrorResponse;
