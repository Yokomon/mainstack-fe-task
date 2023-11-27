import axios from "axios";

import { Transaction } from "../types/Transaction";

export const fetchTransactionDetails = async () => {
  const response = await axios.get<Transaction<string>["data"]>(
    "/transactions"
  );

  return response.data;
};
