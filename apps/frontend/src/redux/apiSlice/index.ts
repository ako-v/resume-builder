import { createApi } from "@reduxjs/toolkit/query/react";

import baseQuery from "@/lib/utils/baseQuery";

export enum TagTypes {}

const apiSlice = createApi({
  reducerPath: "api",
  tagTypes: Object.values(TagTypes),
  baseQuery: baseQuery,
  endpoints: () => ({}),
});

export default apiSlice;
