import React from "react";
import DesktopHeader from "./DesktopHeader";
import DesktopMain from "./DesktopMain";
import DesktopNav from "./DesktopNav";
import Footer from "./Footer";

function DesktopView() {
  return (
    <>
      <DesktopHeader />
      <DesktopNav />
      <DesktopMain />
      <Footer />
    </>
  );
}

export default DesktopView;
