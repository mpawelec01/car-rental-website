import React from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";

const navLinks = [
  {
    title: "Fleet",
    path: "#fleet",
  },
  {
    title: "About us",
    path: "#about",
  },
  //   {
  //     title: "Reviews",
  //     path: "#reviews",
  //   },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-10 bg-[#121212] max-auto border-b border-b-[#ADB7BE]   bg-opacity-100">
      <div className="flex container flex-wrap items-center justify-between mx-auto px-4 py-3">
        <Link
          href={"/"}
          className="text-2xl md:text-5xl text-white font-semibold"
        >
          DreamCars
        </Link>
        <div className="menu md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink href={link.path} title={link.title} />
              </li>
            ))}
          </ul>
        </div>
        <div className="socials">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-4   mt-0">
            <li>
              <Link href="" title="Call: +123 456 789">
                <FaWhatsapp className="text-white w-[25px] h-[25px] hover:text-green-500" />
              </Link>
            </li>
            <li>
              <Link href="" title="Facebook page">
                <FaFacebook className="text-white w-[25px] h-[25px] hover:text-blue-400" />
              </Link>
            </li>
            <li>
              <Link href="" title="Instagram account">
                <FaInstagram className="text-white w-[25px] h-[25px] hover:text-red-400" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
