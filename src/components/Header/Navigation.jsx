import React, { useEffect, useState } from "react";
import styles from "./Navigation.module.css";
import { Link } from "react-router-dom";

export default function Navigation() {
  const navItems = ["introduce", "we are", "signiture item", "donation group"];

  return (
    <header className={styles.header}>
      <img src="images/logo-removebg-preview.png" />
      <ul className={styles.ul}>
        {navItems.map(item => (
          <a key={item} href={`#${item.replace(" ", "")}`}>
            <li className={styles.li}>{item}</li>
          </a>
        ))}
        <Link to={`/shop`}>
          <li className={styles.li}>shop</li>
        </Link>
      </ul>
    </header>
  );
}
