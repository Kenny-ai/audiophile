/* eslint-disable @next/next/no-img-element */
"use client";
import { CartState, Product } from "@/utils/types";
import React, { useState } from "react";
import Button from "../shared/Button";
import CategoriesLayout from "@/layouts/CategoriesLayout";
import { useRouter } from "next/navigation";
import Quantity from "../shared/Quantity";
import Gallery from "./Gallery";
import Others from "./Others";
import { addToCart, incrementQuantity } from "@/lib/features/cartSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { toast } from "react-toastify";

interface Props {
  product: Product;
}

const Product = ({ product }: Props) => {
  const router = useRouter();

  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(() => quantity + 1);
  };

  const decreaseQuantity = () => {
    quantity > 0 && setQuantity(() => quantity - 1);
  };

  const [features1, features2] = product.features.split("\n\n");

  const goBack = () => {
    router.back();
  };

  const dispatch = useAppDispatch();

  const cart = useAppSelector((state) => state.persistedReducers.cart);

  const cartItem = {
    id: product.id,
    name: product.name,
    image: product.image.mobile,
    price: product.price,
    quantity,
  };

  const containsObject = (obj: CartState, array: CartState[]) => {
    for (let i = 0; i < array.length; i++) {
      if (array[i].id === obj.id) {
        return true;
      }
    }
    return false;
  };

  const addItemToCart = () => {
    if (containsObject(cartItem, cart)) {
      dispatch(incrementQuantity({ id: cartItem.id, amount: quantity }));
      toast.success(`${product.name} has been added to your cart.`, {
        position: "top-center",
      });
    } else {
      dispatch(addToCart(cartItem));
    }
  };

  return (
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
              src={product.image.mobile}
              alt="best-gear"
              className="rounded-lg phones:hidden"
            />
            <img
              src={product.image.tablet}
              alt="best-gear"
              className="rounded-lg hidden phones:flex md:hidden"
            />
            <img
              src={product.image.desktop}
              alt="best-gear"
              className="rounded-lg hidden md:flex w-full"
            />
          </div>

          <div className="w-full lg:w-1/2 h-full sm:px-12 md:px-0 rounded-lg flex flex-col justify-center items-center md:items-start text-center md:text-left">
            <h3 className="uppercase font-bold text-3xl lg:text-5xl mb-6 tracking-wider">
              {product.name}
            </h3>
            <p className="text-clr-dark md:w-fit font-fw-bold opacity-70 tracking-wider leading-7 mb-8 text-lg">
              {product.description}
            </p>

            <p className="font-bold text-2xl mb-12">${product.price}</p>

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
              {product.includes.map((include) => (
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

        <Gallery gallery={product.gallery} />

        <Others products={product.others} category={product.category} />
      </div>
    </CategoriesLayout>
  );
};

export default Product;
