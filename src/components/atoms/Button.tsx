import { MouseEvent } from "react";

type ButtonProps = {
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  color: string;
};

export const Button = ({ onClick, color }: ButtonProps) => {
  const buttonClasses = `rounded px-2 py-2.5 bg-white ${color === "#ffffff" ? "border border-gray-300" : "border border-white"}`;

  return (
    <button onClick={onClick} className={buttonClasses}>
      Get color scheme
    </button>
  );
};





