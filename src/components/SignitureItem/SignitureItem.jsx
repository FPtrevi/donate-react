import React, { useEffect, useState } from "react";
import SignitureComponents from "./SignitureComponents";
import styles from "./Signiture.module.css";

export default function SignitureItem() {
  const [signitures, setSignitures] = useState([]);

  useEffect(() => {
    fetch("data/signiture_items.json")
      .then(res => res.json())
      .then(data => {
        setSignitures(data);
      });
  }, []);
  return (
    <div id="signitureitem">
      <p className={styles.p}>SIGNITURE ITEM</p>
      <div className={styles.container}>
        {signitures.map(signiture => (
          <SignitureComponents
            img={signiture.img}
            information={signiture.information}
            donationGroup={signiture.donationGroup}
            href={signiture.href}
            key={signiture.key}
          />
        ))}
      </div>
    </div>
  );
}
