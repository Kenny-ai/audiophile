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
  const earphone = getProduct(slug);

  if (!earphone) notFound();

  return (
    <div>
      <Product product={earphone} />
    </div>
  );
};

export default Page;

export async function generateStaticParams() {
  const slugs = getSlugs("earphones");
  return slugs;
}
