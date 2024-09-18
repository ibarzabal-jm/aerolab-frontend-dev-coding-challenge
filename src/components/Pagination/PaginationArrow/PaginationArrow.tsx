import Link from "next/link";
import styles from "./PaginationArrow.module.css";

interface PaginationArrowProps {
  direction: "left" | "right";
  href?: string;
  disabled: boolean;
}

export const PaginationArrow: React.FC<PaginationArrowProps> = ({
  direction,
  href,
  disabled,
}) => {
  const content = direction === "left" ? "<" : ">";

  if (disabled) {
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
