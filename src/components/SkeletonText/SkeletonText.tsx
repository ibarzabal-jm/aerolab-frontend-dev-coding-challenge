import styles from "./SkeletonText.module.css";

interface SkeletonTextProps {
  width?: string;
  text?: "sm" | "md";
}

export const SkeletonText = ({
  width = "54px",
  text = "md",
}: SkeletonTextProps) => {
  return (
    <div
      className={`${styles.skeletonContainer} ${
        text === "md" ? styles.md : styles.sm
      }`}
    >
      <div className={styles.skeletonText} style={{ width }}>
        <span>Loading...</span>
      </div>
    </div>
  );
};
