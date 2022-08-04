import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Register from "../Register/Register";

const MockComponent = () => {
  return (
    <BrowserRouter>
      <Register />
    </BrowserRouter>
  );
};
test("It Should Show Register text", () => {
  render(<MockComponent />);
  const roleContain = screen.getByText("Register");
  expect(roleContain).toBeVisible();
});