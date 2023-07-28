import React from "react";
import styles from "./Items.module.css";

export default function ItemComponents({
  http,
  img,
  name,
  price,
  sponsor,
  sort,
  website,
}) {
  return (
    <a href={http} className={styles.a}>
      <div className={styles.itemContent}>
        <img src={img} className={styles.img} />
        <div className={styles.name}>제품명 : {name}</div>
        <div className={styles.price}>가격 : {price}</div>
        <div className={styles.sponsor}>후원지 : {sponsor}</div>
        <div className={styles.visit}>방문하기</div>
      </div>
    </a>
  );
}
