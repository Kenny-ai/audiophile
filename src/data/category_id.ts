import products from "./data.json";

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

export const categories = getCategoriesArray();

export const getEarphoneSlugs = products
  .filter((product) => product.category === "earphones")
  .map(({ slug }) => {
    return { slug };
  });

export const getEarphone = (slug: string) => {
  products.filter((product) => product.slug === slug);
};

export const getHeadphones = () =>
  products.filter((product) => product.category === "headphones");

export const getEarphones = () =>
  products.filter((product) => product.category === "earphones");

export const getSpeakers = () =>
  products.filter((product) => product.category === "speakers");


