"use client";
import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const Footer = ({isDarkMode}) => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt="Footer Background" className="w-36 mx-auto mb-2" />
        <div className="w-max flex items-center gap-2 mx-auto">
          <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt="" className="w-6" />
          Nls.DigitalTech@gmail.com
        </div>
      </div>
      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p >© 2023 Don-manuel. All rights reserved.</p>
        <ul className="flex item-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a href="https://github.com/yourusername">Github</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
