import React from "react";
import { render, screen } from "@testing-library/react";
import LoginPage from ".";
import { BrowserRouter } from "react-router-dom";

describe(LoginPage, () => {
  it("render elements from loginPage", () => {
    render(
      <BrowserRouter>
        <LoginPage />
      </BrowserRouter>
    );
    expect(screen.getAllByText("Log in").length).toBeGreaterThanOrEqual(1);
    screen.getByTestId("password-input");
    screen.getByTestId("email-input");
  });
});
