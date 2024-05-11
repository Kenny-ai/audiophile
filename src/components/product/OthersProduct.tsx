/* eslint-disable @next/next/no-img-element */
import { Image } from "@/utils/types";
import Link from "next/link";
import React from "react";
import Button from "../shared/Button";

interface Props {
  _id: string;
  slug: string;
  image: Image;
  name: string;
  category: string;
}

const OthersProduct = ({ _id, slug, image, name, category }: Props) => {
  return (
    <div key={_id} className={`flex flex-col items-center gap-6 w-full`}>
      <div className="">
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
          className="rounded-lg hidden md:flex w-[400px]"
        />
      </div>

      <h3 className="uppercase font-bold text-2xl lg:text-4xl mb-2 tracking-wider">
        {name}
      </h3>

      <Link href={`/${category}/${_id}`}>
        <Button
          className="bg-clr-accent text-white hover:bg-clr-darker-accent duration-200"
          title="See Product"
        />
      </Link>
    </div>
  );
};

export default OthersProduct;
