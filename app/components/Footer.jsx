"use client";
import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const Footer = () => {
  return (
    <div className="mt-20">
      <div>
        <Image src={assets.logo} alt="Footer Background" className="w-36 mx-auto mb-2" />
        <div>
          <Image src={assets.mail_icon} alt="" className="w-6" />
          Don-manuel
        </div>
      </div>
      <div>
        <p className="text-center text-sm text-gray-500">© 2023 Don-manuel. All rights reserved.</p>
        <ul>
          <li>
            <a href="https://github.com/yourusername">Github</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
