"use client";

import clsx from "clsx";
import React, { HTMLProps, ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: HTMLProps<HTMLElement>["className"];
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={clsx({
        ["flex shadow-sm text-sm font-medium tracking-tight items-center justify-center rounded-full px-12 ring-1 ring-gray-200 w-full p-3"]:
          true,
        [className!]: className,
      })}
    >
      {children}
    </button>
  );
};

export default Button;
