"use client";

import { Button } from "@/components/Button/Button";
import { redeemProduct } from "@/lib/actions";
import React from "react";
import { useTransition } from "react";
import AerolabIcon from "@/assets/icons/aeropay-3.svg";
import styles from "./BuyButton.module.css";
import { useToast } from "@/hooks/useToast";

interface BuyButtonProps {
  userPoints: number;
  productCost: number;
  productId: string;
  productName: string;
}

export const BuyButton = ({
  userPoints,
  productCost,
  productId,
  productName,
}: BuyButtonProps) => {
  const { showToast } = useToast();
  const [isPending, startTransition] = useTransition();

  const handleClick = async () => {
    startTransition(async () => {
      try {
        await redeemProduct(productId);
        showToast({
          type: "success",
          title: productName,
          message: "redeemed successfully",
        });
      } catch (error) {
        showToast({
          type: "error",
          message: "There was a problem with the transaction",
        });
      }
    });
  };

  if (userPoints >= productCost) {
    return (
      <Button
        isPending={isPending}
        onClick={handleClick}
        size="lg"
        className={styles.button}
      >
        {isPending ? (
          "Processing..."
        ) : (
          <>
            Redeem for <AerolabIcon className={styles.icon} /> {productCost}
          </>
        )}
      </Button>
    );
  }

  return (
    <Button
      isPending={isPending}
      onClick={handleClick}
      disabled={true}
      size="lg"
      className={styles.button}
    >
      You need <AerolabIcon className={styles.icon} />
      {productCost - userPoints}
    </Button>
  );
};
