/* eslint-disable @next/next/no-img-element */
import { categories } from "@/data/category_id";
import Link from "next/link";
import React from "react";

const Categories = () => {
  return (
    <div className="flex items-center bg-clr-light w-full">
      <div className="flex flex-col gap-16 sm:gap-0 sm:flex-row sm:items-end justify-between w-full">
        {categories.map((category) => (
          <Link
            href={category.category}
            className="flex flex-col items-center gap-4 pb-4 pt-24 px-8 lg:px-20 xl:px-24 bg-clr-grey rounded-lg min-w-fit relative"
            key={category._id}
          >
            <img
              src={`./assets/shared/desktop/image-category-thumbnail-${category.category}.png`}
              className="absolute -top-8 lg:-top-16 w-40 lg:w-52"
              alt={category.slug}
            />

            <p className="text-clr-dark font-bold uppercase text-lg tracking-wider">
              {category.category}
            </p>
            <p className="hover:text-clr-accent flex gap-1 items-center">
              <span className="text-clr-dark opacity-50">SHOP</span>

              <span className="text-clr-accent font-bold text-lg"> {`>`} </span>
            </p>
          </Link>
        ))}

        {/* <div className="flex flex-col items-center gap-4 py-4 bg-clr-grey rounded-lg min-w-fit w-full relative">
          <p className="text-clr-dark font-bold">HEADPHONES</p>
          <Link
            href={"/headphones"}
            className="hover:text-clr-accent flex gap-1 items-center"
          >
            <span className="text-clr-dark opacity-50">SHOP</span>

            <span className="text-clr-accent font-bold text-lg"> {`>`} </span>
          </Link>
        </div>

        <div className="flex flex-col items-center gap-4 py-4 bg-clr-grey rounded-lg min-w-fit w-full">
          <p className="">image</p>
          <p className="text-clr-dark font-bold">HEADPHONES</p>
          <Link
            href={"/headphones"}
            className="hover:text-clr-accent flex gap-1 items-center"
          >
            <span className="text-clr-dark opacity-50">SHOP</span>

            <span className="text-clr-accent font-bold text-lg"> {`>`} </span>
          </Link>
        </div>

        <div className="flex flex-col items-center gap-4 py-4 bg-clr-grey rounded-lg min-w-fit w-full">
          <p className="">image</p>
          <p className="text-clr-dark font-bold">HEADPHONES</p>
          <Link
            href={"/headphones"}
            className="hover:text-clr-accent flex gap-1 items-center"
          >
            <span className="text-clr-dark opacity-50">SHOP</span>

            <span className="text-clr-accent font-bold text-lg"> {`>`} </span>
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default Categories;
