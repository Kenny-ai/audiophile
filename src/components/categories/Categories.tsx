import { getCategoriesArray } from "@/lib/products/products";
import React from "react";
import Category from "./Category";

const Categories = () => {
  const categories = getCategoriesArray();

  return (
    <div className="flex flex-col gap-16 sm:gap-0 sm:flex-row sm:items-end justify-between w-full">
      {categories.map((category) => (
        <Category key={category._id} category={category} />
      ))}
    </div>
  );
};

export default Categories;
