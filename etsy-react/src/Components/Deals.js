import React, { useEffect, useState } from "react";

function Deals() {
  const [deal, setData] = useState([]);

  useEffect(() => {
    fetch("./Deals.json")
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <div className="deals">
      <div className="deal-text">
        <h2>Deals of the day</h2>
        <a href="">
          Shop all deals<i className="fa-solid fa-arrow-right"></i>
        </a>
      </div>
      <div className="items">
        {deal.map((item) => {
          return (
            <div className="item-one" key={item.img}>
              <img src={item.img} />
              <span>{item.offer}</span>
              <p>{item.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Deals;
