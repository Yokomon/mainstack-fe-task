import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import ModalButton from "../ModalButton";

describe("ModalButton Component", () => {
  it("renders without crashing", () => {
    render(<ModalButton text="Test Button" />);
    expect(screen.getByText("Test Button")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<ModalButton text="Test Button" />);
    expect(asFragment()).toMatchSnapshot();
  });
});
