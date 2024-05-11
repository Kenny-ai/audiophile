import Products from "@/components/product/Products";
import React from "react";

// used server side rendering
const Earphones = async () => {
  return <Products category={"earphones"} />;
};

export default Earphones;
