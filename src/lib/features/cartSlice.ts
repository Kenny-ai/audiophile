import { CartState } from "@/utils/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IncrementQuantity {
  id: number;
  amount: number;
}

const initialState: CartState[] = [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartState>) => {
      state.push(action.payload);
    },

    removeFromCart: (state, action: PayloadAction<number>) => {
      const cartItem = state.filter((item) => item.id === action.payload)[0];
      state.splice(state.indexOf(cartItem), 1);
    },

    clearCart: (state) => {
      state.length = 0;
    },

    incrementQuantity: (state, action: PayloadAction<IncrementQuantity>) => {
      state.map((product) => {
        if (product.id === action.payload.id) {
          product.quantity += action.payload.amount;
        }
      });
    },

    decrementQuantity: (state, action: PayloadAction<IncrementQuantity>) => {
      state.map((product) => {
        if (product.id === action.payload.id) {
          product.quantity -= action.payload.amount;
        }
      });
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
