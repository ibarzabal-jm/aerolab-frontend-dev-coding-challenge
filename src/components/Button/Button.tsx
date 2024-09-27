import styles from "./Button.module.css";
interface PrimarButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  isPending?: boolean;
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
}

export const Button = ({
  size = "md",
  className,
  isPending,
  disabled,
  children,
  ...props
}: PrimarButtonProps) => {
  return (
    <button
      className={`${className ? className : ""} ${styles.primary} ${
        styles[size]
      } ${isPending ? styles.isPending : ""}`}
      disabled={disabled || isPending}
      {...props}
    >
      {children}
    </button>
  );
};
