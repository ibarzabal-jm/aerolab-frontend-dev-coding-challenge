import styles from "./HeaderSection.module.css";

export const HeaderSection = () => {
  return (
    <div className={styles.header + " text-brand"}>
      Tech <span className={styles.black}>Products</span>
    </div>
  );
};
