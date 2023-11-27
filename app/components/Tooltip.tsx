"use client";

import React, { ReactNode } from "react";

interface TooltipProps {
  children: ReactNode;
  tooltip?: string;
}

const Tooltip: React.FC<TooltipProps> = ({ children, tooltip }) => {
  return (
    <div className="relative group z-10">
      {children}
      <span className="invisible whitespace-nowrap rounded-xl text-sm absolute mx-3 group-hover:visible opacity-0 group-hover:opacity-100 duration-500 p-4 px-5 pointer-events-none ml-6 tooltip bg-black text-white">
        {tooltip}
      </span>
    </div>
  );
};

export default Tooltip;
