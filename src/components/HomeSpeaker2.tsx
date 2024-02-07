import React from "react";
import Button from "./Button";

const HomeSpeaker2 = () => {
  return (
    <div className="w-full bg-cover bg-right bg-mobile-bg-zx7 sm:bg-tablet-bg-zx7 lg:bg-desktop-bg-zx7 px-4 py-20 sm:px-12 rounded-lg">
      <p className="uppercase font-bold text-3xl mb-8">zx7 speaker</p>
      <Button
        title="See product"
        className="bg-transparent hover:bg-clr-dark hover:text-clr-light border border-clr-dark"
      />
    </div>
  );
};

export default HomeSpeaker2;
