"use client";
import React, { useEffect } from "react";
import CategoriesProduct from "./CategoriesProduct";
import CategoryHeader from "./CategoryHeader";
import CategoriesLayout from "@/layouts/CategoriesLayout";
import { useLazyGetProductsQuery } from "@/lib/services/products/products";
import Loading from "../shared/Loading";

interface Props {
  category: string;
}

const CategoriesPage = ({ category }: Props) => {
  const [getProductsByCategory, { data, isFetching, isError }] =
    useLazyGetProductsQuery();

  useEffect(() => {
    getProductsByCategory(category);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <CategoriesLayout>
      <CategoryHeader title={category} />

      {isFetching ? (
        <div className="mx-auto flex gap-2">
          {`Getting ${category}...`}
          <Loading />
        </div>
      ) : (
        <></>
      )}

      {isError ? (
        <p className="mx-auto text-red-400 text-lg">
          An error occured while loading {category}
        </p>
      ) : (
        <></>
      )}

      {data?.map((product) => (
        <CategoriesProduct
          key={product._id}
          slug={product.slug}
          index={data.indexOf(product) + 1}
          productName={product.name}
          description={product.description}
          isNew={product.isNew}
          image={product.categoryImage}
          category={product.category}
        />
      ))}
    </CategoriesLayout>
  );
};

export default CategoriesPage;
