import Image from "next/image";

const CarCard = ({ brand, photo, hp, acceleration, engine, price, tags }) => {
  return (
    <div className="p-5 border  bg-[#18181E] border-[#ADB7BE] rounded-lg hover:scale-110">
      <div className="flex flex-center justify-between">
        <h4 className="text-xl font-semibold mb-5">{brand}</h4>
        {tags.includes("New") && <p className="text-yellow-300">NEW</p>}
      </div>
      <div
        className="rounded-xl"
        style={{
          background: `url(${photo})`,
          backgroundSize: "cover",
          height: "240px",
          backgroundPosition: "center",
        }}
      ></div>
      <ul className="flex flex-center gap-5 my-3 items-center justify-center">
        <li>
          <p>Power of {hp} hp</p>
        </li>
        <li>
          <p>Engine: {engine}</p>
        </li>
        <li>
          <p>0 to 100km/h in {acceleration} s</p>
        </li>
      </ul>
      <button className="border border-white w-full rounded-md py-3 hover:bg-white hover:text-black">
        RENT FOR {price} PER DAY
      </button>
    </div>
  );
};

export default CarCard;
