import faker from "@faker-js/faker";
import React from "react";

export const RightBar = () => {
  return (
    <div className="w-52 float-right flex flex-col justify-start">
      <img
        className="w-48 h-fit  m-2"
        src={faker.image.city(300, 300, true)}
        alt=""
      />
      <img
        className="w-48 h-fit m-2"
        src={faker.image.city(300, 300, true)}
        alt=""
      />
      <img
        className="w-48 h-fit m-2"
        src={faker.image.city(300, 300, true)}
        alt=""
      />
    </div>
  );
};
