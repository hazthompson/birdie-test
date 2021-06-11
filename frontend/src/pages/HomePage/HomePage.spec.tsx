import React from "react";
import { render, screen } from "@testing-library/react";
import HomePage from "./HomePage";

it("renders input for CareRecipient ID", async () => {
  render(<HomePage />);
  const input = await screen.findByLabelText("Care Recipient's ID:");
  expect(input).toBeInTheDocument();
});
