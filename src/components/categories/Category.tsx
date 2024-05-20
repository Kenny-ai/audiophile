/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

interface Props {
  category: {
    _id: string;
    slug: string;
    category: string;
    categoryImage: {
      mobile: string;
      tablet: string;
      desktop: string;
    };
  };
}

const Category = ({ category }: Props) => {
  return (
    <Link
      href={`/${category.category}`}
      className="flex flex-col items-center category group"
    >
      <img
        src={`/assets/shared/desktop/image-category-thumbnail-${category.category}.png`}
        className="-mb-28 w-40 lg:w-52 z-10 image"
        alt={category.slug}
      />

      <div className="flex flex-col items-center gap-4 pb-4 pt-24 px-8 lg:px-20 xl:px-24 bg-clr-grey rounded-lg min-w-fit w-full shadow-lg">
        <p className="text-clr-dark font-bold uppercase text-lg tracking-wider">
          {category.category}
        </p>
        <p className="hover:text-clr-accent flex gap-1 items-center">
          <span className="text-clr-dark opacity-50 group-hover:font-bold">
            SHOP
          </span>

          <span className="text-clr-accent font-bold text-lg goto">
            {" "}
            {`>`}{" "}
          </span>
        </p>
      </div>
    </Link>
  );
};

export default Category;
