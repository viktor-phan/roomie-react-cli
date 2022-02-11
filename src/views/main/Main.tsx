import React from "react";
import HouseList from "../../components/HouseList";
import RightBar from "../../components/RightBar";
import LeftBar from "../../components/LeftBar";
export const Main = () => {
  return (
    <div className="flex flex-row justify-between">
      <LeftBar />
      <HouseList />
      <RightBar />
    </div>
  );
};
