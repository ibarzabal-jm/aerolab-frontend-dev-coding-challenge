import React from "react";
import styles from "./CardsContainer.module.css";
import { Card } from "./Card/Card";

import Icon1 from "@/assets/icons/walkthrough-1.svg";
import Icon2 from "@/assets/icons/walkthrough-2.svg";
import Icon3 from "@/assets/icons/walkthrough-3.svg";

const cardsData = [
  {
    desktopImage: "/walkthroug-1-desktop.png",
    mobileImage: "/walkthroug-1-responsive.png",
    title: "1—browse",
    description: "Browse our tech catalog with more than 20 top tech products",
    icon: Icon1,
  },
  {
    desktopImage: "/walkthroug-2-desktop.png",
    mobileImage: "/walkthroug-2-responsive.png",
    title: "2—choose",
    description: "Exchange your hard-earned AeroPoints for a cool tech item",
    icon: Icon2,
  },
  {
    desktopImage: "/walkthroug-3-desktop.png",
    mobileImage: "/walkthroug-3-responsive.png",
    title: "3—enjoy",
    description: "All done We’ll take care of delivery of your tech item!",
    icon: Icon3,
  },
];

export const CardsContainer = () => {
  return (
    <div className={styles.cardsContainer}>
      {cardsData.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
};
