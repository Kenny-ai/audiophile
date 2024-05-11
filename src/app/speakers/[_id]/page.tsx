/* eslint-disable @next/next/no-img-element */
"use client";
import { notFound } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useLazyGetProductQuery } from "@/lib/services/products/products";
import { CartState } from "@/utils/types";
import CategoriesLayout from "@/layouts/CategoriesLayout";
import { useRouter } from "next/navigation";
import { addToCart, incrementQuantity } from "@/lib/features/cartSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import Quantity from "@/components/shared/Quantity";
import Button from "@/components/shared/Button";
import Gallery from "@/components/product/Gallery";
import Others from "@/components/product/Others";
import { Notify } from "@/utils/toast";

export interface Params {
  params: {
    _id: string;
  };
}

const Page = ({ params }: Params) => {
  const [getProduct, { data: product, isFetching, isError, error }] =
    useLazyGetProductQuery();

  const { _id } = params;

  useEffect(() => {
    getProduct(_id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const router = useRouter();

  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(() => quantity + 1);
  };

  const decreaseQuantity = () => {
    quantity > 0 && setQuantity(() => quantity - 1);
  };

  let features1, features2;

  if (product) {
    [features1, features2] = product.features.split("\n\n");
  }

  const goBack = () => {
    router.back();
  };

  const dispatch = useAppDispatch();

  const cart = useAppSelector((state) => state.persistedReducers.cart);

  const containsObject = (obj: CartState, array: CartState[]) => {
    for (let i = 0; i < array.length; i++) {
      if (array[i]._id === obj._id) {
        return true;
      }
    }
    return false;
  };

  const addItemToCart = () => {
    if (product) {
      const cartItem = {
        _id: product._id,
        name: product.name,
        image: product.image.mobile,
        price: product.price,
        quantity,
      };
      if (containsObject(cartItem, cart)) {
        dispatch(incrementQuantity({ _id: cartItem._id!, amount: quantity }));
        Notify("success", `${product.name} has been added to your cart.`, {
          position: "top-center",
        });
      } else {
        dispatch(addToCart(cartItem));
      }
    }
  };

  if (isFetching) {
    return <div className="h-screen grid place-items-center">Loading...</div>;
  }

  if (isError) {
    if ("status" in error! && error.status === 404) notFound();
    else {
      return <div className="">An error occured</div>;
    }
  }
  // return <div>{data && <Product product={data} />}</div>;
  return (
    <div>
      {product && (
        <CategoriesLayout>
          <div className="px-8 sm:px-12 md:px-32 xl:px-52 flex flex-col gap-24 py-12 md:py-24">
            <button
              className="text-clr-dark opacity-75 hover:text-clr-accent w-fit"
              onClick={goBack}
            >
              Go Back
            </button>

            <div
              className={`flex flex-col md:flex-row items-center gap-6 md:gap-16 w-full md:justify-between`}
            >
              <div className="shadow-md lg:w-2/5">
                <img
                  src={product?.image.mobile}
                  alt={product?.slug}
                  className="rounded-lg phones:hidden"
                />
                <img
                  src={product?.image.tablet}
                  alt={product?.slug}
                  className="rounded-lg hidden phones:flex md:hidden"
                />
                <img
                  src={product?.image.desktop}
                  alt={product?.slug}
                  className="rounded-lg hidden md:flex w-full"
                />
              </div>

              <div className="w-full lg:w-1/2 h-full sm:px-12 md:px-0 rounded-lg flex flex-col justify-center items-center md:items-start text-center md:text-left">
                <h3 className="uppercase font-bold text-3xl lg:text-5xl mb-6 tracking-wider">
                  {product?.name}
                </h3>
                <p className="text-clr-dark md:w-fit font-fw-bold opacity-70 tracking-wider leading-7 mb-8 text-lg">
                  {product?.description}
                </p>

                <p className="font-bold text-2xl mb-12">${product?.price}</p>

                <div className="flex gap-4">
                  <Quantity
                    quantity={quantity}
                    increaseQuantity={increaseQuantity}
                    decreaseQuantity={decreaseQuantity}
                  />
                  <Button
                    className="bg-clr-accent text-white hover:bg-clr-darker-accent"
                    title="Add to cart"
                    onClick={addItemToCart}
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6 md:flex-row">
              <div className="md:w-1/2">
                <h3 className="uppercase font-bold text-2xl lg:text-4xl mb-6 tracking-wider">
                  Features
                </h3>
                <p className="text-clr-dark md:w-fit font-fw-bold opacity-70 tracking-wider leading-7 mb-8">
                  {features1}
                </p>
                <p className="text-clr-dark md:w-fit font-fw-bold opacity-70 tracking-wider leading-7 mb-8">
                  {features2}
                </p>
              </div>

              <div className="flex md:justify-center md:w-1/2">
                <div className="flex flex-col gap-3">
                  <h3 className="uppercase font-bold text-2xl lg:text-4xl mb-2 tracking-wider">
                    In the box
                  </h3>
                  {product?.includes.map((include) => (
                    <div className="flex gap-8" key={include.item}>
                      <span className="text-clr-accent font-bold text-xl">
                        {include.quantity}x
                      </span>
                      <span className="text-clr-dark font-fw-bold opacity-70 tracking-wider">
                        {include.item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <Gallery gallery={product?.gallery} />

            <Others products={product?.others} category={product?.category} />
          </div>
        </CategoriesLayout>
      )}
    </div>
  );
};

export default Page;
