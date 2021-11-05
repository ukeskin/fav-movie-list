import React from "react";
import { MdFavoriteBorder } from "react-icons/md";

export const MovieCard = ({ movie, handleFavorite }) => {
  return (
    <div className="flex items-center justify-between" key={movie.imdbID}>
      <div className="flex items-center gap-2">
        <img className="w-12" src={movie.Poster} alt={movie.Title} />
        <h2 className="text-gray-800 text-lg">{movie.Title}</h2>
      </div>
      <div>
        <button
          onClick={handleFavorite}
          className="hover:text-red-600 stroke-1"
        >
          <MdFavoriteBorder />
        </button>
      </div>
    </div>
  );
};
