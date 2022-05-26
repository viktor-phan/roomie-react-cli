export const LeftBar = () => {
  return (
    <div className="w-56 h-screen p-2 float-left text-left fixed sticky top-0 bg-slate-700 text-white">
      <form className="p-4 flex flex-col justify-evenly">
        <h2>Price</h2>
        <input type="range" min="1" max="100" value="50" id="myRange" />
        <h2>Beds</h2>
        <input type="text" />
        <h2>Apartment/Condo/Room</h2>
        <div className="flex flex-col">
          <div>
            <input type="radio" value="Condo" />
            <label htmlFor="">Apartment</label>
          </div>
          <div>
            <input type="radio" value="Condo" />
            <label htmlFor="">Condo</label>
          </div>{" "}
          <div>
            <input type="radio" value="Condo" />
            <label htmlFor="">Room</label>
          </div>
        </div>
        <label htmlFor="">More</label>
      </form>
    </div>
  );
};
