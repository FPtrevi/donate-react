import React from "react";
import Navbar from "../components/Header/Navigation";
import Banner from "../components/Banner/Banner";
import WeAre from "../components/WeAre/WeAre";
import SignitureItem from "../components/SignitureItem/SignitureItem";
import DonationGroup from "../components/DonationGroup/DonationGroup";

export default function Main() {
  return (
    <div>
      <Navbar />
      <Banner />
      <WeAre />
      <SignitureItem />
      <DonationGroup />
    </div>
  );
}
