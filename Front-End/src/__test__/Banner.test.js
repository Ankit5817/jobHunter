import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Banner from "../Banner/Banner";

const MockComponent = () => {
  return (
    <BrowserRouter>
      <Banner/>
    </BrowserRouter>
  );
};
test("It Should Show Banner text", () => {
  render(<MockComponent />);
  const roleContain = screen.getAllByRole("img");
  expect(roleContain).toHaveLength(2);
});