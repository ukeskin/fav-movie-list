import React from "react";
import Search from "./components/Search";
import Favorite from "./components/Favorite";
export default function App() {
  return (
    <div className="h-screen w-full bg-gray-100 flex p-1">
      <Search />
      <Favorite />
    </div>
  );
}
