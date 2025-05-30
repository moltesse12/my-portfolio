"use client";
import { assets } from "@/assets/assets";
import Image from "next/image";

import React, { useState } from "react";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "afc29330-2ce9-4293-b60d-1bd78ab0fb5b");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div
      id="projects"
      className="w-full px-[12%] py-10 scroll-mt-20 bg-[url ('/footer-bg-color.png')] bg-no-repeat bg-center bg-[length:90%_auto]"
    >
      <h4 className="text-center mb-2 text-lg font-ovo"> Contactez-moi </h4>
      <h2 className="text-center text-5xl font-ovo">Restons en contact</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        Je suis toujours ouvert à de nouvelles opportunités et collaborations. N'hésitez pas à me
        contacter pour discuter de vos projets ou simplement pour échanger des idées.
      </p>
      <form onSubmit={onSubmit} action="max-w-2xl mx-auto ">
        <div className="grid grid-cols-auto gap-6 mt-10 mb-8">
          <input
            type="text" name="name"
            placeholder="Entrer your name"
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Entrer votre email"
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
            required
          />
        </div>
        <textarea
          name="message"
          rows="6"
          placeholder="Entrer votre message"
          className="w-full p-4 outline-none border-[0.5px] border-gray-400 rounded-md bg-white mb-6"
          required
        ></textarea>

        <button
          type="submit"
          className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500"
        >
          {" "}
          Submit now
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </button>
        <p className="mt-4">{result}</p>
      </form>
    </div>
  );
};

export default Contact;
