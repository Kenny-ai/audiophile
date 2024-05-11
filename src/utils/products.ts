import { CartState } from "@/utils/types";

export const getTotal = (cart: CartState[]) => {
  let total = 0;
  cart.forEach((item) => {
    total += item.price * item.quantity;
  });
  return total;
};

//  mongoimport --uri 'mongodb+srv://kennybolu:mvemjsunp@audiophile.evyqgjw.mongodb.net/?retryWrites=true&w=majority&appName=audiophile' --collection=products --file=data.json --jsonArray
