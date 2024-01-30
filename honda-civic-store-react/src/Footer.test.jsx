import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import Footer from "./Footer";
import { BrowserRouter } from "react-router-dom";

describe("Footer Component", () => {
  it("Renders", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );
    let element = screen.getByText(/Copyright 2024/i);
    expect(element).toBeInTheDocument();
  });
});
