import React from "react";
import HouseCard from "../HouseCard";
import "./houseList.css";
export const HouseList = () => {
  return (
    <div className="w-9/12 h-screen flex flex-row flex-wrap justify-start p-2">
      <HouseCard />
      <HouseCard />
      <HouseCard />
      <HouseCard />
      <HouseCard />
      <HouseCard />
    </div>
  );
};
