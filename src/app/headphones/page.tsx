import Product from "@/components/Product";
import { getHeadphones } from "@/data/category_id";
import CategoriesLayout from "@/layouts/CategoriesLayout";
import React from "react";

const page = () => {
  const headphones = getHeadphones();
  return (
    <CategoriesLayout title="headphones">
      {headphones.map((headphone) => (
        <Product
          key={headphone.id}
          index={headphones.indexOf(headphone) + 1}
          productName={headphone.name}
          isNew={headphone.isNew}
          image={headphone.image}
        />
      ))}
      {/* <Product />
      <Product /> */}
    </CategoriesLayout>
  );
};

export default page;
