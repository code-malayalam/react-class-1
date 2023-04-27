import React, { useEffect, useState } from "react";
import "./MobileNav.css";

function MobileNav() {
  const [navData, setNavData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("./data.json");
      const json = await res.json();
      setNavData(json.mobileNavData);
    };
    fetchData();
  }, [setNavData]);

  return (
    <nav className="mobile_nav">
      <ul>
        {navData.map((item, index) => {
          return (
            <li key={index}>
              <div className="nav_img_container">
                <img src={item.imgURL} />
              </div>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default MobileNav;
