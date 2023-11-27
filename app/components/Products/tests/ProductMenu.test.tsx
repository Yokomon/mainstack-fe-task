import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import ProductMenu from "../ProductMenu";

const mockWalletData = {
  ledger_balance: 1000,
  total_payout: 500,
  total_revenue: 1500,
  pending_payout: 200,
  balance: 0,
};

describe("ProductMenu Component", () => {
  it("renders without crashing", () => {
    render(<ProductMenu data={mockWalletData} />);
    expect(screen.getByText("Ledger Balance")).toBeInTheDocument();
    expect(screen.getByText("Total Payout")).toBeInTheDocument();
    expect(screen.getByText("Total Revenue")).toBeInTheDocument();
    expect(screen.getByText("Pending Payout")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<ProductMenu data={mockWalletData} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
