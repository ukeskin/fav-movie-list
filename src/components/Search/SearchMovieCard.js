import React from "react";
import { MdFavoriteBorder } from "react-icons/md";
import { RiMovie2Line } from "react-icons/ri";

export const SearchMovieCard = ({ movie, handleFavorite }) => {
  return (
    <div className="flex items-center justify-between" key={movie.imdbID}>
      <div className="flex items-center gap-2">
        {movie.Poster === "N/A" ? (
          <div className="w-16 h-16 bg-gray-300 rounded flex items-center justify-center text-2xl text-gray-500">
            <RiMovie2Line />
          </div>
        ) : (
          <img
            className="h-16 w-16 rounded"
            src={movie.Poster}
            alt={movie.Title}
          />
        )}
        <h2 className="text-gray-700 text-lg">{movie.Title}</h2>
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
