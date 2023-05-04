import React, { useEffect, useState } from "react";
import "./../styles.css";

function DealOfDay() {
  const [data, update] = useState([]);

  async function fetchData() {
    fetch(
      "https://raw.githubusercontent.com/1hisham/traing-oct/main/server/imageCardsItems.json"
    )
      .then((response) => response.json())
      .then((data) => {
        update(data);
      });
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <section className="deals-of-day">
      <div className="top-text-deals">
        <h2>Deals of the day</h2>
        <div className="left-arrow">
          <span>Shop all deals </span>
          <img src="./assets/arrow.svg" alt="" />
        </div>
      </div>

      <div className="image-cards">
        {data.map((item) => (
          <li>
            <img src={item.imglink} />
            <a>
              <p>{item.discount}</p>
              <span>{item.caption}</span>
            </a>
          </li>
        ))}
      </div>
    </section>
  );
}

export default DealOfDay;
