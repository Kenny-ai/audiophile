import { CartState } from "@/utils/types";
import products from "./data/data.json";

export const getCategoriesArray = () => {
  const arr = [];
  const catArr: string[] = [];
  for (const product of products) {
    if (!catArr.includes(product.category)) {
      arr.push({
        _id: product.id,
        slug: product.slug,
        category: product.category,
        categoryImage: product.categoryImage,
      });
      catArr.push(product.category);
    }
  }
  return arr;
};

export const getCategories = () => {
  const arr = products.map(({ category }) => category);
  return [...new Set(arr)];
};

export const getSlugs = (category: string) =>
  products
    .filter((product) => product.category === category)
    .map(({ slug }) => {
      return { slug };
    });

export const getProducts = (category: string) =>
  products.filter((product) => product.category === category);

export const getProduct = (slug: string) =>
  products.filter((product) => product.slug === slug)[0];

export const getTotal = (cart: CartState[]) => {
  let total = 0;
  cart.forEach((item) => {
    total += item.price * item.quantity;
  });
  return total;
};
