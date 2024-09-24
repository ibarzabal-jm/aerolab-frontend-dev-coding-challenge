import styles from "./AeroCoinsButton.module.css";
import AeroPayIcon from "@/assets/icons/aeropay-1.svg";
import ChevronIcon from "@/assets/icons/chevron-default.svg";
import { SkeletonText } from "@/components/SkeletonText/SkeletonText";
import { formatNumber } from "@/utils/formatNumber";
import { forwardRef } from "react";

interface AeroCoinsButtonProps {
  points: number;
  onClick: () => void;
  isOpen: boolean;
}

export const AeroCoinsButton = forwardRef<
  HTMLButtonElement,
  AeroCoinsButtonProps
>(({ points, onClick, isOpen }: AeroCoinsButtonProps, ref) => {
  return (
    <button onClick={onClick} ref={ref} className={styles.aeroCoinsButton}>
      <AeroPayIcon className={styles.aeroCoinsIcon} />
      <span className={`${styles.aeroCoinsNumber} text-brand`}>
        {formatNumber(points)}
      </span>
      <ChevronIcon
        className={`${styles.chevronIcon} ${isOpen ? styles.chevronOpen : ""}`}
      />
    </button>
  );
});

AeroCoinsButton.displayName = "AeroCoinsButton";

export const AeroCoinsButtonSkeleton = () => {
  return (
    <button className={`${styles.aeroCoinsButton} ${styles.skeleton}`}>
      <AeroPayIcon className={styles.aeroCoinsIcon} />
      <SkeletonText />
      <ChevronIcon className={styles.chevronIcon} />
    </button>
  );
};
