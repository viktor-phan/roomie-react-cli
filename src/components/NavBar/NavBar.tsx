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
    <nav className="flex justify-between items-center h-16 bg-black text-white shadow-sm p-3 sticky top-0 z-50">
      <div className="text-3xl pl-8">
        <Link to="/">
          <img src={logoImage} alt="logo" id="navbar__logo" />
        </Link>
      </div>
      <div className="flex flex-row align-baseline">
        <input type="text" placeholder="Search" className="w-4/5 h-12 pl-5" />
        <a
          type="submit"
          className="w-12 h-12 bg-indigo-500 hover:bg-indigo-400 flex"
        >
          <Search className="m-auto" />
        </a>
      </div>
      {!user ? (
        <div className="h-12 w-28 bg-indigo-500 hover:bg-indigo-400 pl-4 pr-4 align-middle flex">
          <div className="m-auto">
            <Link to="/login">Log In</Link>
          </div>
        </div>
      ) : (
        <div className="h-12 w-28 bg-indigo-500 hover:bg-indigo-400 pl-4 pr-4 align-middle flex">
          <button onClick={handleLogout} className="m-auto">
            Log Out
          </button>
        </div>
      )}
    </nav>
  );
};
