import React from "react";
import "./MobileMain.css";
import MobileAdsCarousel from "./MobileAdsCarousel";

import MobileOffer from "./MobileOffer";
import MobileSummerShop from "./MobileSummerShop";

function MobileMain() {
  return (
    <div className="mobile_main">
      <MobileAdsCarousel />
      <MobileOffer />
      <MobileSummerShop />
      {/* <MobileAdsCarousel />
       */}
    </div>
  );
}

export default MobileMain;
