/* eslint-disable @next/next/no-img-element */
import React from "react";
import Button from "../shared/Button";
import Link from "next/link";
import { Image } from "@/utils/types";

interface Props {
  slug: string;
  productName: string;
  description: string;
  isNew: boolean;
  image: Image;
  index: number;
  category: string;
}

const CategoriesProduct = ({
  productName,
  description,
  isNew,
  image,
  index,
  category,
  slug,
}: Props) => {
  return (
    <div className="flex flex-col justify-center items-center gap-6 px-8 sm:px-12 md:px-32 xl:px-52">
      <div
        className={`${
          index % 2 === 0 ? `md:flex-row-reverse` : `md:flex-row`
        } flex flex-col items-center gap-6 w-full md:justify-between`}
      >
        <div className="shadow-md lg:w-2/5">
          <img
            src={image.mobile}
            alt={slug}
            className="rounded-lg phones:hidden"
          />
          <img
            src={image.tablet}
            alt={slug}
            className="rounded-lg hidden phones:flex md:hidden"
          />
          <img
            src={image.desktop}
            alt={slug}
            className="rounded-lg hidden md:flex w-full"
          />
        </div>

        <div className="w-full lg:w-1/2 h-full sm:px-12 md:px-0 rounded-lg flex flex-col justify-center items-center md:items-start text-center md:text-left">
          {isNew ? (
            <p className="tracking-[.5em] text-clr-lighter-accent text-xl mb-6">
              NEW PRODUCT
            </p>
          ) : (
            <></>
          )}
          <h3 className="uppercase font-bold text-3xl md:text-5xl mb-6 tracking-wider">
            {productName}
          </h3>
          <p className="text-clr-dark md:w-fit font-fw-bold opacity-70 tracking-wider leading-[2.3rem] mb-8 text-lg">
            {description}
          </p>
          <Link href={`/${category}/${slug}`}>
            <Button
              className="bg-clr-accent text-white hover:bg-clr-darker-accent"
              title="See Product"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoriesProduct;
