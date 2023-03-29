import React, { useEffect, useState } from "react";

function Selection() {
  const [card, setCard] = useState([]);
  useEffect(() => {
    fetch("./Selection.json")
      .then((data) => {
        return data.json();
      })
      .then((data) => {
        setCard(data);
      });
  }, []);

  return (
    <div className="select-container">
      <div class="select-text">
        <h2>Shop our selections <i className="fa-solid fa-arrow-right"></i></h2>
        <p>Curated collections hand-picked by Etsy editors</p>
      </div>
      <div className="select-cards">
        {card.map((item) => {
          return (
            <div className="select-card" key={item.img}>
              <img src={item.img} />
              <span>{item.title}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
 export default Selection;