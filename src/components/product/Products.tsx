/* eslint-disable @next/next/no-img-element */
import CategoryHeader from "@/components/categories/CategoryHeader";
import Button from "@/components/shared/Button";
import CategoriesLayout from "@/layouts/CategoriesLayout";
import { BASE_URL } from "@/utils/constants";
import { ProductType } from "@/utils/types";
import Link from "next/link";
import React from "react";

async function getProductsByCategory(category: string) {
  const products = await fetch(`${BASE_URL}products/${category}`)
    .then((res) => res.json())
    .then((res) => res.data);

  if (!products) {
    throw new Error(`An error occured...`);
  }
  return products;
}

const Products = async ({ category }: { category: string }) => {
  const products: Array<ProductType> = await getProductsByCategory(category);

  return (
    <CategoriesLayout>
      <CategoryHeader title={category} />

      {products?.map((product) => (
        <div
          className="flex flex-col justify-center items-center gap-6 px-8 sm:px-12 md:px-32 xl:px-52"
          key={product._id}
        >
          <div
            className={`${
              (products.indexOf(product) + 1) % 2 === 0
                ? `md:flex-row-reverse`
                : `md:flex-row`
            } flex flex-col items-center gap-6 w-full md:justify-between`}
          >
            <div className="shadow-md lg:w-2/5">
              <img
                src={product.image.mobile}
                alt={product.slug}
                className="rounded-lg phones:hidden"
              />
              <img
                src={product.image.tablet}
                alt={product.slug}
                className="rounded-lg hidden phones:flex md:hidden"
              />
              <img
                src={product.image.desktop}
                alt={product.slug}
                className="rounded-lg hidden md:flex w-full"
              />
            </div>

            <div className="w-full lg:w-1/2 h-full sm:px-12 md:px-0 rounded-lg flex flex-col justify-center items-center md:items-start text-center md:text-left">
              {product.isNew ? (
                <p className="tracking-[.5em] text-clr-lighter-accent text-xl mb-6">
                  NEW PRODUCT
                </p>
              ) : (
                <></>
              )}
              <h3 className="uppercase font-bold text-3xl md:text-5xl mb-6 tracking-wider">
                {product.name}
              </h3>
              <p className="text-clr-dark md:w-fit font-fw-bold opacity-70 tracking-wider leading-[2.3rem] mb-8 text-lg">
                {product.description}
              </p>
              <Link href={`/${category}/${product._id}`}>
                <Button
                  className="bg-clr-accent text-white hover:bg-clr-darker-accent"
                  title="See Product"
                />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </CategoriesLayout>
  );
};

export default Products;
