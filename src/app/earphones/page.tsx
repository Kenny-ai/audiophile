import Product from "@/components/Product";
import { getEarphones } from "@/data/category_id";
import CategoriesLayout from "@/layouts/CategoriesLayout";
import React from "react";

const page = () => {
  const earphones = getEarphones();
  return (
    <CategoriesLayout title="earphones">
      {earphones.map((earphone) => (
        <Product
          key={earphone.id}
          index={earphones.indexOf(earphone) + 1}
          productName={earphone.name}
          isNew={earphone.isNew}
          image={earphone.image}
        />
      ))}
      {/* <Product />
      <Product /> */}
    </CategoriesLayout>
  );
};

export default page;
