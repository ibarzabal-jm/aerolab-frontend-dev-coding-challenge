import Link from "next/link";
import ChevronIcon from "@/assets/icons/chevron-default.svg";
import styles from "./PaginationArrow.module.css";

interface PaginationArrowProps {
  direction: "left" | "right";
  href?: string;
  isDisabled?: boolean;
}

export const PaginationArrow: React.FC<PaginationArrowProps> = ({
  direction,
  href,
  isDisabled = false,
}) => {
  const content = (
    <ChevronIcon
      className={`${styles.icon} ${direction === "left" ? styles.left : ""}`}
    />
  );

  if (isDisabled) {
    return (
      <div className={`${styles.paginationArrow} ${styles.disabled}`}>
        {content}
      </div>
    );
  }

  return (
    <Link
      href={href || "#"}
      aria-label={direction === "left" ? "Previous page" : "Next page"}
      scroll={false}
      className={styles.paginationArrow}
    >
      {content}
    </Link>
  );
};
