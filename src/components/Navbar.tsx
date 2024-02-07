import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="hidden md:flex justify-between w-3/5">
      <Link href={"/"} className="hover:text-clr-lighter-accent font-bold">
        HOME
      </Link>
      <Link
        href={"/headphones"}
        className="hover:text-clr-lighter-accent font-bold"
      >
        HEADPHONES
      </Link>
      <Link
        href={"/speakers"}
        className="hover:text-clr-lighter-accent font-bold"
      >
        SPEAKERS
      </Link>
      <Link
        href={"/earphones"}
        className="hover:text-clr-lighter-accent font-bold"
      >
        EARPHONES
      </Link>
    </nav>
  );
};

export default Navbar;
