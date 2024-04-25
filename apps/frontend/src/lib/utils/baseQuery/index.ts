import { FetchArgs, FetchBaseQueryError, retry } from "@reduxjs/toolkit/query/react";
import { BaseQueryApi, BaseQueryFn } from "@reduxjs/toolkit/query";

import handleErrorResponse from "./handleErrorResponse";
import customFetchBaseQuery from "./customFetchBaseQuery";

interface Args extends FetchArgs {
  silent?: boolean;
}

const baseQuery: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
  args: Args | string,
  api,
  extraOptions
) => {
  const result = await customFetchBaseQuery(args, api, extraOptions);

  if (result.error) {
    let statusCode = 500;
    if (typeof result.error.status === "number") statusCode = result.error.status;
    if ("originalStatus" in result.error && result.error.originalStatus) statusCode = result.error.originalStatus;

    let silent;
    if (typeof args !== "string") {
      silent = args?.silent;
    }
    return handleErrorResponse({ code: statusCode, data: result.error?.data as any, silent });
  }

  return result;
};

export const baseQueryWithRetry = (maxRetries = 0) =>
  retry(
    async (args: string | FetchArgs, api: BaseQueryApi, extraOptions) =>
      await customFetchBaseQuery(args, api, extraOptions),
    { maxRetries }
  );

export default baseQuery;
