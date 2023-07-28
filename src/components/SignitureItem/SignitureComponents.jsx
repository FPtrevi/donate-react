import React from "react";
import styles from "./Signiture.module.css";

export default function SignitureComponents({
  img,
  information,
  donationGroup,
}) {
  return (
    <div className={styles.item}>
      <img src={img} className={styles.img} />
      <p className={styles.information}>{information}</p>
      <p className={styles.group}>{donationGroup}</p>
    </div>
  );
}
