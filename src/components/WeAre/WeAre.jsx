import React from "react";
import { FaKey, FaRegHandshake } from "react-icons/fa";
import { AiOutlineUnorderedList } from "react-icons/ai";
import WeAreItem from "./WeAreItem";
import styles from "./WeAre.module.css";

export default function WeAre() {
  return (
    <div className={styles.container} id="weare">
      <h1 className={styles.h1}>We Are</h1>
      <div className={styles.div}>
        <WeAreItem
          icon={<FaKey />}
          title="ACCESSIBILITY(접근성)"
          text="처음 구매로 기부를 원하는 후원자님들께 어느 기부기관에서 스토어를 운영하고 있는지 모를 때 이용하기 좋은 사이트입니다."
        />
        <WeAreItem
          icon={<AiOutlineUnorderedList />}
          title="DIVERSITY(다양성)"
          text="세이브더칠드런, 대한결핵협회, 굿네이버스 등 국내외 다양한 비영리단체에 선택적인 기부가 가능합니다"
        />
        <WeAreItem
          icon={<FaRegHandshake />}
          title="ALTERITE(이타성)"
          text="처음 시작은 간단한 물건 구매로 시작해 더 많은 기부를 위한 선택을 할 수 있습니다. 구매를 통한 기부를 시작합시다."
        />
      </div>
    </div>
  );
}
