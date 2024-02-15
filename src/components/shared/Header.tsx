"use client";
import React, { useState } from "react";
import Icon from "./Icon";
import Navbar from "./Navbar";
import Categories from "../categories/Categories";
import Link from "next/link";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { toggleCartModal } from "@/lib/features/cartModalSlice";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart);
  const cartLength = cart.length;

  const openCartModal = () => {
    dispatch(toggleCartModal());
  };

  return (
    <header className="bg-black flex justify-between items-center py-8 px-8 sm:px-12 md:px-32 xl:px-52 text-white relative border-b border-b-gray-800">
      {!isNavOpen ? (
        <Icon
          src={"/assets/shared/desktop/icon-hamburger.svg"}
          alt={"hamburger"}
          className={`cursor-pointer md:hidden`}
          onClick={() => {
            setIsNavOpen(!isNavOpen);
          }}
          priority
        />
      ) : (
        <></>
      )}

      {isNavOpen ? (
        <Icon
          src={"/assets/shared/desktop/icon-close.svg"}
          alt={"close"}
          className={`md:hidden cursor-pointer`}
          onClick={() => {
            setIsNavOpen(false);
          }}
          priority
        />
      ) : (
        <></>
      )}

      <Link href={"/"}>
        <Icon
          src={"/assets/shared/desktop/logo.svg"}
          alt={"logo"}
          priority
          className="cursor-pointer"
        />
      </Link>

      <Navbar />

      {/* <Link href={`${pathName}/?cart=true`}> */}
      <div className="relative">
        {cartLength > 0 && (
          <div className="absolute bg-clr-accent w-5 h-5 rounded-full flex items-center justify-center -top-3 -right-2">
            <span className="text-xs font-bold">{cartLength}</span>
          </div>
        )}
        <Icon
          src={"/assets/shared/desktop/icon-cart.svg"}
          alt={"cart"}
          priority
          className="cursor-pointer cart-hover"
          onClick={openCartModal}
        />
      </div>
      {/* </Link> */}

      {isNavOpen ? (
        <div className="absolute w-full left-0 top-24 md:hidden h-[550px] sm:h-fit p-8 pt-16 bg-clr-light rounded-b-xl overflow-auto shadow-lg z-10 border scrollbar">
          <Categories />
        </div>
      ) : (
        <></>
      )}
    </header>
  );
};

export default Header;
