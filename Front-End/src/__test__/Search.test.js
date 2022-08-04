import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Search from "../Search/Search";

const MockComponent = () => {
  return (
    <BrowserRouter>
      <Search />
    </BrowserRouter>
  );
};
test("should contain 2 button", () => {
  render(<MockComponent />);
  const roleContain = screen.getAllByRole("button");
  expect(roleContain).toHaveLength(1);
});