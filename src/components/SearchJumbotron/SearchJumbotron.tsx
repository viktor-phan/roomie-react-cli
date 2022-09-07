import { Search } from "@mui/icons-material";
import React from "react";
import "./searchJumbotron.css";
export const SearchJumbotron = () => {
  return (
    <div className="jumbotron flex flex-col justify-center items-center h-[40rem] w-5/6 bg-black m-6 rounded-lg">
      <h1 className="text-7xl text-black">Exploring your favorite college living </h1>
      <div className="flex flex-row ">
        <input
          type="text"
          placeholder="Search"
          className="w-80 h-12 rounded-l-lg pl-5"
        />
        <a
          type="submit"
          className="w-12 h-12 bg-indigo-500 hover:bg-gray-400 text-white flex rounded-r-lg"
        >
          <Search className="m-auto" />
        </a>
      </div>
    </div>
  );
};
