import axios from "axios";

import { Wallet } from "../types/Wallet";

export const fetchWalletDetails = async () => {
  const response = await axios.get<Wallet>("/wallet");

  return response.data;
};
