"use client";
import CartModal from "@/components/cart/CartModal";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import { toggleCartModal } from "@/lib/features/cartModalSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { Modal } from "@mui/material";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const AppLayout = ({ children }: Props) => {
  const cartModal = useAppSelector((state) => state.cartModal);

  const dispatch = useAppDispatch();

  const { isCartModalOpen } = cartModal;

  const closeCartModal = () => {
    dispatch(toggleCartModal());
  };

  return (
    <div>
      <Modal
        open={isCartModalOpen}
        onClose={closeCartModal}
        aria-labelledby="modal-cart-modal"
      >
        <CartModal />
      </Modal>

      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default AppLayout;
