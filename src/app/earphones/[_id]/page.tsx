import { notFound } from "next/navigation";
import React from "react";
import { BASE_URL } from "@/utils/constants";
import Product from "@/components/product/Product";
import { ProductType } from "@/utils/types";

export interface Params {
  params: {
    _id: string;
  };
}

export async function generateStaticParams() {
  const _ids: Params[] = await fetch(`${BASE_URL}products/earphones/ids`)
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

const Earphone = async ({ params }: Params) => {
  const { _id } = params;

  const product = await getProduct(_id);

  if (!product) notFound();

  return (
    <div>
      <Product product={product} />
    </div>
  );
};

export default Earphone;

// C:\Program Files (x86)\MongoDB Atlas CLI\
// mongoimport.exe --collection=products --db=test --type=json --jsonArray data.json
// C:\Users\HP\AppData\Local\Programs\mongosh\
// mongoimport --uri 'mongodb+srv://kennybolu:mvemjsunp@audiophile.evyqgjw.mongodb.net/?retryWrites=true&w=majority&appName=audiophile' --collection=products --file=data.json --jsonArray
