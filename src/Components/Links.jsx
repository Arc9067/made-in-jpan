import React from "react";

const Links = () => {
  return (
    <section className="py-[50px] w-full text-white">
      <div className="container gap-4 flex justify-center items-center flex-col">
        <h1 className="text-4xl capitalize">contract</h1>
        <p>0xA5A059988bc5BBf34999860b2232A3f7b2dca053</p>
        <div className="mt-10 flex flex-col gap-6 md:flex-row">
          <a
            href="https://t.me/japanerc"
            className="bg-black capitalize text-2xl rounded-md px-6 py-3"
          >
            telegram
          </a>
          <a
            href="https://twitter.com/japanerc"
            className="bg-black capitalize text-2xl rounded-md px-6 py-3"
          >
            twitter
          </a>
          <a
            href=""
            className="bg-black capitalize text-2xl rounded-md px-6 py-3"
          >
            dextool
          </a>
          <a
            href=""
            className="bg-black capitalize text-2xl rounded-md px-6 py-3"
          >
            uniswap
          </a>
        </div>
      </div>
    </section>
  );
};

export default Links;
