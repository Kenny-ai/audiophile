import { BASE_URL } from "@/utils/constants";
import { notFound } from "next/navigation";

async function getProductsByCategory(category: string) {
  const products = await fetch(`${BASE_URL}/products/${category}`);
  // .then((res) => res.json()
  // .then((res) => res.data)
  if (!products) {
    notFound();
    // throw new Error(`No products found`);
  }
  return products.json();
  // console.log(products);
}
