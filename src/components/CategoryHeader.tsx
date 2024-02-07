import React from "react";

interface Props {
  title: string;
}

const CategoryHeader = ({ title }: Props) => {
  return (
    <div className="bg-black">
      <h1 className="text-clr-light uppercase py-8 sm:py-20 flex justify-center font-bold text-3xl sm:text-5xl">
        {title}
      </h1>
    </div>
  );
};

export default CategoryHeader;
