import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import About from "../About/About";

const MockComponent = () => {
  return (
    <BrowserRouter>
      <About />
    </BrowserRouter>
  );
};
test("should contain Text", () => {
  render(<MockComponent />);
  const roleContain = screen.getByText("Top Companies For You");
  expect(roleContain).toBeInTheDocument();
});