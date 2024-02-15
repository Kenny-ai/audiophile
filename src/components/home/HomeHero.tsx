import Link from "next/link";
import React from "react";
import Button from "../shared/Button";

const HomeHero = () => {
  return (
    <div className="bg-home-bg-mobile phones:bg-home-bg-tablet md:bg-home-bg-desktop pt-28 phones:pt-0 pb-12 px-8 sm:px-12 md:px-32 xl:px-52 phones:pb-0 flex justify-center md:justify-between items-center bg-cover bg-center bg-blend-difference bg-clr-lighter-dark h-[80vh] phones:h-screen">
      <div className="flex flex-col gap-8 text-center md:text-left w-[30rem]">
        <p className="text-clr-grey opacity-50 tracking-[.7em]">NEW PRODUCT</p>
        <h1 className="text-white text-5xl sm:text-7xl font-bold leading">
          XX99 MARK II HEADPHONES
        </h1>
        <p className="text-clr-grey opacity-50 phones:leading-8 phones:tracking-wider">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <Link href={"/headphones/xx99-mark-two-headphones"}>
          <Button
            className="bg-clr-accent text-white hover:bg-clr-darker-accent"
            title="See Product"
          />
        </Link>
      </div>
    </div>
  );
};

export default HomeHero;
