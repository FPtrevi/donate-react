import React from "react";
import styles from "./ShopSide.module.css";

export default function ShopSide({ onFilterChange }) {
  const product = [
    "전체상품",
    "의류",
    "가방",
    "디지털/테크",
    "주얼리",
    "생활",
    "세트",
    "기타",
  ];
  const group = ["굿네이버스", "세이브칠드런", "크리스마스씰", "비마켓"];

  return (
    <div className={styles.container}>
      <h1>상품</h1>
      <ul className={styles.ul}>
        {product.map((value, index) => (
          <li
            className={styles.li}
            key={index}
            onClick={() => onFilterChange(value)}
          >
            {value}
          </li>
        ))}
      </ul>
      <br />
      <h1>기부기관</h1>
      <ul className={styles.ul}>
        {group.map((value, index) => (
          <li
            key={index}
            onClick={() => onFilterChange(value)}
            className={styles.li}
          >
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
}
