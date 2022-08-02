import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";

import HouseList from "../../components/HouseList";
import SearchJumbotron from "../../components/SearchJumbotron";
import FeatureList from "../../components/FeaturesList";

const BASE_URL = "api/v1/house";
export const Main = () => {
  const [houses, setHouses] = useState<AxiosResponse | null | any>();

  useEffect(() => {
    const getHouses = async () => {
      const res = await axios.get(BASE_URL);
      setHouses(res.data.splice(0, 10));
    };
    getHouses();
  }, []);

  return (
    <div className="flex flex-col w-full justify-center items-center">
      <SearchJumbotron />
      {houses == undefined ? (
        <h1>Loading...</h1>
      ) : (
        <HouseList houses={houses} />
      )}
      {/* // Add loading screen later */}
      <FeatureList />
    </div>
  );
};
