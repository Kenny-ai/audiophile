/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "../baseQuery";
import { ProductType } from "@/utils/types";

interface Success {
  success: boolean;
}

interface ProductsRes extends Success {
  data: ProductType[];
}

interface ProductRes extends Success {
  data: ProductType;
}

interface IdsRes extends Success {
  data: { _id: string }[];
}

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery,
  endpoints: (build) => ({
    getProducts: build.query<ProductType[], string>({
      query: (category) => `/products/${category}`,
      transformResponse: (response: ProductsRes) => response.data,
    }),

    getProduct: build.query<ProductType, string>({
      query: (_id) => `/products/?_id=${_id}`,
      transformResponse: (response: ProductRes) => response.data,
    }),

    getCategoryIds: build.query<{ _id: string }[], string>({
      query: (category) => `/products/${category}/ids`,
      transformResponse: (response: IdsRes) => response.data,
    }),

    getCatProducts: build.query<ProductType[], void>({
      query: () => `/products/categories`,
      transformResponse: (response: ProductsRes) => response.data,
    }),

    // addProduct: build.query<ProductTypeType, void>({ query: () => "products" }),

    // deleteProduct: build.query<ProductType, void>({ query: () => "products" }),
  }),
});

export const {
  useLazyGetProductsQuery,
  useLazyGetProductQuery,
  useLazyGetCategoryIdsQuery,
  useLazyGetCatProductsQuery,
  useGetCatProductsQuery,
  // useAddProductQuery,
  // useDeleteProductQuery,
} = productsApi;
