import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import ModalBody from "../ModalBody";

jest.mock("react-nice-dates", () => ({
  DateRangePicker: ({ children }: any) =>
    children({
      startDateInputProps: { value: "", onChange: () => {} },
      endDateInputProps: { value: "", onChange: () => {} },
      focus: null,
    }),
}));

jest.mock("../../../MultiSelectDropdown", () => ({
  __esModule: true,
  default: () => <div data-testid="mockSelectDropdown" />,
}));

jest.mock("../ModalButton", () => ({
  __esModule: true,
  default: ({ text }: any) => (
    <button data-testid={`modalButton-${text}`} onClick={() => {}}>
      {text}
    </button>
  ),
}));

describe("ModalBody Component", () => {
  it("renders without crashing", () => {
    render(<ModalBody />);
    expect(screen.getByTestId("modalbody")).toBeInTheDocument();
  });

  it("displays date range inputs", () => {
    render(<ModalBody />);
    expect(screen.getByPlaceholderText("Start date")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("End date")).toBeInTheDocument();
  });

  it("displays modal buttons", () => {
    render(<ModalBody />);
    expect(screen.getByTestId("modalButton-Today")).toBeInTheDocument();
    expect(screen.getByTestId("modalButton-Last 7 days")).toBeInTheDocument();
    expect(screen.getByTestId("modalButton-This month")).toBeInTheDocument();
    expect(screen.getByTestId("modalButton-Last 3 months")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<ModalBody />);
    expect(asFragment()).toMatchSnapshot();
  });
});
