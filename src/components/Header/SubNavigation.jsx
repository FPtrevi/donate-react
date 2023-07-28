import React from "react";
import styles from "./Navigation.module.css";
import { Link } from "react-router-dom";

export default function SubNavigation() {
  return (
    <header className={styles.header}>
      <img src="images/logo-removebg-preview.png" />
      <ul className={styles.ul}>
        <Link to={`/`}>
          <li className={styles.li}>메인으로</li>
        </Link>
      </ul>
    </header>
  );
}
