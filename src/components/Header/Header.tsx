import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.logo}>Aerolab</div>
        <div className={styles.points}>
          <p>Points: 100</p>
        </div>
      </div>
    </header>
  );
}
