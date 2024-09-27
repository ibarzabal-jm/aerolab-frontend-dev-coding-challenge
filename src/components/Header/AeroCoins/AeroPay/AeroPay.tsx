"use-client";
import { PossibleAmountOfPoints, User } from "@/services/types";
import { forwardRef, useState, useTransition } from "react";
import { AeroPayCard } from "./AeroPayCard/AeroPayCard";
import AeroPayIcon from "@/assets/icons/aeropay-3.svg";

import styles from "./AeroPay.module.css";
import { Button } from "@/components/Button/Button";

import { addPoints } from "@/lib/actions";
import { RadioButton } from "@/components/RadioButton/RadioButton";
import { useToast } from "@/hooks/useToast";
interface AeroPayProps {
  user: User;
  isOpen: boolean;
}

export const AeroPay = forwardRef<HTMLDivElement, AeroPayProps>(
  ({ user, isOpen }: AeroPayProps, ref) => {
    const [isPending, startTransition] = useTransition();
    const { showToast } = useToast();

    const [selectedAmount, setSelectedAmount] =
      useState<PossibleAmountOfPoints>(PossibleAmountOfPoints.ONE_THOUSAND);

    const handleChangeRadioButton = (
      event: React.ChangeEvent<HTMLInputElement>
    ) => {
      const number = event.target.value as PossibleAmountOfPoints;
      setSelectedAmount(number);
    };

    const handleAddPoints = async () => {
      startTransition(async () => {
        try {
          await addPoints(selectedAmount);
          showToast({
            type: "success",
            title: "Points",
            message: "added successfully. Enjoy your flight!",
          });
        } catch (error) {
          showToast({
            type: "error",
            message: "There was a problem with the transaction",
          });
        }
      });
    };

    return (
      <div
        ref={ref}
        className={`${styles.aeroCoinsDropdown} ${
          isOpen ? styles.open : styles.closed
        }`}
      >
        <div className={styles.aeroDropdownHeader}>
          <h2 className={styles.aeroDropdownTitle}>Add Balance</h2>
        </div>
        <div className={styles.aeroDropdownContainer}>
          <AeroPayCard user={user} />

          <div
            className={styles.amountOptions}
            onChange={handleChangeRadioButton}
          >
            {Object.values(PossibleAmountOfPoints).map((amount) => (
              <RadioButton
                key={amount}
                name={amount}
                value={amount}
                checked={selectedAmount === amount}
                size="sm"
                onChange={handleChangeRadioButton}
              >
                {amount}
              </RadioButton>
            ))}
          </div>

          <Button
            isPending={isPending}
            className={styles.addPointsButton}
            onClick={handleAddPoints}
          >
            {isPending ? (
              "Processing..."
            ) : (
              <>
                <AeroPayIcon className={styles.iconPointButton} />
                Add Points
              </>
            )}
          </Button>
        </div>
      </div>
    );
  }
);

AeroPay.displayName = "AeroPay";
