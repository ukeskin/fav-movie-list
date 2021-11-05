import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getMovies = createAsyncThunk(
  "movies/getMovies",
  async (movieName) => {
    const response = await fetch(
      `https://www.omdbapi.com/?s=${movieName}&apikey=${process.env.REACT_APP_API_KEY}`
    ).then((res) => res.json());
    return response;
  }
);

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    status: null,
  },
  extraReducers: {
    [getMovies.pending]: (state, action) => {
      state.status = "loading";
    },
    [getMovies.fulfilled]: (state, action) => {
      state.status = "success";
      state.movies = action.payload.Search;
    },
    [getMovies.rejected]: (state, action) => {
      state.status = "error";
    },
  },
});

export default moviesSlice.reducer;
