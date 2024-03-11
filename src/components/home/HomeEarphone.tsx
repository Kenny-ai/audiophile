/* eslint-disable @next/next/no-img-element */
import React from "react";
import Button from "../shared/Button";
import Link from "next/link";

const HomeEarphone = () => {
  return (
    <div className="flex flex-col items-center gap-12 w-full md:grid md:grid-cols-2">
      <div className="bg-blue-400">
        <img
          src="/assets/home/mobile/image-earphones-yx1.jpg"
          alt="YX1 earphones"
          className="rounded-lg w-full"
        />
      </div>

      <div className="w-full px-4 py-12 md:py-0 h-full sm:px-12 rounded-lg bg-clr-grey flex flex-col justify-center">
        <p className="uppercase font-bold text-3xl mb-8">yx1 earphones</p>
        <Link href={"/earphones/yx1-earphones"}>
          <Button
            title="See product"
            className="bg-transparent hover:bg-clr-dark hover:text-clr-light border border-clr-dark"
          />
        </Link>
      </div>
    </div>
  );
};

export default HomeEarphone;
