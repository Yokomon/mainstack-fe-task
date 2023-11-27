"use client";

import { FiInfo } from "@react-icons/all-files/fi/FiInfo";

interface ProductStatsProps {
  amount: number;
  title: string;
}

const ProductStats: React.FC<ProductStatsProps> = ({ title, amount }) => {
  return (
    <div className="p-2">
      <div className="flex items-center tracking-tight font-medium justify-between text-sm text-gray-500">
        <h3>{title}</h3>
        <FiInfo className="cursor-pointer text-gray-400" size={20} />
      </div>
      <div className="text-2xl font-bold tracking-wide py-2">
        <h1>USD {amount}</h1>
      </div>
    </div>
  );
};

export default ProductStats;
