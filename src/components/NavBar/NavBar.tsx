import React from "react";
import { Search } from "@mui/icons-material";
import "./navBar.css";
export const NavBar = () => {
  return (
    <nav className="flex justify-between items-center h-16 bg-black text-white relative shadow-sm p-3 sticky top-0">
      <div className="text-3xl pl-8">
        <h3>Roomie</h3>
        <img src="src/assets/logo.png" alt="logo" />
      </div>
      <div className="flex flex-row align-baseline">
          <input type="text" placeholder="Search" className="w-4/5 h-12 rounded-l-md pl-5" />
          <a type="submit" className="w-12 h-12 bg-indigo-500 rounded-r-md">
            <Search />
          </a>
      </div>
      <div className="h-12 w-20 bg-indigo-500 hover:bg-indigo-200 rounded-md pl-4 pr-4">
        <a className="m-auto" href="">Log In</a>
      </div>
    </nav>
  );
};