import React, { useEffect, useState } from "react";
import ItemComponents from "./ItemComponents";
import styles from "./Items.module.css";

export default function Items({ filter }) {
  const [items, setItems] = useState([]);
  const group = ["굿네이버스", "세이브칠드런", "크리스마스씰", "비마켓"];
  useEffect(() => {
    fetch(`data/all_items.json`)
      .then(res => res.json())
      .then(data => {
        setItems(data);
      });
  }, []);

  const filterd = getFilterdItems(items, group, filter);
  if (filterd.length === 0) {
    return <div className={styles.no}>결과가 없습니다</div>;
  }

  return (
    <div className={styles.container}>
      {filterd.map((item, index) => (
        <ItemComponents
          key={index}
          http={item.http}
          img={item.img}
          name={item.name}
          price={item.price}
          sponsor={item.sponsor}
          sort={item.sort}
          website={item.webSite}
        />
      ))}
    </div>
  );
}

function getFilterdItems(items, group, filter) {
  if (filter === "전체상품") {
    return items;
  }
  if (group.includes(filter)) {
    return items.filter(t => t.webSite === filter);
  }
  return items.filter(t => t.sort === filter);
}
