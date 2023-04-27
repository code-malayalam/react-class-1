import React from "react";
import "./DesktopMain.css";
import Slide from "./DesktopAdsCarousel";
import TopOffers from "./TopOffers";
import BestOfElectronics from "./BestOfElectronics";
import BeautyAndFood from "./BeautyAndFood";

function DesktopMain() {
  return (
    <div className="desktop_main">
      <Slide />
      <BeautyAndFood />
      <TopOffers />
      <BestOfElectronics />
    </div>
  );
}

export default DesktopMain;
