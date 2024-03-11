import React from "react";
import Button from "../shared/Button";
import { useAppSelector } from "@/lib/hooks";
import { getTotal } from "@/lib/products/products";

const CheckoutSummary = () => {
  const cart = useAppSelector((state) => state.persistedReducers.cart);

  const total = getTotal(cart);
  const formattedtotal = total.toLocaleString();

  const vat = total / 20;

  const grandTotal = (total + 50 + 5.69).toLocaleString();
  return (
    <div className="bg-clr-light rounded-lg p-8 text-sm w-full h-fit">
      <h3 className="text-clr-dark text-2xl font-bold uppercase mb-8">
        Summary
      </h3>

      <div className="mb-8">
        <div className="flex justify-between mb-2">
          <span className="uppercase text-lg text-gray-400">Total</span>
          <span className="uppercase font-bold text-xl">${formattedtotal}</span>
        </div>
        <div className="flex justify-between mb-2">
          <span className="uppercase text-lg text-gray-400">Shipping</span>
          <span className="uppercase font-bold text-xl">$50</span>
        </div>
        <div className="flex justify-between mb-2">
          <span className="uppercase text-lg text-gray-400">
            VAT (Included - 5%)
          </span>
          <span className="uppercase font-bold text-xl">${vat}</span>
        </div>
      </div>

      <div className="flex justify-between mb-8">
        <span className="uppercase text-lg text-gray-400">Grand Total</span>
        <span className="uppercase font-bold text-xl text-clr-accent">
          ${grandTotal}
        </span>
      </div>

      <Button
        title="Continue & Pay"
        className="bg-clr-accent text-white hover:bg-clr-darker-accent w-full"
        type="submit"
      />
    </div>
  );
};

export default CheckoutSummary;
