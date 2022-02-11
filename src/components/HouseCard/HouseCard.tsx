import React from "react";
import "./houseCard.css";
export const HouseCard = () => {
  return (
    <div className="w-80 h-fit container flex flex-col m-2 p-2 bg-slate-100 rounded-md justify-center">
      <img
      className="w-72 rounded-md"
        src="https://static.dezeen.com/uploads/2020/02/house-in-the-landscape-niko-arcjitect-architecture-residential-russia-houses-khurtin_dezeen_2364_hero-852x479.jpg"
        alt="image"
      />
      <div className="text-left">
        <p className="text-xl">$2000/mo</p>
        <p>4bd 1a</p>
        <p>Fullhouse</p>
        <p>Boston, MA 02496</p>
      </div>
      <div className="w-72 border-4 border-indigo-300 rounded-md text-indigo-300 hover:cursor-pointer">Check availability</div>
    </div>
  );
};
