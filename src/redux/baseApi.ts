import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://capershopcode.vercel.app/api/v1",
    // baseUrl: "http://localhost:5000/api/v1",
  }),
  endpoints: () => ({}),
});

export default baseApi;
