import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", async () => {
  render(<App />);
  const input = await screen.findByLabelText("Care Recipient's ID:");
  expect(input).toBeInTheDocument();
});
