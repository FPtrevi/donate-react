import React from "react";
import styles from "./Banner.module.css";

export default function Banner() {
  return (
    <div className={styles.container} id="introduce">
      <div className={styles.text}>
        <h1 className={styles.h1}>GIVE2U</h1>
        <h2 className={styles.h2}>가치 있는 소비를 연결합니다.</h2>
        <h3 className={styles.h3}>희망을 잇는 GIVE2U의 두가지 선물</h3>
        <h4 className={styles.h4}>필요한 상품에 가치를 더했습니다.</h4>
        <h4 className={styles.h4}>
          다양한 기부제안 상품을 한 곳에 모아 여러분의
        </h4>
        <h4 className={styles.h4}>
          소비를 더욱 가치있게 만들어 드리는 "GIVE2U"입니다.
        </h4>
        <button className={styles.button}>▶️ 더 많은 상품 구경하기</button>
      </div>
    </div>
  );
}
