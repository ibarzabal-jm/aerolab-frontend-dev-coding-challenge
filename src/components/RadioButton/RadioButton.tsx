import { PropsWithChildren } from "react";
import styles from "./RadioButton.module.css";

interface RadioButtonProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "type"> {
  size?: "sm" | "md";
}

export const RadioButton = ({
  size = "md",
  className,
  children,
  ...props
}: PropsWithChildren<RadioButtonProps>) => {
  return (
    <div className={styles.radioContainer}>
      <input
        type="radio"
        className={styles.radioInput}
        id={props.id || props.name}
        {...props}
      />
      <label
        htmlFor={props.id || props.name}
        className={`${styles.radioLabel} ${styles[size]} ${className || ""}`}
      >
        <span className={styles.text}>{children}</span>
      </label>
    </div>
  );
};
