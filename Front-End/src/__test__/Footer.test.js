import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Footer from "../Footer/Footer";

const MockComponent = () => {
  return (
    <BrowserRouter>
      <Footer />
    </BrowserRouter>
  );
};
test("It Should Show Footer text", () => {
  render(<MockComponent />);
  const roleContain = screen.getByText("CopyRight @ 2022");
  expect(roleContain).toBeVisible();
});