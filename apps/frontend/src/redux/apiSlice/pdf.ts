import apiSlice from ".";

const pdfGeneration = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createPDF: builder.mutation({
      query: ({ data, name }) => ({
        url: "/resume",
        method: "POST",
        body: { data, name },
      }),
    }),
  }),
});

export const { useCreatePDFMutation } = pdfGeneration;
