import React, { useEffect, useState } from "react";
import "./Footer.css";
import FooterList from "./FooterList";
import FooterNav from "./FooterNav";

function Footer() {
  const [contactData, setContactData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("./data.json");
      const json = await res.json();
      setContactData(json.contact);
    };
    fetchData();
  }, [setContactData]);

  return (
    <footer>
      <div className="footer_top_container">
        <FooterList />

        <div className="contact_container mail">
          <div className="contact_heading">
            <span>Mail Us:</span>
          </div>
          <div className="contact_text">
            <p>Flipkart Internet Private Limited, </p>
            <p> Buildings Alyssa, Begonia & </p>
            <p> Clove Embassy Tech Village, </p>
            <p> Outer Ring Road, Devarabeesanahalli Village, </p>
            <p> Bengaluru, 560103, </p>
            <p> Karnataka, India</p>
          </div>
        </div>
        <div className="contact_container address">
          <div className="contact_heading">
            <span>Registered Office Address:</span>
          </div>
          <div className="contact_text">
            <p>Flipkart Internet Private Limited, </p>
            <p> Buildings Alyssa, Begonia & </p>
            <p> Clove Embassy Tech Village, </p>
            <p> Outer Ring Road, Devarabeesanahalli Village, </p>
            <p> Bengaluru, 560103, </p>
            <p> Karnataka, India </p>
            <p> CIN : U51109KA2012PTC066107 </p>
            <p>
              Telephone: <span>044-45614700</span>
            </p>
          </div>
        </div>
      </div>
      <FooterNav />
    </footer>
  );
}

export default Footer
