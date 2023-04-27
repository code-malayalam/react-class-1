import React, { useEffect, useState } from "react";
import "./FooterNav.css";

function FooterNav() {
  const [navData, setNavData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("./data.json");
      const json = await res.json();
      setNavData(json.footerNav);
    };
    fetchData();
  }, [setNavData]);

  return (
    <div className="footer_nav_container">
      {navData.map((item) => {
        return (
          <div className="footer_nav_item_container" key={item.text}>
            <img src={item.imgURL} />
            <a href="#">{item.text}</a>
          </div>
        );
      })}
      <div className="footer_nav_copyright_container">
        <span>© 2007-2023 Flipkart.com</span>
      </div>
      <div>
        <img src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/payment-method_69e7ec.svg" />
      </div>
    </div>
  );
}
export default FooterNav;
