import { fetchBaseQuery } from "@reduxjs/toolkit/query";

const customFetchBaseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
  prepareHeaders: (headers) => {
    if (!headers.has("Content-Type")) {
      headers.set("Content-Type", "application/json");
    } else if (headers.get("Content-Type") === "multipart/form-data") {
      headers.delete("Content-Type");
    }

    return headers;
  },
});

export default customFetchBaseQuery;
