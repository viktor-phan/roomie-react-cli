import axios, { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import HouseCard from "../HouseCard";
import "./houseList.css";

export const HouseList = ({ houses }: any) => {
  return (
      <div className="w-9/12 h-screen flex flex-row flex-wrap justify-center overflow-y-auto no-scrollbar p-2">
        {houses.map((value: any, key: any) => {
          return <HouseCard house={value} />;
        })}
      </div>
  );
};
