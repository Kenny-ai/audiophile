/* eslint-disable @next/next/no-img-element */
"use client";
"use client";
import { CartState, ProductType } from "@/utils/types";
import React, { useEffect, useState } from "react";
import Button from "../Button";
import CategoriesLayout from "@/layouts/CategoriesLayout";
import { useRouter } from "next/navigation";
import Quantity from "../Quantity";
import Gallery from "./Gallery";
import Others from "./Others";
import { addToCart, incrementQuantity } from "@/lib/features/cartSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";

interface Props {
  product: ProductType;
}

const Product = ({ product }: Props) => {
  const router = useRouter();

  const [features, setFeatures] = useState<string[]>([]);

  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(() => quantity + 1);
  };

  const decreaseQuantity = () => {
    quantity > 0 && setQuantity(() => quantity - 1);
  };

  useEffect(() => {
    const splitFeatures = product.features.split("\n\n");
    setFeatures(splitFeatures);
  }, [product.features]);

  const goBack = () => {
    router.back();
  };
  const dispatch = useAppDispatch();

  const cart = useAppSelector((state) => state.cart);

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
          <div className="">
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
              className="rounded-lg hidden md:flex"
            />
          </div>

          <div className="w-full max-w-[600px] h-full sm:px-12 md:px-0 rounded-lg flex flex-col justify-center items-center md:items-start text-center md:text-left">
            <h3 className="uppercase font-bold text-3xl lg:text-5xl mb-6 tracking-wider">
              {product.name}
            </h3>
            <p className="text-clr-dark md:w-fit font-fw-bold opacity-70 tracking-wider leading-7 mb-8">
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
              {features[0]}
            </p>
            <p className="text-clr-dark md:w-fit font-fw-bold opacity-70 tracking-wider leading-7 mb-8">
              {features[1]}
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
