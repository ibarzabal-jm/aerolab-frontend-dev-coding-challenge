import styles from "./Button.module.css";
interface PrimarButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  isPending?: boolean;
  size?: "sm" | "md" | "lg";
}

export const Button = ({
  size = "md",
  className,
  isPending,
  children,
  ...props
}: PrimarButtonProps) => {
  return (
    <button
      className={`${className ? className : ""} ${styles.primary} ${
        styles[size]
      } ${isPending ? styles.isPending : ""}`}
      {...props}
    >
      {children}
    </button>
  );
};
