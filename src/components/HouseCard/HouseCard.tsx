import faker from "@faker-js/faker";
import "./houseCard.css";
export const HouseCard = ({ house }: any) => {
  return (
    <div className="w-80 h-fit container flex flex-col m-2 p-2 bg-slate-100 items-center">
      <img
        className="w-72"
        // src="https://static.dezeen.com/uploads/2020/02/house-in-the-landscape-niko-arcjitect-architecture-residential-russia-houses-khurtin_dezeen_2364_hero-852x479.jpg"
        src={faker.image.city(600, 400, true)}
        alt="image"
      />
      <div className="w-5/6 my-2 text-left">
        <p className="text-xl">${house.monthlyFee}/mo</p>
        <p>{house.room + (house.room > 1 ? " bedrooms" : " bedroom")}</p>
        <p>
          {house.city}, {house.state}
        </p>
        <p>{house.zip}</p>
      </div>
      <div className="w-72 h-10 bg-indigo-500 hover:bg-indigo-400 text-white flex justify-center items-center hover:cursor-pointer">
        Check availability
      </div>
    </div>
  );
};
