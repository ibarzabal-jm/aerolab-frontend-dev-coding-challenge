"use-client";
import { User } from "@/services/types";
import { forwardRef, useState, useTransition } from "react";
import { AeroPayCard } from "./AeroPayCard/AeroPayCard";
import AeroPayIcon from "@/assets/icons/aeropay-3.svg";

import styles from "./AeroPay.module.css";
import { Button } from "@/components/Button/Button";

import { addPoints } from "@/app/actions";

interface AeroPayProps {
  user: User;
  isOpen: boolean;
}

export const AeroPay = forwardRef<HTMLDivElement, AeroPayProps>(
  ({ user, isOpen }: AeroPayProps, ref) => {
    const [selectedAmount, setSelectedAmount] = useState<1000 | 5000 | 7500>(
      1000
    );
    let [isPending, startTransition] = useTransition();

    const handleAddPoints = async () => {
      startTransition(() => {
        addPoints(selectedAmount);
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

          <div className={styles.amountOptions}>
            <Button size="sm" onClick={() => setSelectedAmount(1000)}>
              1000
            </Button>
            <Button size="sm" onClick={() => setSelectedAmount(5000)}>
              5000
            </Button>
            <Button size="sm" onClick={() => setSelectedAmount(7500)}>
              7500
            </Button>
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
