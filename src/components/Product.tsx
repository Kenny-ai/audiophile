/* eslint-disable @next/next/no-img-element */
import React from "react";
import Button from "./Button";
import Link from "next/link";

interface Props {
  productName: string;
  isNew: boolean;
  image: { mobile: string; tablet: string; desktop: string };
  index: number;
}

const Product = ({ productName, isNew, image, index }: Props) => {
  return (
    <div className="flex flex-col justify-center items-center gap-6 px-8 sm:px-12 md:px-32 xl:px-52">
      <div
        className={`${
          index % 2 === 0 ? `md:flex-row-reverse` : `md:flex-row`
        } flex flex-col items-center gap-6 w-full  md:justify-between`}
      >
        <div className="">
          <img
            src={image.mobile}
            alt="best-gear"
            className="rounded-lg phones:hidden"
          />
          <img
            src={image.tablet}
            alt="best-gear"
            className="rounded-lg hidden phones:flex md:hidden"
          />
          <img
            src={image.desktop}
            alt="best-gear"
            className="rounded-lg hidden md:flex w-[400px]"
          />
        </div>

        <div className="w-full max-w-[600px] h-full sm:px-12 md:px-0 rounded-lg flex flex-col justify-center items-center md:items-start text-center md:text-left">
          {isNew ? (
            <p className="tracking-[.5em] text-clr-lighter-accent text-xl mb-6">
              NEW PRODUCT
            </p>
          ) : (
            <></>
          )}
          <h3 className="font-bold text-3xl md:text-5xl mb-6 tracking-wider">
            {productName}
          </h3>
          <p className="text-clr-dark md:w-fit font-fw-bold opacity-70 tracking-wider leading-7 mb-8">
            The new XX99 Mark II headphones is the pinnacle of pristine audio.
            It redefines your premium headphone experience by reproducing the
            balanced depth and precision of studio-quality sound.
          </p>
          <Link href={"/"}>
            <Button
              className="bg-clr-accent text-white hover:bg-clr-lighter-accent duration-200"
              title="See Product"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
