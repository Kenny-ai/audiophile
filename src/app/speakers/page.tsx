import Product from "@/components/Product";
import { getSpeakers } from "@/data/category_id";
import CategoriesLayout from "@/layouts/CategoriesLayout";
import React from "react";

const page = () => {
  const speakers = getSpeakers();
  return (
    <CategoriesLayout title="speakers">
      {speakers.map((speaker) => (
        <Product
          key={speaker.id}
          index={speakers.indexOf(speaker) + 1}
          productName={speaker.name}
          isNew={speaker.isNew}
          image={speaker.image}
        />
      ))}
      {/* <Product />
      <Product /> */}
    </CategoriesLayout>
  );
};

export default page;
