"use client";
import React from "react";

interface Props {
  quantity: number;
  increaseQuantity: () => void;
  decreaseQuantity: () => void;
}

const Quantity = ({ quantity, increaseQuantity, decreaseQuantity }: Props) => {
  return (
    <div className="bg-gray-200 flex justify-around py-4 w-32 rounded-lg">
      <span
        className="cursor-pointer hover:text-clr-accent font-fw-bold text-xl select-none"
        onClick={decreaseQuantity}
      >
        -
      </span>
      <span className="font-bold">{quantity}</span>

      <span
        className="cursor-pointer hover:text-clr-accent font-fw-bold text-xl select-none"
        onClick={increaseQuantity}
      >
        +
      </span>
    </div>
  );
};

export default Quantity;
