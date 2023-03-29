import React, { useEffect, useState } from "react";
import "./FooterCategorySection.css";
import FooterShopSection from "./FooterShopSection";
import FooterSellSection from "./FooterSellSection";
import FooterAboutSection from "./FooterAboutSection";
import FooterHelpSection from "./FooterHelpSection";

function FooterCategorySection() {

  return (
    <div className="footer-category-list-bg">
      <div className="footer-category-list">
        <FooterShopSection />
        <FooterSellSection />
        <FooterAboutSection />
        <FooterHelpSection />
      </div>
    </div>
  );
}

export default FooterCategorySection;
