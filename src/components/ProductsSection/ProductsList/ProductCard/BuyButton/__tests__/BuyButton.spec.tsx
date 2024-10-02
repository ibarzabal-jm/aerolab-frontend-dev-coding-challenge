import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { BuyButton } from "../BuyButton";
import { redeemProduct } from "@/lib/actions";
import { useToast } from "@/hooks/useToast";

jest.mock("@/lib/actions");
jest.mock("@/hooks/useToast");
const mockedUseToast = jest.mocked(useToast);

const mockedRedeemProduct = jest.mocked(redeemProduct);

describe("BuyButton Component", () => {
  const mockShowToast = jest.fn();

  beforeEach(() => {
    mockedUseToast.mockReturnValue({
      showToast: mockShowToast,
    });
  });

  it('renders "Redeem for" button when user has enough points', () => {
    render(
      <BuyButton
        userPoints={1000}
        productCost={500}
        productId="123"
        productName="Test Product"
      />
    );

    expect(screen.getByText(/Redeem for/i)).toBeInTheDocument();

    expect(screen.getByText(/500/i)).toBeInTheDocument();

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();

    expect(button).toBeEnabled();
  });

  it('renders "You need" button when user does not have enough points', () => {
    render(
      <BuyButton
        userPoints={300}
        productCost={500}
        productId="123"
        productName="Test Product"
      />
    );

    expect(screen.getByText(/You need/i)).toBeInTheDocument();

    expect(screen.getByText(/200/i)).toBeInTheDocument();

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();

    expect(button).toBeDisabled();
  });

  it("calls redeemProduct and shows success toast on successful redemption", async () => {
    const user = userEvent.setup();
    mockedRedeemProduct.mockResolvedValue();

    render(
      <BuyButton
        userPoints={1000}
        productCost={500}
        productId="123"
        productName="Test Product"
      />
    );

    await user.click(screen.getByText(/Redeem for/i));

    await waitFor(() => {
      expect(redeemProduct).toHaveBeenCalledWith("123");
      expect(mockShowToast).toHaveBeenCalledWith({
        type: "success",
        title: "Test Product",
        message: "redeemed successfully",
      });
    });
  });

  it("show error toast on failed redemption", async () => {
    const user = userEvent.setup();
    mockedRedeemProduct.mockRejectedValue(new Error("Failed to redeem"));

    render(
      <BuyButton
        userPoints={1000}
        productCost={500}
        productId="123"
        productName="Test Product"
      />
    );

    const button = screen.getByRole("button");

    await user.click(button);
    await waitFor(() => {
      expect(redeemProduct).toHaveBeenCalledWith("123");
      expect(mockShowToast).toHaveBeenCalledWith({
        type: "error",
        message: "There was a problem with the transaction",
      });
    });
  });
});
