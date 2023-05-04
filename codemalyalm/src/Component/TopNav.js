// import { useEffect } from "react"
import { FetchingApiTopNav } from "./FetchingApi";
import React, { useEffect, useState } from "react";
import "./../styles.css";

function TopNav() {
  const [data, update] = useState([]);

  const fetchData = () => {
    FetchingApiTopNav(
      "https://raw.githubusercontent.com/1hisham/traing-oct/main/server/categorylist.json"
    ).then((data) => update(data));
  };
  
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <section className="nav-bottom">
      <div className="container">
        <ul className="category">
          {data.map((item) => (
            <li>
              {item.name}
              <span dangerouslySetInnerHTML={{ __html: item.svg }} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default TopNav;
