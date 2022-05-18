import axios, { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";

import HouseCard from "../HouseCard";
import "./houseList.css";

export const HouseList = ({ houses }: any) => {
  console.log(houses);
  return (
    <div className="w-9/12 h-screen flex flex-row flex-wrap justify-start p-2">
      {houses.map((value: any, key: any) => {
        return <HouseCard house={value} />;
      })}
    </div>
  );
};
