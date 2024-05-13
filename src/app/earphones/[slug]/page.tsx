import { notFound } from "next/navigation";
import React from "react";
import { BASE_URL } from "@/utils/constants";
import Product from "@/components/product/Product";
import { ProductType } from "@/utils/types";

export interface Params {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const slugs: Params[] = await fetch(`${BASE_URL}products/earphones/slugs`)
    .then((res) => res.json())
    .then((res) => res.data);

  return slugs;
}

async function getProduct(slug: string) {
  const product: ProductType = await fetch(`${BASE_URL}products/?slug=${slug}`)
    .then((res) => res.json())
    .then((res) => res.data);

  if (!product) {
    throw new Error(`An error occured...`);
  }
  return product;
}

const Earphone = async ({ params }: Params) => {
  const { slug } = params;

  const product = await getProduct(slug);

  if (!product) notFound();

  return (
    <div>
      <Product product={product} />
    </div>
  );
};

export default Earphone;
