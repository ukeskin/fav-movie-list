import React, { useEffect, useState } from "react";
import { MovieCard } from "./MovieCard";
import { useSelector, useDispatch } from "react-redux";
import { getMovies } from "../features/moviesSlice";
import { addFavMovie } from "../features/favMovies";

export default function Search() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
  const { movies } = useSelector((state) => state.movies);
  useEffect(() => {
    dispatch(getMovies(search));
  }, [dispatch, search]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const handleFavorite = (movie) => {
    dispatch(addFavMovie(movie));
  };

  return (
    <div className="w-1/3 p-4">
      <form className="flex flex-col">
        <input
          className="outline-none border-2 border-red-400 px-4 py-2 w-full rounded focus:border-red-700"
          type="text"
          placeholder="Type movie name"
          onKeyPress={(e) => e.key === "Enter" && handleSearch(e)}
        />
      </form>
      <div className="overflow-auto h-full w-full">
        <div className="space-y-8 py-4">
          {movies ? (
            movies.map((movie) => (
              <MovieCard
                movie={movie}
                key={movie.imdbID}
                handleFavorite={() => handleFavorite(movie)}
              />
            ))
          ) : (
            <div className="text-center">
              <h1 className="text-gray-500">Search for result</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
