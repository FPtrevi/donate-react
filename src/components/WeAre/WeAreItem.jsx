import React from "react";
import styles from "./WeAre.module.css";

export default function WeAreItem({ icon, title, text }) {
  return (
    <div className={styles.item}>
      <p className={styles.icon}>{icon}</p>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.text}>{text}</p>
    </div>
  );
}
