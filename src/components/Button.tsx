import React from "react";
interface Props {
  title: string;
  className: string;
}

const Button = ({ title, className }: Props) => {
  return (
    <button className={`${className} w-40 py-4 font-bold rounded-lg uppercase`}>
      {title}
    </button>
  );
};

export default Button;
