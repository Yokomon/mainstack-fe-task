export interface Transaction<T> {
  data: Array<{
    amount: number;
    metadata?: {
      name: T;
      type: T;
      email: T;
      quantity: number;
      country: T;
      product_name?: T;
    };
    status: "successful" | "pending" | T;
    type: "deposit" | "withdrawal";
    date: T;
    payment_reference?: T;
  }>;
}
