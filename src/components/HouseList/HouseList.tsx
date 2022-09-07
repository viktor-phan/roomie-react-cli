import { KeyboardArrowRight } from "@mui/icons-material";
import axios, { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HouseCard from "../HouseCard";
import "./houseList.css";

export const HouseList = ({ houses }: any) => {
  return (
    <div className="my-16">
      <h1 className="mt-6 text-5xl text-indigo-800">Newly Listed Rooms</h1>
      <div className="w-screen h-96 flex flex-row overflow-x-auto no-scrollbar p-2">
        {houses.map((value: any, key: any) => {
          return <HouseCard house={value} />;
        })}
        <div className="flex justify-center items-center">
          <Link to="/">
            <KeyboardArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
};
