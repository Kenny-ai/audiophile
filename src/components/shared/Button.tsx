import React from "react";
interface Props {
  title: string;
  className: string;
  onClick?: () => void;
  type?: "submit" | "reset" | "button";
}

const Button = ({ title, className, onClick, type }: Props) => {
  return (
    <button
      className={`${className} w-40 py-4 font-bold rounded-lg uppercase duration-200`}
      onClick={onClick}
      type={type}
    >
      {title}
    </button>
  );
};

export default Button;
