import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Search } from "@mui/icons-material";
import { Link } from "react-router-dom";

import "./navBar.css";
import { logout, selectUser } from "../../features/userSlice";

export const NavBar = () => {
  const user = useSelector(selectUser);
  const logoImage = require("../../assets/logo.png");
  const dispatch = useDispatch();

  const handleLogout = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    dispatch(logout());
    console.log("log out");
    sessionStorage.removeItem("user");
  };
  useEffect(() => {}, []);

  return (
    <nav className="flex justify-between items-center h-16 bg-white text-black shadow-sm p-3 sticky top-0 z-50">
      <div className="flex w-1/3 justify-between text-base pl-8">
        <Link to="/">
          <img src={logoImage} alt="logo" id="navbar__logo" />
        </Link>
        <div className="h-12 w-28 hover:bg-indigo-400 hover:text-white pl-4 pr-4 align-middle flex rounded-lg">
          <div className="m-auto">
            <Link to="/">Rent</Link>
          </div>
        </div>
        <div className="h-12 w-28 hover:bg-indigo-400 hover:text-white pl-4 pr-4 align-middle flex rounded-lg">
          <div className="m-auto">
            <Link to="/">Share</Link>
          </div>
        </div>
      </div>
      {/* <div className="flex flex-row align-baseline">
        <input type="text" placeholder="Search" className="w-4/5 h-12 pl-5" />
        <a
          type="submit"
          className="w-12 h-12 bg-indigo-500 hover:bg-indigo-400 flex"
        >
          <Search className="m-auto" />
        </a>
      </div> */}
      <div className="flex w-1/2 justify-between text-base pl-8">
        <div className="h-12 w-36 hover:bg-indigo-400 hover:text-white pl-4 pr-4 align-middle flex rounded-lg">
          <div className="m-auto">
            <Link to="/">Saved Rooms</Link>
          </div>
        </div>
        <div className="h-12 w-36 hover:bg-indigo-400 hover:text-white pl-4 pr-4 align-middle flex rounded-lg">
          <div className="m-auto">
            <Link to="/">Saved Searches</Link>
          </div>
        </div>
        <div className="h-12 w-28 bg-indigo-500 hover:bg-gray-400 text-white pl-4 pr-4 align-middle flex rounded-lg">
          <div className="m-auto">
            {!user ? (
              <Link to="/login">Log In</Link>
            ) : (
              <button onClick={handleLogout} className="m-auto">
                Log Out
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
