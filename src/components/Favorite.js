import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFavMovie } from "../features/favMovies";
import { MdDeleteOutline } from "react-icons/md";
import html2canvas from "html2canvas";

export default function Favorite() {
  const dispatch = useDispatch();
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
    <div className="md:w-2/3 w-full mt-0 md:mt-5 flex  flex-col items-center justify-center md:border-t-0 border-t-2 ">
      <div
        id="fav-movies"
        className="md:w-1/2 w-full flex gap-2 flex-col justify-between items-center p-2 rounded"
      >
        {favMovies &&
          favMovies.map((item, number) => (
            <div
              className="group w-full flex justify-between items-center"
              key={item.imdbID}
            >
              <div className="flex items-center gap-2">
                <p>{number + 1 + `.`}</p>
                <img className="w-12" src={item.Poster} alt={item.Title} />
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
          ))}
      </div>
      <div className="w-1/2">
        {favMovies.length === 0 ? (
          <h1 className="text-center text-red-400 underline">No Fav Movies</h1>
        ) : (
          <button
            onClick={downloadList}
            className="bg-red-500 text-lg text-white font-semibold py-3 w-full mt-2"
          >
            Download List
          </button>
        )}
      </div>
    </div>
  );
}
