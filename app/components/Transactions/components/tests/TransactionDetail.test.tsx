import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import TransactionDetail from "../TransactionDetail";

describe("TransactionDetail Component", () => {
  const mockTransactionData = {
    title: "Test Transaction",
    type: "deposit",
    amount: 1000,
    date: "2023-01-01",
    subTitle: "successful",
  };

  it("renders without crashing", () => {
    render(<TransactionDetail {...mockTransactionData} />);
    expect(screen.getByText("Test Transaction")).toBeInTheDocument();
  });

  it("displays the correct transaction type icon", () => {
    render(<TransactionDetail {...mockTransactionData} />);
    expect(screen.getByRole("img")).toBeInTheDocument();
  });

  it("displays the correct transaction title", () => {
    render(<TransactionDetail {...mockTransactionData} />);
    expect(screen.getByText("Test Transaction")).toBeInTheDocument();
  });

  it("displays the correct transaction amount", () => {
    render(<TransactionDetail {...mockTransactionData} />);
    expect(screen.getByText("USD 1000")).toBeInTheDocument();
  });

  it("displays the correct transaction date", () => {
    render(<TransactionDetail {...mockTransactionData} />);
    expect(screen.getByText("2023-01-01")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { asFragment } = render(
      <TransactionDetail {...mockTransactionData} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
