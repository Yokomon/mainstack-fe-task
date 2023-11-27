import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import UserActions from "..";

const mockUserData = {
  first_name: "John",
  last_name: "Doe",
  email: "john.doe@example.com",
};

describe("UserActions Component", () => {
  it("renders without crashing", () => {
    render(<UserActions data={mockUserData} />);
    expect(screen.getByText("JD")).toBeInTheDocument(); // Initials based on first_name and last_name
  });

  it("opens the menu when the menu button is clicked", () => {
    render(<UserActions data={mockUserData} />);
    const menuButton = screen.getByLabelText("user-menu");
    fireEvent.click(menuButton);
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("john.doe@example.com")).toBeInTheDocument();
  });

  it("closes the menu when clicking outside of it", () => {
    render(<UserActions data={mockUserData} />);
    const menuButton = screen.getByLabelText("user-menu");
    fireEvent.click(menuButton);
    const outsideElement = screen.getByText("Settings");
    fireEvent.click(outsideElement);
    expect(screen.queryByText("John Doe")).not.toBeInTheDocument();
    expect(screen.queryByText("john.doe@example.com")).not.toBeInTheDocument();
  });

  it("fires the correct action when a menu item is clicked", () => {
    render(<UserActions data={mockUserData} />);
    const menuButton = screen.getByLabelText("user-menu");
    fireEvent.click(menuButton);
    const signOutButton = screen.getByText("Sign out");
    fireEvent.click(signOutButton);
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<UserActions data={mockUserData} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
