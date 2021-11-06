import React from "react";
import { removeFavMovie } from "features/favMovies";
import { useDispatch } from "react-redux";
import { MdDeleteOutline } from "react-icons/md";
import { RiMovie2Line } from "react-icons/ri";

export default function FavoriteMovieCard({ item, number }) {
  const dispatch = useDispatch();
  return (
    <div
      className="group w-full flex justify-between items-center"
      key={item.imdbID}
    >
      <div className="flex items-center gap-2">
        <p>{number + 1 + `.`}</p>
        {item.Poster === "N/A" ? (
          <div className="w-16 h-16 bg-gray-300 rounded flex items-center justify-center text-2xl text-gray-500">
            <RiMovie2Line />
          </div>
        ) : (
          <img
            className="h-16 w-16 rounded"
            src={item.Poster}
            alt="item poster"
          />
        )}
        <div className="flex flex-col ">
          <h4>{item.Title}</h4>
          <span className="text-gray-400 text-sm">{item.Year}</span>
        </div>
      </div>
      <button
        onClick={() => {
          dispatch(removeFavMovie(item.imdbID));
        }}
      >
        <MdDeleteOutline className="text-2xl text-gray-100 group-hover:text-red-600" />
      </button>
    </div>
  );
}
