import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Login from "../Login/Login";

const MockComponent = () => {
  return (
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  );
};
test("should contain 2 button", () => {
  render(<MockComponent />);
  const roleContain = screen.getAllByRole("button");
  expect(roleContain).toHaveLength(2);
});
