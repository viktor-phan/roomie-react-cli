import { Cottage, People } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import "./featureList.css";

export const FeatureList = () => {
  return (
    <div className="w-full">
      <h1 className="my-8 text-5xl text-indigo-800">How Roomie can help you</h1>
      <div className="flex flex-row w-full justify-evenly">
        <div>
          <div className="flex flex-col w-80 justify-center items-center">
            <Cottage className="icons" />
            <h1 className="text-3xl">Rent a Room</h1>
            <p>
              With thousands of rooms around the country for rent available on
              the website, Roomie can match you with a place you can call home
              while going to college.
            </p>
            <div className="h-12 w-28 bg-indigo-700 hover:bg-indigo-400 text-white pl-4 pr-4 align-middle flex rounded-lg">
              <div className="m-auto">
                <Link to="/">Rent</Link>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col w-80 justify-center items-center">
            <People className="icons" />
            <h1 className="text-3xl">Find a Roomate</h1>
            <p>
              Roomie is the platform that match you and your potential roommate,
              the one that will support and share the college life with you for
              years to come.
            </p>
            <div className="h-12 w-28 bg-indigo-700 hover:bg-indigo-400 text-white pl-4 pr-4 align-middle flex rounded-lg">
              <div className="m-auto">
                <Link to="/">Share</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
