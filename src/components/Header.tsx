"use client";
import React, { useState } from "react";
import Icon from "./Icon";
import Navbar from "./Navbar";
import Categories from "./Categories";
import Link from "next/link";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header className="bg-black flex justify-between items-center py-8 px-8 sm:px-12 md:px-32 xl:px-52 text-white relative border-b border-b-clr-lighter-dark">
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

      <Icon
        src={"/assets/shared/desktop/icon-cart.svg"}
        alt={"cart"}
        priority
        className="cursor-pointer cart-hover"
      />

      {isNavOpen ? (
        <div className="absolute w-full left-0 top-24 md:hidden h-[550px] sm:h-fit p-8 pt-16 bg-clr-light rounded-b-lg overflow-auto no-scrollbar">
          <Categories />
        </div>
      ) : (
        <></>
      )}
    </header>
  );
};

export default Header;
