import React from "react";
import logo from "../assets/logo.jpg";

const About = () => {
  return (
    <section className="py-[50px] w-full bg-white text-black">
      <div className="container grid md:grid-cols-2 items-center justify-between gap-14">
        <div className="order-2 md:order-1">
          <img src={logo} alt="" />
        </div>

        <div className="flex flex-col gap-4 mt-10">
          <h1 className="text-4xl text-white  capitalize bg-primary w-max">
            about made in japan
          </h1>
          <p>
            Introducing Made in Japan, the crypto project that blends the
            brilliance of blockchain with the vibrant spirit of Japanese
            culture.
          </p>
          <p
            className="
          "
          >
            nleash your inner adventurer as you dive into a world of
            sushi-backed tokens, Sumo Smart Contracts, and adorable Kawaii NFTs.
            With every transaction, you'll savor the taste of virtual sushi
            while your crypto investments stand strong like mighty sumo
            wrestlers.
          </p>
          <p className="">
            Prepare to be enchanted by the laughter-filled journey of Made in
            Japan, where innovation meets hilar
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
