import { getProducts } from "@/lib/products/products";
import React from "react";
import CategoriesProduct from "./CategoriesProduct";
import CategoryHeader from "./CategoryHeader";
import CategoriesLayout from "@/layouts/CategoriesLayout";

interface Props {
  category: string;
}

const CategoriesPage = ({ category }: Props) => {
  const products = getProducts(category);

  return (
    <CategoriesLayout>
      <CategoryHeader title={category} />

      {products.map((product) => (
        <CategoriesProduct
          key={product.id}
          slug={product.slug}
          index={products.indexOf(product) + 1}
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
