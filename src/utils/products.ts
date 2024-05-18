import { CartState } from "@/utils/types";

export const getTotal = (cart: CartState[]) => {
  let total = 0;
  cart.forEach((item) => {
    total += item.price * item.quantity;
  });
  return total;
};
