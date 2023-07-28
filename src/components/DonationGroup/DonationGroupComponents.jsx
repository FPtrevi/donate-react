import React from "react";
import styles from "./DonationGroup.module.css";

export default function DonationGroupComponents({ img, name, href, text }) {
  return (
    <div className={styles.item}>
      <img src={img} className={styles.img} />
      <h4 className={styles.name}>{name}</h4>
      <a href={href} className={styles.link}>
        방문하기
      </a>
      <h5 className={styles.text}>{text}</h5>
    </div>
  );
}
