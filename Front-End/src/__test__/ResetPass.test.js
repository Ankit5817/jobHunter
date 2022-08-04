import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ResetPass from "../ResetPass/ResetPass";

const MockComponent = () => {
  return (
    <BrowserRouter>
      <ResetPass />
    </BrowserRouter>
  );
};
test("should contain 1 button", () => {
  render(<MockComponent />);
  const roleContain = screen.getAllByRole("button");
  expect(roleContain).toHaveLength(1);
});