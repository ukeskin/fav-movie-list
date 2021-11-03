import React, { useState } from "react";
import { useGetMoviesByNameQuery } from "../services/movies";

export default function Search() {
  const [search, setSearch] = useState("recep");
  const { data, error, isLoading } = useGetMoviesByNameQuery(search);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="movie name.."
        onKeyPress={(e) => e.key === "Enter" && handleSearch(e)}
      />
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {data.Search.map((movie) => (
            <div key={movie.imdbID}>
              <img src={movie.Poster} alt={movie.Title} />
              <h2>{movie.Title}</h2>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
