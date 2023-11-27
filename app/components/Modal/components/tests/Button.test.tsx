import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Button from "../Button";

describe("Modal Button Component", () => {
  it("renders the button with children", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("calls the onClick function when clicked", () => {
    const onClickMock = jest.fn();
    render(<Button onClick={onClickMock}>Click me</Button>);
    fireEvent.click(screen.getByText("Click me"));
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it("applies custom className if provided", () => {
    render(<Button className="custom-class">Click me</Button>);
    const button = screen.getByText("Click me");
    expect(button).toHaveClass("custom-class");
  });

  it("has default styles for basic rendering", () => {
    render(<Button>Click me</Button>);
    const button = screen.getByText("Click me");
    expect(button).toHaveClass(
      "flex",
      "shadow-sm",
      "text-sm",
      "items-center",
      "justify-center",
      "rounded-full",
      "px-12",
      "ring-1",
      "ring-gray-200",
      "w-full",
      "p-3"
    );
  });

  it("applies additional styles when className is provided", () => {
    render(<Button className="custom-class">Click me</Button>);
    const button = screen.getByText("Click me");
    expect(button).toHaveClass(
      "flex",
      "shadow-sm",
      "text-sm",
      "items-center",
      "justify-center",
      "rounded-full",
      "px-12",
      "ring-1",
      "ring-gray-200",
      "w-full",
      "p-3",
      "custom-class"
    );
  });

  it("renders with a custom onClick function", () => {
    const onClickMock = jest.fn();
    render(<Button onClick={onClickMock}>Click me</Button>);
    fireEvent.click(screen.getByText("Click me"));
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it("renders with custom children", () => {
    render(<Button>🚀 Launch</Button>);
    expect(screen.getByText("🚀 Launch")).toBeInTheDocument();
  });

  it("renders without crashing", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<Button>Click me</Button>);
    expect(asFragment()).toMatchSnapshot();
  });
});
