import React, { useEffect, useState } from "react";
import DonationGroupComponents from "./DonationGroupComponents";
import styles from "./DonationGroup.module.css";

export default function DonationGroup() {
  const [groups, setGroups] = useState([]);
  useEffect(() => {
    fetch(`data/donation_group.json`)
      .then(res => res.json())
      .then(data => {
        setGroups(data);
      });
  }, []);

  return (
    <div id="donationgroup">
      <h1 className={styles.h1}>DONATION GROUP</h1>
      <div className={styles.container}>
        {groups.map(group => (
          <DonationGroupComponents
            img={group.img}
            name={group.name}
            href={group.link}
            text={group.text}
            key={group.key}
          />
        ))}
      </div>
    </div>
  );
}
