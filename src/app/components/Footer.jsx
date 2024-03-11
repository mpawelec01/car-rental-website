import React from "react";
import Link from "next/link";
import { FaWhatsapp, FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="footer  border border-t-[#33353F] border-b-transparent border-l-transparent border-r-transparent text-white"
    >
      <div className="container p-12 flex justify-between">
        <span>DreamCars</span>
        <div className="contacts flex gap-10">
          {" "}
          <Link href="">test@example.com</Link>{" "}
          <Link href=""> +123 456 789</Link>
        </div>
        <div className="socials">
          <ul className="flex  p-4 md:p-0 md:flex-row md:space-x-4 gap-25  mt-0">
            <li>
              <Link
                className="flex items-center gap-12 flex-row"
                href=""
                title="Call: +123 456 789"
              >
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
        <p className="text-slate-600">2024. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
