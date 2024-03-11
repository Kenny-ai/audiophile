import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface Auth {
  success?: boolean;
  user: null | { _id: string; name: string; email: string };
  token: string | null;
}

interface InitialState extends Auth {
  isLoggedIn: boolean;
}

const initialState: InitialState = {
  isLoggedIn: false,
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<Auth | null>) => {
      state.user = action.payload === null ? null : action.payload.user;
      state.token = action.payload === null ? null : action.payload.token;
      state.isLoggedIn = action.payload === null ? false : true;
    },
  },
});

export const { setUser } = authSlice.actions;

export default authSlice.reducer;
