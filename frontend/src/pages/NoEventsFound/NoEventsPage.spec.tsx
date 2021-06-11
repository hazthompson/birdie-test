import React from "react";
import { render, screen } from "@testing-library/react";
import NoEventsFound from "./NoEventsFound";

it("renders warning message: no events for this ID", async () => {
  render(<NoEventsFound />);
  const h3 = screen.getByText("No Events found for this ID");
  expect(h3).toBeInTheDocument();
});

it("renders button to redirect back to homepage", async () => {
  render(<NoEventsFound />);
  const button = screen.getByText("Return to homepage");
  expect(button).toBeInTheDocument();
});
