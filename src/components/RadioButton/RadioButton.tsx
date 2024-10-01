import styles from "./RadioButton.module.css";

interface RadioButtonProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "type"> {
  size?: "sm" | "md";
  label: string;
}

export const RadioButton = ({
  size = "md",
  className,
  label,
  ...props
}: RadioButtonProps) => {
  const id = props.id || `radio-${props.name}-${props.value}`;

  return (
    <div className={styles.radioContainer}>
      <input type="radio" className={styles.radioInput} id={id} {...props} />
      <label
        htmlFor={id}
        className={`${styles.radioLabel} ${styles[size]} ${className || ""}`}
      >
        <span className={styles.text}>{label}</span>
      </label>
    </div>
  );
};
