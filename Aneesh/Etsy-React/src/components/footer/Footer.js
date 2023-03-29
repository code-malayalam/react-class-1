import React from "react";
import About from "./About";
import FooterCategorySection from "./FooterCategorySection";
import FooterFinalSection from "./FooterFinalSection";
import PoweredSection from "./PoweredSection";
import Subscription from "./Subscription";

function Footer() {
  return (
    <>
      <About />
      <Subscription />
      <PoweredSection />
      <FooterCategorySection />
      <FooterFinalSection />
    </>
  );
}

export default Footer;
