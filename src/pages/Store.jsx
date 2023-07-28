import React, { useState } from "react";
import ShopSide from "../components/ShopSide/ShopSide";
import Items from "../components/Items/Items";
import SubNavbar from "../components/Header/SubNavigation";

export default function Store() {
  const [filter, setFilter] = useState("전체상품");
  return (
    <div>
      <SubNavbar />
      <ShopSide onFilterChange={setFilter} />
      <Items filter={filter} />
    </div>
  );
}
