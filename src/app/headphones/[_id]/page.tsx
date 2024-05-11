import { notFound } from "next/navigation";
import React from "react";
import Product from "@/components/product/Product";
import { ProductType } from "@/utils/types";
import { BASE_URL } from "@/utils/constants";

export interface Params {
  params: {
    _id: string;
  };
}

export async function generateStaticParams() {
  const _ids: Params[] = await fetch(`${BASE_URL}products/headphones/ids`)
    .then((res) => res.json())
    .then((res) => res.data);

  return _ids;
}

async function getProduct(_id: string) {
  const product: ProductType = await fetch(`${BASE_URL}products/?_id=${_id}`)
    .then((res) => res.json())
    .then((res) => res.data);

  if (!product) {
    throw new Error(`An error occured...`);
  }
  return product;
}

const Headphone = async ({ params }: Params) => {
  const { _id } = params;

  const product = await getProduct(_id);

  if (!product) notFound();

  return (
    <div>
      <Product product={product} />
    </div>
  );
};

export default Headphone;
