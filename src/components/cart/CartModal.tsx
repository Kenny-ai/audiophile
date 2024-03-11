/* eslint-disable @next/next/no-img-element */
import React, { forwardRef } from "react";
import Button from "../shared/Button";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { clearCart } from "@/lib/features/cartSlice";
import { getTotal } from "@/lib/products/products";
import { toggleCartModal } from "@/lib/features/cartModalSlice";
import CartQuantity from "./CartQuantity";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

type Ref = HTMLDivElement;

const CartModal = forwardRef<Ref>(function CartModal(props, ref) {
  const cart = useAppSelector((state) => state.persistedReducers.cart);

  const dispatch = useAppDispatch();

  const cartLength = cart.length;

  const removeAll = () => {
    dispatch(clearCart());
  };

  const total = getTotal(cart).toLocaleString();

  const router = useRouter();

  const handleClick = () => {
    dispatch(toggleCartModal());
    if (cartLength > 0) {
      router.push("/checkout");
    } else {
      toast.warning("Your cart is empty");
    }
  };

  return (
    <div
      {...props}
      ref={ref}
      className="bg-clr-light p-8 flex flex-col gap-8 max-w-[430px] w-full rounded-lg absolute right-24 top-36 outline-none"
    >
      <div className="flex justify-between">
        <h3 className="uppercase text-2xl font-bold">Cart ({cartLength})</h3>
        <button
          className="underline text-gray-400 hover:text-clr-accent"
          onClick={removeAll}
        >
          Remove all
        </button>
      </div>

      <div className="flex flex-col gap-4 max-h-[350px] overflow-auto p-4 border-b border-t scrollbar">
        {!cartLength ? (
          <div className="flex flex-col gap-4">
            <p className="text-xl">Your cart is empty</p>
            <p className="text-gray-400">
              Continue shopping on the audiophile website{" "}
              <Link href="/" className="text-clr-accent">
                homepage.
              </Link>
            </p>
          </div>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt="best-gear"
                  className="rounded-lg w-20"
                />
                <div className="">
                  <p className="font-bold uppercase">{item.name}</p>
                  <p className="text-lg text-gray-400">$ {item.price}</p>
                </div>
              </div>
              <CartQuantity id={item.id} quantity={item.quantity} />
            </div>
          ))
        )}
      </div>

      <div className="flex justify-between">
        <span className="uppercase text-gray-400">Total</span>
        <span className="font-bold text-xl">${total}</span>
      </div>

      <Button
        title="Checkout"
        className="bg-clr-accent text-white hover:bg-clr-darker-accent w-full"
        onClick={handleClick}
      />
    </div>
  );
});

export default CartModal;
