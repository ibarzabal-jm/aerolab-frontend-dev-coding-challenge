import AeroPayIcon from "@/assets/icons/aeropay-2.svg";

import { User } from "@/services/types";
import { formatDate } from "@/utils/formatDate";

import styles from "./AeroPayCard.module.css";

interface AeroPayCardProps {
  user: User;
}

export const AeroPayCard = ({ user }: AeroPayCardProps) => {
  return (
    <div className={styles.aeroCard}>
      <div className={styles.aeroCardHeader}>
        <p>Aerocard</p>
        <AeroPayIcon className={styles.icon} />
      </div>
      <div className={styles.aeroCardFooter}>
        <p className={styles.footerText}>{user.name}</p>
        <p className={styles.footerText}>{formatDate(user.createDate)}</p>
      </div>
    </div>
  );
};
