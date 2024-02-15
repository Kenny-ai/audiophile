import { Others } from "@/utils/types";
import React from "react";
import OthersProduct from "./OthersProduct";

interface Props {
  products: Others[];
  category: string;
}
const Others = ({ products, category }: Props) => {
  return (
    <div>
      <h3 className="uppercase font-bold text-2xl lg:text-4xl tracking-wider text-center mb-8">
        You may also like
      </h3>
      <div className="flex flex-col md:flex-row gap-16 md:gap-8 justify-between">
        {products.map(({ slug, image, name }) => (
          <OthersProduct
            key={slug}
            slug={slug}
            name={name}
            image={image}
            category={category}
          />
        ))}
      </div>
    </div>
  );
};

export default Others;
