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
  const content =
    direction === "left" ? (
      <ChevronIcon className={styles.left} />
    ) : (
      <ChevronIcon className={styles.right} />
    );

  if (isDisabled) {
    return (
      <div className={`${styles.paginationArrow} ${styles.disabled}`}>
        {content}
      </div>
    );
  }

  return (
    <Link href={href || "#"} className={styles.paginationArrow}>
      {content}
    </Link>
  );
};
