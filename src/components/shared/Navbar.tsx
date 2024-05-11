import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathName = usePathname();

  // const categories = getCategories();

  const categories = ["earphones", "headphones", "speakers"];

  return (
    <nav className="hidden md:flex justify-between w-3/5 lg:w-[45%]">
      <Link
        href={"/"}
        className={`${
          pathName === `/` ? `text-clr-accent` : ``
        } hover:text-clr-lighter-accent font-bold`}
      >
        HOME
      </Link>
      {categories.map((category) => (
        <Link
          key={category[0]}
          href={`/${category}`}
          className={`${
            pathName === `/${category}` ? `text-clr-accent` : ``
          } hover:text-clr-lighter-accent font-bold uppercase`}
        >
          {category}
        </Link>
      ))}
    </nav>
  );
};

export default Navbar;
