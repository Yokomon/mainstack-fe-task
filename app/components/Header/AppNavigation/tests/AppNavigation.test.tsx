import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import AppNavigation from "..";

describe("AppNavigation Component", () => {
  it("renders without crashing", () => {
    render(<AppNavigation />);
    expect(screen.getByText("Revenue")).toBeInTheDocument();
  });

  it("renders each navigation links with the correct text", () => {
    render(<AppNavigation />);
    const links = screen.getAllByRole("link");
    const linkText = links.map((button) => button.textContent);
    expect(linkText).toEqual(["Home", "Analytics", "Revenue", "CRM"]);
  });

  it('opens the Apps dropdown when the "Apps" button is clicked', () => {
    render(<AppNavigation />);
    const appsButton = screen.getByText("Apps");
    fireEvent.click(appsButton);
    expect(screen.getByRole("menu")).toBeInTheDocument();
  });
  it("fires the correct action when an app in the dropdown is clicked", () => {
    render(<AppNavigation />);
    const appsLink = screen.getByText("Apps");
    fireEvent.click(appsLink);
    const modalText = screen.getByTestId("bio-link");
    expect(modalText).toBeInTheDocument();
  });

  it("closes the dropdown when clicking outside of it", () => {
    render(<AppNavigation />);
    const appsButton = screen.getByText("Apps");
    fireEvent.click(appsButton);
    const outsideElement = screen.getByTestId("bio-link");
    fireEvent.click(appsButton);
    expect(outsideElement).not.toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<AppNavigation />);
    expect(asFragment()).toMatchSnapshot();
  });
});
