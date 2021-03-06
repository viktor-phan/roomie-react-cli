import React, { useEffect, useState } from "react";
import HouseList from "../../components/HouseList";
import RightBar from "../../components/RightBar";
import LeftBar from "../../components/LeftBar";
import axios, { AxiosResponse } from "axios";

const BASE_URL = "http://localhost:5000/api/v1/house";
export const Main = () => {
  const [houses, setHouses] = useState<AxiosResponse | null | any>();

  useEffect(() => {
    const getHouses = async () => {
      const res = await axios.get(BASE_URL);
      setHouses(res.data);
    };
    getHouses();
  }, []);

  if (houses == undefined) {
    return (
      <div className="flex flex-row justify-between">
        <LeftBar />
        <h1>Loading...</h1>
        <RightBar />
      </div>
    );
  }
  return (
    <div className="flex flex-row justify-between">
      <LeftBar />
      <HouseList houses={houses} />
      <RightBar />
    </div>
  );
};
