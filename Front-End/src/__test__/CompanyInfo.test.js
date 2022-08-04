import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import CompanyInfo from "../CompanyInfo/CompanyInfo";

const MockComponent = () => {
  return (
    <BrowserRouter>
      <CompanyInfo />
    </BrowserRouter>
  );
};
test("It Should Show CompanyInfo text", () => {
  render(<MockComponent />);
  const roleContain = screen.getByText("JobHunter Private Limited");
  expect(roleContain).toBeVisible();
});