"use client";

import { Button } from "@/components/Button/Button";
import { redeemProduct } from "@/lib/actions";
import React from "react";
import { useTransition } from "react";
import AerolabIcon from "@/assets/icons/aeropay-3.svg";
import styles from "./BuyButton.module.css";

interface BuyButtonProps {
  userPoints: number;
  productCost: number;
  productId: string;
}

export const BuyButton = ({
  userPoints,
  productCost,
  productId,
}: BuyButtonProps) => {
  const [isPending, startTransition] = useTransition();

  const handleClick = async () => {
    startTransition(async () => {
      await redeemProduct(productId);
    });
  };

  return (
    <Button
      isPending={isPending}
      onClick={handleClick}
      disabled={userPoints < productCost}
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
};
