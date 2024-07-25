import apiSlice from ".";

const pdfGeneration = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createPDF: builder.mutation({
      query: ({ data, name }) => ({
        url: "http://localhost:5000/api/v1/resume",
        method: "POST",
        body: { data, name },
      }),
    }),
  }),
});

export const { useCreatePDFMutation } = pdfGeneration;
