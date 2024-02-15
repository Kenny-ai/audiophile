import { notFound } from "next/navigation";
import React from "react";
import Product from "@/components/product/Product";
import { getProduct, getSlugs } from "@/lib/products/products";

export interface Params {
  params: {
    slug: string;
  };
}

const Page = ({ params: { slug } }: Params) => {
  const headphone = getProduct(slug);

  if (!headphone) notFound();

  return (
    <div>
      <Product product={headphone} />
    </div>
  );
};

export default Page;

export async function generateStaticParams() {
  const slugs = getSlugs("headphones");
  return slugs;
}
