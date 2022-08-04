import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import UserInfo from "../UserInfo/UserInfo";

const MockComponent = () => {
  return (
    <BrowserRouter>
      <UserInfo />
    </BrowserRouter>
  );
};
test("should contain 2 button", () => {
  render(<MockComponent />);
  const roleContain = screen.getAllByRole("button");
  expect(roleContain).toHaveLength(2);
});