import React, { useEffect, useState } from "react";
import { SearchMovieCard } from "./SearchMovieCard";
import { useSelector, useDispatch } from "react-redux";
import { getMovies } from "features/moviesSlice";
import { addFavMovie } from "features/favMovies";

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
    <div className="md:w-1/3 w-full p-4 overflow-y-scroll bg-gray-100 md:mb-0 mb-5 shadow">
      <input
        className="outline-none border-2 border-gray-400 px-4 py-2 w-full rounded focus:border-gray-700"
        type="text"
        placeholder="Type movie name"
        onKeyPress={(e) => e.key === "Enter" && handleSearch(e)}
      />

      <div className="h-full w-full">
        <div className="space-y-8 py-4">
          {movies ? (
            movies.map((movie) => (
              <SearchMovieCard
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
