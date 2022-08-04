import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Profile from "../Profile/Profile";

const MockComponent = () => {
  return (
    <BrowserRouter>
      <Profile />
    </BrowserRouter>
  );
};
test("It Should Show Profile text", () => {
  render(<MockComponent />);
  const roleContain = screen.getByPlaceholderText("First Name");
  expect(roleContain).toBeInTheDocument();
});