"use client";

import React from "react";
import { MdOutlineArrowOutward } from "@react-icons/all-files/md/MdOutlineArrowOutward";
import { FiArrowDownLeft } from "@react-icons/all-files/fi/FiArrowDownLeft";
import clsx from "clsx";

interface TransactionDetailProps {
  title?: string;
  subTitle?: string | "successful" | "pending";
  amount: number;
  date: string;
  type: string | "deposit" | "withdrawal";
}

const TransactionDetail: React.FC<TransactionDetailProps> = ({
  title,
  type,
  amount,
  date,
  subTitle,
}) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <button
          className={clsx({
            ["flex items-center justify-center p-4 rounded-full shadow-sm duration-300"]:
              true,
            ["bg-rose-100 hover:bg-rose-200/80"]: type === "withdrawal",
            ["bg-green-100 hover:bg-green-200/80 "]: type === "deposit",
          })}
        >
          {type === "deposit" ? (
            <FiArrowDownLeft
              size={23}
              className="text-green-500"
              data-test-id="deposit-icon"
              name="deposit-icon"
              role="img"
            />
          ) : (
            <MdOutlineArrowOutward
              size={23}
              className="text-rose-400"
              data-test-id="withdrawal-icon"
              name="withdrawal-icon"
              role="img"
            />
          )}
        </button>
        <div className="space-y-1 tracking-tight">
          <h2 className="font-medium">{title}</h2>
          <p
            className={clsx({
              ["text-gray-600 text-sm"]: true,
              ["capitalize"]:
                subTitle === "pending" || subTitle === "successful",
              ["text-green-600"]: subTitle === "successful",
            })}
          >
            {subTitle}
          </p>
        </div>
      </div>
      <div className="space-y-1">
        <h1 className="text-xl font-bold">USD {amount}</h1>
        <p className="text-sm text-right text-gray-500"> {date}</p>
      </div>
    </div>
  );
};

export default TransactionDetail;
