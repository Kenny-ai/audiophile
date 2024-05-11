"use client";
import React from "react";
import Category from "./Category";
import { useGetCatProductsQuery } from "@/lib/services/products/products";

const Categories = () => {
  const { data: categories, isError, isFetching } = useGetCatProductsQuery();

  if (isFetching)
    return <div className="grid place-items-center">Loading...</div>;

  if (isError)
    return <div className="grid place-items-center">An error occured</div>;

  return (
    <div className="flex flex-col gap-16 sm:gap-0 sm:flex-row sm:items-end justify-between w-full">
      {categories?.map((category) => (
        <Category key={category._id} category={category} />
      ))}
    </div>
  );
};

export default Categories;
