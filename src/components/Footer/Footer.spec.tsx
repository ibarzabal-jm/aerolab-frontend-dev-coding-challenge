import { render, screen } from "@testing-library/react";

import Footer from "./Footer";

describe("Footer", () => {
  it("Should render correctly", () => {
    render(<Footer />);

    const urlValid =
      "https://github.com/ibarzabal-jm/aerolab-frontend-dev-coding-challenge";

    const link = screen.getByRole("link");

    expect(link).toBeInTheDocument();

    expect(link).toHaveAttribute("href", urlValid);
  });
});
