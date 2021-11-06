import React from "react";
import { useSelector } from "react-redux";
import html2canvas from "html2canvas";
import FavoriteMovieCard from "./FavoriteMovieCard";
export default function Favorite() {
  const { favMovies } = useSelector((state) => state.favMovies);

  const downloadList = async () => {
    const node = document.getElementById("fav-movies");
    await html2canvas(node, {
      useCORS: true,
      allowTaint: true,
      backgroundColor: "#f3f4f6",
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = imgData;
      link.download = "fav-movies.png";
      link.click();
    });
  };
  return (
    <div className="md:w-2/3 w-full mt-0 md:mt-5 flex  flex-col items-center justify-center">
      <div
        id="fav-movies"
        className="md:w-1/2 w-full flex gap-2 flex-col justify-between items-center p-2 rounded"
      >
        {favMovies.length === 0 ? null : (
          <h2 className="text-2xl text-gray-800 font-semibold">
            My Personal Top Movies
          </h2>
        )}
        {favMovies &&
          favMovies.map((item, number) => (
            <FavoriteMovieCard item={item} number={number} />
          ))}
      </div>
      <div className="w-1/2">
        {favMovies.length === 0 ? (
          <h1 className="text-center text-red-400 underline">No Fav Movies</h1>
        ) : (
          <button
            onClick={downloadList}
            className="bg-red-500 text-lg text-white py-2 w-full mt-2"
          >
            Download List
          </button>
        )}
      </div>
    </div>
  );
}
