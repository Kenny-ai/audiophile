import React from "react";
import Loading from "./Loading";
interface Props {
  title: string;
  className: string;
  onClick?: () => void;
  type?: "submit" | "reset" | "button";
  isLoading?: boolean;
}

const Button = ({ title, className, onClick, type, isLoading }: Props) => {
  return (
    <button
      className={`${className} w-40 py-4 font-bold rounded-lg uppercase duration-200 ${
        isLoading ? `grid place-items-center` : ``
      } `}
      onClick={onClick}
      type={type}
    >
      {isLoading ? <Loading /> : title}
    </button>
  );
};

export default Button;
