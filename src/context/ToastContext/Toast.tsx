"use client";

import React, { useEffect, useState } from "react";

import ErrorIcon from "@/assets/icons/system-error.svg";
import SuccessIcon from "@/assets/icons/system-success.svg";
import CrossIcon from "@/assets/icons/cross-default.svg";

import styles from "./styles/Toast.module.css";

export type ToastType = "success" | "error";

interface ToastProps {
  id: string;
  type: ToastType;
  title?: string;
  message: string;
  onClose: (id: string) => void;
}

export const Toast = ({ id, type, message, onClose, title }: ToastProps) => {
  const [isExiting, setIsExiting] = useState(false);

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(() => onClose(id), 300);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      handleClose();
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`${styles.toast} ${styles[type]} ${
        isExiting ? styles.exit : ""
      }`}
    >
      {type === "success" ? (
        <SuccessIcon className={styles.icon} />
      ) : (
        <ErrorIcon className={styles.icon} />
      )}

      <div className={styles.content}>
        <p>
          {title && <span className={styles.title}>{title} </span>}
          {message}
        </p>
      </div>
      <button onClick={handleClose} className={styles.closeButton}>
        <CrossIcon className={styles.closeButtonIcon} />
      </button>
    </div>
  );
};
