import cartReducer from "@/lib/features/cartSlice";
import cartModalReducer from "@/lib/features/cartModalSlice";
import authReducer from "@/lib/features/authSlice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { productsApi } from "./services/products/products";
import { authApi } from "./services/auth/auth";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  cart: cartReducer,
  cartModal: cartModalReducer,
  auth: authReducer,
});

const persistedReducers = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: {
    persistedReducers,
    [productsApi.reducerPath]: productsApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat([
      productsApi.middleware,
      authApi.middleware,
    ]),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
