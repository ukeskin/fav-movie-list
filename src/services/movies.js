import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://www.omdbapi.com/" }),
  endpoints: (builder) => ({
    getMoviesByName: builder.query({
      query: (name) => `/?s=${name}&apikey=${process.env.REACT_APP_API_KEY}`,
    }),
  }),
});

export const { useGetMoviesByNameQuery } = moviesApi;
