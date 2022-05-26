import React from "react";
import { Search } from "@mui/icons-material";
import "./navBar.css";
export const NavBar = () => {
  const logoImage = require("../../assets/logo.png");
  return (
    <nav className="flex justify-between items-center h-16 bg-black text-white relative shadow-sm p-3 sticky top-0 z-50">
      <div className="text-3xl pl-8">
        <img src={logoImage} alt="logo" id="navbar__logo" />
      </div>
      <div className="flex flex-row align-baseline">
        <input
          type="text"
          placeholder="Search"
          className="w-4/5 h-12 pl-5"
        />
        <a type="submit" className="w-12 h-12 bg-indigo-500 hover:bg-indigo-400 flex">
          <Search className="m-auto" />
        </a>
      </div>
      <div className="h-12 w-28 bg-indigo-500 hover:bg-indigo-400 pl-4 pr-4 align-middle flex">
        <a className="m-auto" href="">
          Log In
        </a>
      </div>
    </nav>
  );
};
