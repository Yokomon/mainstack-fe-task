import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import ProductStats from "../ProductStats";

const mockProductStatsData = {
  title: "Total Revenue",
  amount: 1500,
};

describe("ProductStats Component", () => {
  it("renders without crashing", () => {
    render(
      <ProductStats
        title={mockProductStatsData.title}
        amount={mockProductStatsData.amount}
      />
    );
    expect(screen.getByText("Total Revenue")).toBeInTheDocument();
  });

  it("displays the correct title", () => {
    render(
      <ProductStats
        title={mockProductStatsData.title}
        amount={mockProductStatsData.amount}
      />
    );
    expect(screen.getByText("Total Revenue")).toBeInTheDocument();
  });

  it("displays the correct amount", () => {
    render(
      <ProductStats
        title={mockProductStatsData.title}
        amount={mockProductStatsData.amount}
      />
    );
    expect(screen.getByText("USD 1500")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { asFragment } = render(
      <ProductStats
        title={mockProductStatsData.title}
        amount={mockProductStatsData.amount}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
