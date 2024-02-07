/* eslint-disable @next/next/no-img-element */
import React from "react";
import Button from "./Button";

const HomeEarphone = () => {
  return (
    <div className="flex flex-col items-center gap-6 w-full md:grid md:grid-cols-2 h-full">
      <div className="w-full ">
        <img
          src="/assets/home/mobile/image-earphones-yx1.jpg"
          alt="YX1 earphones"
          className="rounded-lg lg:max-h-[400px]"
        />
      </div>

      <div className="w-full max-w-[600px] px-4 py-12 md:py-0 h-full sm:px-12 rounded-lg bg-clr-grey flex flex-col justify-center">
        <p className="uppercase font-bold text-3xl mb-8">yx1 earphones</p>
        <Button
          title="See product"
          className="bg-transparent hover:bg-clr-dark hover:text-clr-light border border-clr-dark"
        />
      </div>
    </div>
  );
};

export default HomeEarphone;
