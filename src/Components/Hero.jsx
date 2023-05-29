import React from "react";
import Logo from "../assets/logo2.png";

const Hero = () => {
  return (
    <section className=" w-full py-[150px] text-white">
      <div className="container flex-col gap-6 font-Asiana flex justify-center items-center">
        <h1 className="text-5xl  md:text-6xl font-Asiana capitalize font-bold">
          made in japan
        </h1>
        <p className="text-center max-w-[500px] mx-auto text-2xl">
          Made in Japan: Where Crypto Meets Hilarious Innovation!
        </p>
        <a
          href=""
          className="bg-black capitalize text-2xl rounded-md px-6 py-3"
        >
          buy made in japan
        </a>
        <img
          src={Logo}
          alt="logo"
          className="md:w-[15rem] object-cover animate-bounce"
        />
      </div>
    </section>
  );
};

export default Hero;
