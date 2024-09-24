"use client";

import { useRef, useState } from "react";
import styles from "./AeroCoins.module.css";

import { AeroCoinsButton } from "./AeroCoinsButton/AeroCoinsButton";
import { User } from "@/services/types";
import { AeroPay } from "./AeroPay/AeroPay";
import { useOnClickOutside } from "@/hooks/useOutsideClick";

interface AeroCoinsClientProps {
  user: User;
}

export default function AeroCoinsClient({ user }: AeroCoinsClientProps) {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);
  const buttonRef = useRef(null);

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  useOnClickOutside(
    [modalRef, buttonRef],
    () => {
      if (isOpen) {
        handleClose();
      }
    },
    "mousedown"
  );

  return (
    <div className={styles.aeroCoinsContainer}>
      <AeroCoinsButton
        points={user.points}
        ref={buttonRef}
        onClick={toggleOpen}
        isOpen={isOpen}
      />

      <AeroPay user={user} ref={modalRef} isOpen={isOpen} />
    </div>
  );
}
