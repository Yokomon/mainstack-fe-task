"use client";

import { Wallet } from "../../types/Wallet";
import ProductStats from "./ProductStats";

interface ProductMenuProps {
  data: Wallet;
}

const ProductMenu: React.FC<ProductMenuProps> = ({ data }) => {
  const { ledger_balance, total_payout, total_revenue, pending_payout } = data;
  return (
    <div className="h-[35rem] w-[40rem] p-3 pt-16">
      <ProductStats title="Ledger Balance" amount={ledger_balance} />
      <ProductStats title="Total Payout" amount={total_payout} />
      <ProductStats title="Total Revenue" amount={total_revenue} />
      <ProductStats title="Pending Payout" amount={pending_payout} />
    </div>
  );
};

export default ProductMenu;
