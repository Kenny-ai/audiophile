"use client";
import { Provider } from "react-redux";
import { store } from "../lib/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistor } from "@/lib/store";

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>{children}</PersistGate>
    </Provider>
  );
}
