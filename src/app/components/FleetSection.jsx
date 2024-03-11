"use client";
import React, { useState, useRef } from "react";
import CarCard from "./CarCard";
import { motion, useInView } from "framer-motion";
import CarTag from "./CarTag";

const carsInfo = [
  {
    id: 1,
    brand: "Aston martin",
    photo: "/images/car1.jpg",
    hp: "xxx",
    acceleration: "##",
    engine: "xyz",
    price: "$$$",
    tags: ["All", "New"],
  },
  {
    id: 2,
    brand: "Audi",
    photo: "/images/car2.jpg",
    hp: "xxx",
    acceleration: "##",
    engine: "xyz",
    price: "$$$",
    tags: ["All", "New"],
  },
  {
    id: 3,
    brand: "BMW",
    photo: "/images/car3.jpg",
    hp: "xxx",
    acceleration: "##",
    engine: "xyz",
    price: "$$$",
    tags: ["All", "New"],
  },
  {
    id: 4,
    brand: "Ferrari",
    photo: "/images/car4.jpg",
    hp: "xxx",
    acceleration: "##",
    engine: "xyz",
    price: "$$$",
    tags: ["All", "Bestsellers"],
  },
  {
    id: 5,
    brand: "Lamborghini",
    photo: "/images/car5.jpg",
    hp: "xxx",
    acceleration: "##",
    engine: "xyz",
    price: "$$$",
    tags: ["All"],
  },
  {
    id: 6,
    brand: "Porsche",
    photo: "/images/car6.jpg",
    hp: "xxx",
    acceleration: "##",
    engine: "xyz",
    price: "$$$",
    tags: ["All", "Bestsellers"],
  },
  {
    id: 7,
    brand: "Bentley",
    photo: "/images/car7.jpg",
    hp: "xxx",
    acceleration: "##",
    engine: "xyz",
    price: "$$$",
    tags: ["All", "Bestsellers"],
  },
  {
    id: 8,
    brand: "Mercedes",
    photo: "/images/car8.jpg",
    hp: "xxx",
    acceleration: "##",
    engine: "xyz",
    price: "$$$",
    tags: ["All"],
  },
  {
    id: 9,
    brand: "Rolls royce",
    photo: "/images/car9.jpg",
    hp: "xxx",
    acceleration: "##",
    engine: "xyz",
    price: "$$$",
    tags: ["All"],
  },
];

const FleetSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredCars = carsInfo.filter((car) => car.tags.includes(tag));

  return (
    <section
      className="flex flex-col mb-10 items-center mx-12 scroll-m-40"
      id="fleet"
    >
      <h2 className="text-start  text-4xl font-bold text-white mt-4">
        Our cars
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <CarTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <CarTag
          onClick={handleTagChange}
          name="New"
          isSelected={tag === "New"}
        />
        <CarTag
          onClick={handleTagChange}
          name="Bestsellers"
          isSelected={tag === "Bestsellers"}
        />
      </div>
      <ul className="grid pt-10 lg:grid-cols-3 md:grid-cols-2  gap-8 md:gap-12">
        {filteredCars.map((car) => (
          <CarCard
            key={car.id}
            brand={car.brand}
            photo={car.photo}
            hp={car.hp}
            acceleration={car.acceleration}
            engine={car.engine}
            price={car.price}
            tags={car.tags}
          />
        ))}
      </ul>
    </section>
  );
};

export default FleetSection;
