import { createSlice } from "@reduxjs/toolkit";

const favMoviesSlice = createSlice({
  name: "favMovies",
  initialState: {
    favMovies: [],
  },
  reducers: {
    addFavMovie: (state, action) => {
      state.favMovies.push(action.payload);
    },
    removeFavMovie: (state, action) => {
      state.favMovies = state.favMovies.filter(
        (movie) => movie.imdbID !== action.payload
      );
    },
  },
});
export const { addFavMovie, removeFavMovie } = favMoviesSlice.actions;
export default favMoviesSlice.reducer;
