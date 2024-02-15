import { notFound } from "next/navigation";
import React from "react";
import Product from "@/components/shared/product/Product";
import { getProduct, getSlugs } from "@/lib/products/products";

export interface Params {
  params: {
    slug: string;
  };
}

const Page = ({ params: { slug } }: Params) => {
  const speaker = getProduct(slug);

  if (!speaker) notFound();

  return (
    <div>
      <Product product={speaker} />
    </div>
  );
};

export default Page;

export async function generateStaticParams() {
  const slugs = getSlugs("speakers");
  return slugs;
}
