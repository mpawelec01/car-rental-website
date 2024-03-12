import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section>
      <div
        style={{
          background: "url(./images/911-hero.jpg)",
          backgroundSize: "cover",
          width: "100%",
          height: "800px",
          backgroundPosition: "center",
        }}
        className="flex flex-center items-center justify-center "
      >
        <div className=" text-white mb-4">
          <h1 className="bg-red-400 ml-10 mb-10 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            LUXURIOUS CAR RENTAL
          </h1>
          <div className="flex flex-center items-center justify-center ">
            <p className="text-white border-2  border-red-400 ml-10 p-2 text-4xl ">
              In your city...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
