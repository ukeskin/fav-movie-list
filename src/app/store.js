import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../features/moviesSlice";
import favMoviesReducer from "../features/favMovies";
const store = configureStore({
  reducer: {
    movies: moviesReducer,
    favMovies: favMoviesReducer,
  },
});

export default store;
